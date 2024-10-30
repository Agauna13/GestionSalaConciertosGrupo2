
const listaConciertos = [];

function Concierto(idConcierto, nombreConcierto, nombreArtista, generoConcierto, fechaConcierto, precioBase) {

    this.idConcierto = idConcierto;
    this.nombreConcierto = nombreConcierto;
    this.nombreArtista = nombreArtista;
    this.fechaConcierto = fechaConcierto;
    this.generoConcierto = generoConcierto;
    this.precioBase = precioBase;
    this.listaTickets = [];
}

function Ticket(id_Cliente, concierto, descuento) {

    this.id_Cliente = id_Cliente;
    this.idConcierto = concierto.idConcierto;
    this.nombreConcierto = concierto.nombreConcierto;
    this.descuento = descuento;
    this.precio = concierto.precioBase - (concierto.precioBase * (descuento / 100));
}


//conciertos ya creados
const concierto1 = new Concierto(1, "Concierto 1", "Rauw Alejandro", "Opera", "2024-09-24", 100);
listaConciertos.push(concierto1);

const ticket1 = new Ticket(1, concierto1, 10);
concierto1.listaTickets.push(ticket1);

const concierto2 = new Concierto(2, "Concierto 2", "Guns N' Roses", "Rock", "2024-11-03", 150);
listaConciertos.push(concierto2);

const ticket2 = new Ticket(2, concierto2, 20);
concierto2.listaTickets.push(ticket2);

const concierto3 = new Concierto(3, "Concierto 3", "Anuel AA", "Reggaeton", "2024-11-12", 120);
listaConciertos.push(concierto3);

const ticket3 = new Ticket(3, concierto3, 15);
concierto3.listaTickets.push(ticket3);

const concierto4 = new Concierto(4, "Concierto 4", "Beethoven", "Música Clásica", "2024-12-01", 300);
listaConciertos.push(concierto4);

const ticket4 = new Ticket(4, concierto4, 30);
concierto4.listaTickets.push(ticket4);


/******************************************************************************************** */

function mostrarConciertos() {
    return listaConciertos.map(concierto => {
        return {
            ID: concierto.idConcierto,
            Nombre: concierto.nombreConcierto,
            Artista: concierto.nombreArtista,
            Género: concierto.generoConcierto,
            Fecha: concierto.fechaConcierto,
            PrecioBase: concierto.precioBase
        };
    });
}


function renderizarConciertos() {
    const contenedor = document.getElementById("contenedorConciertos");
    contenedor.innerHTML = ""; 
    const conciertos = mostrarConciertos();

  
    conciertos.forEach(concierto => {
        const conciertoHTML = document.createElement("div");
        conciertoHTML.classList.add("concierto");

        conciertoHTML.innerHTML = `
            <div class="titulo">${concierto.Nombre}</div>
            <p><strong>ID:</strong> ${concierto.ID}</p>
            <p><strong>Artista:</strong> ${concierto.Artista}</p>
            <p><strong>Género:</strong> ${concierto.Género}</p>
            <p><strong>Fecha:</strong> ${concierto.Fecha}</p>
            <p><strong>Precio Base:</strong> $${concierto.PrecioBase}</p>
        `;

        contenedor.appendChild(conciertoHTML);
    });
}

renderizarConciertos();


document.getElementById("formConcierto").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombreConcierto = document.getElementById("nombreConcierto").value;
    const nombreArtista = document.getElementById("nombreArtista").value;
    const fechaConcierto = document.getElementById("fechaConcierto").value;
    const generoConcierto = document.getElementById("generoConcierto").value;
    const precioBase = parseFloat(document.getElementById("precioConcierto").value);
    let idConcierto = generarIDConcierto(fechaConcierto, precioBase);

    const nuevoConcierto = new Concierto(idConcierto, nombreConcierto, nombreArtista, generoConcierto, fechaConcierto, precioBase);
    listaConciertos.push(nuevoConcierto);

    alert("Concierto añadido correctamente");
    document.getElementById("formConcierto").reset();

    console.log(listaConciertos); 
    renderizarConciertos();
});







