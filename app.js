
const lista = document.getElementById('lista');
const inputdelista = document.getElementById('inputsDeListaENTRADA');
const botonAgregar = document.getElementById('agregarInputsaLista');
const botonEliminar = document.getElementById('eliminaUltimaTarea');
const botonVaciarTareas = document.getElementById('vaciaTodasTareas');


class GestordeTareas{
    constructor(){
        this.lista = [];
    }

    agregarTarea(input){
        this.lista.push(input.value);      
        input.value = '';  
    }

    eliminarTarea(){
        this.lista.pop();
    }

    vaciarTareas(){
        this.lista = [];
    }

}

function render(){
    lista.innerHTML = '';
    gestor.lista.forEach((tarea, index) => {   
        const objetodeLista = document.createElement('li');
        objetodeLista.textContent = tarea;
        lista.appendChild(objetodeLista);

        const botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        objetodeLista.appendChild(botonEditar);

        botonEditar.addEventListener('click', () => {
            const nuevoTexto = prompt('Editar tarea:', tarea);
            if (nuevoTexto === ''){
                alert('La tarea no puede estar vacía.');
                return;
            }
            gestor.lista[index] = nuevoTexto.trim();
            render();
        });

        const botonElimEspecifico = document.createElement('button');
        botonElimEspecifico.textContent = 'Eliminar';
        objetodeLista.appendChild(botonElimEspecifico);

        botonElimEspecifico.addEventListener('click', () => {
            gestor.lista.splice(index, 1);
            render();
        });

        objetodeLista.addEventListener('dblclick', (e) => {
            objetodeLista.classList.toggle('destacado');
        });
    });
}

/* Eventos de botones */

const gestor = new GestordeTareas();

botonAgregar.addEventListener('click', () => {
    if(inputdelista.value === '') {
        alert('Por favor ingresa una tarea antes de agregarla a la lista.');
        return;
    } 
    
    gestor.agregarTarea(inputdelista);
    render();

})

inputdelista.addEventListener('keydown', function(event) {
    if (event.code === "Enter") {
        if(inputdelista.value === '') {
            alert('Por favor ingresa una tarea antes de agregarla a la lista.');
            return;
        }

        gestor.agregarTarea(inputdelista);
        render();
    }
});

botonEliminar.addEventListener('click', () => {
    gestor.eliminarTarea();
    render();
});

botonVaciarTareas.addEventListener('click', () => {
    gestor.vaciarTareas();
    render();
});


