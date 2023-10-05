import axiosInstance from "@/lib/axios";

export async function POST(request) {
  try {
    const dataEvent = await request.json();
    const { data: event } = await axiosInstance.post(
      "http://localhost:3002/v1/customer/events",
      dataEvent
    );

    return new Response(
      JSON.stringify({ ...event, message: "Berhasil disimpan" }),
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
