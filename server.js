const express = require('express');
const app = express();
const router = require('./app/routes');
const port = process.env.PORT;
const db = require('./app/db')
const cors = require('cors')

app.use(express.json());
app.use(cors())

console.log(123456)
// router(app);
//
// app.listen(port, async () =>{
//     console.log(`Server started on port ${port}`);
//     await db.connect();
// })


