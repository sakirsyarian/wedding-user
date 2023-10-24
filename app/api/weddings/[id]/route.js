import { cookies } from "next/headers";

export async function GET(request, { params }) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("act");

    const id = params.id;
    const res = await fetch(
      `http://localhost:3002/v1/customer/weddings/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    const data = await res.json();

    if (res.status === 404) {
      throw { name: data.name, message: data.message };
    }

    return new Response(JSON.stringify({ ...data }), { status: 200 });
  } catch (error) {
    if (error.name === "NotFound") {
      return new Response(
        JSON.stringify({ name: error.name, message: error.message }),
        {
          status: 404,
        }
      );
    }

    return new Response(
      JSON.stringify({ name: "Error", message: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
}
