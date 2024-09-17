import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const Users = mysqlTable('users', {
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
    userId: int("user_id").references(() => Users.id).notNull()
})

export const Categories = mysqlTable('categories', {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 100 }).notNull(),
})

//join table that connects posts and categories
export const PostCategories = mysqlTable('post_categories', {
    postId: int("post_id").references(() => Posts.id).notNull(),
    categoryId: int("category_id").references(() => Categories.id).notNull()
})

export const Tags = mysqlTable('tags', {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 100 }).notNull(),
})

//join table that connects posts and tags
export const PostTags = mysqlTable('post_tags', {
    postId: int("post_id").references(() => Posts.id).notNull(),
    tagId: int("tag_id").references(() => Tags.id).notNull()
})

//join tables that connects posts and likes
export const PostLikes = mysqlTable('post_likes', {
    postId: int("post_id").references(() => Posts.id).notNull(),
    userId: int("user_id").references(() => Users.id).notNull()
})

export const Comments = mysqlTable('comments', {
    id: int("id").primaryKey().autoincrement(),
    content: varchar("content", { length: 255 }).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
    userId: int("user_id").references(() => Users.id).notNull(),
    postId: int("post_id").references(() => Posts.id).notNull()
})