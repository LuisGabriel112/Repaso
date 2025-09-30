let inputTareas = document.getElementById("inputTareas");
let btnAdd = document.querySelector(".btn-anadir");
let listaTareas = document.querySelector(".tareas");
let btnEliminarTodas = document.querySelector(".btn-eliminar-todas");
let btnCompletar = document.querySelector(".btn-completar");
let btnEditar = document.querySelector(".btn-editar");
let divTareas = document.querySelector(".tareas");
let controles = document.querySelector(".controles");


let idTarea = 1;


btnAdd.addEventListener("click", function(){
    let tarea = inputTareas.value;
    if (tarea === ""){
        alert("Por favor introduce una tarea");
    }else if (tarea.length > 1){
        listaTareas.innerHTML += `<div id="tarea-${idTarea}" class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center my-2">
            <span>${tarea}</span>
            <input type="checkbox" class="mr-2">
        </div>
        `;
        idTarea++;
        inputTareas.value = "";
    }
})

btnEliminarTodas.addEventListener("click", function(){
    listaTareas.innerHTML = "";
    idTarea = 1;
})

btnCompletar.addEventListener("click", function(){
    let tareasCompletadas = divTareas.querySelectorAll("input:checked");
    tareasCompletadas.forEach(function(tarea){
        tarea.parentElement.remove();
        idTarea--;
    })

    
})

btnEditar.addEventListener("click", function(){
    let tareaAeditar = divTareas.querySelectorAll("input:checked");
    inputTareas.value = tareaAeditar[0].parentElement.querySelector("span").textContent;
    btnEditar.innerHTML = 'Aceptar'


})