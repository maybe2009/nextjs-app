import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable, productTable } from './schema';

export const db = drizzle(process.env.DATABASE_URL!);


const mockUsers = Array.from({ length: 10 }, (_, i) => ({
  // id: i + 20,  // 从20开始
  name: `User${i + 40}`,
  age: Math.floor(Math.random() * 30) + 40,
  email: `user${i + 40}@example.com`
}))

const mockProducts = Array.from(
  { length: 10 },
  (_, i) => ({
    name: `Product${i + 1}`,
    price: Math.floor(Math.random() * 100) + 1,
    stock: Math.floor(Math.random() * 100) + 1,
  })
)

export async function seedUsers() {
  await db.insert(usersTable).values(mockUsers)
}

export async function seedProducts() {
  await db.insert(productTable).values(mockProducts)
}