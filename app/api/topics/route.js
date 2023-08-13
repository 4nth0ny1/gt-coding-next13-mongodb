import Topic from "@/lib/models/topic";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}
