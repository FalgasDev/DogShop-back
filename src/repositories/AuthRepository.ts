import prisma from "@/config/database.connection"

async function getUserByEmail(email: string) {
  if (!email) return
  return prisma.users.findFirst({
    where: { email }
  })
}

export default {
  getUserByEmail,
}
