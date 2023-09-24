import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const res = await request.json();
    const data = await fetch("http://localhost:3002/v1/customer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });

    const user = await data.json();
    if (data.status === 401) {
      throw { name: "Unauthorized", message: user.message };
    }
    if (data.status === 403) {
      throw { name: "Forbidden", message: user.message };
    }

    cookies().set({
      name: "rft",
      value: user.refresh_token,
      httpOnly: true,
      path: "/",
      secure: true,
    });

    return new Response(JSON.stringify({ message: "Login berhasil" }), {
      status: 200,
      headers: { Authorization: `Bearer ${user.access_token}` },
    });
  } catch (error) {
    if (error.name === "Unauthorized") {
      return new Response(JSON.stringify(error), {
        status: 401,
      });
    }
    if (error.name === "Forbidden") {
      return new Response(JSON.stringify(error), {
        status: 403,
      });
    }

    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
