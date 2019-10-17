![](media/38d54f7d87aa819b42c3e63c03e7080f.png)

![](media/6aef2b2d1be701744e8d53ee5cabeb82.png)

*ÍNDICE*

[./media/image2.png](./media/image2.png)
========================================

INTRODUCCIÓN

*Sobre Schadenfreude*

“*Schadenfreude*” es un videojuego de cartas competitivo en el que se enfrentan
dos jugadores, en él, un jugador tiene como objetivo lograr que el otro jugador
tenga un mal día, mientras el otro trata de alcanzar el final del día lo mejor
que pueda.

*Plataformas*

El juego está pensado para jugarse directamente desde navegadores: Google Chrome
y Mozilla Firefox, tanto desde un ordenador como desde un *smartphone*.

*Objetivos de diseño*

Al empezar el proyecto, y debido a las limitaciones que tiene diseñar un juego
web, nos marcamos una serie de objetivos de diseño para con el juego:

1.  **El juego será un juego multijugador 1 vs 1**. Desde *SampleText594*
    creemos que las experiencias enfocadas en un jugador habitúan a funcionar
    mejor en plataformas de sobremesa, como *PS4*, *XboxOne*, *Nintendo Switch*
    o *PC*.

2.  **El juego consistirá en partidas cortas**. Ya que el juego está diseñado
    para jugar desde web, creemos que los juegos de esta índole suelen ser más
    interesantes si permiten empezar o terminar partida en cualquier momento.

3.  **A pesar de que será un juego de cartas, no será uno al uso**. El mercado
    de los videojuegos de cartas está saturado, gracias a esto hemos visto
    muchos juegos de cartas que no son *sólo* de cartas (*Slay the spire*, *Hand
    of fate* o *Dicey dungeons*, por ejemplo), por eso, creemos que puede
    resultar en una mejor experiencia el hacer un juego de cartas que no sea
    exactamente un juego de cartas.

[./media/image2.png](./media/image2.png)
========================================

MECÁNICAS DE JUEGO

*Partes clave del gameplay*

En una partida de “Schadenfreude”, cada jugador toma un rol: el del jugador
atacante y el del jugador defensor. El objetivo del jugador atacante es que el
medidor de estrés del jugador defensor se llene antes de que se acabe el día, si
esto ocurre, el jugador defensor “muere”, y se pasa a la otra ronda. El jugador
defensor, por su parte, tiene como objetivo evitar esto y mantener su nivel de
estrés lo más bajo posible.

Las partidas se dividen en dos rondas y ocho turnos; en una ronda uno de los dos
jugadores será el atacante y el otro el defensor, y cuando acabe esa ronda, será
al contrario. Cada ronda se divide en cuatro momentos del día (mañana, mediodía,
tarde y noche), y cada uno de estos momentos del día se subdivide a su vez en
dos turnos, siendo así cada partida dividida en dos rondas, cada una en ocho
turnos.

Para aumentar y disminuir el nivel de estrés del jugador defensor, se utilizan
las cartas. Estas se dividen en dos tipos, de ataque para el jugador atacante y
de defensa para el jugador defensor, y en seis categorías (que se detallarán más
adelante).

En cada turno primero jugará una carta, si así lo desea, el jugador atacante; si
esto ocurre, el jugador defensor puede evitar el daño sufrido o, al menos,
limitarlo, jugando una carta. Una vez ambos jugadores hayan jugado sus
respectivas cartas, se suman los valores de las dos cartas, dando lugar a tres
posibles situaciones:

-   Balance positivo: si el resultado de la suma de ambas cartas es positivo,
    ese número se sumará al medidor de estrés.

-   Balance neutro: si el resultado de la suma de ambas cartas es cero, no
    ocurre nada.

-   Balance negativo: si el resultado de la suma de ambas cartas es negativo,
    ese número se restará al medidor de estrés, pudiendo tener un nivel de
    estrés mínimo de cero.

Si el nivel de estrés del jugador defensor alcanza el máximo, el jugador
defensor “muere”, se acaba esa ronda, y se pasa a la siguiente ronda (si estamos
en la primera) o se acaba la partida (si es la segunda ronda). Si el nivel no
llega al máximo, la ronda se acabará al finalizar el octavo turno.

