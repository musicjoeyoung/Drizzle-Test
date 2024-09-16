import express, { Request, Response, Router } from "express";

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
    const userId = Number(req.params.id);
    try {
        const user = await db.select().from(User).where(eq(User.id, userId));
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user" });
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