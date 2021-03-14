import express from "express";
import { join } from "path";
// import fetch from "node-fetch";
import apiRouter from "./routes/apiRouter";

const app: express.Express = express();

app.use("/dist", express.static("public/dist"));
app.use(apiRouter);

app.get("*", (req, res) => {
    res.sendFile("public/index.html", { root: join("./") });
});

app.listen(3000, () => {
    console.log("Listening");
});
