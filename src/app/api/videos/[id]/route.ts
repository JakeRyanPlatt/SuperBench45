import { NextResponse } from "next/server";
import { getVideoById } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const video = getVideoById(id);
  if (!video) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(video);
}
