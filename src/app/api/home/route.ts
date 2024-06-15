import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export async function GET(request: Request) {
    const childs = await prisma.member.findMany({
        where: {
            type: 'CHILDREND'
        }
    });
    const sumChilds = childs.length
    const youth = await prisma.member.findMany({
        where: {
            type: 'YOUTH'
        }
    });
    const sumYouth = youth.length


    const sum = childs.length + youth.length

    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    console.log(day, month, year);
    const timeString = `${year}-${month}-${day}`
    const ChildsCheckInToday = await prisma.member.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        where: {
            type: 'CHILDREND',
            createdAt: {
                gte: new Date(timeString)
            }
        }
    });
    const sumChildsCheckInToday = ChildsCheckInToday.length
    const YouthCheckInToday = await prisma.member.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        where: {
            type: 'YOUTH',
            createdAt: {
                gte: new Date(timeString)
            }
        }
    });
    const sumYouthCheckInToday = YouthCheckInToday.length
    // 
    const actions = await prisma.perform.findMany({
        orderBy: {
            id: 'desc'
        }
    })
    const actionsNumber = await prisma.perform.count()
    return Response.json({
        childs: { sumChilds, sumChildsCheckInToday },
        youth: { sumYouth, sumYouthCheckInToday },
        actions: {
            qty: actionsNumber,
            data: actions
        }
    })
}