function revisarConciertos() {
    const hoy = new Date();
    const proximosConciertos = document.getElementById("listaConciertosProximos");
    proximosConciertos.innerHTML = ""; 

    listaConciertos.forEach(concierto => {
        const fechaConcierto = new Date(concierto.fechaConcierto);
        const diferenciaDias = (fechaConcierto - hoy) / (1000 * 60 * 60 * 24);


        if (diferenciaDias >= 0 && diferenciaDias <= 7) {
            const conciertoDiv = document.createElement("div");
            conciertoDiv.className = "concierto";
            conciertoDiv.innerText = `🎶 ${concierto.nombreConcierto} - ${concierto.nombreArtista} | Fecha: ${concierto.fechaConcierto} | Género: ${concierto.generoConcierto}`;

            proximosConciertos.appendChild(conciertoDiv);
        }
    });
}


document.getElementById("formTicket").addEventListener("submit", function(event) {
    event.preventDefault();

    const idCliente = document.getElementById("idTicket").value;
    const nombreConcierto = document.getElementById("nombreConciertoTicket").value;
    const descuento = parseFloat(document.getElementById("descuento").value);

    const concierto = listaConciertos.find(c => c.nombreConcierto === nombreConcierto);
    if (concierto) {
        const nuevoTicket = new Ticket(idCliente, concierto, descuento);
        concierto.listaTickets.push(nuevoTicket);

        document.getElementById("formTicket").reset();
        alert("Ticket añadido correctamente");
    } else {
        alert("Seleccione un concierto válido.");
    }
});

// Función para mostrar tickets del concierto seleccionado
function mostrarTickets() {
    const nombreConcierto = document.getElementById("nombreConciertoTicket").value;
    const concierto = listaConciertos.find(c => c.nombreConcierto === nombreConcierto);

    const listaTicketsDiv = document.getElementById("listaTickets");
    listaTicketsDiv.innerHTML = ""; // Limpiar contenido previo

    if (concierto && concierto.listaTickets.length > 0) {
        concierto.listaTickets.forEach(ticket => {
            const ticketDiv = document.createElement("div");
            ticketDiv.className = "ticket";
            ticketDiv.innerText = `Cliente: ${ticket.id_Cliente} | Concierto: ${ticket.nombreConcierto} | Precio: $${ticket.precio.toFixed(2)} | Descuento: ${ticket.descuento}%`;
            listaTicketsDiv.appendChild(ticketDiv);
        });
    } else {
        listaTicketsDiv.innerHTML = "<p>No hay tickets disponibles para el concierto seleccionado.</p>";
    }
}











/******************************************************************************************** */





/*Objeto Date*/
function programarRecordatorio(fechaConcierto, diasAntes) {
    let fecha = new Date(fechaConcierto);
    fecha.setDate(fecha.getDate() - diasAntes);
    return fecha.toISOString().split('T')[0];
}

function determinarTemporada(fechaConcierto) {
    let fecha = new Date(fechaConcierto);
    let mes = fecha.getMonth() + 1; // Enero es 0, por lo que sumamos 1 para alinear con los meses humanos
    let dia = fecha.getDate();

    if ((mes === 3 && dia >= 20) || (mes >= 4 && mes <= 5) || (mes === 6 && dia <= 20)) {
        return 'Primavera';
    }
    else if ((mes === 6 && dia >= 21) || (mes >= 7 && mes <= 8) || (mes === 9 && dia <= 22)) {
        return 'Verano';
    }
    else if ((mes === 9 && dia >= 23) || (mes >= 10 && mes <= 11) || (mes === 12 && dia <= 20)) {
        return 'Otoño';
    }
    else {
        return 'Invierno';
    }
}

function calcularDiasAntelacion(fechaConcierto, fechaVenta) {
    let fechaConciertoObj = new Date(fechaConcierto);
    let fechaVentaObj = new Date(fechaVenta);
    let diferenciaMs = fechaConciertoObj - fechaVentaObj;
    let diferenciaDias = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

    return diferenciaDias;
}


