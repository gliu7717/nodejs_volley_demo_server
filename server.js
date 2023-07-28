const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port);

server.timeout = 1000 * 60 * 10; // 10 minutes

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/api/json', (req, res) => {
    console.log(req.query)
    res.send(JSON.stringify(
            {"students": [
                {
                    "name":"John",
                    "phone" : 1234567
                },
                {
                    "name":"Jenny",
                    "phone" : 2345678
                }
            ]})
        );
})

app.get('/api/xml', (req, res) => {
    // Set Content-Type differently for this particular API
    res.set({'Content-Type': 'application/xml'});
    res.send(`<note>
        <to>Lee</to>
        <from>Wang</from>
        <heading>Reminder</heading>
        <body>Don't forget today's class!</body>
        </note>`);
})