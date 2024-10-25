function formatearNombreConcierto(nombre) {
  let palabras = nombre.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i].charAt(0).toUpperCase() + // Mayúscula en la primera letra
      palabras[i].slice(1).toLowerCase(); // Minúsculas en el resto de la palabra
  }

  return palabras.join(" ");
}
console.log(formatearNombreConcierto("conCierto rOCK"));
