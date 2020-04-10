import cipher from './cipher.js';

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const siguiente = document.getElementById('siguiente');
const pag1 = document.getElementById('pag1');
const pag2 = document.getElementById('pag2');
const contenedor = document.getElementById('contenedor');
const numero = document.getElementById('numero');
const limpiarCifrado = document.getElementById('limpiarCifrado');
const ingresoTextoAcifrar = document.getElementById('ingresoTextoAcifrar');
const botonaCifrar = document.getElementById('aCifrar');
const textoCifrado = document.getElementById('textoCifrado');
const botonaCopiar1 = document.getElementById('aCopiar1');
const limpiarDescifrado = document.getElementById('limpiarDescifrado');
const ingresoTextoAdescifrar = document.getElementById('ingresoTextoAdescifrar');
const botonaDescifrar = document.getElementById('aDescifrar');
const textoDescifrado = document.getElementById('textoDescifrado');
const botonaCopiar2 = document.getElementById('aCopiar2');
const ayuda = document.getElementById('ayuda');
const pantallaModal = document.getElementById('pantallaModal');
pag2.style.display='none';

siguiente.addEventListener('click', () => {
    if (nombre.value && telefono.value && correo.value !== '') {
        pag1.style.display='none';
        pag2.style.display='';
    } else {
        contenedor.innerHTML = '* Todos los campos son obligatorios';
    }
});

const pantalla = () => {
    const mensaje = document.createElement('div');
    mensaje.setAttribute('class', 'contenidoModal');
    const info = `
       <section class="fondo">
        <i class="fas fa-times" id="exit"></i>
        <p class="descripcion">kfdldkdkfjkldkfjdkjfkdsdsdsdsdsdfkfdkfkdjkjfdk</p>
       </section>
    `;
    mensaje.innerHTML = info;
    return mensaje;
};
    

ayuda.addEventListener( 'click', ()=>{
    pantallaModal.appendChild(pantalla());
    pantallaModal.querySelector('#exit').addEventListener( 'click', () => {
        pantallaModal.innerHTML = '';
    });
});

botonaCifrar.addEventListener( 'click', () => {
    const espaciado = parseInt(numero.value, 10);
    const textoIngresado = ingresoTextoAcifrar.value;

    textoCifrado.value = cipher.encode(espaciado, textoIngresado);
});

botonaDescifrar.addEventListener( 'click', () => {
    const espaciado = parseInt(numero.value, 10);
    const textoIngresado = ingresoTextoAdescifrar.value;

    textoDescifrado.value = cipher.decode(espaciado, textoIngresado);
});

botonaCopiar1.addEventListener('click', () => {
    const textoCopiado = document.createElement('input');
    textoCopiado.setAttribute('value', textoCifrado.value);
    document.body.appendChild(textoCopiado);
    textoCopiado.select();
    document.execCommand('copy');
    document.body.removeChild(textoCopiado);
});

botonaCopiar2.addEventListener('click', () => {
    const textoCopiado = document.createElement('input');
    textoCopiado.setAttribute('value', textoDescifrado.value);
    document.body.appendChild(textoCopiado);
    textoCopiado.select();
    document.execCommand('copy');
    document.body.removeChild(textoCopiado);
});

limpiarCifrado.addEventListener('click', () => {
    textoCifrado.value = '';
    ingresoTextoAcifrar.value = '';
    numero.value = '';
});

limpiarDescifrado.addEventListener('click', () => {
    textoDescifrado.value = '';
    ingresoTextoAdescifrar.value = '';
    numero.value = '';
});


