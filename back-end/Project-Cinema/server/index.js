const express = require("express");
const route = require("../routes/routes")
const app = express();
const cors = require("cors")
app.use(cors());
app.use(express.json())
app.use(route);
app.listen(3500,()=>{
    console.log("Servidor em operação")
})