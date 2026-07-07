import { NextResponse } from "next/server";
import { getHelloMessage } from "@/lib/hello";

export async function GET() {
  return NextResponse.json({
    message: getHelloMessage(),
  });
}
