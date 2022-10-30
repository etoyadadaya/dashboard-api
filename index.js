import express from 'express';

const port = 8000;
const app = express();

app.get('/', (req, res) => {
    // res.status(201).json({ success: true });
    // res.download('/test.pdf', 'TEST.pdf');
    // res.redirect(301, 'https://google.com');
    // res.set('Content-Type', 'text/plain');
    // res.append('Warning', 'code');
    // res.type('application/json');
    // res.location('https://aboba.com');

    // res.links({
    //     next: "https://"
    // });

    // res.cookie('token', 'aboba', {
    //     domain: '',
    //     path: '/',
    //     secure: true,
    //     expires: 600000
    // });
    // res.clearCookie('token');

    // res.send('Hello');

    // res.sendStatus(404).end();
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});
