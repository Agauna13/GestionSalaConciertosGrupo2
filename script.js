const listaConciertos = [];

// Constructor para conciertos
function Concierto(
  idConcierto,
  nombreConcierto,
  nombreArtista,
  generoConcierto,
  fechaConcierto,
  precioBase
) {
  this.idConcierto = idConcierto;
  this.nombreConcierto = formatearNombreConcierto(nombreConcierto);
  this.nombreArtista = formatearNombreArtista(nombreArtista);
  this.generoConcierto = formatearNombreArtista(generoConcierto);
  this.fechaConcierto = fechaConcierto;
  this.precioBase = precioBase;
  this.listaTickets = [];
}

// Constructor para tickets
function Ticket(id_Cliente, concierto, descuento) {
  this.id_Cliente = id_Cliente;
  this.idConcierto = concierto.idConcierto;
  this.nombreConcierto = concierto.nombreConcierto;
  this.descuento = descuento;
  this.precio = concierto.precioBase;
}


// Constructores de Conciertos de Ejemplo
const concierto1 = new Concierto(
  1,
  "Concierto 1",
  "Rauw Alejandro",
  "Opera",
  "2024-11-04",
  100
);
listaConciertos.push(concierto1);

const concierto2 = new Concierto(
  2,
  "Concierto 2",
  "Guns N' Roses",
  "Rock",
  "2024-11-06",
  150
);
listaConciertos.push(concierto2);

const concierto3 = new Concierto(
  3,
  "Concierto 3",
  "Anuel AA",
  "Reggaeton",
  "2024-11-05",
  120
);
listaConciertos.push(concierto3);

const concierto4 = new Concierto(
  4,
  "Concierto 4",
  "Beethoven",
  "Música Clásica",
  "2024-11-08",
  50
);
listaConciertos.push(concierto4);

const concierto5 = new Concierto(
  5,
  "Concierto 5",
  "System of a down",
  "Nu Metal",
  "2025-03-21",
  300
);
listaConciertos.push(concierto5);

const concierto6 = new Concierto(
  6,
  "Concierto 6",
  "Rosalía",
  "Tortura auditiva",
  "2025-06-21",
  300
);
listaConciertos.push(concierto6);

const concierto7 = new Concierto(
  7,
  "Concierto 7",
  "Nirvana",
  "Grunge",
  "2025-09-23",
  300
);
listaConciertos.push(concierto7);

const concierto8 = new Concierto(
  8,
  "Concierto 8",
  "Taylor Swift",
  "Pop country",
  "2025-12-21",
  300
);
listaConciertos.push(concierto8);


function crearTickets(){
  for (let i = 0; i < listaConciertos.length; i++) {
    const concierto = listaConciertos[i];
  
    for (let j = 1; j <= 8; j++) {
      const idCliente = `Cliente ${j} - Concierto ${concierto.idConcierto}`;
      const descuento = Math.floor(Math.random() * 20);
  
      const nuevoTicket = new Ticket(idCliente, concierto, descuento);
  
      concierto.listaTickets.push(nuevoTicket);
    }
  }
}



// Renderiza conciertos en HTML
function renderizarConciertos() {
  crearTickets();
  const contenedor = document.getElementById("contenedorConciertos");
  contenedor.innerHTML = "";
  listaConciertos.forEach((concierto) => {
    const conciertoHTML = document.createElement("div");
    conciertoHTML.classList.add("concierto");
    let descuento = calcularPrecioDescuento(concierto.listaTickets);
    let ingresosTotales = calcularIngresosReales((concierto.precioBase - descuento), concierto.listaTickets.length);
    let ingresosArtista = calcularDivisionIngresos(ingresosTotales, 40);
    conciertoHTML.innerHTML = `
      <h2 class="titulo">${concierto.nombreConcierto}</h2>
      <p><strong>ID:</strong> ${concierto.idConcierto}</p>
      <p><strong>Artista:</strong> ${concierto.nombreArtista}</p>
      <p><strong>Género:</strong> ${concierto.generoConcierto}</p>
      <p><strong>Fecha:</strong> ${concierto.fechaConcierto}</p>
      <p><strong>Temporada:</strong> ${determinarTemporada(concierto.fechaConcierto)}</p>
      <p><strong>Precio Base:</strong> ${concierto.precioBase}</p>
      <p><strong>Descuento:</strong> ${descuento}</p>
      <p><strong>Precio Final:</strong> ${concierto.precioBase - descuento}</p>
      <p><strong>Descripción:<strong> ${crearDescripcionlistaConciertos(concierto.nombreConcierto, concierto.nombreArtista, concierto.fechaConcierto)}</p>
      <h3><strong>Previsión de Ingresos</strong></h3>
      <p><strong>Tickets vendidos:<strong> ${concierto.listaTickets.length}</p>
      <p><strong>Total Recaudado:<strong> ${ingresosTotales}</p>
      <p><strong>Adeudado Artista:<strong> ${ingresosArtista}</p>
      <p><strong>Ingresos Netos:<strong> ${ingresosTotales - ingresosArtista}</p>
    `;
    contenedor.appendChild(conciertoHTML);
  });
}




