![Portada](/Imágenes/Portada_GDD.png)


# Índice
1. [Introducción](#1-introducción)
2. [Mecánicas de juego](#2-mecánicas-de-juego)
    1. [Cartas de ataque](#cartas-de-ataque)
        1. [Cartas de transporte](#cartas-de-transporte)   
        2. [Cartas de hogar](#cartas-de-hogar)
        3. [Cartas de trabajo](#cartas-de-trabajo)
        4. [Cartas sociales](#cartas-sociales)
        5. [Cartas de alimentación](#cartas-de-alimentación)
    2. [Cartas de defensa](#cartas-de-defensa)
        1. [Cartas de transporte](#cartas-de-transporte-1)   
        2. [Cartas de hogar](#cartas-de-hogar-1)
        3. [Cartas de trabajo](#cartas-de-trabajo-1)
        4. [Cartas sociales](#cartas-sociales-1)
        5. [Cartas de alimentación](#cartas-de-alimentación-1)
    3. [Cartas especiales](#cartas-especiales)
3. [Interfaz](#3-interfaz)
4. [Estética y arte](#4-estética-y-arte)
5. [Trasfondo e historia](#5-trasfondo-e-historia)
6. [Sonido y música](#6-sonido-y-música)
7. [Comercialización](#7-comercialización)


## 1. Introducción 
### Sobre Schadenfreude:
“Schadenfreude” es un videojuego de cartas competitivo en el que se enfrentan dos jugadores, en él, un jugador tiene como objetivo lograr que el otro jugador tenga un mal día, mientras el otro trata de alcanzar el final del día lo mejor que pueda.
### Plataformas:
El juego está pensado para jugarse directamente desde navegadores: Google Chrome y Mozilla Firefox, tanto desde un ordenador como desde un smartphone.
### Objetivos de diseño:
Al empezar el proyecto, y debido a las limitaciones que tiene diseñar un juego web, nos marcamos una serie de objetivos de diseño para con el juego:
1. El juego será un juego multijugador 1 vs 1. Desde SampleText594 creemos que las experiencias enfocadas en un jugador habitúan a funcionar mejor en plataformas de sobremesa, como PS4, XboxOne, Nintendo Switch o PC. 
2. El juego consistirá en partidas cortas. Ya que el juego está diseñado para jugar desde web, creemos que los juegos de esta índole suelen ser más interesantes si permiten empezar o terminar partida en cualquier momento.
3.	A pesar de que será un juego de cartas, no será uno al uso. El mercado de los videojuegos de cartas está saturado, gracias a esto hemos visto muchos juegos de cartas que no son sólo de cartas (Slay the spire, Hand of fate o Dicey dungeons, por ejemplo), por eso, creemos que puede resultar en una mejor experiencia el hacer un juego de cartas que no sea exactamente un juego de cartas.


## 2. Mecánicas de juego
### Partes clave del gameplay
En una partida de “Schadenfreude”, cada jugador toma un rol: el del jugador atacante y el del jugador defensor. El objetivo del jugador atacante es que el medidor de estrés del jugador defensor se llene antes de que se acabe el día, si esto ocurre, el jugador defensor “muere”, y se pasa a la otra ronda. El jugador defensor, por su parte, tiene como objetivo evitar esto y mantener su nivel de estrés lo más bajo posible.

Las partidas se dividen en dos rondas y ocho turnos; en una ronda uno de los dos jugadores será el atacante y el otro el defensor, y cuando acabe esa ronda, será al contrario. Cada ronda se divide en cuatro momentos del día (mañana, mediodía, tarde y noche), y cada uno de estos momentos del día se subdivide a su vez en dos turnos, siendo así cada partida dividida en dos rondas, cada una en ocho turnos.

Para aumentar y disminuir el nivel de estrés del jugador defensor, se utilizan las cartas. Estas se dividen en dos tipos, de ataque para el jugador atacante y de defensa para el jugador defensor, y en seis categorías (que se detallarán más adelante).

En cada turno primero jugará una carta, si así lo desea, el jugador atacante; si esto ocurre, el jugador defensor puede evitar el daño sufrido o, al menos, limitarlo, jugando una carta. Una vez ambos jugadores hayan jugado sus respectivas cartas, se suman los valores de las dos cartas, dando lugar a tres posibles situaciones:
* Balance positivo: si el resultado de la suma de ambas cartas es positivo, ese número se sumará al medidor de estrés.
* Balance neutro: si el resultado de la suma de ambas cartas es cero, no ocurre nada.
* Balance negativo: si el resultado de la suma de ambas cartas es negativo, ese número se restará al medidor de estrés, pudiendo tener un nivel de estrés mínimo de cero.

Si el nivel de estrés del jugador defensor alcanza el máximo, el jugador defensor “muere”, se acaba esa ronda, y se pasa a la siguiente ronda (si estamos en la primera) o se acaba la partida (si es la segunda ronda). Si el nivel no llega al máximo, la ronda se acabará al finalizar el octavo turno.

### Desarrollo de la partida
Al principio de la partida, cada jugador tendrá en su mano cinco cartas, y el resto estarán en su mazo. Una vez acabe la primera ronda, el jugador recibirá las correspondientes cartas según las que no haya usado en la primera ronda, por ejemplo: si el jugador de defensa usa la carta -3 de transporte, luego, cuando sea la segunda ronda, no tendrá en su mazo la carta +3 de transporte; ya que ya ha usado la carta de poder 3 de transporte. Las únicas cartas que no funcionan así son las cartas especiales, estas se reparten al principio de la partida y se mantienen en ambas rondas; si uso una de las tres cartas especiales que tengo en la primera ronda, en la segunda ronda tendré en el mazo las otras dos cartas especiales que tenía en la primera ronda y no usé.

Al principio de cada turno se roba una carta aleatoria del mazo. Y al acabar el turno podemos tener en la mano un máximo de seis cartas. Si acabamos el turno con seis cartas, al turno siguiente no se robará ninguna carta.

El jugador defensor podrá defenderse de la carta que utiliza en su contra en jugador de ataque usando una carta de la misma categoría, para ello, sabrá de que categoría es la carta que usa el rival viendo el dorso de la misma. Una vez ambos jugadores hayan usado una carta en ese turno, se suman los valores y el resultado se añade al medidor de estrés.

### Fin de la partida
La partida acabará al finalizar las dos rondas. Una vez acabe, se compararán los resultados de cada ronda para determinar qué jugador gana. Esto puede ocurrir de varias formas:
1. Ninguno de los dos jugadores, en su turno de defensa, logran llegar al final de su ronda. En este caso, el jugador defensor que haya durado más turnos es el ganador. Si ambos duran los mismos turnos, será un empate.
2. Sólo uno de los jugadores defensores llega al final de la ronda. En este caso, el jugador que haya llegado al final de la ronda gana.
3. Ambos jugadores defensores llegan al final de sus respectivas rondas. En este caso, el jugador que haya llegado al final con menos estrés acumulado gana. Si han llegado al final de sus rondas con el mismo nivel de estrés, será un empate.

### Las cartas
Como ya hemos dicho antes, las cartas se dividen en dos tipos y seis categorías. Pueden ser de ataque o de defensa, pudiéndose utilizar sólo en sus respectivos turnos. Y se categorizan en: alimentación, hogar, transporte, social, trabajo y especial.

Dependiendo de su categoría, las cartas se pueden jugar sólo en distintos momentos del día:
![Distribución Categorías](/Imágenes/distribucion_categorias.JPG)

Las cartas especiales son distintas al resto, sólo hay seis de ellas en total, frente a las diez que hay del resto de categorías y se pueden usar tanto en el turno de ataque como en el de defensa. Al inicio de cada partida se reparten tres a cada jugador y cuando sea la siguiente ronda, tendrás las cartas especiales que no hayas gastado en la ronda anterior.

### Cartas de ataque
#### Cartas de transporte
![](/Imágenes/Cartas%20Transporte/carta0.png)
![](/Imágenes/Cartas%20Transporte/carta1.png)
![](/Imágenes/Cartas%20Transporte/carta2.png)
![](/Imágenes/Cartas%20Transporte/carta3.png)
![](/Imágenes/Cartas%20Transporte/carta4.png)

#### Cartas de hogar
![](/Imágenes/Cartas%20Hogar/carta10.png)
![](/Imágenes/Cartas%20Hogar/carta11.png)
![](/Imágenes/Cartas%20Hogar/carta12.png)
![](/Imágenes/Cartas%20Hogar/carta13.png)
![](/Imágenes/Cartas%20Hogar/carta14.png)

#### Cartas de trabajo
![](/Imágenes/Cartas%20Trabajo/carta15.png)
![](/Imágenes/Cartas%20Trabajo/carta16.png)
![](/Imágenes/Cartas%20Trabajo/carta17.png)
![](/Imágenes/Cartas%20Trabajo/carta18.png)
![](/Imágenes/Cartas%20Trabajo/carta19.png)

#### Cartas sociales
![](/Imágenes/Cartas%20Social/carta21.png)
![](/Imágenes/Cartas%20Social/carta24.png)
![](/Imágenes/Cartas%20Social/carta20.png)
![](/Imágenes/Cartas%20Social/carta22.png)
![](/Imágenes/Cartas%20Social/carta23.png)

#### Cartas de alimentación
![](/Imágenes/Cartas%20Alimentacion/carta5.png)
![](/Imágenes/Cartas%20Alimentacion/carta6.png)
![](/Imágenes/Cartas%20Alimentacion/carta7.png)
![](/Imágenes/Cartas%20Alimentacion/carta8.png)
![](/Imágenes/Cartas%20Alimentacion/carta9.png)

### Cartas de defensa
#### Cartas de transporte
![](/Imágenes/Cartas%20Transporte/carta25.png)
![](/Imágenes/Cartas%20Transporte/carta26.png)
![](/Imágenes/Cartas%20Transporte/carta27.png)
![](/Imágenes/Cartas%20Transporte/carta28.png)
![](/Imágenes/Cartas%20Transporte/carta29.png)

#### Cartas de hogar
![](/Imágenes/Cartas%20Hogar/carta35.png)
![](/Imágenes/Cartas%20Hogar/carta36.png)
![](/Imágenes/Cartas%20Hogar/carta37.png)
![](/Imágenes/Cartas%20Hogar/carta38.png)
![](/Imágenes/Cartas%20Hogar/carta39.png)

#### Cartas de trabajo
![](/Imágenes/Cartas%20Trabajo/carta40.png)
![](/Imágenes/Cartas%20Trabajo/carta41.png)
![](/Imágenes/Cartas%20Trabajo/carta42.png)
![](/Imágenes/Cartas%20Trabajo/carta43.png)
![](/Imágenes/Cartas%20Trabajo/carta44.png)

#### Cartas sociales
![](/Imágenes/Cartas%20Social/carta45.png)
![](/Imágenes/Cartas%20Social/carta46.png)
![](/Imágenes/Cartas%20Social/carta47.png)
![](/Imágenes/Cartas%20Social/carta48.png)
![](/Imágenes/Cartas%20Social/carta49.png)

#### Cartas de alimentación
![](/Imágenes/Cartas%20Alimentacion/carta30.png)
![](/Imágenes/Cartas%20Alimentacion/carta31.png)
![](/Imágenes/Cartas%20Alimentacion/carta32.png)
![](/Imágenes/Cartas%20Alimentacion/carta33.png)
![](/Imágenes/Cartas%20Alimentacion/carta34.png)

### Cartas especiales
![](/Imágenes/Cartas%20Especiales/carta50.png)
![](/Imágenes/Cartas%20Especiales/carta51a.png)
![](/Imágenes/Cartas%20Especiales/carta51b.png)
![](/Imágenes/Cartas%20Especiales/carta52a.png)
![](/Imágenes/Cartas%20Especiales/carta52b.png)
![](/Imágenes/Cartas%20Especiales/carta53a.png)
![](/Imágenes/Cartas%20Especiales/carta53b.png)
![](/Imágenes/Cartas%20Especiales/carta54a.png)
![](/Imágenes/Cartas%20Especiales/carta54b.png)
![](/Imágenes/Cartas%20Especiales/carta55a.png)
![](/Imágenes/Cartas%20Especiales/carta55b.png)

La carta de repetición electoral es una carta única que no suma ni resta puntos de estrés, simplemente hace que inmediatamente la partida acabe en empate y se tenga que volver a empezar de cero.

### Sinergias
Si en un mismo turno se usan determinadas cartas de la misma categoría, puede darse una sinergia. Estas sinergias otorgan una bonificación o penalización al estrés. Las cartas que tienen sinergias son: 

#### Cartas de transporte
 “VTC – vas tarde capitalista” y “Taxi”: -2 al estrés
“Pinchazo en la rodilla” y “Eres runner”: +2 al estrés

#### Cartas de hogar
“Fuerte discusión” y “4:20”: -2 al estrés
“Ajo y agua” y “Mis adorables vecinos”: +2 al estrés

#### Cartas de trabajo
“Puntos de exp” y “Recién graduado”: -2 al estrés
“Eres autónomo” y “Tu compañero te cubre”: +2 al estrés

#### Cartas sociales
“¡A quemar la pista!” y “Tremendo cumbión”: -3 al estrés
“Espectacular tiempo” y “Viejoven”: +3 al estrés

#### Cartas de alimentación
“Nevera vacía” y “Los tuppers”: -2 al estrés
“Si comes durum, cagas blandum” y “Aquarius”: +4 al estrés

## 3. Interfaz
### Diagrama de flujo de estados
![](/Imágenes/Diagrama.png)

### Ejemplos de interfaz *in-game*
Selección de idioma
![](/Imágenes/Interfaz/sel_idioma.PNG)

Menú en español
![](/Imágenes/Interfaz/menu.JPG)

Menú en inglés
![](/Imágenes/Interfaz/menu_ingles.JPG)

Pantalla de carga
![](/Imágenes/Interfaz/buscando.JPG)

Créditos
![](/Imágenes/Interfaz/creditos.JPG)

Juego
![](/Imágenes/Interfaz/juego.PNG)

Ajustes
![](/Imágenes/Interfaz/volumen.PNG)

Tutorial
![](/Imágenes/Interfaz/tutorial1.JPG)

## 4. Estética y arte
El apartado artístico del juego, como hemos ido exponiendo en los apartados anteriores, es uno que tiene la simpleza y el minimalismo como máxima. Esto se debe a que durante la fase de preproducción del videojuego salieron a la luz varias cuestiones respecto al apartado estético:

* •	¿Cómo hacemos para integrar el estilo de dibujo de tres artistas diferentes y que quede todo relativamente homogéneo?

* •	¿Cómo hacemos para que los jugadores entiendan cómo funciona el juego en el menor tiempo posible y no se confundan o lo entiendan mal?

* •	¿Cómo lo hacemos atractivo visualmente para que llame la atención y la gente decida probarlo?

Con un apartado artístico sencillo, podemos conseguir que los diferentes artistas lleguen a un estilo común, homogéneo y, aun así, distintivo. También, al limitar la cantidad de información visual que recibe, facilitamos a los jugadores la comprensión de las mecánicas del juego y el funcionamiento de este. Y, por último, utilizando la simpleza y el minimalismo como una manera de diferenciarnos del resto de videojuegos de cartas, por lo general con dibujos y estéticas bastante más complejas y detalladas (*Hearthstone* o *Magic: the Gathering*, por ejemplo), hacemos que el título resulte fresco visualmente, y así, más atrayente para los posibles jugadores.

Además de esto, para también facilitar la rápida comprensión, las cartas, dependiendo de su categoría, son de un color en específico: transporte, rojas; hogar, amarillas; trabajo, azules; sociales, naranjas; alimentación, verdes; y especiales, moradas. De esta forma, con un rápido vistazo, el jugador entiende de que cartas dispone y puede comenzar a planear inmediatamente su estrategia para el turno.

## 5. Trasfondo e historia
La trama de “*Schadenfreude*” es bastante sencilla: es el día a día de una persona cualquiera a la que, desde que se levanta hasta que se acuesta, la vida no para de tratar de arruinarle la jornada.

Siendo este el trasfondo del videojuego, los roles que deben tomar los dos jugadores están claros: uno debe de ser esa persona que trata de llegar al final del día lo más saludable, a nivel mental, posible; y el otro debe de encarnar esa idea de la vida intentando por todos los medios estropearle el día. Se podría decir que, a nivel de historia, el juego funciona como una especie de *Sims* con un giro canalla, en el que el primer jugador es uno de estos seres virtuales, mientras que el segundo encarna a ese tipo de jugador de *Los Sims* que se divierte haciéndoselo pasar mal a sus personajes.

Aún con todo, el videojuego no es uno narrativo, ni pretende serlo. Con este breve trasfondo lo único que se pretende es dar la suficiente información a los jugadores para que no les sea complicado entrar en el juego. Es sencillo, cuando se es el jugador defensivo, entenderlo como si fueras tú mismo teniendo un mal día; prácticamente ninguna situación es demasiado inverosímil (exceptuando las cartas especiales), y todos hemos sufrido alguna de ellas. Y siendo el jugador atacante, resulta divertido ponerse en el otro lado, en los zapatos de “esa persona” que no deja de fastidiar el día a otro… 

En definitiva, la historia y trasfondo en “*Schadenfreude*” funciona como una breve trama que sirve, sobre todo, para dar contexto a las acciones de los jugadores. Esta es, además, sencilla y casi costumbrista, para que este contexto del título resulte lo menos ajeno posible y se entre rápidamente en la dinámica propuesta.

## 6. Sonido y música
### Efectos de sonido
Debido a que “*Schadenfreude*” es un juego de cartas, no requiere demasiados efectos de sonido, por ello hemos utilizado un sonido de movimiento de cartas descargado de una librería gratuita, que se reproducirá cada vez que se juegue una carta.

### BSO
El punto de partida para crear la BSO de “*Schadenfreude*” fue el siguiente: “música de ascensor pero con algún pico de tensión”.

A partir de dicha idea se han creado dos temas, uno para el menú principal y otro para el juego en sí.

El tema del menú es un poco más relajado ya que pretende hacer que el jugador se encuentre cómodo mientras espera para jugar una partida o mientras navega por los submenús de créditos o ajustes.

El tema que se escucha durante la partida es un poco más frenético puesto que debe canalizar al jugador una leve sensación de tensión o de estrés ya que en eso consiste nuestro videojuego, en aumentar el estrés del rival.

Para la banda sonora nos hemos inspirado en progresiones de acordes típicas de música para casino pero con un toque vintage. Recuerda al sonido de consolas de los 2000, por lo que hemos usado un emulador de sintetizador y un keyboard de la época para reproducir los sonidos. De la partitura de progresiones hemos creado un archivo .midi con el que hemos podido producir el archivo de audio usando el software ABLETON LIVE 10. 

## 7. Comercialización
### Audiencia *target*
Con este título queremos llegar, en especial, a la audiencia casual de gente entre 15 y 30 años. En *SampleText594* consideramos que dadas las características del videojuego: ser un juego de navegador, consistir en partidas cortas o ser un juego sencillo; el público casual es el objetivo perfecto. Además, dada la naturaleza de las bromas de las cartas, la gente de entre 15 y 30 años es el segmento de audiencia con más probabilidades de entenderlas y de divertirse con ellas.

### Diferenciación con la competencia
El mercado de videojuegos de cartas es uno complejo. Dada la cantidad de horas que se suele necesitar para hacerse con las mecánicas de estos títulos, hay juegos muy potentes, que llevan ya tiempo asentados y contra los que es extremadamente difícil competir: *Hearthstone* o *Magic*, por ejemplo.

A parte de esto, desde hace unos años, están surgiendo un nuevo tipo de juegos de cartas que no funcionan como juegos de cartas al uso, son juegos de acción y aventura que utilizan las cartas como una mecánica de combate: *Slay the Spire* o *Dicey Dungeons*, entre otros.

Con estos dos estilos de juegos de cartas en mente, en “*Schadenfreude*” buscamos combinarlos de alguna manera. De esa forma surgió la idea para este videojuego de cartas que tomara ideas de ambas corrientes y a la vez tuviera sus propias influencias y su propia voz. Así, tomamos influencias de juegos de mesa como *Munchkin*, y de videojuegos de simulación de vida como *Los Sims*.  De esta manera, “*Schadenfreude*” tiene las suficientes similitudes con juegos de cartas más establecidos y populares como para transmitir un sentimiento de familiaridad, a la vez que tiene aspectos novedosos que lo diferencian del resto de títulos de este estilo y que hacen que ofrezca una experiencia distinta y atrayente.

### Monetización y modelo de negocio
Siguiendo el modelo canvas: 
![](/Imágenes/Modelo_canvas.jpg)

Profundizando un poco más en la monetización, las fuentes de ingreso que tendrá “*Schadenfreude*”, serán la publicidad que aparecerá en la página del videojuego, los patrocinadores que deseen apoyar el título, y las expansiones.

Estas expansiones serán barajas nuevas de cartas que aportarán variedad al título. Pueden ser temáticas: *Halloween*, por ejemplo; o ampliaciones más clásicas: más cartas de las mismas categorías y del mismo tipo que ya hay.

### Modelo de negocio durante dos años
“*Schadenfreude*” seguirá un modelo de negocio de tipo Freemium. El juego base será gratuito, pero a lo largo de los 2 años se irán lanzando expansiones.

Habrá 2 tipos de expansiones: gratuitas y de pago.

Las expansiones gratuitas consistirán en un par de cartas nuevas que se introducirán en el juego cada quince días, y que no supondrán ningún gasto para el jugador. El objetivo de este tipo de expansión es incentivar al jugador para que entre al juego con asiduidad para descubrir las nuevas cartas.

Las expansiones de pago se introducirán cada seis meses, haciendo un total de cuatro expansiones durante los dos años. Consistirán en dos nuevas categorías de cartas, que no tendrán ninguna relación con las categorías ya existentes en el juego base. Además, también se incluirán nuevas cartas, el número dependerá de la expansión en concreto, para las categorías existentes. Cada expansión saldrá a la venta a un precio de quince euros.

Después de la salida de la primera expansión el juego emparejará a los jugadores de modo que solo jueguen entre sí aquellos que posean el mismo número de expansiones.

Las expansiones supondrán una buena manera de obtener ingresos, pero no la única. En los dos años siguientes a la salida del juego el plan es que sigamos obteniendo ingresos de la publicidad que aparece en la página que alojará el juego.

Por último, otra posible forma de obtener ingresos sería a partir de patrocinadores que pagasen para que su marca saliese en el juego, ya sea en el reverso de las cartas o con una categoría exclusiva relacionada con el producto que venden.
