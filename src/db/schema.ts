import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const User = mysqlTable('users', {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 100 }).notNull(),
    email: varchar("email", { length: 100 }).unique().notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    age: int("age").notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull()
})

export const Posts = mysqlTable('posts', {
    id: int("id").primaryKey().autoincrement(),
    title: varchar("title", { length: 100 }).notNull(),
    content: varchar("content", { length: 255 }).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
    userId: int("user_id").references(() => User.id)
})