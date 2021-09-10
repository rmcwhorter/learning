import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const newUser = await prisma.account.create({
        data: {
            email: "ryan.mcwhorter@utexas.edu",
            fname: "Ryan",
            lname: "McWhorter",
            addr:  "0xc89d0DF923CbB29186e4d5c3F932513ff3049c23",
            balance: 500
        }
    })

    const users = await prisma.account.findMany()
}
  
main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })