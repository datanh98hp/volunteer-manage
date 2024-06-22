import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function POST(request: Request, { params }: { params: { menberId: string, performId: string } }) {
    const { menberId, performId } = params
    try {
        const del = await prisma.joinIn.delete({
            where: {
                memberId: Number(menberId),
                perfomId: Number(performId)
            }
        })
        return Response.json({ message: 'success' }, { status: 200 })
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
}
