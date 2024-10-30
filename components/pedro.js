// Calcular ingresos esperados
function calcularIngresosEsperados(precioTiket, ticketsVendido){
   let ingresosSinDesuento =  precioTiket * ticketsVendido;
   return ingresosSinDesuento.toFixed(2);
}

/*Calcular ingresos esperado si se han guardado por separado las ventas de los tickets con descuento
y sin descuento y teniendo solo un tipo de descuento*/
function calcularIngresosReales(precioTiket, ticketsVendido, ticketsDescuento, ticketsDescuentoVendido){
   let ingresosSinDesuento =  precioTiket * ticketsVendido;
   let ingresosConDesuento = precioTiketDescuento * ticketsDescuentoVendido;
   let total = ingresosSinDesuento + ingresosConDesuento;
   return total.toFixed(0);
}

//Si no varia el porcentaje que se lleva el artista seria este, borrar si lo recibe de otro lado
function calcularDivisionIngresos(ingresoTotal, porcentajeArtista){
   if(porcentajeArtista < 0 || porcentajeArtista > 100){
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
let porcentajeArtista = 0.9;
function calcularDivisionIngresos(ingresoTotal, porcentajeArtista) {
   if (porcentajeArtista < 0 || porcentajeArtista > 100) {
      return "Porcentaje introducido incorrecto";
   }
   let cantidadArtista = ingresoTotal * (porcentajeArtista / 100); // Asegúrate de dividir por 100
   return Math.round(cantidadArtista * 100) / 100; // Redondea a 2 decimales
}

const descuento = 5;
function calcularPrecioDescuento(precioBase, descuento) {
   // Calcula el precio con descuento
   let descuentoAplicado = (precioBase * descuento) / 100;
   let precioFinal = precioBase - descuentoAplicado;

   return Math.round(precioFinal * 100) / 100; // Redondea a 2 decimales
}