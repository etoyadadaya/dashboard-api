import express from 'express';
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log(`time `, Date.now());
    next();
});

app.get('/', (req, res) => {
    // res.sendStatus(404).end();
    throw new Error("ERRORROROORR");

});

app.use('/users', userRouter);

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send(err.message);
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});