// Actualiza el menú desplegable con los conciertos
function actualizarConciertos() {
  const selectElement = document.getElementById("nombreConciertoTicket");
  selectElement.innerHTML = "";
  listaConciertos.forEach((concierto) => {
    const option = document.createElement("option");
    option.value = concierto.nombreConcierto;
    option.textContent = concierto.nombreConcierto;
    selectElement.appendChild(option);
  });
}

function actualizarTickets() {
  const selectElement = document.getElementById("TicketsConcierto");
  selectElement.innerHTML = "";
  listaConciertos.forEach((concierto) => {
    const option = document.createElement("option");
    option.value = concierto.nombreConcierto;
    option.textContent = concierto.nombreConcierto;
    selectElement.appendChild(option);
  });
}


// Inicializa los conciertos y el menú desplegable
renderizarConciertos();
actualizarConciertos();
actualizarTickets();


// Añadir un nuevo concierto
document
  .getElementById("formConcierto")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreConcierto = document.getElementById("nombreConcierto").value;
    const nombreArtista = document.getElementById("nombreArtista").value;
    const fechaConcierto = document.getElementById("fechaConcierto").value;
    const generoConcierto = document.getElementById("generoConcierto").value;
    const precioBase = parseFloat(
      document.getElementById("precioConcierto").value
    );
    const idConcierto = listaConciertos.length + 1;

    const nuevoConcierto = new Concierto(
      idConcierto,
      nombreConcierto,
      nombreArtista,
      generoConcierto,
      fechaConcierto,
      precioBase
    );
    listaConciertos.push(nuevoConcierto);

    renderizarConciertos();
    actualizarConciertos();
    actualizarTickets();
    document.getElementById("formConcierto").reset();
    alert("Concierto añadido correctamente");
  });

// Añadir un ticket para el concierto seleccionado
document
  .getElementById("formTicket")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const idCliente = document.getElementById("idTicket").value;
    const nombreConcierto = document.getElementById(
      "nombreConciertoTicket"
    ).value;
    const descuento = parseFloat(document.getElementById("descuento").value);

    // Encontrar el concierto seleccionado
    const concierto = listaConciertos.find(
      (c) => c.nombreConcierto === nombreConcierto
    );
    if (concierto) {
      const nuevoTicket = new Ticket(idCliente, concierto, descuento);
      concierto.listaTickets.push(nuevoTicket);
      console.log("Tickets actuales:", concierto.listaTickets);

      document.getElementById("formTicket").reset();
      alert("Ticket añadido correctamente");
    } else {
      alert("Seleccione un concierto válido.");
    }
    renderizarConciertos();
    actualizarConciertos();
  });

// Mostrar los tickets del concierto seleccionado
function mostrarTickets() {
  const nombreConcierto = document.getElementById(
    "TicketsConcierto"
  ).value;
  const concierto = listaConciertos.find(
    (c) => c.nombreConcierto === nombreConcierto
  );

  const listaTicketsDiv = document.getElementById("listaTickets");
  listaTicketsDiv.innerHTML = ""; // Limpiar contenido previo

  if (concierto && concierto.listaTickets.length > 0) {
    concierto.listaTickets.forEach((ticket) => {
      const ticketDiv = document.createElement("div");
      ticketDiv.className = "ticket";
      ticketDiv.innerText = `Cliente: ${ticket.id_Cliente} | Concierto: ${ticket.nombreConcierto
        } | Precio: $${ticket.precio.toFixed(2)} | Descuento: ${ticket.descuento
        }%`;
      listaTicketsDiv.appendChild(ticketDiv);
    });
  } else {
    listaTicketsDiv.innerHTML =
      "<p>No hay tickets disponibles para el concierto seleccionado.</p>";
  }
}

