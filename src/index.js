import cipher from './cipher.js';

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const siguiente = document.getElementById('siguiente');
const pag1 = document.getElementById('pag1');
const pag2 = document.getElementById('pag2');
const contenedor = document.getElementById('contenedor');
pag2.style.display='none';

siguiente.addEventListener('click', () => {
    if (nombre.value && telefono.value && correo.value !== '') {
        pag1.style.display= 'none';
        pag2.style.display='block';
    } else {
        contenedor.innerHTML = '* Todos los campos son obligatorios';
    }
});


console.log(cipher);
