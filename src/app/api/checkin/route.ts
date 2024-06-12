import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

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
export async function POST(request: Request) {
   
    const data = await request.json()
    console.log("Data request", data);
    // try {
    //     const newItem = await prisma.checkIn.create({
    //         data
    //     })
    //     if (newItem.id) {
    //         return new Response(JSON.stringify(data), {
    //             status: 200,
    //         })
    //     } else {
    //         return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
    //     }
    // } catch (error: any) {  

    // }

    return Response.json({ message: 'ok' }, { status: 200 })
}