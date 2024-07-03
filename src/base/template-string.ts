const nombre = 'Jesús';
const apellido = 'Peña';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

export function sayHello(nombre = '') {
  return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${sayHello(nombre)}  `);
