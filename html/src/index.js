const nueva = document.querySelector(".crear")
const delAll = document.querySelector(".borrar-todas")
const areaTareas = document.querySelector(".tareas")

nueva.addEventListener("click", ()=>{
    //crear()
    formulario(1)
})

delAll.addEventListener("click", ()=>{
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