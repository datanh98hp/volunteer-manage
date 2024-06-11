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