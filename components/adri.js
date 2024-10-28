//lista conciertos, guardará una lista de Conciertos
const listaConciertos = [];

//constructor objetos Concierto y Ticket
function Concierto(nombreConcierto, nombreArtistas, precioBase){
    
    this.nombreConcierto = nombreConcierto;
    this.nombreArtistas = nombreArtistas;
    this.precioBase = precioBase;
    //lista tickets
    this.listaTickets = [];
}

function Ticket(id_Cliente, concierto, descuento){

    this.id_Cliente = id_Cliente;
    this.nombreConcierto = concierto.nombreConcierto;

    this.precio = concierto.precioBase - (concierto.precioBase * (descuento / 100));
}

/*ejemplo (por chatgpt) crear un concierto y añadirlo a la lista, crear un 
ticket de un concierto específico y meterlo en la lista del mismo concierto*/

const concierto1 = new Concierto("Concierto 1", "Rauw Alejandro, Rosalia", 100);
listaConciertos.push(concierto1);

const ticket1 = new Ticket(1, concierto1, 10);
concierto1.listaTickets.push(ticket1);