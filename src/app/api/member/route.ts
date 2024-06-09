

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function GET(request: NextRequest) {

    const data = await prisma.member.findMany({})

    return new NextResponse(JSON.stringify(data))
}

export async function POST(request: NextRequest) {

    // const prisma = await client();

    // const data = await prisma.member.findMany({})

    // return new NextResponse(JSON.stringify(data))
}