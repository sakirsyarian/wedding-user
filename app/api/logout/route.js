import { cookies } from "next/headers";

export async function GET() {
  cookies().delete("act");
  return Response.json({ message: "Berhasil logout" });
}
