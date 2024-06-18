import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export const runtime = 'edge';
export const preferredRegion = ['vn1', 'vn2'];
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
    // console.log("Data request", data);
    const insertsData = data.map((item: any) => {
        return {
            note: `Checkout - ${item}`,
            memberId: item,
        }
    })
    // console.log("Data inserts", insertsData);
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

export async function DELETE(request: Request) {

    const data = await request.json()
    try {
        const del = await prisma.checkIn.deleteMany({
            where: {
                id: {
                    in: data
                }
            }
        });
        if (del.count < 1) {
            return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
        }
        return Response.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return Response.json({ message: 'Record to delete does not exist.' }, { status: 500 })
    }
}