/* class tarea para gestionar las tareas que el usuario pone en la lista */

export default class Tarea {
        constructor(texto){
        this.texto = texto;
        this.destacado = false;
    }
    editar(nuevoTexto){
        if(!nuevoTexto.trim()){
            throw new Error('El texto de la tarea no puede estar vacío.');
        }
        this.texto = nuevoTexto.trim();
    }
    toggleDestacado(){
        this.destacado = !this.destacado;
    }
}