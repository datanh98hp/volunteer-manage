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
    const insertsData = data.map((item: any) => {
        return {
            note: `Checkout - ${item}`,
            memberId: item,
        }
    })
    console.log("Data inserts", insertsData);
    try {
        const newManyItems = await prisma.checkIn.createMany({
            data: insertsData,
            skipDuplicates: true,
        })
        if (newManyItems.count > 0) {
            // return new Response(JSON.stringify(data), {
            //     status: 200,
            // })
            return Response.json({ message: 'ok' }, { status: 200 })
        } else {
            return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
        }
    } catch (error: any) {
        return new Response(JSON.stringify({ error }), { status: 500 })
    }
}