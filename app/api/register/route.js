export async function POST(request) {
  try {
    const res = await request.json();
    const data = await fetch("http://localhost:3002/v1/customer/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });

    const user = await data.json();
    if (data.status === 400) {
      throw { name: "Bad Request", message: user.message };
    }

    return new Response(JSON.stringify({ message: "Registrasi berhasil" }), {
      status: 200,
    });
  } catch (error) {
    if (error.name === "Bad Request") {
      return new Response(JSON.stringify(error), {
        status: 400,
      });
    }

    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
