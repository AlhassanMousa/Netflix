const express = require("express");
const mongoose = require("mongoose")
const authRoute = require('./routes/auth')
const app = express();
const dotenv = require("dotenv");
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute  = require("./routes/lists")
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }).then(() => console.log("db success"))
  .catch((err) => console.log(err));

 app.use(express.json());  
 app.use('/api/auth',authRoute)
 app.use('/api/users',userRoute)
 app.use('/api/movies',movieRoute)
 app.use('/api/lists',listRoute)

app.listen(8080, ()=>{
    console.log("run now")
})