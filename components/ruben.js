//STRINGS
export function formatearNombreConcierto(nombre) {
  if (typeof nombre !== "string") {
    console.log("Error, el valor debe ser de tipo string");
    return false;
  }
  let palabras = nombre.split(" "); // Divide el nombre en un array de palabras
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i].charAt(0).toUpperCase() + // Mayúscula en la primera letra
      palabras[i].slice(1).toLowerCase(); // Minúsculas en el resto de la palabra
  }
  return palabras.join(" "); // Une las palabras en un solo string
}

export function formatearNombreArtista(artista) {
  if (typeof artista !== "string") {
    console.log("Error, el valor debe ser de tipo string");
    return false;
  }
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

export function crearDescripcionEvento(nombreConcierto, nombreArtista, fecha) {
  if (
    typeof nombreConcierto !== "string" ||
    typeof nombreArtista !== "string"
  ) {
    console.log("Error, los campos deben ser de tipo string");
    return false;
  }

  let conciertoFormateado = formatearNombreConcierto(nombreConcierto);
  let artistaFormateado = formatearNombreArtista(nombreArtista);
  let descripcion = `${conciertoFormateado} con ${artistaFormateado} el ${fecha}`;
  return descripcion;
}

//NUMBER
export function validarTicketsDisponibles(ticketsIngresados, maxTickets) {
  if (!Number.isInteger(ticketsIngresados) || !Number.isInteger(maxTickets)) {
    // isInteger comprueba que el valor sea un Integer
    console.error("Error: Los valores deben ser números enteros.");
    return false;
  }

  if (ticketsIngresados < 0 || maxTickets <= 0) {
    console.error(
      "Error: Los valores deben ser positivos y maxTickets mayor a cero."
    );
    return false;
  }

  if (ticketsIngresados > maxTickets) {
    console.error(
      "Error: No puede haber más tickets ingresados que los tickets máximos."
    );
    return false;
  }

  const disponibles = maxTickets - ticketsIngresados;
  console.log(`Tickets disponibles: ${disponibles}`);

  return true;
}

export function calcularIngresoAsistente(ingresoTotal, asistentes) {
  if (typeof ingresoTotal !== "number" || typeof asistentes !== "number") {
    console.log("Error, los campos deben ser números");
    return false;
  }

  if (ingresoTotal < 0 || asistentes < 0) {
    console.log("Error, los valores deben ser positivos");
    return false;
  }

  return ingresoTotal / asistentes;
}

export function generarIDConcierto(fechaConcierto, precioBase) {
  // Reemplaza todos los guiones en la fecha con una cadena vacía, es decir, los elimina
  let fechaFormateada = fechaConcierto.replace(/-/g, "");

  // Convierte el precio a una cadena y elimina el punto decimal
  let precioFormateado = precioBase.toString().replace(".", "");

  // Genera dos valores aleatorios entre 00 y 99
  let randomValue = Math.floor(Math.random() * 100)
    .toString() // Pasar número a string
    .padStart(2, "0"); // Se utiliza para asegurar que el número aleatorio tenga siempre 2 dígitos

  // Concatena la fecha formateada, el precio formateado y el valor aleatorio
  return fechaFormateada + precioFormateado + randomValue;
}
