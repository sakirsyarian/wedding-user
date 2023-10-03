import axiosInstance from "@/lib/axios";

export async function POST(request) {
  try {
    const data = await request.json();
    const { data: bride } = await axiosInstance.post(
      "http://localhost:3002/v1/customer/brides",
      {
        ...data,
      }
    );

    return new Response(
      JSON.stringify({ ...bride, message: "Berhasil disimpan" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error.response?.statusText === "Unauthorized") {
      return new Response(JSON.stringify(error.response.data), {
        status: 401,
      });
    }

    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
