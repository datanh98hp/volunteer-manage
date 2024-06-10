import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function GET(request: Request) {
    const data = await prisma.perform.findMany({})

    return Response.json(data)
}