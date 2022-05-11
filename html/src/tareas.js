//const request = fetch("http://localhost:5000/api/tareas")
//.then(console.log("connected"))

// function borraTodos(){
//     localStorage.clear()
//     localStorage.setItem("tareas", JSON.stringify([]))
//     localStorage.setItem("num", 0)
//     console.clear()
//     pintarLista()
//     document.querySelector(".nuevas").classList.add("d-none")
// }

function formulario(n=0, val=0, x=0){
    if(val == false){
        val={
            titulo:"",
            fecha:"",
            hora:""
        }
    }
    let html =
        `<div class="col nueva ">
            <div class="row shadow border p-2 ">
                <form name="form1">
                    <div class="row">
                        <label for="titulo">TAREA:</label>
                        <input type="text" id="titulo" value="${val.titulo}" placeholder="TITULO DE LA TAREA">
                    </div>
                    <div class="row">
                        <label for="fecha"> FECHA:</label>
                        <input type="date" id="fecha" value="${val.fecha}">
                    </div>
                    <div class="row">
                        <label for="hora">HORA:</label>
                        <input type="time" id="hora" value="${val.hora}">
                    </div>

                    <div class="row mt-4">
                        <div class="col"></div>
                        <div class="col-4 btn btn-secondary ms-2 me-2 no text-center">CANCELAR</div>
                        <div class="col-4 btn btn-success ms-2 me-2 done text-center">LISTO</div>
                    </div>
                    
                </form>
            </div>
        </div>
        `
        let nuevas = document.querySelector(".nuevas")
        nuevas.innerHTML=html
        nuevas.classList.remove("d-none")
        document.querySelector(".no").addEventListener("click", ()=>{
            nuevas.classList.add("d-none")
            pintarLista()
        })
        document.querySelector(".done").addEventListener("click", ()=>{
            nuevas.classList.add("d-none")
            
            if(n){
               crear({titulo:form1.titulo.value, fecha:form1.fecha.value, hora:form1.hora.value} )
            }else{
                let valn=[{titulo:form1.titulo.value, fecha:form1.fecha.value, hora:form1.hora.value, number:  val.number}]
                nuevosDatos(valn, x)
            }
        })

}



async function crear(datos){
    let options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(datos)
    }
    let tarea = await fetch("http://localhost:5000/api/tareas", options)
    //console.log(await options.body)
    //console.log(await tarea.json())
    pintarLista()
}

async function pintarLista(){
    let i = 0
    let options = {
        method: "GET",
        json:true
    }
    let tareas = await fetch("http://localhost:5000/api/tareas", options)
    //console.log(await tareas.json())
    tareas = await tareas.json()

    let html = ""
    tareas.forEach(element => {      
            html +=`
                    <div class="tarea " data-tarea="${element._id}">
                        <div class="row  border rounded  m-3">
                            <div class="col-12 shadow">
                                <div class="row bg-primary">
                                    <div class="col-3"></div>
                                    <div class="col-6 text-center text-light">${element.titulo}</div>
                                    <div class="col-3 text-end">
                                        <span data-tareaindex="${element._id}" class="dele"> X </span>
                                        <span data-tareaindex="${element._id}" class="edit"> E </span>
                                    </div>
                                </div>
                                <div class="row "><div class="col h-25 text-center">FECHA: ${element.fecha}</div></div>
                                <div class="row text-center"><div class="col h-25 text-center">HORA: ${element.hora}</div></div>
                            </div>
                        </div>
                    </div>
                    `
    })

    document.querySelector(".tareas").innerHTML = html
}

async function borrarTarea(x){
    let options = {
        method: "DELETE",
        json:true
    }
    let tarea = await fetch(`http://localhost:5000/api/tareas/${x}`, options)

    pintarLista()
}

async function editarTarea (x){
    console.log("selec")
    let options = {
        method: "GET",
        json:true
    }
    let tarea = await fetch(`http://localhost:5000/api/tareas/${x}`, options)
    //console.log(await tareas.json())
    tarea = await tarea.json()
    let act = formulario(false, tarea, x) 
    
}

async function nuevosDatos(datos, x){
    console.log("actulizar")
    let options = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(datos)
    }
    let tarea = await fetch(`http://localhost:5000/api/tareas/${x}`, options)

    //console.log(await tarea.json)
    pintarLista()
}
    
pintarLista()