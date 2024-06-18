import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const runtime = 'edge';
export const preferredRegion = ['vn1', 'vn2'];
export async function GET(request: Request, { params }: { params: { id: string } }) {

    const { id } = params
    const data = await prisma.member.findUnique({
        where: {
            id: Number(id)  // convert string to number
        }
    })
    return Response.json(data)
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {

    const { id } = params
    try {
        const del = await prisma.checkIn.delete({
            where: {
                id: Number(id)
            }
        });
        if (!del.id) {
            return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
        }
        return Response.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return Response.json({ message: 'Record to delete does not exist.' }, { status: 500 })
    }
}