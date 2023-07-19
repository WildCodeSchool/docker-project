const express = require('express')
const app = express()
const port = 8080 || process.env.PORT
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    console.log("received GET request on /")
    res.append('Content-Type', 'text/plain')
    res.append('Access-Control-Allow-Origin', '*')
    res.send('get::ok');
  });

app.post('/', (req, res) => {
    console.log("received POST request on /")
    res.send('post::ok');
});

app.listen(port, HOST, () => {
    console.log('App listen on localhost:' + port)
})