![](media/2f9bf0d00041e707894ab772e20276c8.png)

*Desarrollo de la partida*

Al principio de la partida, cada jugador tendrá en su mano cinco cartas, y el
resto estarán en su mazo. Una vez acabe la primera ronda, el jugador recibirá
las correspondientes cartas según las que no haya usado en la primera ronda, por
ejemplo: si el jugador de defensa usa la carta -3 de transporte, luego, cuando
sea la segunda ronda, no tendrá en su mazo la carta +3 de transporte; ya que ya
ha usado la carta de poder 3 de transporte. Las únicas cartas que no funcionan
así son las cartas especiales, estas se reparten al principio de la partida y se
mantienen en ambas rondas; si uso una de las tres cartas especiales que tengo en
la primera ronda, en la segunda ronda tendré en el mazo las otras dos cartas
especiales que tenía en la primera ronda y no usé.

Al principio de cada turno se roba una carta aleatoria del mazo. Y al acabar el
turno podemos tener en la mano u máximo de cinco cartas, teniendo que descartar
si tuviéramos más.

El jugador defensor podrá defenderse de la carta que utiliza en su contra en
jugador de ataque usando una carta de la misma categoría, para ello, sabrá de
que categoría es la carta que usa el rival viendo el dorso de la misma. Una vez
ambos jugadores hayan usado una carta en ese turno, se suman los valores y el
resultado se añade al medidor de estrés.

*Fin de la partida*

La partida acabará al finalizar las dos rondas. Una vez acabe, se compararán los
resultados de cada ronda para determinar qué jugador gana. Esto puede ocurrir de
varias formas:

1.  Ninguno de los dos jugadores, en su turno de defensa, logran llegar al final
    de su ronda. En este caso, el jugador defensor que haya durado más turnos es
    el ganador. Si ambos duran los mismos turnos, será un empate.

2.  Sólo uno de los jugadores defensores llega al final de la ronda. En este
    caso, el jugador que haya llegado al final de la ronda gana.

3.  Ambos jugadores defensores llegan al final de sus respectivas rondas. En
    este caso, el jugador que haya llegado al final con

    ![](media/2f9bf0d00041e707894ab772e20276c8.png)

    menos estrés acumulado gana. Si han llegado al final de sus rondas con el
    mismo nivel de estrés, será un empate.

*Las cartas*

Como ya hemos dicho antes, las cartas se dividen en dos tipos y seis categorías.
Pueden ser de ataque o de defensa, pudiéndose utilizar sólo en sus respectivos
turnos. Y se categorizan en: alimentación, hogar, transporte, social, trabajo y
especial.

Dependiendo de su categoría, las cartas se pueden jugar sólo en distintos
momentos del día:

**Distribución de categorías por períodos**

|          | Transporte | Hogar | Trabajo | Social | Alimentación | Especial |
|----------|------------|-------|---------|--------|--------------|----------|
| Mañana   | X          | X     |         |        |              | X        |
| Mediodía |            |       | X       |        | X            | X        |
| Tarde    | X          |       | X       | X      |              | X        |
| Noche    |            | X     |         | X      | X            | X        |

Las cartas especiales son distintas al resto, sólo hay seis de ellas en total,
frente a las diez que hay del resto de categorías y se pueden usar tanto en el
turno de ataque como en el de defensa. Al inicio de cada partida se reparten
tres a cada jugador y cuando sea la siguiente ronda, tendrás las cartas
especiales que no hayas gastado en la ronda anterior.

[./media/image3.png](./media/image3.png)
----------------------------------------

Cartas de ataque

### Cartas de transporte

![](media/330b5e91c7414c853925ab37f12ad8ab.png)

![](media/7afc433b81c8561360f8aceaf6ad0de2.png)

![](media/6cc61e0d16211468b9c42db436088c74.png)

![](media/e1aa4f0d1c63eeba42f4263d7924b66c.png)

![](media/07d64d4796d06fc67476357cdcb94d76.png)

### [./media/image3.png](./media/image3.png)

Cartas de hogar

