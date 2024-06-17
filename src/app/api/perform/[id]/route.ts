import { create } from 'domain';
import { JoinIn } from './../../../../generated/client/index.d';

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function GET(request: Request) {

    return Response.json({
        message: 'success'
    }, {
        status: 200
    })
}

export async function POST(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const listId = await request.json()
    const data = listId.map((item: any) => {
        return {
            performId: id,
            memberId: item
        }
    })
    console.log("Request data----- :", data)

    // try {
    //     const newItem = await prisma.joinIn.createMany({
    //         data: data
    //     });

    //     if (newItem.count > 0) {
            return new Response(JSON.stringify({ message: 'success' }), {
                status: 200,
            })
    //     } else {
    //         return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
    //     }

    // } catch (error: any) {
    //     return new Response(JSON.stringify({ error: error.message }), { status: 500 })

    // }
}
export async function DELETE(request: Request) {

    return Response.json({
        message: 'success'
    }, {
        status: 200
    });

}