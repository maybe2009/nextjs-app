import { InferSelectModel } from "drizzle-orm";
import { integer, serial, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const productTable =pgTable('product', {
    id: serial('id').primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    price: integer().notNull(),
    stock: integer().notNull(),
    category: varchar({ length: 255 }).notNull(),
})

export type Product = InferSelectModel<typeof productTable>