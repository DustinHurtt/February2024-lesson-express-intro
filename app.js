// First, we have to require Express so we can use it in our app.
const express = require('express');

// Create an express server instance named `app`
// `app` is the Express server that will be handling requests and responses
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>');
  });

app.get('/cat', (request, response, next) => {
    response.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Cat</title>
            <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
            <h1>Cat</h1>
            <p>This is my second route</p>
            <img src="/images/cool-cat.jpg" />
        </body>
        </html>
    `);
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));