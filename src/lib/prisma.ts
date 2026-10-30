import { PrismaClient } from "@prisma/client";
<<<<<<< HEAD
=======
import { PrismaPg } from "@prisma/adapter-pg";
>>>>>>> origin/main

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
<<<<<<< HEAD
=======
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
>>>>>>> origin/main
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
