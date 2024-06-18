import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export const runtime = 'edge';
export const preferredRegion = ['hkg1'];
export async function GET(request: Request) {

    const data = await prisma.checkIn.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            member: true,
        },
    })

    return Response.json(data)
}