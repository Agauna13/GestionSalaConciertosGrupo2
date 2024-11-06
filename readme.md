# Gestión sala conciertos. Grupo 2 #

### Autores: Adrián García, Pedro Capó, Ruben Arjona y Alan Adamson ###

## Principales Funcionalidades

Al haber interpretado la intención del proyecto como un software de gestión de ventas y no de ventas en sí, nos hemos limitado a jugar con las funcionalidades propuestas en el enunciado para mostrar (en la medida que el tiempo nos ha permitido) las ganancias, el reparto entre la sala de conciertos y los artistas entre otros datos de posible utilidad para llevar un registro de los conciertos y sus datos.

Para que se entienda mejor, explicaremos uno a uno los objetos propios de Javascript que se pedían en el enunciado e iremos viendo cómo el objeto constructor de conciertos (el 'principal' en nuestro proyecto) hace uso de cada uno de ellos.

## Objeto Date()

Para nuestro proyecto sólo han hecho falta 2 funciones con el objeto Date, en un principio teníamos diversas funciones con este objeto, pero por falta de necesidad de cara a la utilidad de las mismas, las hemos ido eliminando.

La primera función que nos encontramos es la que determina la temporada en la que va a ser llevado a cabo el concierto, que recoge la fecha en la que será llevado a cabo el concierto y mediante los getters getDate() y getMonth(), nos devuelve la estación del año que determina la temporada del concierto.

La segunda función que hemos utilizado con el objeto Date() nos ayuda a calcular los días restantes hasta la fecha del concierto, ésta recoje la fecha del concierto y al restarle la fecha del día presente, que obtenemos creando un objeto date, nos da una diferencia de días que hay debemos calcular redondeando hacía el entero más cercano por encima el cociente entre la diferencia de días en milisegundos (Que es como javascript cuenta el tiempo en general) entre la cantidad de milisegundos en un día (86.4M).


## Objeto String()

En el caso del objeto string, hemos hecho uso de 4 funciones. La primera de ellas nos ayuda a dar formato al nombre del concierto (hemos optado por razones de simplicidad llamar a los conciertos por defecto Concierto 1, 2, 3 etc), la función recibe como parámetro una variable de tipo String, comprueba que lo que está recibiendo es en efecto una variable de tal tipo y luego le da formato, primero separando cada palabra de la string y con un for recorriendolo, nos pone mayúsculas en la primera letra de cada palabra para finalmente convertir el resto de la palabra a minúsculas con slice() y toLowerCase().

Nuestra segunda función nos formatea de manera similar al de la anterior funcion el nombre del artista.

La tercera función nos es la más interesante, ésta recibe como parámetros el nombre del concierto, del artista y finalmente la fecha del concierto para, de una manera sencilla, entregarnos una pequeña descripción no tan 'robótica' de qué concierto es, el artista y su fecha.


## Objeto Math

A pesar de que sólo hemos implementado 3 funciones directamente relacionadas con el objeto Math, hemos hecho uso de éste objeto en todo el programa. Las 2 funciones que hacen un uso directo del objeto Math, se encargan de hacer los cálculos de la división de ingresos, La primera recoge el sumatorio de los ingresos generados por el concierto y los multiplica por el porcentaje que se lleva el artista y aplica el objeto Math para redondear hasta 2 decimales la porción que se lleva el artista (Math.round(cantidadArtista * 100) / 100;). La segunda, mediante una estructura de control, recoge un array de tickets y nos calcula el precio medio de las entradas teniendo en cuenta el descuento aplicado a cada ticket (ya que va variando según se meten los tickets al sistema, es una forma rudimentaria de hacer un sistema de 'rates' o precios según temporada u ocupación). La tercera nos ayuda a calcular los ingresos totales cogiendo como parametros el precio de cada ticket y el número de tickets vendidos para, con Math.round(), devolvernos el total redondeado a la cifra más cercana.

En el resto del código, como hemos comentado en el Objeto Date, podemos observar Math.ceil para calcular los días al entero más cercano por encima. En la función que nos crea los objetos 'Ticket' tenemos un caso particular (en el contexto de nuestro programa) de uso de Math.floor(), estamos haciendo uso de éste método de Math para generar un entero entre 0 y 19 redondeado a la cifra más cercana por debajo de ésta manera 'Math.floor(Math.random() * 20).


## Array Objeto

Los conciertos que salen de nuestro constructor, son almacenados en un Array de objetos llamado Lista Conciertos (Línea 1). Éstos guardan diversas propiedades, con las que iremos trabajando para obtener la información esperada, como un id, un nombre, el artista, género, fecha, el precio de las entradas y la lista de tickets creados para cada concierto. Ésta última propiedad nos guarda otro array de objetos para almacenar la lista de tickets con sus propiedades. A la hora de extraer, operar y mostrar la información de los conciertos y sus tickets, la función renderizarConciertos() (lineas 131-160) itera la lista de conciertos haciendo llamadas a las diferentes funciones antes mencionadas en las secciones dedicadas a cada objeto.

Para renderizar los tickets, se accede al concierto seleccionado en el 'select' del formulario y se recorre su propiedad/array listaTickets para obtener la info de cuantos tickets hayan sido creados.

Nótese que para crear tickets de ejemplo hemos utilizado una función que añade x tickets con preecio y descuentos aleatorios para que, a la hora de la presentación no haya que añadir tickets o conciertos manualmente y así tener datos con los que jugar, aunque estos datos sean totalmente aleatorios y se creen duplicados.

