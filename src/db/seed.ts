import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from './schema';

const db = drizzle(process.env.DATABASE_URL!);

const mockUsers = Array.from({ length: 10 }, (_, i) => ({
  // id: i + 20,  // 从20开始
  name: `User${i + 40}`,
  age: Math.floor(Math.random() * 30) + 40,
  email: `user${i + 40}@example.com`
}))

export async function seedUsers() {
  await db.insert(usersTable).values(mockUsers)
}

seedUsers().catch(console.error)