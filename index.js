import express from 'express';
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.sendStatus(404).end();
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});
