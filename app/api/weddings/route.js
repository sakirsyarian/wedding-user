import axiosInstance from "@/lib/axios";

export async function POST(request) {
  try {
    const dataTheme = await request.json();
    console.log(dataTheme, "<<< dataTheme api");
    const { data: theme } = await axiosInstance.post(
      "http://localhost:3002/v1/customer/weddings",
      dataTheme
    );

    console.log(theme, "<<< theme api");
    return new Response(
      JSON.stringify({ ...theme, message: "Berhasil disimpan" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error, "<<< error api");

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
