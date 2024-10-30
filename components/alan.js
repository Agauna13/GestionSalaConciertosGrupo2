const eventos = [
    { id: 1, nombreConcierto: 'Hard Rock Legends', fecha: '2024-11-02', artista: 'AC/DC, Iron Maiden', genero: 'Rock', lugar: 'Estadio Nacional' },
    { id: 2, nombreConcierto: 'Lady Gaga en concierto', fecha: '2024-11-20', artista: 'Lady Gaga', genero: 'Pop', lugar: 'Auditorio Municipal' },
    { id: 3, nombreConcierto: 'Louis Armstrong unearthed', fecha: '2024-10-29', artista: 'Louis Armstrong', genero: 'Jazz', lugar: 'Sala Principal' },
    { id: 4, nombreConcierto: 'Hell On Wheels', fecha: '2024-11-02', artista: 'Manowar', genero: 'Rock', lugar: 'Teatro Central' },
    { id: 5, nombreConcierto: 'The 3 tenors', fecha: '2025-01-01', artista: 'Luciano Pavarotti', genero: 'Clásica', lugar: 'Gran Salón' }
];

function programarRecordatorio(fechaConcierto, diasAntes) {
    let fecha = new Date(fechaConcierto);
    fecha.setDate(fecha.getDate() - diasAntes);
    return fecha.toISOString().split('T')[0];
}

function determinarTemporada(fechaConcierto) {
    let fecha = new Date(fechaConcierto);
    let mes = fecha.getMonth() + 1;

    if (mes >= 3 && mes <= 5) {
        return 'Primavera';
    } else if (mes >= 6 && mes <= 8) {
        return 'Verano';
    } else if (mes >= 9 && mes <= 11) {
        return 'Otoño';
    } else {
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


eventos.forEach(evento => {
    
    let recordatorio = programarRecordatorio(evento.fecha, 10);
    console.log(`Recordatorio para ${evento.nombreConcierto}: ${recordatorio}`);

    
    let temporada = determinarTemporada(evento.fecha);
    console.log(`Temporada para ${evento.nombreConcierto}: ${temporada}`);

    
    let diasAntelacion = calcularDiasAntelacion(evento.fecha, "2024-10-01");
    console.log(`Días de antelación para venta de tickets para ${evento.nombreConcierto}: ${diasAntelacion}`);
});


export { eventos };

