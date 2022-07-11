const express = require("express")
const bP = require('body-parser').json();
const router = express.Router()

const {tareas, nueva, act, borrar, borrartodo, tarea} = require("../controlador/c_tareas")


router.get("/",bP, tareas)

router.post("/",bP, nueva)

router.put("/:id",bP, act)

router.delete("/:id",bP, borrar)

router.get("/:id", bP, tarea)

router.delete("/", bP, borrartodo)

module.exports = router