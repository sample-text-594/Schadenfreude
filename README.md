![Portada](/Imágenes/Portada_GDD.png)


# Índice
1. [Introducción](#1introducción)
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
    3. Cartas especiales
3. Interfaz
4. Estética y arte
5. Trasfondo e historia
6. Sonido y música
7. Comercialización


## 1.Introducción 
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

Al principio de cada turno se roba una carta aleatoria del mazo. Y al acabar el turno podemos tener en la mano u máximo de cinco cartas, teniendo que descartar si tuviéramos más.

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
