import { NextResponse } from "next/server";
import { voteOnVideo } from "@/lib/db";
import { VoteType } from "@/lib/types";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const type = body?.type as VoteType;

  if (type !== "up" && type !== "down") {
    return NextResponse.json(
      { error: "type must be 'up' or 'down'" },
      { status: 400 }
    );
  }

  const updated = voteOnVideo(id, type);
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}