// Filtrar conciertos que ocurrirán en menos de una semana
function revisarConciertos() {
  const listaConciertosProximos = document.getElementById(
    "listaConciertosProximos"
  );
  listaConciertosProximos.innerHTML = "";

  const hoy = new Date();
  listaConciertos.forEach((concierto) => {
    
    const diferencia = calcularDiasAntelacion(concierto.fechaConcierto);

    if (diferencia >= 0 && diferencia < 7) {
      const conciertoHTML = document.createElement("div");
      conciertoHTML.className = "conciertoProximo";
      conciertoHTML.innerText = `🎶 Concierto: ${concierto.nombreConcierto} | Fecha: ${concierto.fechaConcierto} | Género: ${concierto.generoConcierto}`;
      listaConciertosProximos.appendChild(conciertoHTML);
    }
  });
}

/******************************************************************************************** */

/*Objeto Date*/



//Para Asignar la temporada en la que el concierto se llevará a cabo
function determinarTemporada(fechaConcierto) {
  let fecha = new Date(fechaConcierto);
  let mes = fecha.getMonth() + 1;
  let dia = fecha.getDate();
  if (
    (mes === 3 && dia >= 20) ||
    (mes >= 4 && mes <= 5) ||
    (mes === 6 && dia <= 20)
  ) {
    return "Primavera";
  } else if (
    (mes === 6 && dia >= 21) ||
    (mes >= 7 && mes <= 8) ||
    (mes === 9 && dia <= 22)
  ) {
    return "Verano";
  } else if (
    (mes === 9 && dia >= 23) ||
    (mes >= 10 && mes <= 11) ||
    (mes === 12 && dia <= 20)
  ) {
    return "Otoño";
  } else {
    return "Invierno";
  }
}


//Para calcular la cantidad de
function calcularDiasAntelacion(fechaConcierto) {
  let fechaConciertoObj = new Date(fechaConcierto);
  let hoy = new Date();
  let diferenciaMs = fechaConciertoObj - hoy;
  let diferenciaDias = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

  return diferenciaDias;
}


//STRINGS
function formatearNombreConcierto(nombre) {
  if (typeof nombre !== "string") {
    console.log("Error, el valor debe ser de tipo string");
    return false;
  }
  let palabras = nombre.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i].charAt(0).toUpperCase() +
      palabras[i].slice(1).toLowerCase();
  }
  return palabras.join(" ");
}

function formatearNombreArtista(artista) {
  if (typeof artista !== "string") {
    console.log("Error, el valor debe ser de tipo string");
    return false;
  }
  let artistaLimpio = artista.trim();
  let palabras = artistaLimpio.split(" ");
  let palabrasLimpias = [];

  palabras.forEach(function (palabra) {
    if (palabra !== "") {
      palabrasLimpias.push(palabra);
    }
  });
  return palabrasLimpias.join(" ");
}

function crearDescripcionlistaConciertos(  /*Usar esto para generar una pequeña descripción del concierto */
  nombreConcierto,
  nombreArtista,
  fecha
) {
  let conciertoFormateado = formatearNombreConcierto(nombreConcierto);
  let artistaFormateado = formatearNombreArtista(nombreArtista);
  let descripcion = `${conciertoFormateado} con el artista ${artistaFormateado.toString()} el ${fecha}`;
  return descripcion;
}
/*


//Con Math

/* Calcular ingresos esperados si se han guardado por separado las ventas de los tickets con descuento
   y sin descuento y teniendo solo un tipo de descuento */
function calcularIngresosReales(
  precioTiket,
  ticketsVendido
) {
  let total = precioTiket * ticketsVendido;
  return Math.round(total);
}

// Si no varía el porcentaje que se lleva el artista sería este, borrar si lo recibe de otro lado
function calcularDivisionIngresos(ingresoTotal, porcentajeArtista) {
  if (porcentajeArtista < 0 || porcentajeArtista > 100) {
    return "Porcentaje introducido incorrecto";
  }
  let cantidadArtista = ingresoTotal * (porcentajeArtista / 100);
  return Math.round(cantidadArtista * 100) / 100;
}

function calcularPrecioDescuento(listaTickets) {
  if(listaTickets == null){
    return 0;
  }else{
    let sum = 0;
  for (let ticket of listaTickets) {
    sum += ticket.descuento;
  }
  let precioFinal = sum / listaTickets.length;

  return Math.round(precioFinal * 100) / 100;
  }
  
}


