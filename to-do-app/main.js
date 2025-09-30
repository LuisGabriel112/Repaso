let inputTareas = document.getElementById("inputTareas");
let btnAdd = document.querySelector(".btn-anadir");
let listaTareas = document.querySelector(".tareas");
let btnEliminarTodas = document.querySelector(".btn-eliminar-todas");
let btnCompletar = document.querySelector(".btn-completar");
let btnEditar = document.querySelector(".btn-editar");
let divTareas = document.querySelector(".tareas");
let controles = document.querySelector(".controles");
let tareasCompletas = document.querySelector(".tareasCompletas");
let modoEdicion = false;
let idTareaEditar = null;
let tareas = [];


let idTarea = 1;


btnAdd.addEventListener("click", function(){
    let tarea = inputTareas.value;
    if (tarea === ""){
        alert("Por favor introduce una tarea");
    }else if (tarea.length > 0){
        listaTareas.innerHTML += `<div id="tarea-${idTarea}" class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center my-2">
            <span>${tarea}</span>
            <input type="checkbox" class="mr-2">
        </div>
        `;
        idTarea++;
        inputTareas.value = "";
        tareas.push({
            id: idTarea,
            tarea: tarea,
            completada: false
        })
    }
})

btnEliminarTodas.addEventListener("click", function(){
    listaTareas.innerHTML = "";
    idTarea = 1;
    tareas = [];
})

btnCompletar.addEventListener("click", function(){
    let tareasCompletadas = divTareas.querySelectorAll("input:checked");
    tareasCompletadas.forEach(function(tarea){
        let tareaId = tarea.parentElement.id.split("-")[1];
        tareaId = parseInt(tareaId);
        tareas[tareaId].completada = true;
        tarea.parentElement.remove();
        idTarea--;
        console.log(tareas);
    })
    tareas = tareas.filter(function(tarea){
        return !tarea.completada;
    })

    tareas.forEach(function(tarea){
        if (tarea.completada){
            tareasCompletas.innerHTML += `<div id="tarea-${tarea.id}" class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center my-2">
            <span>${tarea.tarea}</span>
            <input type="checkbox" class="mr-2" checked>
        </div>
        `;
        }
    })
    
})



btnEditar.addEventListener("click", function(){

})
