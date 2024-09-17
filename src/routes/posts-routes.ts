import express, { Request, Response, Router } from "express";

import { Posts } from "../db/schema";
import { db } from "../db/db";
import { eq } from "drizzle-orm"

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const posts = await db.select().from(Posts);
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }

});

router.get("/:id", async (req: Request, res: Response) => {
    const postId = Number(req.params.id);
    try {
        const post = await db.select().from(Posts).where(eq(Posts.id, postId));
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch post" });
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {
        const title: string = req.body.title;
        const content: string = req.body.content;
        const userId: number = req.body.userId;
        const result = await db.insert(Posts).values({ title: title, content: content, userId: userId });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to create post" });
    }
})


export default router;