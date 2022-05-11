const express = require("express")
const cors = require("cors")


const app = express()
// app.use(cors({
//     origin:"*"
// }))

const db = require("./src/database")
db.on("error", (error)=>{
    console.log("error en la db: "+error)
})
db.on("connected", ()=>{
    console.log("la base de datos esta conectada")
})

const tareas = require("./src/rutas/r_tareas")

app.use("/api/tareas",cors(),
    tareas)

app.get("/", (req, res)=>{
    console.log("en la raiz")
    res.send("estamos en la raiz")
})

const PORT = 5000
app.listen(PORT, ()=>{console.log("puerto "+PORT)})