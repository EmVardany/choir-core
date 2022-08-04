const express = require('express');
const app = express();

const router = require('./app/routes');

app.use(express.json());
app.use(router);

app.listen(5000, function(){
    console.log(`Server started`);
})

