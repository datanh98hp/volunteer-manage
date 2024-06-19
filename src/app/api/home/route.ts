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

    const ChildsCheckInToday = await prisma.checkIn.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        where: {
            memberId: {
                in: childs.map((child) => child.id)
            },
            createdAt: {
                gte: new Date()
            }
        },
        include: {
            member: true
        },
    });
    const sumChildsCheckInToday = ChildsCheckInToday.length
    ////
    const ChildsNotCheckinToday = await prisma.checkIn.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        where: {
            memberId: {
                notIn: childs.map((child) => child.id)
            },
            createdAt: {
                gte: new Date()
            }
        },
        include: {
            member: true
        },
    });
    const sumChildsNotCheckinToday = ChildsNotCheckinToday.length


    //////////
    const YouthCheckInToday = await prisma.checkIn.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        where: {
            memberId: {
                in: youth.map((youth) => youth.id)
            },
            createdAt: {
                gte: new Date()
            }
        },
        include: {
            member: true
        },
    });
    const sumYouthCheckInToday = YouthCheckInToday.length
    // //

    const YouthNotCheckInToday = await prisma.checkIn.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        where: {
            memberId: {
                notIn: youth.map((youth) => youth.id)
            },
            createdAt: {
                gte: new Date()
            }
        },
        include: {
            member: true
        },
    });
    const sumYouthNotCheckInToday = YouthNotCheckInToday.length
    //
    const actions = await prisma.perform.findMany({
        orderBy: {
            id: 'desc'
        }
    })
    const actionsNumber = await prisma.perform.count()
    return Response.json({
        sum,
        childs: {
            sumChilds,
            ChildsNotCheckinToday, sumChildsNotCheckinToday,
            ChildsCheckInToday, sumChildsCheckInToday
        },
        youth: {
            sumYouth,
            YouthCheckInToday, YouthNotCheckInToday, sumYouthNotCheckInToday, sumYouthCheckInToday
        },
        actions: {
            qty: actionsNumber,
            data: actions
        }
    })
}