![](media/d58c0f89dff6aa39b4ddf1d08d84f8cd.png)

![](media/53e1806062522bfd81863f06033df9f2.png)

![](media/4231b726355c0c009fc78e94059e9549.png)

![](media/d093092734d40420a7130d1f1c023d31.png)

![](media/b48e6f5cff89377971f865a7dd5701ee.png)

### [./media/image3.png](./media/image3.png)

Cartas de trabajo

![](media/160bf91835b75eab504f16fe7f00f47b.png)

![](media/453e82ddc34d7faa5662d4894e09494c.png)

![](media/b335deb5d153e794de3559aa22133955.png)

![](media/76e3086b63ce63c420ddeda2442cd08f.png)

![](media/2e6444f54be95ca3b5851b93cd24aae3.png)

### [./media/image3.png](./media/image3.png)

C**artas sociales**

![](media/a79916e523e940e89d5c2cdecaecc4dc.png)

![](media/e71cd67778daa793ee99f037fe4e6a64.png)

![](media/7d926013d990a762b1e8ae1a4ae49a7f.png)

![](media/8a48f892327ae51624a255bf70828eba.png)

![](media/1dfa9903d9aa5943f96a463d4650361a.png)

### [./media/image3.png](./media/image3.png)

![](media/b3dbe70745973478728bab9df9028ec9.png)

Cartas de alimentación

![](media/3c043058326fecd7dd07bb62133ee726.png)

![](media/526b78800b8d9f9aeb87b5a8f77746e1.png)

![](media/dcd11cc25709a053eac6b1ec4271248b.png)

![](media/a483f47e15521de9072584722317ba82.png)

[./media/image3.png](./media/image3.png)
----------------------------------------

Cartas de defensa

### Cartas de transporte

![](media/b796b90e6d16f4b9c6e25614c0990bf9.png)

![](media/ac18452d0f94e4f952148ec3e4f205f5.png)

![](media/474902f8f12417f6d6da073a5385e164.png)

![](media/64e31bdcaeea01cd661b896f7fcdbe27.png)

![](media/c81e778a6f3e1dfc3ad70f1b86e764fb.png)

### [./media/image3.png](./media/image3.png)

Cartas de hogar

![](media/acb1be5e7b57e8f2e94184e08dd033ee.png)

![](media/9f76b1b3d23db9236dee16f8e6e0870b.png)

![](media/5126eb3859219ffb666d534438fadb85.png)

![](media/a5a6f3477ed518c127cd6737298d5996.png)

![](media/e3080a6080f112e3f97c2431f861ce93.png)

### [./media/image3.png](./media/image3.png)

C**artas de trabajo**

![](media/64386b6f8b1e13bf6a14d91d8a67e728.png)

![](media/718297f703b136dfae81bda43aa10d0a.png)

![](media/09a34524e56ad19c04298dd08242b03c.png)

![](media/d96641732a9dba19e9280634b641a326.png)

![](media/7c7fb1d3fa27f6e4226ae56ba7dc6ea9.png)

### [./media/image3.png](./media/image3.png)

C**artas sociales**

![](media/9db1eb41c582d9d48decb291e4782993.png)

![](media/2ee814b297deb89e1588d051e9f12c86.png)

![](media/12929d1a147b466a9553db315af2dd38.png)

![](media/f349a978323f3261295548f20f6ea109.png)

![](media/2d9888bd779d9c3ea7941850fb79ba90.png)

### [./media/image3.png](./media/image3.png)

C**artas de alimentación**

![](media/39482294309192c3ab6e03147c0d3bdf.png)

![](media/6984a8e8c968a220463adb8ba8c4034a.png)

![](media/211d2fa9ce5a722eb487ecf31e0d36bd.png)

![](media/0707aa936ef9baa0700edd43319919ca.png)

![](media/2abb0f4fafd8731edbc96c304d1483c7.png)

[./media/image54.png](./media/image54.png)
------------------------------------------

![](media/3f8de0e04400386a54995dbf0f8a6d93.png)

![](media/2f9bf0d00041e707894ab772e20276c8.png)

C**artas especiales**

![](media/6283d50b8e83832c3be2281902ed5b58.png)

