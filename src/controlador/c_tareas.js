const m_tareas = require("../modelo/m_tareas")

module.exports = {

    tareas : async (req, res)=>{
        try{
            const lista = await m_tareas.find()
            res.json(lista)
        }catch(error){
            res.json({mensaje: "error en lista: "+error})
        }
    },

    nueva : async (req, res)=>{
        // console.log("datos tarea: ", req.body.titulo, req.body.fecha,req.body.hora)
        // console.log("datos body: ", req.body)


        var tarea = new m_tareas({
            titulo:  req.body.titulo,
            fecha: req.body.fecha,
            hora: req.body.hora
        })
        try{
            await tarea.save()
            res.json({mensaje: "tarea creada",
                    data: tarea})
        }catch(error){
            res.json({mensaje: "error en nuevaTarea: "+error}) 
        }
    },

    act : async (req, res)=>{
        // console.log("datos tarea: ", req.body.titulo, req.body.fecha,req.body.hora)
        // console.log("datos body: ", req.body[0].titulo)


        let id = req.params.id
        try{
            await m_tareas.findByIdAndUpdate(id, {
                titulo:  req.body[0].titulo,
                fecha: req.body[0].fecha,
                hora: req.body[0].hora
            },
            {new:true})
            res.json({mensaje: "se actualizo la tarea id: "+id})
        }catch(error){
            res.json({mensaje: "error en act tarea: "+error})
        }
    },

    borrar : async (req, res)=>{
        let id = req.params.id
        try{
            await m_tareas.findByIdAndDelete(id)
            res.json({mensaje: "la tarea se borro"})
        }catch(error){
            res.json({mensaje: "error al borrar la tarea"})
        }
    },

    borrartodo : async (req, res)=>{
        let id = req.params.id
        try{
            await m_tareas.remove()
            res.json({mensaje: "todas las tareas borradas"})
        }catch(error){
            res.json({mensaje: "error al borrar las tareas: "+error})
        }
    },

    tarea : async (req, res)=>{
        let id = req.params.id
        try{
            let respon = await m_tareas.findById(id)
            res.json(respon)
        }catch(error){
            res.json({mensaje: "error en tarea: "+error})
        }
    }

}