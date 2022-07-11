const nueva = document.querySelector(".crear")
const delAll = document.querySelector(".borrar-todas")
const areaTareas = document.querySelector(".tareas")

nueva.addEventListener("click", ()=>{
    //crear()
    formulario(true)
})

delAll.addEventListener("click", ()=>{
    console.log("borrar todas las tareas")
    borraTodos()
})

  
areaTareas.addEventListener("click", (elemento)=>{
    if(elemento.target.classList.contains("edit")){
        editarTarea(elemento.target.dataset.tareaindex)
    }
    if(elemento.target.classList.contains("dele")){
        borrarTarea(elemento.target.dataset.tareaindex)
        
    }
})