import { PrismaClient } from '@prisma/client';
import * as process from 'process';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB is now available in Prisma.',
      description:
        "We are excited to announce that Prisma now supports MongoDB, one of the world's most popular databases.",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma?" },
    update: {},
    create: {
      title: "What's new in Prisma?",
      body: 'Our engineers have been working hard to bring you new features and improvements.',
      description:
        'Learn about everything that happened in the Prisma ecosystem in the first quarter of 2022.',
      published: true,
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
