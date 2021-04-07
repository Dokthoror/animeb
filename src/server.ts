import express from "express";
import { join } from "path";
import apiRouter from "./routes/apiRouter";
import logger from "./modules/logger";

const app: express.Express = express();

app.use("/dist", express.static("public/dist"));
app.use("/favicon.ico", express.static("public/favicon.ico"));
app.use(apiRouter);
app.use(logger);

app.get("*", (req, res) => {
    res.sendFile("public/index.html", { root: join("./") });
});

app.listen(3000, () => {
    console.log("Listening");
});
