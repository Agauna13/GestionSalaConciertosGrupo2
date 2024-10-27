//STRINGS
function formatearNombreConcierto(nombre) {
  let palabras = nombre.split(" "); // Divide el nombre en un array de palabras
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i].charAt(0).toUpperCase() + // Mayúscula en la primera letra
      palabras[i].slice(1).toLowerCase(); // Minúsculas en el resto de la palabra
  }
  return palabras.join(" "); // Une las palabras en un solo string
}

function formatearNombreArtista(artista) {
  let artistaLimpio = artista.trim(); // Elimina espacios al principio y al final
  let palabras = artistaLimpio.split(" ");
  let palabrasLimpias = [];

  palabras.forEach(function (palabra) {
    if (palabra !== "") {
      palabrasLimpias.push(palabra);
    }
  });

  return palabrasLimpias.join(" ");
}

function crearDescripcionEvento(nombreConcierto, nombreArtista, fecha) {
  let conciertoFormateado = formatearNombreConcierto(nombreConcierto);
  let artistaFormateado = formatearNombreArtista(nombreArtista);
  let descripcion = `${conciertoFormateado} con ${artistaFormateado} el ${fecha}`;
  return descripcion;
}
