//CREAMOS LAS CONSTANTES GLOBALES PARA LOS ELEMENTOS PRINCIPALES

const input = document.getElementById("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const contCompletedList = document.getElementById("cont-completed-list");


//CREAMOS LA FUNCIÓN QUE NOS PERMITE CREAR UNA NUEVA TAREA APARTIR DEL FORMULARIO
//TODA ETIQUETA QUE VAMOS A CREAR ES A PARTIR DE LA MAQUETA HTML PRE-EXISTENTE

//Esta función crea la estructura del HTML y la deja en un limbo, aún no la inserta en la página.
function createToDoItem(textItem){

    //CREAMOS EL NODO O ELEMENTO PADRE
    const item = document.createElement("div");
    item.classList.add("item-to-do");

    //CREAMOS EL NODO HIJO DEL INPUT Y LE AGREGAMOS EL TYPE CHECKBOX
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    //Creamos el siguiente nodo hijo<p>
    //A ESTE PÁRRAFO LE ASIGNO EL VALOR DEL ARGUMENTO DE LA FUNCIÓN ES DECIR LO QUE ESCRIBE EL USUARIO EN EL CAMPO DEL FORMULARIO
    const p = document.createElement("p");
    p.textContent = textItem

    //CREAMOS EL ÚLTIMO NODO HIJO,  EL BOTÓN DE ELIMINAR
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    //ENSAMBLAMOS DENTRO DEL NODO PADRE (item) SUS NODOS HIJOS, ES DECIR LA ESTRUCTURA DE LA TAREA
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    //UTILIZAMOS EL RETURN PARA DAR RESPUESTA DEL ELEMENTO CREADO YA QUE LO USAREMOS EN OTRA FUNCION MAS ADELANTE
    return item;
}


//DETECTAMOS EL EVENTO CLICK SOBRE EL BOTÓN AGREGAR CON UN ELEMENTO DE ESCUCHA (listener) 
//PARA QUE APARTIR DE ESTE EVENTO SE AGREGUE LA TAREA DENTRO DEL CONTENEDOR #cont-to-do-list

    addBtn.addEventListener('click', ()=>{
    const textItem = input.value.trim();
    if(textItem == ""){

        alert("No se puede crear una tarea vacía");

    }
    else{
        const newItem = createToDoItem(textItem);
        toDoList.appendChild(newItem);
        eventsToItem(newItem);
        input.value = "";
    }

});

//La siguiente función nos permitirá agregar el funcionamiento principal sobre las tareas, es decir: marcar la tarea como completado o en dado caso COMPLETAR

function eventsToItem(item){
//Utilizamos querySelector para capturar el input o el button que esta dentro del item
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');


//MARCAR COMO COMPLETADA LA TAREA
    checkbox.addEventListener('change', ()=>{
        if (checkbox.checked) {
            contCompletedList.appendChild(item)
        }

        else{
            toDoList.appendChild(item)
        }
    });

    deleteBtn.addEventListener('click', ()=>{
        item.remove()
    })
}

    const btnStyles = document.getElementById('change-style')
        btnStyles.addEventListener('click', ()=>{
        const linkCss = document.getElementById('enlace-estilos')

            if (linkCss.getAttribute('href') === 'css/style.css') {
                linkCss.setAttribute('href', 'css/style-noche.css')
                btnStyles.textContent = "Modo noche";
            }

            else{
                linkCss.setAttribute('href', 'css/style.css')
                btnStyles.textContent = "Modo día";
            }

});

// Permitir agregar tarea presionando Enter en el input
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // evita que se recargue la página si el input está dentro de un formulario
            addBtn.click();
        }
});


