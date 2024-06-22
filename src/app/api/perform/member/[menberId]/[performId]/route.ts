import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function DELETE(request: Request, { params }: { params: { menberId: string, performId: string } }) {
    const { menberId, performId } = params
    try {
        const del = await prisma.joinIn.findFirst({
            where: {
                memberId: Number(menberId),
                perfomId: Number(performId)
            }
        })
        await prisma.joinIn.delete({
            where: {
                id: del?.id
            }
        })
        return Response.json({ message: 'success' }, { status: 200 })
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
}
