import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const data = await request.json();
    const res = await fetch("http://localhost:3002/v1/customer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const user = await res.json();
    if (res.status === 401) {
      throw { name: "Unauthorized", message: user.message };
    }
    if (res.status === 403) {
      throw { name: "Forbidden", message: user.message };
    }

    cookies().set("username", user.data.username);
    cookies().set({
      name: "rft",
      value: user.refresh_token,
      httpOnly: true,
      secure: true,
    });
    cookies().set({
      name: "act",
      value: user.access_token,
      httpOnly: true,
      secure: true,
    });

    return new Response(
      JSON.stringify({
        id: user.data.id,
        message: "Login berhasil",
      }),
      {
        status: 200,
        headers: { authorization: `Bearer ${user.access_token}` },
      }
    );
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
