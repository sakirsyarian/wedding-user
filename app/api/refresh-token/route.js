import axios from "axios";
import { getRefreshToken } from "@/helpers/token";

export async function POST(request) {
  try {
    const refreshToken = getRefreshToken();
    console.log(refreshToken, "<<< refreshtoken post");

    const { data: token } = await axios.post(
      "http://localhost:3002/v1/customer/refresh-token",
      null,
      {
        headers: {
          refreshtoken: `Bearer ${refreshToken}`,
        },
      }
    );

    console.log(token, "<<< token post");
    return new Response(JSON.stringify({ message: "Registrasi berhasil" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error, "post api");
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
