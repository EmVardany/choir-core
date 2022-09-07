const cool = require('cool-ascii-faces');
const express = require('express');

const app = express();
const router = require('./app/routes');
const port = process.env.PORT || 3000;
const db = require('./app/db')
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.get('/', (req, res, next) => {
    res.end('<h1>HomePage</h1>')
})
console.log(123456)
router(app);

app.listen(port, async () =>{
    console.log(`Server started on port ${port}`);
  try{
      await db.connect();
      console.log(
          ' connect db'
      )
  }catch (e){
      console.log(
          'dont connect db',e
      )
  }
})


