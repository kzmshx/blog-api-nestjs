import { PrismaClient } from '@prisma/client';
import * as process from 'process';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const password1 = await bcrypt.hash('password-sabin', roundsOfHashing);
  const user1 = await prisma.user.upsert({
    where: { email: 'sabin@adams.com' },
    update: {
      password: password1,
    },
    create: {
      email: 'sabin@adams.com',
      name: 'Sabin Adams',
      password: password1,
    },
  });
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {
      authorId: user1.id,
    },
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB is now available in Prisma.',
      description:
        "We are excited to announce that Prisma now supports MongoDB, one of the world's most popular databases.",
      published: false,
      authorId: user1.id,
    },
  });

  const password2 = await bcrypt.hash('password-alex', roundsOfHashing);
  const user2 = await prisma.user.upsert({
    where: { email: 'alex@ruheni.com' },
    update: {
      password: password2,
    },
    create: {
      email: 'alex@ruheni.com',
      name: 'Alex Ruheni',
      password: password2,
    },
  });
  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma?" },
    update: {
      authorId: user2.id,
    },
    create: {
      title: "What's new in Prisma?",
      body: 'Our engineers have been working hard to bring you new features and improvements.',
      description:
        'Learn about everything that happened in the Prisma ecosystem in the first quarter of 2022.',
      published: true,
      authorId: user2.id,
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
