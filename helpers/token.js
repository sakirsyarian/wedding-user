import { cookies } from "next/headers";

// Fungsi untuk mengambil token
export const getToken = () => {
  return cookies().get("act");
};

// Fungsi untuk mengambil token segar
export const getRefreshToken = () => {
  return cookies().get("rft");
};

export const deleteToken = (name) => {
  cookies().delete(name);
};

// Fungsi untuk menyimpan token akses baru
export const setAccessToken = (accessToken) => {
  // Menyimpan token akses dalam state, cookie, atau localStorage, sesuai kebutuhan Anda
  cookies().set({
    name: "act",
    value: accessToken,
    httpOnly: true,
    secure: true,
  });
};
