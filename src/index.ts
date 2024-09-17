import express, { Express, Request, Response } from "express"

import { Users } from "./db/schema"
import { db } from "./db/db"
import env from "../env"
import postsRoutes from "./routes/posts-routes"
import userRoutes from "./routes/user-routes"

const app: Express = express()
const PORT = env.PORT || 8081

app.get("/", (req: Request, res: Response) => {
    //runQuery();
    res.send("Express + TypeScript Server")
})

app.use(express.json())
app.use("/users", userRoutes)
app.use("/posts", postsRoutes)
/* const runQuery = async () => {
    const result = await db.insert(User).values({
        name: "John Doe",
        email: "test@test.com",
        password: "password",
        age: 37
    });
    console.log(JSON.stringify(result, null, 2));

    const resultRes = await db.select().from(User);
    console.log(JSON.stringify(resultRes, null, 2));

} */

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})