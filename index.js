import express from 'express';

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});
