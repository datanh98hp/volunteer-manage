import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const data = await prisma.perform.findMany({
        include: {
            JoinIn: {
                select: {
                    member: {
                        select: {
                            id: true,
                            fullname: true,
                            type: true,
                            class: true,
                            school: true
                        }
                    },
                }
            }
        }
    })

    return Response.json(data)
}

export async function POST(request: Request) {

    const data = await request.json()
    console.log("Request perform data :", data)
    try {
        const newItem = await prisma.perform.create({
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
    console.log("Request perform data :", data)
    try {
        if (data.length == 0) {
            return new Response(JSON.stringify({ error: 'Data input is empty array' }), { status: 500 })
        }
        const newItem = await prisma.perform.deleteMany({
            where: {
                id: {
                    in: data
                }
            }
        });
        if (newItem.count > 0) {
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