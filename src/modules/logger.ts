import { Request, Response, NextFunction } from "express";
import { appendFile } from "fs";

const logFile: string = "/tmp/animeb.log";

const logger = (req: Request, res: Response, next: NextFunction) => {
    const currentTime: Date = new Date();
    const date: string = `${currentTime.getDate()}-${currentTime.getMonth() +
        1}-${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    const method: string = req.method;
    const url: string = req.url;
    const ip: string = req.ip;
    const status: number = res.statusCode;

    const log: string = `[${date}]	${method}	${url}	${status}	${ip}`;
    console.log(log);

    appendFile(logFile, `${log}\n`, (e: NodeJS.ErrnoException | null) => {
        if (e) console.error(e);
    });

    next();
};

export default logger;