![](media/00e6dec0e939e02729b6274ea354f870.png)

![](media/89cd3195c2d6020608c6b9fa8933a208.png)

![](media/c30f3def38c5712f1d44b6661506c89a.png)

![](media/1bf5a7384a54c99d468c9625c1199196.png)

![](media/5c033c62b98454c97c8b5aa4be19c23c.png)

![](media/cd0c19db4ceb1891be0cbfbc18da4fb3.png)

![](media/2a2cf4fcf111d1e043454d89d6a9867b.png)

![](media/3a90913892161ef06e0ba1956d882b13.png)

![](media/2f9bf0d00041e707894ab772e20276c8.png)

La carta de repetición electoral es una carta única que no suma ni resta puntos
de estrés, simplemente refresca la página, cancela la partida y te devuelve al
menú.

*Sinergias*

Si en un mismo turno se usan determinadas cartas de la misma categoría, puede
darse una sinergia. Estas sinergias otorgan una bonificación o penalización al
estrés. Las cartas que tienen sinergias son:

*Cartas de transporte*

“VTC – vas tarde capitalista” y “Taxi”: -2 al estrés

“Pinchazo en la rodilla” y “Eres runner”: +2 al estrés

*Cartas de hogar*

“Fuerte discusión” y “4:20”: -2 al estrés

“Ajo y agua” y “Mis adorables vecinos”: +2 al estrés

*Cartas de trabajo*

“Puntos de exp” y “Recién graduado”: -2 al estrés

“Eres autónomo” y “Tu compañero te cubre”: +2 al estrés

*Cartas sociales*

“¡A quemar la pista!” y “Tremendo cumbión”: -3 al estrés

“Espectacular tiempo” y “Viejoven”: +3 al estrés

*Cartas de alimentación*

“Nevera vacía” y “Los tuppers”: -2 al estrés

“Si comes durum, cagas blandum” y “Aquarius”: +4 al estrés

[./media/image2.png](./media/image2.png)
========================================

INTERFAZ

*Diagrama de flujo de estados*

![](media/3146a5a4c7de5a01b8ddea69e8ed89e9.png)

![](media/2f9bf0d00041e707894ab772e20276c8.png)

*Ejemplos de interfaz in-game*

![](media/ab1e12e5ad6a7254c62808c5e0d93b43.jpg)

![](media/e107a8d0cc20033746930e9161431944.png)

Selección de idioma Menú en español

![](media/167f464302dc7c69a46f8a326efb940d.jpg)

![](media/0f702a8caca2f03a4f948d39adbd55f0.jpg)

Menú en inglés Pantalla de carga

![](media/eb73f1e7c53fbbdaa5c8715574b7f83c.png)

![](media/563ff9ad6053c0f1bf8edc9f40ca83d2.jpg)

Créditos Juego

![](media/b69c90b8138299e7f20b523b88b0d762.jpg)

![](media/0cd32cf5817b75106458e237a80ffef9.png)

Ajustes Tutorial

[./media/image2.png](./media/image2.png)
========================================

ESTÉTICA Y ARTE

El apartado artístico del juego, como hemos ido exponiendo en los apartados
anteriores, es uno que tiene la simpleza y el minimalismo como máxima. Esto se
debe a que durante la fase de preproducción del videojuego salieron a la luz
varias cuestiones respecto al apartado estético:

-   ¿Cómo hacemos para integrar el estilo de dibujo de tres artistas diferentes
    y que quede todo relativamente homogéneo?

-   ¿Cómo hacemos para que los jugadores entiendan como funciona el juego en el
    menor tiempo posible y no se confundan o lo entiendan mal?

-   ¿Cómo lo hacemos atractivo visualmente para que llame la atención y la gente
    decida probarlo?

Con un apartado artístico sencillo, podemos conseguir que los diferentes
artistas lleguen a un estilo común, homogéneo y, aun así, distintivo. También,
al limitar la cantidad de información visual que recibe, facilitamos a los
jugadores la comprensión de las mecánicas del juego y el funcionamiento de este.
Y, por último, utilizando la simpleza y el minimalismo como una manera de
diferenciarnos del resto de videojuegos de cartas, por lo general con dibujos y
estéticas bastante más complejas y detalladas (*Hearthstone* o *Magic: the
Gathering*, por ejemplo), hacemos que el título resulte fresco visualmente, y
así, más atrayente para los posibles jugadores.

