import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const config = {
    runtime: 'edge',
    regions: ['vn1']
}
export async function GET(request: Request, { params }: { params: { id: string } }) {

    const { id } = params
    const data = await prisma.member.findUnique({
        where: {
            id: Number(id)  // convert string to number
        }
    })
    return Response.json(data)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {

    const { id } = params

    const data = await request.json()
    try {
        const edit = await prisma.member.update({
            where: {
                id: Number(id)
            },
            data
        });
        if (edit.id) {
            return Response.json({ message: 'ok' }, { status: 200 })
        } else {
            return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
        }

    } catch (error) {
        return Response.json({ message: 'error' }, { status: 500 })
    }

}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {

    const { id } = params
    try {
        const del = await prisma.member.delete({
            where: {
                id: Number(id)
            }
        })
        if (!del.id) {
            return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
        }
        return Response.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return Response.json({ message: 'Record to delete does not exist.' }, { status: 500 })
    }
}