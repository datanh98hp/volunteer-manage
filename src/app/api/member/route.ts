
import client from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const prisma = await client();

    const data = await prisma.member.findMany({})

    return new NextResponse(JSON.stringify(data))
}

export async function POST(request: NextRequest) {

    const prisma = await client();

    const data = await prisma.member.findMany({})

    return new NextResponse(JSON.stringify(data))
}