Además de esto, para también facilitar la rápida comprensión, las cartas,
dependiendo de su categoría, son de un color en específico: transporte, rojas;
hogar, amarillas; trabajo, azules; sociales, naranjas; alimentación, verdes; y
especiales, moradas. De esta forma, con un rápido vistazo, el jugador entiende
de que cartas dispone y puede comenzar a planear inmediatamente su estrategia
para el turno.

[./media/image2.png](./media/image2.png)
========================================

TRASFONDO E HISTORIA

La trama de “*Schadenfreude”* es bastante sencilla: es el día a día de una
persona cualquiera a la que, desde que se levanta hasta que se acuesta, la vida
no para de tratar de arruinarle la jornada.

Siendo este el trasfondo del videojuego, los roles que deben tomar los dos
jugadores están claros: uno debe de ser esa persona que trata de llegar al final
del día lo más saludable, a nivel mental, posible; y el otro debe de encarnar
esa idea de la vida intentando por todos los medios estropearle el día. Se
podría decir que, a nivel de historia, el juego funciona como una especie de
*Sims* con un giro canalla, en el que el primer jugador es uno de estos seres
virtuales, mientras que el segundo encarna a ese tipo de jugador de *Los Sims*
que se divierte haciéndoselo pasar mal a sus personajes.

Aún con todo, el videojuego no es uno narrativo, ni pretende serlo. Con este
breve trasfondo lo único que se pretende es dar la suficiente información a los
jugadores para que no les sea complicado entrar en el juego. Es sencillo, cuando
se es el jugador defensivo, entenderlo como si fueras tú mismo teniendo un mal
día; prácticamente ninguna situación es demasiado inverosímil (exceptuando las
cartas especiales), y todos hemos sufrido alguna de ellas. Y siendo el jugador
atacante, resulta divertido ponerse en el otro lado, en los zapatos de “esa
persona” que no deja de fastidiar el día a otro…

En definitiva, la historia y trasfondo en “*Schadenfreude*” funciona como una
breve trama que sirve, sobre todo, para dar contexto a las acciones de los
jugadores. Esta es, además, sencilla y casi costumbrista, para que este contexto
del título resulte lo menos ajeno posible y se entre rápidamente en la dinámica
propuesta.

[./media/image2.png](./media/image2.png)
========================================

SONIDO Y MÚSICA

*Efectos de sonido*

Debido a que “*Schadenfreude”* es un juego de cartas, no requiere demasiados
efectos de sonido, por ello hemos utilizado un sonido de movimiento de cartas
descargado de una librería gratuita, que se reproducirá cada vez que se juegue
una carta.

*BSO*

El punto de partida para crear la BSO de “*Schadenfreude”* fue el siguiente:
“música de ascensor pero con algún pico de tensión”.

A partir de dicha idea se han creado dos temas, uno para el menú principal y
otro para el juego en sí.

El tema del menú es un poco más relajado ya que pretende hacer que el jugador se
encuentre cómodo mientras espera para jugar una partida o mientras navega por
los submenús de créditos o ajustes.

El tema que se escucha durante la partida es un poco más frenético puesto que
debe canalizar al jugador una leve sensación de tensión o de estrés ya que en
eso consiste nuestro videojuego, en aumentar el estrés del rival.

Para la banda sonora nos hemos inspirado en progresiones de acordes típicas de
música para casino pero con un toque vintage. Recuerda al sonido de consolas de
los 2000, por lo que hemos usado un emulador de sintetizador y un keyboard de la
época para reproducir los sonidos. De la partitura de progresiones hemos creado
un archivo .*midi* con el que hemos podido producir el archivo de audio usando
el software ABLETON LIVE 10.

[./media/image2.png](./media/image2.png)
========================================

COMERCIALIZACIÓN

*Audiencia target*

