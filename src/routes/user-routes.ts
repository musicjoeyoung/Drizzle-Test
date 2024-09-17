import express, { Request, Response, Router } from "express";

import { Posts } from "../db/schema";
import { User } from "../db/schema";
import { db } from "../db/db";
import { eq } from "drizzle-orm"

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await db.select().from(User);
        res.json(users);


    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }

});


router.get("/:id", async (req: Request, res: Response) => {
    const userId: number = Number(req.params.id);
    try {
        const user = await db.select().from(User).where(eq(User.id, userId));
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
})

router.get("/:id/posts", async (req: Request, res: Response) => {
    const userId: number = Number(req.params.id);
    try {
        const result = await db.select().from(Posts).where(eq(Posts.userId, userId)).innerJoin(User, eq(Posts.userId, User.id));
        if (result.length > 0) {
            const user = {
                id: result[0].users.id,
                name: result[0].users.name,
                email: result[0].users.email,
                age: result[0].users.age,
                created_at: result[0].users.created_at,
                updatedAt: result[0].users.updatedAt,
                posts: result.map(item => ({
                    id: item.posts.id,
                    title: item.posts.title,
                    content: item.posts.content,
                    created_at: item.posts.created_at,
                    updatedAt: item.posts.updatedAt
                }))
            };

            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user posts" });
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const result = await db.insert(User).values([{ name: req.body.name, email: req.body.email, password: req.body.password, age: req.body.age }]);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
})



export default router;