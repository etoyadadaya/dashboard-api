import express from 'express';

const port = 8000;
const app = express();

app.all('/', (req, res, next) => {
    console.log('All');
    next();
});

const cb = (req, res, next) => {
    console.log('cb');
    next();
};

app.get('/', cb, (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});
