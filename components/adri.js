//lista conciertos, guardará una lista de Conciertos
const listaConciertos = [];

//constructor objetos Concierto y Ticket
function Concierto(
  idConcierto,
  nombreConcierto,
  nombreArtista,
  generoConcierto,
  fechaConcierto,
  precioBase
) {
  this.idConcierto = idConcierto;
  this.nombreConcierto = nombreConcierto;
  this.nombreArtista = nombreArtista;
  this.fechaConcierto = fechaConcierto;
  this.generoConcierto = generoConcierto;
  this.precioBase = precioBase;
  //lista tickets
  this.listaTickets = [];
}

function Ticket(id_Cliente, concierto, descuento) {
  this.id_Cliente = id_Cliente;
  this.nombreConcierto = concierto.nombreConcierto;
  this.descuento = descuento;
  this.precio = concierto.precioBase - concierto.precioBase * (descuento / 100);
}

/*ejemplo (por chatgpt) crear un concierto y añadirlo a la lista, crear un 
ticket de un concierto específico y meterlo en la lista del mismo concierto*/

const concierto1 = new Concierto(
  1,
  "Concierto 1",
  "Rauw Alejandro",
  "Opera",
  "2024-09-24",
  100
);
listaConciertos.push(concierto1);

const ticket1 = new Ticket(1, concierto1, 10);
concierto1.listaTickets.push(ticket1);

const concierto2 = new Concierto(
  2,
  "Concierto 2",
  "Guns N' Roses",
  "Rock",
  "2024-10-05",
  150
);
listaConciertos.push(concierto2);

const ticket2 = new Ticket(2, concierto2, 20);
concierto2.listaTickets.push(ticket2);

const concierto3 = new Concierto(
  3,
  "Concierto 3",
  "Anuel AA",
  "Reggaeton",
  "2024-11-12",
  120
);
listaConciertos.push(concierto3);

const ticket3 = new Ticket(3, concierto3, 15);
concierto3.listaTickets.push(ticket3);

const concierto4 = new Concierto(
  4,
  "Concierto 4",
  "Beethoven",
  "Música Clásica",
  "2024-12-01",
  300
);
listaConciertos.push(concierto4);

const ticket4 = new Ticket(4, concierto4, 30);
concierto4.listaTickets.push(ticket4);
