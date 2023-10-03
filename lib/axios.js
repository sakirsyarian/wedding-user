import axios from "axios";
import { cookies } from "next/headers";

import { getRefreshToken, setAccessToken, deleteToken } from "@/helpers/token";

const axiosInstance = axios.create();

// Interceptor Axios untuk memeriksa dan memperbarui token akses secara otomatis
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = cookies().get("act");

    // Jika token akses ada, tambahkan ke header permintaan
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken.value}`;
    }

    return config;
  },
  async (error) => {
    // Handle error request
    return Promise.reject(error);
  }
);

// Interceptor untuk menangani respons error yang terkait dengan token akses
axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = getRefreshToken();
    // Jika respons error adalah Unauthorized (401) dan ada token segar
    if (
      error.response.data.name !== "RefreshTokenExpiredError" &&
      refreshToken
    ) {
      try {
        const { data: token } = await axios.post(
          "http://localhost:3002/v1/customer/refresh-token",
          null,
          {
            headers: {
              refreshtoken: `Bearer ${refreshToken}`,
            },
          }
        );

        // Simpan token akses yang baru dalam state, cookie
        const newAccessToken = token.access_token;
        setAccessToken(newAccessToken);

        // Lakukan ulang permintaan asli dengan token akses yang baru
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Jika gagal memperbarui token akses, logout pengguna atau tangani sesuai kebutuhan Anda
        // Contoh: logoutUser();
        if (refreshError.response.data.name === "RefreshTokenExpiredError") {
          deleteToken("act");
          deleteToken("rft");
        }
      }
    }

    // Jika tidak ada token segar atau permintaan refresh token juga gagal, lemparkan error
    return Promise.reject(error);
  }
);

export default axiosInstance;
