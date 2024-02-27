import {editarMensaje} from "./editarMensaje.js";

export const validarEdad = (elemento) => {
    const input = elemento.querySelector('.inputEdad');
    const mensaje = elemento.querySelector('.mensaje');

    input.addEventListener('keyup', () => {
        if (input.value < 14 || input.value > 99) {
            editarMensaje(mensaje, 9);
        } else {
            input.dataset.valid = true;
        }
    })
}