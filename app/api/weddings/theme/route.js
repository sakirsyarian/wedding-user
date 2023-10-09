import axiosInstance from "@/lib/axios";

export async function GET() {
  try {
    const { data: theme } = await axiosInstance.get(
      "http://localhost:3002/v1/customer/themes"
    );

    return new Response(JSON.stringify({ ...theme }), {
      status: 200,
    });
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
