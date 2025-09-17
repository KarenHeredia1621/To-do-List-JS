//CREAMOS LAS CONSTANTES GLOBALES PARA LOS ELEMENTOS PRINCIPALES

const input = document.getElementById("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const contCompletedList = document.getElementById("cont-completed-list");

//Creamos la función que nos permite crear una nueva tarea a partir del formulario
// Toda la etiqueta que vamos a crear es a partir de la maqueta HTML pre-existente

function createToDoItem(textItem){
//Creamos el nodo o elemento padre
    const item = document.createElement("div");
    item.classList.add("item-to-do");
    
//Creamos el nodo hijo del input y le agregamos el type checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

//Creamos el siguiente nodo hijo-Parrafo
//A este parrafo le asigno el valor del argumento de la función, es decir: lo que escribe el usuario en el campo
    constP = document.createElement("p");
    p.textContent = textItem;

//Creamos el último nodo hijo, el botón de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"

//Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

// utilizamos el return para retornar o dar respuesta del elemento creado, ya que lo usaremos en otra función más adelante.
    return item;

}