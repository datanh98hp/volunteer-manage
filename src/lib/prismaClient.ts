import { PrismaClient } from "@prisma/client";
let prismaClient;
const prisma = new PrismaClient()

async function client() {
    // ... you will write your Prisma Client queries here
}

client()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

export default client;