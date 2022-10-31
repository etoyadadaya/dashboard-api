import express, { Express } from "express";
import { userRouter } from "./users/users.js";
import { Server } from 'http'
import { LoggerService } from "./logger/logger.service";

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;

    constructor(logger: LoggerService) {
        this.app = express();
        this.port = 8000;
        this.logger = new LoggerService();
    }

    useRoutes() {
        this.app.use('/users', userRouter);
    }

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`server started on http://localhost:${this.port}`);
    }
}
