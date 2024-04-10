import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

app.get("/", async (_, res)=> {
    const response = axios.get<Post[]>("http://localhost");

    const result = (await response).data;

    res.json(result.map((p: Post) => ({id: p.id, title: p.title})));
}); 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

