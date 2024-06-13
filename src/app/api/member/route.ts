

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function GET(request: Request) {

    // const { 
    //     page:+page,
    //     num_per_page,
    //     limit,
    //     keyword
    //  } = request.json()

    const data = await prisma.member.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        // include: {
        //     JoinIn: {
        //         include: {
        //             perform: true
        //         }
        //     },
        //     CheckIn: true
        // }
    })

    return Response.json(data)
}

export async function POST(request: Request) {

    const data = await request.json()
    console.log("Request member data :",data)
    try {   
        const newItem = await prisma.member.create({
            data
        });
        if (newItem.id) {
            return new Response(JSON.stringify(data), {
                status: 200,
            })
        } else {
            return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
        }

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }

}

export async function DELETE(request: Request) {

    const data = await request.json()
    try {
        const del = await prisma.member.deleteMany({
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