// listaConciertos.forEach(listaConciertos => {

//     let recordatorio = programarRecordatorio(listaConciertos.fecha, 10);
//     console.log(`Recordatorio para ${listaConciertos.nombreConcierto}: ${recordatorio}`);


//     let temporada = determinarTemporada(listaConciertos.fecha);
//     console.log(`Temporada para ${listaConciertos.nombreConcierto}: ${temporada}`);


//     let diasAntelacion = calcularDiasAntelacion(listaConciertos.fecha, hoy);
//     console.log(`Días de antelación para venta de tickets para ${listaConciertos.nombreConcierto}: ${diasAntelacion}`);
// });

//STRINGS
function formatearNombreConcierto(nombre) {
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

function formatearNombreArtista(artista) {
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

function crearDescripcionlistaConciertos(nombreConcierto, nombreArtista, fecha) {
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
function validarTicketsDisponibles(ticketsIngresados, maxTickets) {
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

function calcularIngresoAsistente(ingresoTotal, asistentes) {
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

function generarIDConcierto(fechaConcierto, precioBase) {
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

// Calcular ingresos esperados
function calcularIngresosEsperados(precioTiket, ticketsVendido) {
    let ingresosSinDesuento = precioTiket * ticketsVendido;
    return ingresosSinDesuento.toFixed(2);
}

/*Calcular ingresos esperado si se han guardado por separado las ventas de los tickets con descuento
y sin descuento y teniendo solo un tipo de descuento*/
function calcularIngresosReales(precioTiket, ticketsVendido, ticketsDescuento, ticketsDescuentoVendido) {
    let ingresosSinDesuento = precioTiket * ticketsVendido;
    let ingresosConDesuento = precioTiketDescuento * ticketsDescuentoVendido;
    let total = ingresosSinDesuento + ingresosConDesuento;
    return total.toFixed(0);
}

//Si no varia el porcentaje que se lleva el artista seria este, borrar si lo recibe de otro lado
function calcularDivisionIngresos(ingresoTotal, porcentajeArtista) {
    if (porcentajeArtista < 0 || porcentajeArtista > 100) {
        return "Porcentje introducido incorrecto";
    }
    let cantidadArtista = ingresoTotal * porcentajeArtista;
    //let cantidadArtista = ingresoTotal * (porcentajeArtista / 100);
    return cantidadArtista.toFixed(2);
}

//Con Math
// Calcular ingresos esperados
function calcularIngresosEsperados(precioTiket, ticketsVendido) {
    let ingresosSinDesuento = precioTiket * ticketsVendido;
    return Math.round(ingresosSinDesuento * 100) / 100; // Redondea a 2 decimales
}

/* Calcular ingresos esperados si se han guardado por separado las ventas de los tickets con descuento
   y sin descuento y teniendo solo un tipo de descuento */
function calcularIngresosReales(precioTiket, ticketsVendido, precioTiketDescuento, ticketsDescuentoVendido) {
    let ingresosSinDesuento = precioTiket * ticketsVendido;
    let ingresosConDesuento = precioTiketDescuento * ticketsDescuentoVendido;
    let total = ingresosSinDesuento + ingresosConDesuento;
    return Math.round(total); // Redondea al entero más cercano
}

// Si no varía el porcentaje que se lleva el artista sería este, borrar si lo recibe de otro lado
function calcularDivisionIngresos(ingresoTotal, porcentajeArtista) {
    if (porcentajeArtista < 0 || porcentajeArtista > 100) {
        return "Porcentaje introducido incorrecto";
    }
    let cantidadArtista = ingresoTotal * (porcentajeArtista / 100); // Asegúrate de dividir por 100
    return Math.round(cantidadArtista * 100) / 100; // Redondea a 2 decimales
}


function calcularPrecioDescuento(precioBase, descuento) {
    // Calcula el precio con descuento
    let descuentoAplicado = (precioBase * descuento) / 100;
    let precioFinal = precioBase - descuentoAplicado;

    return Math.round(precioFinal * 100) / 100; // Redondea a 2 decimales
}