Con este título queremos llegar, en especial, a la audiencia casual de gente
entre 15 y 30 años. En *SampleText594* consideramos que dadas las
características del videojuego: ser un juego de navegador, consistir en partidas
cortas o ser un juego sencillo; el público casual es el objetivo perfecto.
Además, dada la naturaleza de las bromas de las cartas, la gente de entre 15 y
30 años es el segmento de audiencia con más probabilidades de entenderlas y de
divertirse con ellas.

*Diferenciación con la competencia*

El mercado de videojuegos de cartas es uno complejo. Dada la cantidad de horas
que se suele necesitar para hacerse con las mecánicas de estos títulos, hay
juegos muy potentes, que llevan ya tiempo asentados y contra los que es
extremadamente difícil competir: *Hearthstone* o *Magic*, por ejemplo.

A parte de esto, desde hace unos años, están surgiendo un nuevo tipo de juegos
de cartas que no funcionan como juegos de cartas al uso, son juegos de acción y
aventura que utilizan las cartas como una mecánica de combate: *Slay the Spire*
o *Dicey Dungeons*, entre otros.

Con estos dos estilos de juegos de cartas en mente, en “*Schadenfreude*”
buscamos combinarlos de alguna manera. De esa forma surgió la idea para este
videojuego de cartas que tomara ideas de ambas corrientes y a la vez tuviera sus
propias influencias y su propia voz. Así, tomamos influencias de juegos de mesa
como *Munchkin*, y de videojuegos de simulación de vida como *Los Sims*. De esta
manera, “*Schadenfreude*” tiene las suficientes similitudes con juegos de cartas
más establecidos y populares como para transmitir un sentimiento de
familiaridad, a la vez que tiene aspectos novedosos que lo diferencian del resto
de títulos de este estilo y que hacen que ofrezca una experiencia distinta y
atrayente.

![](media/2f9bf0d00041e707894ab772e20276c8.png)

*Monetización y modelo de negocio*

![](media/0f45a5d14e857624f596e818985945ad.jpg)

Siguiendo el modelo canvas:

Profundizando un poco más en la monetización, las fuentes de ingreso que tendrá
“*Schadenfreude*”, serán la publicidad que aparecerá en la página del
videojuego, los patrocinadores que deseen apoyar el título, y las expansiones.

Estas expansiones serán barajas nuevas de cartas que aportarán variedad al
título. Pueden ser temáticas: *Halloween*, por ejemplo; o ampliaciones más
clásicas: más cartas de las mismas categorías y del mismo tipo que ya hay.

*Modelo de negocio durante dos años*

“*Schadenfreude”* seguirá un modelo de negocio de tipo Freemium. El juego base
será gratuito, pero a lo largo de los 2 años se irán lanzando expansiones.

Habrá 2 tipos de expansiones: gratuitas y de pago.

Las expansiones gratuitas consistirán en un par de cartas nuevas que se
introducirán en el juego cada quince días, y que no supondrán ningún gasto para
el jugador. El objetivo de este tipo de expansión es incentivar

![](media/2f9bf0d00041e707894ab772e20276c8.png)

al jugador para que entre al juego con asiduidad para descubrir las nuevas
cartas.

Las expansiones de pago se introducirán cada seis meses, haciendo un total de
cuatro expansiones durante los dos años. Consistirán en dos nuevas categorías de
cartas, que no tendrán ninguna relación con las categorías ya existentes en el
juego base. Además también se incluirán nuevas cartas, el número dependerá de la
expansión en concreto, para las categorías existentes. Cada expansión saldrá a
la venta a un precio de quince euros.

Después de la salida de la primera expansión el juego emparejará a los jugadores
de modo que solo jueguen entre sí aquellos que posean el mismo número de
expansiones.

Las expansiones supondrán una buena manera de obtener ingresos, pero no la
única. En los dos años siguientes a la salida del juego el plan es que sigamos
obteniendo ingresos de la publicidad que aparece en la página que alojará el
juego.

Por último, otra posible forma de obtener ingresos sería a partir de
patrocinadores que pagasen para que su marca saliese en el juego, ya sea en el
reverso de las cartas o con una categoría exclusiva relacionada con el producto
que venden.

