import { cookies } from "next/headers";
import axios from "axios";

export async function POST(request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("act");

    const dataTheme = await request.json();
    const res = await axios.post(
      "http://localhost:3002/v1/customer/weddings",
      dataTheme,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    return new Response(JSON.stringify(res.data), {
      status: 200,
    });
  } catch (error) {
    const err = error.response;

    // error jika token habis
    if (err.status === 401) {
      return new Response(JSON.stringify(err.data), {
        status: 401,
      });
    }

    return new Response(
      JSON.stringify({ name: "Error", message: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("act");

    const dataTheme = await request.json();
    const res = await axios.patch(
      "http://localhost:3002/v1/customer/theme",
      dataTheme,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    return new Response(JSON.stringify(res.data), { status: 200 });
  } catch (error) {
    const err = error.response;

    // error jika token habis
    if (err.status === 401) {
      return new Response(JSON.stringify(err.data), {
        status: 401,
      });
    }

    return new Response(
      JSON.stringify({ name: "Error", message: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
}
