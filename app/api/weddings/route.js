import axiosInstance from "@/lib/axios";

export async function POST(request) {
  try {
    const dataWedding = await request.json();
    const { data: wedding } = await axiosInstance.post(
      "http://localhost:3002/v1/customer/weddings",
      dataWedding
    );

    return new Response(
      JSON.stringify({ ...wedding, message: "Berhasil disimpan" }),
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

    return new Response(
      JSON.stringify({ name: "Error", message: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
}
