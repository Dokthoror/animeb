import express from "express";
import { join } from "path";
import fetch from "node-fetch";

const app: express.Express = express();

app.use("/dist", express.static("public/dist"));

app.get(
    "/api/trending",
    async (_req: express.Request, res: express.Response) => {
        const apiAnswer = await fetch(
            "https://kitsu.io/api/edge/trending/anime"
        );
        const json = await apiAnswer.json();
        res.json(json);
    }
);

app.get("*", (req, res) => {
    res.sendFile("public/index.html", { root: join("./") });
});

app.listen(3000, () => {
    console.log("Listening");
});
