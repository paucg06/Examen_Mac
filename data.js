const testData = {
  "MAC_Tema_2_Tests.txt": [
    {
      "text": "¿Qué es una malla poligonal en el contexto del modelado 3D?",
      "options": [
        "a) Una superficie creada por vértices en 3D que forman polígonos.",
        "b) Una imagen bidimensional proyectada sobre un plano.",
        "c) Una curva matemáticamente precisa que define un volumen.",
        "d) Un conjunto de píxeles organizados en una matriz."
      ],
      "correcta": "a",
      "explicacion": "Según el texto, una malla poligonal se define como una superficie creada por vértices en 3D que forman polígonos. Las opciones B y D se refieren a gráficos 2D o rasterizados, y la C describe mejor el modelado NURBS."
    },
    {
      "text": "¿Qué indica el vector normal en el modelado de mallas poligonales?",
      "options": [
        "a) La velocidad a la que se desplaza un vértice.",
        "b) La orientación de la cara o polígono (haz vs. envés), siendo perpendicular a la misma.",
        "c) El peso de influencia de un hueso sobre un vértice en animación.",
        "d) El nivel de detalle o complejidad de la malla (low poly vs. high poly)."
      ],
      "correcta": "b",
      "explicacion": "La normal es un vector perpendicular a un polígono o vértice que indica la orientación de la cara. Las otras opciones describen conceptos como velocidad, rigidez o complejidad topológica."
    },
    {
      "text": "¿Cuál de las siguientes afirmaciones describe la topología ideal de un objeto 3D correcto?",
      "options": [
        "a) Debe componerse exclusivamente de polígonos de más de 4 vértices (N-gons).",
        "b) Debe tener todos sus polígonos formados por 3 vértices (triángulos) o 4 vértices (quads), evitando N-gons.",
        "c) Debe estar formada únicamente por cilindros sin tapas.",
        "d) Debe combinar primitivas geométricas de forma aleatoria sin importar el número de vértices por cara."
      ],
      "correcta": "b",
      "explicacion": "El texto indica claramente que la topología ideal de un objeto 3D correcto requiere que sus polígonos tengan 3 (triángulos) o 4 (quads) vértices, y que se deben evitar los N-gons."
    },
    {
      "text": "¿Qué particularidad geométrica tiene el cilindro cuando se genera como primitiva por defecto?",
      "options": [
        "a) Que es la única primitiva que no usa vértices.",
        "b) Que está compuesto exclusivamente por N-gons en toda su estructura.",
        "c) Que utiliza N-gons en sus tapas por defecto.",
        "d) Que sus operaciones booleanas siempre fallan."
      ],
      "correcta": "c",
      "explicacion": "Según el documento, entre las primitivas geométricas, el cilindro es notable porque usa n-gons (polígonos de más de 4 lados) en sus tapas por defecto."
    },
    {
      "text": "¿Cuáles son las tres operaciones booleanas principales mencionadas para el modelado 3D?",
      "options": [
        "a) Empalme, Chaflán y Desfasar.",
        "b) Selección, Modificación y Subdivisión.",
        "c) Mover, Escalar y Rotar.",
        "d) Unión (AND), Diferencia (NOT) e Intersección (OR)."
      ],
      "correcta": "d",
      "explicacion": "El texto enumera específicamente Unión, Diferencia e Intersección como las operaciones booleanas utilizadas en el modelado. Las demás opciones se refieren a transformaciones o edición NURBS/poligonal."
    },
    {
      "text": "En la edición poligonal, ¿en qué consiste la técnica de extrusión?",
      "options": [
        "a) En generar nueva geometría a partir de la existente.",
        "b) En seleccionar una secuencia continua de aristas.",
        "c) En suavizar el área de influencia de una modificación.",
        "d) En girar un perfil 2D sobre un eje."
      ],
      "correcta": "a",
      "explicacion": "La extrusión se define en el texto como generar nueva geometría a partir de la existente. Las otras opciones describen el loop de aristas, la edición proporcional y la revolución."
    },
    {
      "text": "¿Cuál de las siguientes técnicas permite modificar elementos de una malla aplicando un área de influencia suavizada?",
      "options": [
        "a) Loop de aristas",
        "b) Subdivisión",
        "c) Edición proporcional",
        "d) Solevado (Loft)"
      ],
      "correcta": "c",
      "explicacion": "La edición proporcional consiste precisamente en realizar modificaciones con un área de influencia suavizada, permitiendo cambios graduales en la malla."
    },
    {
      "text": "¿Cómo se denomina la técnica que consiste en repetir un perfil a lo largo de una curva 3D (por ejemplo, para crear una moldura)?",
      "options": [
        "a) Revolución (Screw)",
        "b) Retopología",
        "c) Extrusión",
        "d) Solevado (Loft)"
      ],
      "correcta": "d",
      "explicacion": "El solevado (o loft) se define como la técnica de repetir un perfil a lo largo de una curva 3D. La revolución gira un perfil sobre un eje."
    },
    {
      "text": "¿Cuál es el objetivo principal de la retopología según el texto?",
      "options": [
        "a) Revertir un objeto 3D a sus primitivas originales para aplicar operaciones booleanas.",
        "b) Crear una malla optimizada encima de una escultura digital de alta densidad para poder animarla.",
        "c) Transformar cualquier malla poligonal en una superficie NURBS matemáticamente precisa.",
        "d) Añadir más millones de polígonos a un modelo para aplicar simulaciones físicas."
      ],
      "correcta": "b",
      "explicacion": "La retopología busca crear una malla optimizada sobre una escultura de alta densidad (como las de ZBrush) para que pueda ser animada, apoyándose en mapas de normales para mantener el detalle."
    },
    {
      "text": "¿Cuál es la característica o concepto central del modelado NURBS?",
      "options": [
        "a) La creación de modelos usando exclusivamente operaciones booleanas (AND, OR, NOT).",
        "b) El control de curvas y superficies matemáticamente precisas.",
        "c) La simulación de físicas e impactos basándose en la edad de los vértices.",
        "d) La simplificación drástica de polígonos en modelos \"low poly\"."
      ],
      "correcta": "b",
      "explicacion": "El modelado NURBS se fundamenta en el control de curvas y superficies matemáticamente precisas, a diferencia del modelado poligonal tradicional."
    },
    {
      "text": "¿Cuál de los siguientes es un problema o desventaja de usar splines/NURBS en modelado?",
      "options": [
        "a) Son excesivamente fáciles de interconectar, lo que provoca resultados caóticos.",
        "b) Las topologías orgánicas complejas son muy difíciles de modelar.",
        "c) Generan automáticamente N-gons incontrolables.",
        "d) Permiten polígonos de cualquier número de lados, dificultando la subdivisión."
      ],
      "correcta": "b",
      "explicacion": "El texto señala que con NURBS es difícil modelar topologías orgánicas complejas, además de ser complicado mantener la continuidad y el mapeado de texturas, y estar restringidas a parches de 4 lados."
    },
    {
      "text": "¿Qué objetivo principal persiguen las Subdivision Surfaces (Superficies de Subdivisión)?",
      "options": [
        "a) Reducir la cantidad de polígonos al mínimo para exportarlos a motores de videojuegos antiguos.",
        "b) Transformar nubes de puntos directamente en superficies NURBS.",
        "c) Refinar recursivamente una malla de baja resolución para lograr una superficie suave y garantizar continuidad.",
        "d) Segmentar un modelo complejo en partes más pequeñas para su edición."
      ],
      "correcta": "c",
      "explicacion": "El objetivo de las Subdivision Surfaces es refinar recursivamente una malla (baja resolución) para lograr una superficie suave y garantizar continuidad, resolviendo así problemas asociados a los parches NURBS."
    },
    {
      "text": "¿Qué algoritmo de subdivisión es considerado el mejor para mallas compuestas por quads y garantiza una suavidad C2?",
      "options": [
        "a) Catmull-Clark",
        "b) Loop",
        "c) Doo-Sabin",
        "d) Butterfly (modificado)"
      ],
      "correcta": "a",
      "explicacion": "Catmull-Clark es un esquema aproximante que garantiza suavidad C2 y es destacado en el texto como \"El mejor para mallas de quads\"."
    },
    {
      "text": "¿Qué algoritmo de subdivisión se caracteriza por ser un esquema de interpolación (mantiene en su lugar los vértices originales)?",
      "options": [
        "a) Loop",
        "b) Doo-Sabin",
        "c) Catmull-Clark",
        "d) Butterfly (modificado)"
      ],
      "correcta": "d",
      "explicacion": "El texto especifica que el algoritmo de Butterfly (modificado) es un esquema de interpolación, lo que significa que mantiene los vértices originales de la malla."
    },
    {
      "text": "¿En qué 4 grupos principales se dividen las categorías de modificadores en Blender según el texto?",
      "options": [
        "a) Mover, Rotar, Escalar y Transformar.",
        "b) Extrusión, Loop, Subdivisión y Retopología.",
        "c) Modificar, Generar, Deformar y Simular.",
        "d) Análisis, Segmentación, Edición y Render."
      ],
      "correcta": "c",
      "explicacion": "Las cuatro categorías principales de modificadores en Blender enumeradas son: Modificar, Generar, Deformar y Simular."
    },
    {
      "text": "En el procesado poligonal de mallas, ¿qué acción corresponde a la fase de \"Análisis\"?",
      "options": [
        "a) Suavizado, afilado y deformaciones de la malla.",
        "b) Dividir la malla en diferentes partes para su manejo.",
        "c) Parametrización, geometría diferencial y detección de características.",
        "d) Reducción de los polígonos a un límite específico."
      ],
      "correcta": "c",
      "explicacion": "Según el texto, la fase de Análisis consta de la parametrización, geometría diferencial y detección de características. La segmentación divide la malla, y la edición implica el suavizado y las deformaciones."
    },
    {
      "text": "¿Cómo actúan los deformadores globales (como Taper, Twist o Bend) sobre un objeto?",
      "options": [
        "a) Afectan solo a los vértices seleccionados por una curva de influencia decreciente.",
        "b) Afectan a todos los vértices mediante una matriz de transformación 3x3.",
        "c) Deforman exclusivamente las texturas sin alterar la malla tridimensional.",
        "d) Utilizan funciones de coordenadas de una jaula externa que envuelve el objeto."
      ],
      "correcta": "b",
      "explicacion": "El texto indica que los deformadores globales afectan a todos los vértices del modelo utilizando una matriz de transformación 3x3. Ejemplos de estos son Taper, Twist y Bend."
    },
    {
      "text": "Dentro de los deformadores basados en superficies, ¿qué característica principal diferencia a los métodos lineales de los no lineales?",
      "options": [
        "a) Los lineales usan jaulas (cages) y los no lineales usan rejillas (lattices).",
        "b) Los lineales son rápidos pero pueden dar comportamientos erróneos, mientras que los no lineales son más precisos pero lentos y complejos.",
        "c) Los lineales operan mediante una matriz 3x3 y los no lineales usan cinemática inversa.",
        "d) Los lineales requieren N-gons y los no lineales solo admiten triángulos."
      ],
      "correcta": "b",
      "explicacion": "El resumen detalla que los métodos lineales resuelven sistemas globales siendo rápidos, aunque a veces erróneos, mientras que los no lineales ofrecen mayor precisión a costa de ser más lentos y de difícil implementación."
    },
    {
      "text": "¿Qué afirmación define mejor la naturaleza de los deformadores espaciales (Space Deformations)?",
      "options": [
        "a) Operan matemáticamente en superficies bidimensionales sin aplicarse a entornos 3D.",
        "b) Alteran las normales de la malla de forma aleatoria para generar ruido.",
        "c) Se deforma el espacio 2D/3D donde está contenido el objeto, propagando la deformación a todos los puntos independientemente del tipo de geometría.",
        "d) Únicamente funcionan con topologías basadas en NURBS y no en mallas poligonales."
      ],
      "correcta": "c",
      "explicacion": "Los deformadores espaciales deforman el espacio en sí que contiene el objeto, y su efecto se propaga a los puntos sin importar si es una malla, point set o polygonal soup."
    },
    {
      "text": "¿Cuál es una desventaja de las deformaciones de forma libre (FFD) que emplean una rejilla (lattice)?",
      "options": [
        "a) No permiten alterar vértices de forma individual.",
        "b) Son extremadamente lentas en tiempo de renderizado.",
        "c) Solo se pueden aplicar a geometrías triangulares de alto poligonaje.",
        "d) Son difíciles de manipular y los vértices de control de la rejilla no tienen una relación directa con la forma geométrica subyacente."
      ],
      "correcta": "d",
      "explicacion": "El texto menciona expresamente que la desventaja de FFD es la dificultad para manipularlos, ya que los vértices de control no guardan relación directa con la forma de la geometría del objeto."
    },
    {
      "text": "¿Qué función matemática es característica del deformador espacial conocido como \"Handle Metaphor\" (Manejador Metamórfico)?",
      "options": [
        "a) Coordenadas baricéntricas.",
        "b) Funciones de base radial (RBF - Radial Basis Functions).",
        "c) Matrices de rotación Euleriana.",
        "d) Ley de Hooke para muelles."
      ],
      "correcta": "b",
      "explicacion": "El Handle Metaphor emplea funciones de interpolación como las RBF (Radial Basis Functions) y permite \"Soft Selection\" para deformaciones locales y globales."
    },
    {
      "text": "Dentro del enfoque de deformadores basados en jaulas (Cage-based), ¿qué aseguran las coordenadas \"Positive MVC (PMVC)\"?",
      "options": [
        "a) Que las coordenadas armónicas sean ignoradas en favor de curvas B-Spline.",
        "b) Garantizan coordenadas positivas al ponderar la deformación.",
        "c) Que la jaula se subdivida infinitamente al renderizar.",
        "d) Que sólo se incluyan datos de las aristas y no de los vértices."
      ],
      "correcta": "b",
      "explicacion": "El resumen indica explícitamente que las Positive MVC (PMVC) tienen la característica de garantizar coordenadas positivas."
    },
    {
      "text": "En Blender, ¿cómo se denominan los dos tipos principales o modos de uso de sistemas de partículas mencionados en el texto?",
      "options": [
        "a) Spray y Super Spray",
        "b) Emitter y Hair",
        "c) Force y Boid",
        "d) Vertex y Edge"
      ],
      "correcta": "b",
      "explicacion": "En el texto se menciona que Blender utiliza 'Emitter' (que emite partículas en el tiempo) y 'Hair' (para hebras, pelo, hierba). Spray y Super Spray son de 3DS Max."
    },
    {
      "text": "¿Qué sistema de partículas de 3DS Max se menciona en el texto como útil para crear fluidos?",
      "options": [
        "a) Spray",
        "b) Super Spray",
        "c) Metaparticles",
        "d) VDB"
      ],
      "correcta": "c",
      "explicacion": "Según el resumen, en 3DS Max los 'Metaparticles' se utilizan para la simulación de fluidos."
    },
    {
      "text": "¿Qué establece la primera ley de Newton (Ley de la inercia) según los fundamentos físicos descritos?",
      "options": [
        "a) La aceleración de un cuerpo es proporcional a la fuerza aplicada.",
        "b) Todo cuerpo mantiene su estado (reposo o movimiento) si no actúan fuerzas sobre él.",
        "c) A cada acción siempre se opone una reacción igual y contraria.",
        "d) La velocidad es la primera derivada de la posición."
      ],
      "correcta": "b",
      "explicacion": "La primera ley de Newton, la inercia, se describe en el texto afirmando que un cuerpo conserva su estado, ya sea de reposo o movimiento, mientras no actúe ninguna fuerza externa sobre él."
    },
    {
      "text": "¿Cómo se calcula el momento lineal (p) de una partícula?",
      "options": [
        "a) Posición por tiempo (p = r * t)",
        "b) Masa por aceleración (p = m * a)",
        "c) Masa por velocidad (p = m * v)",
        "d) Fuerza por el diferencial de tiempo (p = F * dt)"
      ],
      "correcta": "c",
      "explicacion": "El momento lineal se define en el texto claramente como el producto de la masa por la velocidad (p = m * v)."
    },
    {
      "text": "Dentro de los campos de fuerza en Blender, ¿para qué se utiliza específicamente la fuerza tipo \"Boid\"?",
      "options": [
        "a) Para generar un viento constante en una única dirección.",
        "b) Para ralentizar las partículas como si hubiera fricción en el ambiente.",
        "c) Para crear vórtices en espiral.",
        "d) Para simular inteligencia de enjambres, como bandadas de pájaros o bancos de peces."
      ],
      "correcta": "d",
      "explicacion": "El tipo de fuerza Boid se describe en el texto como el encargado de simular la inteligencia de enjambres (bandadas de pájaros, peces, etc.)."
    },
    {
      "text": "¿Qué ley determina el comportamiento de la fuerza elástica (Springs) en la simulación física?",
      "options": [
        "a) La Ley de Newton.",
        "b) La Ley de Hooke, determinada por una constante de rigidez k.",
        "c) La Ley de Euler.",
        "d) La Ley de Gravitación Universal."
      ],
      "correcta": "b",
      "explicacion": "El texto indica que la Fuerza Elástica (Springs) se rige por la Ley de Hooke y está determinada por una constante de rigidez k."
    },
    {
      "text": "¿Qué componente cinemático resulta directamente afectado cuando se aplica un impulso (cambio repentino del momento debido a una gran fuerza en poco tiempo)?",
      "options": [
        "a) La masa de la partícula.",
        "b) La aceleración continua.",
        "c) La velocidad de la partícula.",
        "d) El color y el material del objeto colisionante."
      ],
      "correcta": "c",
      "explicacion": "El texto especifica que un impulso afecta directamente a la velocidad de la partícula, y no a la aceleración."
    },
    {
      "text": "En un sistema de colisiones, si el valor de \"Elasticidad\" se ajusta a 0, ¿qué sucede con la partícula al chocar?",
      "options": [
        "a) Rebota con la misma velocidad pero en dirección opuesta (colisión perfectamente elástica).",
        "b) Gana el doble de energía y acelera al instante.",
        "c) Se transforma en un vórtice o Boid.",
        "d) Toda la energía se pierde y la partícula se detiene."
      ],
      "correcta": "d",
      "explicacion": "Según el texto, un valor de elasticidad igual a 0 significa que toda la energía se pierde y la partícula se detiene."
    },
    {
      "text": "¿Cuál es la principal ventaja del método de integración \"Forward Euler\" muy utilizado en videojuegos y animación?",
      "options": [
        "a) Es el método más preciso independientemente de las fluctuaciones en las fuerzas.",
        "b) Su cálculo es muy rápido, ya que calcula el nuevo estado basándose puramente en el anterior.",
        "c) No requiere conocer la posición previa de las partículas, sólo su aceleración futura.",
        "d) Es capaz de simular fluidos volumétricos exportables en formato VDB sin coste de procesamiento."
      ],
      "correcta": "b",
      "explicacion": "La ventaja de Forward Euler es que es un método muy rápido, calculando el nuevo estado a partir del anterior, aunque su desventaja es la imprecisión cuando los intervalos de tiempo (dt) son grandes o las fuerzas cambian bruscamente."
    },
    {
      "text": "¿Qué efecto visual consiste en difuminar la profundidad o transparencia de los objetos según su distancia a la cámara?",
      "options": [
        "a) Lens Effect",
        "b) Depth-fading (Niebla)",
        "c) Motion Blur",
        "d) Ambient Occlusion"
      ],
      "correcta": "b",
      "explicacion": "El texto define la Niebla (o Depth-fading) como el efecto donde se difumina la profundidad o transparencia de acuerdo a la distancia a la que se encuentre el objeto respecto a la cámara."
    },
    {
      "text": "¿Cuál de las siguientes afirmaciones sobre el \"Motion Blur\" (Desenfoque de movimiento) es correcta según el resumen?",
      "options": [
        "a) Es un fenómeno que se da de forma natural en los entornos 3D y no requiere ser añadido.",
        "b) Se utiliza exclusivamente para simular niebla en objetos lejanos.",
        "c) Sirve para movimientos rápidos simulando la obturación de una cámara lenta, pero no ocurre naturalmente en 3D y debe añadirse.",
        "d) Mejora drásticamente la topología de la malla durante el renderizado final."
      ],
      "correcta": "c",
      "explicacion": "El texto afirma que el Motion Blur es usado para movimientos rápidos (simulando la obturación) y destaca que \"No se da natural en 3D, hay que añadirlo\"."
    },
    {
      "text": "¿Qué es OpenVDB según los apuntes de la asignatura?",
      "options": [
        "a) Un formato privativo de 3DS Max exclusivo para sistemas de partículas tipo Spray.",
        "b) Una librería de código abierto (creada por Dreamworks) para almacenar y exportar simulación volumétrica compleja (fluidos, fuego).",
        "c) Un algoritmo de subdivisión aproximante basado en mallas de triángulos.",
        "d) Un deformador espacial que utiliza jaulas tridimensionales."
      ],
      "correcta": "b",
      "explicacion": "OpenVDB es descrito como una librería de código abierto creada por Dreamworks para almacenar y exportar simulación volumétrica compleja (como fluidos y fuego) entre programas."
    },
    {
      "text": "En el grupo de los deformadores espaciales, ¿qué caracteriza al método de control basado en \"Wires\"?",
      "options": [
        "a) Usa una rejilla 3x3x3 que altera cada polígono individualmente.",
        "b) Se basa en curvas 3D arbitrarias que producen una deformación suave que decrece según la distancia a la curva.",
        "c) Solo funciona con mallas de triángulos de baja resolución.",
        "d) Afecta a los vértices con una matriz de transformación de rotación."
      ],
      "correcta": "b",
      "explicacion": "Los Wires utilizan objetos de control basados en curvas 3D arbitrarias, produciendo una deformación que decrece conforme aumenta la distancia a dicha curva."
    },
    {
      "text": "¿Qué figura geométrica NO se menciona en la lista de primitivas geométricas estándar de los apuntes?",
      "options": [
        "a) Cubo",
        "b) Esfera",
        "c) Prisma hexagonal",
        "d) Toro"
      ],
      "correcta": "c",
      "explicacion": "Las primitivas mencionadas explícitamente en el texto son Cubo, Plano, Esfera, Cono, Cilindro, Tubo y Toro. El Prisma hexagonal no aparece en la lista de primitivas por defecto."
    },
    {
      "text": "¿Para qué tipo de malla resulta óptimo el algoritmo de subdivisión de \"Loop\"?",
      "options": [
        "a) Exclusivamente para NURBS.",
        "b) Para mallas basadas en quads (4 vértices).",
        "c) Para nubes de puntos inconexas.",
        "d) Para mallas triangulares."
      ],
      "correcta": "d",
      "explicacion": "El algoritmo Loop es un esquema aproximante que garantiza suavidad C2 y es considerado en el texto como \"El mejor para mallas triangulares\", a diferencia de Catmull-Clark que es mejor para quads."
    },
    {
      "text": "¿Qué cualidad específica caracteriza al algoritmo de subdivisión \"Doo-Sabin\" en comparación con otros esquemas?",
      "options": [
        "a) Garantiza suavidad C2 y solo usa triángulos.",
        "b) Genera continuidad C1 y mejora específicamente las esquinas de la malla.",
        "c) Mantiene los vértices originales de la malla intactos mediante interpolación.",
        "d) Solo funciona bajo la influencia de mapas de normales."
      ],
      "correcta": "b",
      "explicacion": "El texto indica que el esquema Doo-Sabin genera continuidad C1 y mejora las esquinas."
    },
    {
      "text": "¿En qué se basa el concepto de \"Subdivisión Adaptativa\" aplicado a mallas 3D?",
      "options": [
        "a) En cambiar automáticamente de modelado poligonal a NURBS según el tipo de tarjeta gráfica.",
        "b) En aplicar la subdivisión de polígonos solamente en las zonas necesarias, dependiendo de factores como la curvatura o la distancia al observador.",
        "c) En que el motor de render aplique subdivisiones temporales solo a las texturas 2D.",
        "d) En segmentar sistemáticamente todas las primitivas usando operaciones de intersección."
      ],
      "correcta": "b",
      "explicacion": "El texto especifica que la subdivisión adaptativa optimiza el proceso al aplicarse únicamente en las zonas que lo requieren, evaluando la curvatura geométrica o la proximidad del modelo al observador."
    },
    {
      "text": "En el contexto de la simulación de telas y ropas, ¿qué dos factores se combinan frecuentemente para modelar la resistencia interna y del entorno?",
      "options": [
        "a) Taper y Twist.",
        "b) Fuerza Elástica (Springs) y Amortiguadores (Dampers).",
        "c) Vórtices y Boids.",
        "d) Algoritmo Doo-Sabin y Loop."
      ],
      "correcta": "b",
      "explicacion": "El documento señala que los tejidos/ropas combinan resortes (Springs) y amortiguadores (Dampers) en estructuras conocidas como \"Spring-damper\"."
    },
    {
      "text": "¿Qué primitiva geométrica suele contener N-gons por defecto en sus tapas?",
      "options": [
        "a) El cilindro en sus bases planas.",
        "b) La esfera en su ecuador principal.",
        "c) El toroide en sus uniones curvas.",
        "d) El cubo en todas sus seis caras."
      ],
      "correcta": "a",
      "explicacion": "El cilindro por defecto usa un n-gon para rellenar la tapa superior y la tapa inferior, lo cual debe tenerse en cuenta en la topología."
    },
    {
      "text": "¿Cuál es la topología ideal para evitar problemas al deformar un modelo 3D?",
      "options": [
        "a) Utilizar exclusivamente caras formadas por cinco vértices.",
        "b) Formar polígonos con tres o cuatro vértices como máximo.",
        "c) Construir el objeto usando uniones n-gons generalizadas.",
        "d) Eliminar los quads para usar un poligonaje muy complejo."
      ],
      "correcta": "b",
      "explicacion": "La topología ideal exige usar triángulos (3 vértices) o quads (4 vértices), evitando en lo posible los N-gons."
    },
    {
      "text": "¿Qué operación booleana conserva únicamente la parte común o compartida entre dos mallas?",
      "options": [
        "a) La operación conocida como Unión booleana (AND).",
        "b) La operación conocida como Intersección (OR).",
        "c) La operación conocida como Diferencia (NOT).",
        "d) La operación conocida como Sustracción total."
      ],
      "correcta": "b",
      "explicacion": "La operación booleana de Intersección (OR) conserva únicamente el volumen compartido por los objetos."
    },
    {
      "text": "¿En qué consiste el proceso de retopología en el flujo de trabajo de modelado 3D?",
      "options": [
        "a) Crear una malla optimizada encima de una escultura digital densa.",
        "b) Aplicar un suavizado constante a una malla de muy baja resolución.",
        "c) Eliminar todos los mapas de normales generados durante el esculpido.",
        "d) Subdividir la geometría base para añadir cientos de nuevos vértices."
      ],
      "correcta": "a",
      "explicacion": "La retopología consiste en crear una malla optimizada y animable sobre una escultura de alta densidad de polígonos."
    },
    {
      "text": "¿Cuál es un problema común al modelar empleando un sistema de superficies NURBS?",
      "options": [
        "a) Generan una malla que siempre está compuesta por n-gons.",
        "b) Suavizan el modelo pero impiden aplicar rotaciones básicas.",
        "c) Son muy difíciles de interconectar y mantener continuidad.",
        "d) Requieren siempre topologías de ocho lados para funcionar."
      ],
      "correcta": "c",
      "explicacion": "Los parches NURBS presentan serios problemas de interconexión y mantenimiento de continuidad geométrica."
    },
    {
      "text": "¿Para qué tipo de malla resulta más adecuado el algoritmo de subdivisión de Catmull-Clark?",
      "options": [
        "a) Para mallas formadas completamente por n-gons irregulares.",
        "b) Para mallas basadas estrictamente en curvas spline 2D puras.",
        "c) Para mallas compuestas mayoritariamente por triángulos simples.",
        "d) Para mallas compuestas mayoritariamente por quads o cuadriláteros."
      ],
      "correcta": "d",
      "explicacion": "El algoritmo Catmull-Clark es el mejor y más óptimo esquema para realizar subdivisión en mallas basadas en quads."
    },
    {
      "text": "Según la categorización de Blender, ¿a qué grupo pertenece un modificador de dinámicas de fluidos?",
      "options": [
        "a) Al grupo de modificadores categorizados como de tipo Generar.",
        "b) Al grupo de modificadores categorizados como de tipo Simular.",
        "c) Al grupo de modificadores categorizados como de tipo Deformar.",
        "d) Al grupo de modificadores categorizados como de tipo Modificar."
      ],
      "correcta": "b",
      "explicacion": "Blender agrupa las dinámicas y físicas dentro de la categoría Simular, que incluye herramientas de simulación."
    },
    {
      "text": "¿Qué acción realiza el deformador de alcance global conocido popularmente como 'Taper'?",
      "options": [
        "a) Retuerce fuertemente la geometría alrededor de su eje local.",
        "b) Afina o afila la malla geométrica a lo largo de una dirección.",
        "c) Dobla la estructura general del objeto formando un arco visible.",
        "d) Aplasta la geometría sobre sí misma generando arrugas densas."
      ],
      "correcta": "b",
      "explicacion": "El deformador Taper se encarga de afilar o estrechar la forma global de la geometría a lo largo de un eje específico."
    },
    {
      "text": "¿Qué caracteriza principalmente a las deformaciones de forma libre o FFD (Freeform Deformations)?",
      "options": [
        "a) Emplean una jaula poligonal envolvente de geometría compleja.",
        "b) Emplean una rejilla o lattice básica como objeto de control.",
        "c) Utilizan múltiples curvas tridimensionales de tipo arbitrario.",
        "d) Requieren estrictamente coordenadas baricéntricas positivas."
      ],
      "correcta": "b",
      "explicacion": "Los deformadores FFD utilizan una rejilla tridimensional (lattice) para deformar el espacio en el que se ubica el objeto."
    },
    {
      "text": "¿Qué tipo de coordenadas ponderadas de jaula incluye información paramétrica de las caras?",
      "options": [
        "a) Las coordenadas denominadas de tipo Harmonic regulares.",
        "b) Las coordenadas denominadas de tipo Mean-value comunes.",
        "c) Las coordenadas denominadas de tipo Green coordinates.",
        "d) Las coordenadas denominadas de tipo Positive MVC básicas."
      ],
      "correcta": "c",
      "explicacion": "Las Green coordinates son coordenadas ponderadas que utilizan información tanto de los vértices como de las caras de la jaula."
    },
    {
      "text": "¿Cómo funcionan los deformadores espaciales conocidos en el entorno 3D como 'Wires'?",
      "options": [
        "a) Utilizan una matriz global que afecta todos los puntos de la malla.",
        "b) Emplean curvas 3D arbitrarias para generar una deformación suave.",
        "c) Aplican complejas funciones armónicas sobre una malla base cerrada.",
        "d) Dependen única y exclusivamente de las coordenadas baricéntricas."
      ],
      "correcta": "b",
      "explicacion": "Los deformadores Wire se basan en curvas tridimensionales arbitrarias; la deformación decrece según la distancia a dicha curva."
    },
    {
      "text": "¿Cuál de estas afirmaciones describe la Ley de Inercia de Newton aplicable a un simulador físico?",
      "options": [
        "a) Todo cuerpo en simulación mantiene su estado si no actúan fuerzas.",
        "b) La aceleración de un objeto virtual es igual al cuadrado de su masa.",
        "c) Si se ejerce una fuerza intensa, se recibe una onda perpendicular.",
        "d) El momento lineal siempre se disipa tras cualquier colisión rápida."
      ],
      "correcta": "a",
      "explicacion": "La Ley de Inercia postula que un cuerpo conservará su estado de reposo o movimiento continuo a menos que intervenga una fuerza."
    },
    {
      "text": "En una simulación de físicas, ¿qué variable se ve afectada de manera directa por un impulso?",
      "options": [
        "a) La aceleración general del sistema mecánico de forma muy gradual.",
        "b) La posición original del objeto virtual instantáneamente en el eje.",
        "c) La velocidad de la partícula o cuerpo simulado de forma repentina.",
        "d) La masa total o el volumen del cuerpo de manera completamente fija."
      ],
      "correcta": "c",
      "explicacion": "Un impulso es una fuerza inmensa en un intervalo temporal minúsculo, lo que se traduce en un cambio instantáneo de velocidad."
    },
    {
      "text": "Si una colisión física entre dos cuerpos posee una configuración de elasticidad de valor cero, ¿qué ocurre?",
      "options": [
        "a) El objeto rebotará con una velocidad inicial fuertemente duplicada.",
        "b) El objeto atravesará el obstáculo sin detener su movimiento inicial.",
        "c) El objeto se detendrá por completo al perder toda su energía física.",
        "d) El objeto cambiará de dirección conservando su velocidad original."
      ],
      "correcta": "c",
      "explicacion": "Una elasticidad de 0 significa que la colisión es inelástica y el objeto absorbe el impacto perdiendo su energía y velocidad."
    },
    {
      "text": "¿Qué característica distingue al popular método de integración Forward Euler usado en animaciones?",
      "options": [
        "a) Es altamente preciso para simular todo tipo de movimientos bruscos.",
        "b) Evalúa la posición basándose únicamente en el estado futuro lejano.",
        "c) Es bastante rápido pero resulta impreciso ante fuerzas muy variables.",
        "d) Requiere de sistemas matriciales complejos que ralentizan el render."
      ],
      "correcta": "c",
      "explicacion": "El método Forward Euler es muy eficiente computacionalmente, pero puede volverse inestable o impreciso ante variaciones bruscas."
    },
    {
      "text": "¿Qué tipo de comportamiento suele simular el campo de fuerza 'Boid' en los sistemas de partículas?",
      "options": [
        "a) La leve resistencia que produce el entorno a objetos en caída libre.",
        "b) La intensa atracción física o magnética generada entre dos cuerpos.",
        "c) La inteligencia colectiva y movimiento grupal de bandadas de aves.",
        "d) La fuerte repulsión elástica fundamentada por la antigua ley Hooke."
      ],
      "correcta": "c",
      "explicacion": "El campo de fuerza Boid se utiliza expresamente para emular la inteligencia y el movimiento coordinado de enjambres o bandadas."
    },
    {
      "text": "¿Qué es la librería tecnológica OpenVDB y con qué propósito se integra en programas de 3D?",
      "options": [
        "a) Un formato propietario cerrado pensado para exportar los esqueletos.",
        "b) Una librería de código abierto especializada en volumen y simulado.",
        "c) Una herramienta paramétrica para crear topologías de tipo celular.",
        "d) Un potente software utilizado en la generación de mapas de relieve."
      ],
      "correcta": "b",
      "explicacion": "OpenVDB es una librería desarrollada por Dreamworks orientada a almacenar y exportar simulación volumétrica compleja como humo o fuego."
    },
    {
      "text": "¿Qué técnica de modelado parte de repetir un perfil 2D a lo largo de una trayectoria tridimensional?",
      "options": [
        "a) Extrusión plana distribuida a lo largo de varios ejes ortogonales.",
        "b) Subdivisión recurrente de la geometría hasta crear formas nuevas.",
        "c) Operación de tipo Solevado (Loft) mediante trayectorias en curva.",
        "d) Revolución estándar alrededor de un único punto de pivote común."
      ],
      "correcta": "c",
      "explicacion": "El Solevado o Loft toma un contorno o perfil 2D y lo extruye repitiéndolo a lo largo del recorrido dictado por una curva 3D."
    },
    {
      "text": "¿Qué gran ventaja introdujeron las denominadas superficies de subdivisión frente a las previas NURBS?",
      "options": [
        "a) Aseguran generar topologías hechas exclusivamente con triángulos.",
        "b) Solucionan los graves problemas de interconexión en las superficies.",
        "c) Limitan todas las mallas a una única resolución para ahorrar memoria.",
        "d) Eliminan por completo la urgencia de utilizar las texturas UV visuales."
      ],
      "correcta": "b",
      "explicacion": "Las Subdivision Surfaces permitieron trabajar con topologías irregulares sin perder continuidad suave, resolviendo la interconexión NURBS."
    },
    {
      "text": "¿Por qué motivo es necesario aplicar un efecto artificial de 'Motion Blur' en un render 3D?",
      "options": [
        "a) Porque los motores de render 3D no emulan la obturación natural.",
        "b) Porque las simulaciones anulan automáticamente los mapas tonales.",
        "c) Porque los sistemas de nodos limitan la velocidad física calculable.",
        "d) Porque el enfoque focal contrarresta por completo el nivel de blur."
      ],
      "correcta": "a",
      "explicacion": "A diferencia de las cámaras físicas, el renderizado de gráficos 3D no captura la estela de movimiento (obturación), por lo que debe simularse."
    }
  ],
  "MAC_Tema_3_Tests.txt": [
    {
      "text": "¿Qué es un Shader (Sombreador)?",
      "options": [
        "a) Un mapa que deforma la malla de un modelo 3D.",
        "b) Un software que calcula el color de cada píxel según la luz, el material y las sombras.",
        "c) Una técnica para envolver modelos complejos en un plano 2D.",
        "d) Una imagen fotográfica utilizada para aportar realismo al renderizado."
      ],
      "correcta": "b",
      "explicacion": "Según el texto, un Shader es el software que calcula el color de cada píxel según la luz, el material y las sombras."
    },
    {
      "text": "¿A qué hace referencia el proceso de \"Shading\"?",
      "options": [
        "a) A la generación de texturas mediante algoritmos y fórmulas matemáticas.",
        "b) A la creación de la malla geométrica del objeto en 3D.",
        "c) Al proceso de aplicar características como color, transparencia y rugosidad a las superficies.",
        "d) Al cálculo de la refracción de luz al atravesar objetos traslúcidos."
      ],
      "correcta": "c",
      "explicacion": "El texto define el Shading como el proceso de aplicar las características calculadas (color, transparencia, rugosidad) a las superficies."
    },
    {
      "text": "¿Cuál de las siguientes afirmaciones es cierta sobre los Materiales Físicos Básicos?",
      "options": [
        "a) Utilizan exclusivamente texturas fotográficas.",
        "b) No usan texturas y se definen con parámetros como color base, rugosidad, transparencia e IOR.",
        "c) Recrean sombras de contacto mediante mapas de oclusión ambiental.",
        "d) Requieren de mapeado Unwrap UVW para funcionar correctamente."
      ],
      "correcta": "b",
      "explicacion": "El documento señala que los materiales físicos básicos no usan texturas, sino que se definen por color base, rugosidad, transparencia e IOR."
    },
    {
      "text": "En los Materiales Físicos Básicos, ¿qué significa la sigla IOR?",
      "options": [
        "a) Índice de Rugosidad (Index of Roughness).",
        "b) Iluminación Omnidireccional Real (Omnidirectional Real Illumination).",
        "c) Índice de Refracción (Index of Refraction).",
        "d) Intensidad de Reflexión (Intensity of Reflection)."
      ],
      "correcta": "c",
      "explicacion": "El texto indica explícitamente que IOR es el \"Índice de Refracción\"."
    },
    {
      "text": "Según el temario, ¿qué ejemplos representan materiales físicos básicos?",
      "options": [
        "a) Piel humana y cera.",
        "b) Polvo y rayaduras.",
        "c) Vidrio y plástico.",
        "d) Metal y madera envejecida."
      ],
      "correcta": "c",
      "explicacion": "El documento da como ejemplos de materiales físicos básicos al vidrio y al plástico."
    },
    {
      "text": "¿Cómo se generan las texturas procedurales?",
      "options": [
        "a) A través de la captura de fotografías en alta resolución.",
        "b) Mediante mapas de desplazamiento (Height).",
        "c) Utilizando fórmulas matemáticas y algoritmos.",
        "d) Proyectando coordenadas 2D sobre una malla cilíndrica."
      ],
      "correcta": "c",
      "explicacion": "El texto menciona que las texturas procedurales son generadas por fórmulas matemáticas y algoritmos, no por fotografías."
    },
    {
      "text": "¿Qué significa la sigla OSL en el contexto de las texturas procedurales?",
      "options": [
        "a) Open Shading Language.",
        "b) Optical Surface Lighting.",
        "c) Object Space Layering.",
        "d) Overlapping Seam Logic."
      ],
      "correcta": "a",
      "explicacion": "En el apartado de texturas procedurales, OSL se cita como ejemplo y significa \"Open Shading Language\"."
    },
    {
      "text": "¿Cuál de las siguientes NO es una ventaja de las texturas procedurales?",
      "options": [
        "a) Resoluciones infinitas sin pixelado (sin efecto sierra).",
        "b) Capacidad de animarse fácilmente.",
        "c) Facilidad para modelar detalles finos y específicos.",
        "d) Ausencia de cortes de repetición (seamless)."
      ],
      "correcta": "c",
      "explicacion": "El texto lista como desventaja de las procedurales la \"difícil modelar detalles finos específicos\", por lo que no es una ventaja."
    },
    {
      "text": "¿Cuál de las siguientes es una desventaja de las texturas procedurales?",
      "options": [
        "a) Generan problemas de resolución (pixelado) en planos cortos.",
        "b) Producen cortes (seams) al envolver el modelo 3D.",
        "c) Su complejidad matemática.",
        "d) Son difíciles de animar."
      ],
      "correcta": "c",
      "explicacion": "Entre las desventajas de las texturas procedurales, el texto incluye explícitamente la \"complejidad matemática\"."
    },
    {
      "text": "Si en un proyecto requieres texturas que eviten el efecto sierra o pixelado al acercar la cámara, ¿qué tipo de textura elegirías según el texto?",
      "options": [
        "a) Texturas basadas en fotografías.",
        "b) Mapas de Oclusión Ambiental (AO).",
        "c) Texturas procedurales.",
        "d) Mapeado Unwrap UVW."
      ],
      "correcta": "c",
      "explicacion": "Las texturas procedurales ofrecen \"resoluciones infinitas sin pixelado (sin efecto sierra / seamless)\"."
    },
    {
      "text": "¿Qué tipo de texturas usarías para animarlas fácilmente y evitar los cortes de repetición?",
      "options": [
        "a) Texturas procedurales.",
        "b) Texturizados basados en imágenes (fotografías).",
        "c) Materiales físicos básicos sin textura.",
        "d) Mapas de coordenadas W."
      ],
      "correcta": "a",
      "explicacion": "Las texturas procedurales tienen entre sus ventajas el hecho de que \"se animan fácilmente\" y no tienen \"cortes de repetición\"."
    },
    {
      "text": "¿Qué aportan al modelo 3D los texturizados basados en imágenes (fotografías)?",
      "options": [
        "a) Complejidad matemática y resolución infinita.",
        "b) Mayor realismo, suciedad, arañazos (envejecimiento) y credibilidad.",
        "c) Una topología del modelo libre de deformaciones.",
        "d) Un sombreado dependiente exclusivamente del Índice de Refracción."
      ],
      "correcta": "b",
      "explicacion": "El texto indica que los texturizados (imágenes) usan fotografías y aportan mayor realismo, suciedad, arañazos (envejecimiento) y credibilidad."
    },
    {
      "text": "¿Cuál es un problema común al aplicar texturizados basados en imágenes en un modelo 3D?",
      "options": [
        "a) La alta complejidad matemática de sus fórmulas.",
        "b) La generación de \"cortes\" (seams) al envolver el modelo.",
        "c) La imposibilidad de añadir mapas de Ambient Occlusion.",
        "d) La deformación real de la malla geométrica."
      ],
      "correcta": "b",
      "explicacion": "El temario menciona que las texturas por imágenes tienen el problema de generar \"cortes\" (seams) al envolver el modelo 3D."
    },
    {
      "text": "¿Qué significa PBR en el contexto de materiales y texturas?",
      "options": [
        "a) Physically Based Rendering.",
        "b) Procedural Background Rendering.",
        "c) Polygon Based Rebuilding.",
        "d) Projected Base Refraction."
      ],
      "correcta": "a",
      "explicacion": "El título de la sección 3 indica claramente que PBR significa \"Physically Based Rendering\"."
    },
    {
      "text": "¿Cuál es el objetivo principal de los Materiales PBR?",
      "options": [
        "a) Simplificar el cálculo de la luz reduciéndolo a un color base sólido.",
        "b) Replicar la física real de la luz sobre los materiales utilizando múltiples mapas de textura.",
        "c) Generar texturas matemáticas infinitas sin el uso de imágenes externas.",
        "d) Desenvolver la malla de un modelo para evitar estiramientos."
      ],
      "correcta": "b",
      "explicacion": "Los materiales PBR \"replican la física real de la luz sobre los materiales utilizando múltiples mapas de textura\"."
    },
    {
      "text": "¿Qué mapa de los materiales PBR muestra el color puro del objeto sin incluir sombras ni brillos?",
      "options": [
        "a) Specular.",
        "b) Base Color / Albedo / Diffuse.",
        "c) Ambient Occlusion (AO).",
        "d) Roughness."
      ],
      "correcta": "b",
      "explicacion": "El mapa Base Color / Albedo / Diffuse se define como \"el color puro sin sombras ni brillos\"."
    },
    {
      "text": "¿Qué mapa PBR simula el relieve y el detalle de la superficie mediante la interacción con la luz, pero sin modificar realmente la geometría del modelo?",
      "options": [
        "a) Height (Displacement).",
        "b) Normal.",
        "c) Subsurface Scattering (SSS).",
        "d) Metallic."
      ],
      "correcta": "b",
      "explicacion": "El mapa Normal \"simula relieve y detalle en la superficie interactuando con la luz (no modifica la geometría)\"."
    },
    {
      "text": "¿Cuál es la principal diferencia entre un mapa Normal y un mapa Height (Displacement)?",
      "options": [
        "a) El mapa Normal afecta al color base, mientras que el Height afecta a los brillos.",
        "b) El mapa Height se usa para polvo y rayaduras, mientras que el Normal para oquedades.",
        "c) El mapa Height desplaza y deforma realmente la malla geométrica, mientras que el Normal no lo hace.",
        "d) El mapa Normal requiere muchos más recursos computacionales que el mapa Height."
      ],
      "correcta": "c",
      "explicacion": "A diferencia del mapa Normal, que solo simula relieve sin alterar la geometría, el mapa Height \"desplaza (deforma) realmente la malla geométrica\" y requiere muchos recursos."
    },
    {
      "text": "¿Qué mapa define si las áreas de un modelo 3D son metálicas o dieléctricas?",
      "options": [
        "a) Metallic.",
        "b) Specular.",
        "c) Roughness.",
        "d) Base Color."
      ],
      "correcta": "a",
      "explicacion": "El mapa Metallic se encarga de definir \"qué áreas son metálicas o dieléctricas\"."
    },
    {
      "text": "¿Qué mapa PBR define la difusión de la luz determinando si un material es mate o pulido, y además sirve para representar polvo o rayaduras?",
      "options": [
        "a) Subsurface Scattering (SSS).",
        "b) Normal.",
        "c) Ambient Occlusion (AO).",
        "d) Roughness (Rugosidad)."
      ],
      "correcta": "d",
      "explicacion": "El mapa Roughness (Rugosidad) controla la \"difusión de la luz (material mate vs pulido)\" y sirve para \"polvo y rayaduras\"."
    },
    {
      "text": "¿Qué controla el mapa Specular en la configuración de materiales PBR?",
      "options": [
        "a) La cantidad de polvo sobre una superficie.",
        "b) El nivel de reflexión de la luz.",
        "c) Las sombras de contacto en oquedades.",
        "d) El relieve puro de la textura de la imagen."
      ],
      "correcta": "b",
      "explicacion": "El mapa Specular es responsable de definir el \"nivel de reflexión de luz\"."
    },
    {
      "text": "En materiales PBR, ¿qué representan los mapas de Ambient Occlusion (AO)?",
      "options": [
        "a) El color base sin alteraciones de luz.",
        "b) La refracción de la luz a través de objetos transparentes.",
        "c) Sombras de contacto, marcando en escala de grises zonas oscuras en oquedades y zonas cóncavas.",
        "d) Deformaciones físicas en los polígonos del modelo."
      ],
      "correcta": "c",
      "explicacion": "El mapa Ambient Occlusion (AO) se describe como \"Sombras de contacto. Escala de grises marcando zonas oscuras en oquedades y zonas cóncavas\"."
    },
    {
      "text": "¿Qué fenómeno físico trata de simular el mapa de Subsurface Scattering (SSS)?",
      "options": [
        "a) La reflexión metálica perfecta como la de un espejo.",
        "b) La refracción de la luz al atravesar objetos traslúcidos.",
        "c) La opacidad total de materiales inorgánicos.",
        "d) La deformación de la superficie producida por mapas de altura."
      ],
      "correcta": "b",
      "explicacion": "Subsurface Scattering (SSS) simula la \"refracción de la luz al atravesar objetos traslúcidos\"."
    },
    {
      "text": "Según los apuntes, ¿qué objetos o materiales se benefician del uso del mapa Subsurface Scattering (SSS)?",
      "options": [
        "a) Metales oxidados y maderas desgastadas.",
        "b) Espejos y superficies cromadas.",
        "c) Piel humana y cera.",
        "d) Vidrio y plástico duro."
      ],
      "correcta": "c",
      "explicacion": "El temario lista la \"piel humana, cera\" como ejemplos al hablar de Subsurface Scattering (SSS)."
    },
    {
      "text": "¿Qué mapa deberías emplear si tu objetivo es marcar claramente las zonas oscuras dentro de oquedades de una superficie utilizando una escala de grises?",
      "options": [
        "a) Height (Displacement).",
        "b) Metallic.",
        "c) Ambient Occlusion (AO).",
        "d) Base Color."
      ],
      "correcta": "c",
      "explicacion": "El Ambient Occlusion se usa específicamente como \"Escala de grises marcando zonas oscuras en oquedades y zonas cóncavas\"."
    },
    {
      "text": "En el software Blender, ¿qué atajo de teclado permite visualizar los materiales?",
      "options": [
        "a) M",
        "b) Z",
        "c) U",
        "d) Shift + A"
      ],
      "correcta": "b",
      "explicacion": "El texto indica claramente que en Blender los materiales \"se visualizan con atajo Z\"."
    },
    {
      "text": "En Blender, ¿qué herramienta permite la creación de materiales avanzados mediante un sistema de nodos?",
      "options": [
        "a) Slate Material Editor.",
        "b) Compositor.",
        "c) Compact Material Editor.",
        "d) Shader Editor."
      ],
      "correcta": "d",
      "explicacion": "El \"Shader Editor\" en Blender es la herramienta que \"crea materiales avanzados por nodos\"."
    },
    {
      "text": "En Blender, ¿para qué se utiliza la herramienta \"Compositor\"?",
      "options": [
        "a) Para visualizar los materiales en tiempo real en el viewport.",
        "b) Para gestionar capas y el postprocesado del render final.",
        "c) Para generar coordenadas UVW primitivas.",
        "d) Para modelar mallas mediante desplazamientos PBR."
      ],
      "correcta": "b",
      "explicacion": "El texto señala que el Compositor \"gestiona capas y postprocesado del render final\"."
    },
    {
      "text": "¿Qué addon menciona el documento como útil para trabajar en Blender?",
      "options": [
        "a) UVW Map Master.",
        "b) OSL Generator.",
        "c) Node Wrangler.",
        "d) PBR Texture Pack."
      ],
      "correcta": "c",
      "explicacion": "El resumen destaca \"Addon útil: Node Wrangler\" dentro del apartado de Blender."
    },
    {
      "text": "En 3DS Max, ¿qué editor se caracteriza por ser moderno y estar basado en nodos?",
      "options": [
        "a) Shader Editor.",
        "b) Compositor.",
        "c) Compact Material Editor.",
        "d) Slate Material Editor."
      ],
      "correcta": "d",
      "explicacion": "En 3DS Max, el \"Slate Material Editor\" es el \"Editor moderno basado en nodos\"."
    },
    {
      "text": "¿Para qué tipo de tareas está pensado el Compact Material Editor de 3DS Max?",
      "options": [
        "a) Para aplicar materiales complejos de Subsurface Scattering.",
        "b) Para desenvolverse mapas UVW en personajes.",
        "c) Para el postprocesado final del render.",
        "d) Para materiales simples de forma tradicional."
      ],
      "correcta": "d",
      "explicacion": "El \"Compact Material Editor\" en 3DS Max se define como \"Tradicional, para materiales simples\"."
    },
    {
      "text": "¿Qué describe correctamente el proceso de \"Mapeado UVW\"?",
      "options": [
        "a) El cálculo de rebotes de luz en una escena 3D.",
        "b) El proceso de proyectar coordenadas 2D sobre una malla 3D.",
        "c) La creación de texturas mediante algoritmos procedurales.",
        "d) La deformación real de la malla a partir de fotografías."
      ],
      "correcta": "b",
      "explicacion": "El temario define el mapeado UVW como \"El proceso de proyectar coordenadas 2D sobre una malla 3D\"."
    },
    {
      "text": "En relación a las coordenadas del Mapeado UVW, ¿con qué ejes cartesianos se corresponden normalmente U y V?",
      "options": [
        "a) Z e Y.",
        "b) X e Y.",
        "c) X y Z.",
        "d) W y Z."
      ],
      "correcta": "b",
      "explicacion": "El texto relaciona las coordenadas de la siguiente manera: U (X), V (Y)."
    },
    {
      "text": "¿Para qué suele utilizarse la coordenada W en el mapeado UVW?",
      "options": [
        "a) Para el eje X en texturas 2D.",
        "b) Para la iluminación ambiental.",
        "c) En animación y texturas procedurales.",
        "d) Para reducir estiramientos en topologías complejas."
      ],
      "correcta": "c",
      "explicacion": "La coordenada W corresponde a \"(Z, usado en animación y procedurales)\" según los apuntes."
    },
    {
      "text": "¿Cuándo resulta más útil el uso del mapeado primitivo Plano (Planar)?",
      "options": [
        "a) Cuando se quiere envolver completamente un objeto esférico sin cortes.",
        "b) Cuando la cara a texturizar es paralela al plano de proyección.",
        "c) Cuando se trabaja con personajes complejos de animación 3D.",
        "d) Cuando el modelo tiene forma de tubo con tapas en los extremos."
      ],
      "correcta": "b",
      "explicacion": "El mapeado Plano (Planar) es \"Útil si la cara es paralela al plano de proyección\"."
    },
    {
      "text": "Si aplicamos un mapeado primitivo Cúbico (Box) a un modelo, ¿qué comportamiento veremos en la textura?",
      "options": [
        "a) La textura se proyectará exclusivamente desde la cámara.",
        "b) La textura envolverá todo el modelo causando \"pellizcos\" en los polos.",
        "c) La textura se repetirá en los 6 lados, como si fuera un cubo.",
        "d) La textura se mapeará perfectamente sin importar la geometría del objeto."
      ],
      "correcta": "c",
      "explicacion": "El mapeado Cúbico \"Repite el mapa en los 6 lados de un cubo\"."
    },
    {
      "text": "¿Qué efecto negativo suele generar el mapeado esférico en un modelo 3D?",
      "options": [
        "a) Distorsión severa en los 6 lados del cubo de proyección.",
        "b) La imposibilidad de animar la coordenada W.",
        "c) Genera cortes (seams) a lo largo de todo el ecuador del objeto.",
        "d) Envuelve hasta los polos, lo que genera \"pellizcos\"."
      ],
      "correcta": "d",
      "explicacion": "El texto indica explícitamente que el mapeado esférico \"genera pellizcos\" al envolver hasta los polos."
    },
    {
      "text": "Al utilizar un mapeado cilíndrico en un modelo, ¿en qué zona suele presentar mayores dificultades de proyección?",
      "options": [
        "a) En los lados laterales del cilindro.",
        "b) En las tapas superior e inferior.",
        "c) En la zona central del objeto.",
        "d) En los materiales que usan texturas procedurales."
      ],
      "correcta": "b",
      "explicacion": "El resumen describe el mapeado cilíndrico como \"Envuelve por los lados (difícil en las tapas)\"."
    },
    {
      "text": "¿Qué es el mapeado \"Unwrap UVW\"?",
      "options": [
        "a) Un editor de materiales basado en nodos de 3DS Max.",
        "b) Un tipo de mapeado básico recomendado para cubos perfectos.",
        "c) Una técnica avanzada para \"desenvolver\" una malla compleja sobre un plano 2D.",
        "d) Una textura procedural que evita los cortes o seams."
      ],
      "correcta": "c",
      "explicacion": "El Mapeado Unwrap UVW se define como una \"Técnica avanzada para 'desenvolver' (unwrap) una malla compleja\"."
    },
    {
      "text": "¿Cuál es el objetivo principal de utilizar la técnica Unwrap UVW en lugar de mapeados primitivos?",
      "options": [
        "a) Reducir las deformaciones y estiramientos en mallas complejas (ej. personajes).",
        "b) Modificar la geometría de un objeto ahorrando recursos del sistema.",
        "c) Generar resoluciones infinitas en texturas fotográficas.",
        "d) Eliminar la necesidad de utilizar materiales PBR."
      ],
      "correcta": "a",
      "explicacion": "La técnica de Unwrap UVW se aplica para desenvolver una malla compleja \"reduciendo deformaciones y estiramientos\"."
    },
    {
      "text": "¿De qué factor depende críticamente que la técnica de mapeado Unwrap UVW sea exitosa?",
      "options": [
        "a) De que el material no tenga mapa de Height.",
        "b) De que se use el software 3DS Max en vez de Blender.",
        "c) De que se apliquen previamente texturas procedurales a la malla.",
        "d) De que la topología del modelo sea buena."
      ],
      "correcta": "d",
      "explicacion": "El documento señala expresamente que el Unwrap UVW \"Depende críticamente de que la topología del modelo sea buena\"."
    },
    {
      "text": "Si al aplicar una textura basada en imagen notas que se ven claramente los bordes donde se junta una proyección y otra, ¿a qué problema del texturizado se está refiriendo el apunte?",
      "options": [
        "a) A la generación de \"cortes\" (seams) al envolver el modelo 3D.",
        "b) Al uso excesivo del Ambient Occlusion.",
        "c) Al efecto de pixelado provocado por texturas procedurales.",
        "d) Al desplazamiento excesivo generado por el mapa Height."
      ],
      "correcta": "a",
      "explicacion": "El apunte señala que las texturas por imágenes \"Tienen el problema de generar 'cortes' (seams) al envolver el modelo 3D\"."
    },
    {
      "text": "¿Qué función principal cumple un Shader (Sombreador) en el entorno del 3D?",
      "options": [
        "a) Un programa que calcula el color de cada píxel en función de la luz y material.",
        "b) Un algoritmo que genera formas geométricas complejas en el modelo tridimensional.",
        "c) Un conjunto de nodos que solo se utiliza para gestionar texturas de baja calidad.",
        "d) Un complemento del sistema que sirve exclusivamente para el renderizado final 2D."
      ],
      "correcta": "a",
      "explicacion": "El shader es el software que procesa cómo los materiales, luces y sombras afectan el color de cada píxel final."
    },
    {
      "text": "¿Cuál es la característica principal de los Materiales Físicos Básicos?",
      "options": [
        "a) Se caracterizan por emplear únicamente mapas de texturas fotográficas de alta calidad.",
        "b) Se definen mediante propiedades físicas simples como rugosidad, transparencia y el IOR.",
        "c) Siempre requieren del uso de texturas procedurales para generar volumen y transparencia.",
        "d) Se aplican exclusivamente a elementos orgánicos utilizando mapas de desplazamiento real."
      ],
      "correcta": "b",
      "explicacion": "No utilizan texturas, sino que se configuran con propiedades como color base, IOR y transparencia (ej. plástico)."
    },
    {
      "text": "¿Qué ventaja principal destacan en el uso de texturas procedurales?",
      "options": [
        "a) Permiten resoluciones infinitas, no se pixelan y evitan los cortes en su repetición.",
        "b) Facilitan la creación rápida de arañazos y suciedad específica con un alto realismo.",
        "c) Su principal ventaja es que requieren muy pocos conocimientos matemáticos avanzados.",
        "d) Generan relieves reales en la geometría sin utilizar mapas de desplazamiento complejos."
      ],
      "correcta": "a",
      "explicacion": "Al ser algoritmos matemáticos, pueden escalarse sin perder calidad ni generar efecto sierra o costuras."
    },
    {
      "text": "¿Cuál de las siguientes es una desventaja de las texturas procedurales?",
      "options": [
        "a) Muestran problemas de cortes visibles al envolver repetidamente modelos complejos en 3D.",
        "b) Requieren de obligatoriamente de mapas UV perfectos para lograr resultados aceptables.",
        "c) Presentan gran dificultad para poder modelar detalles finos y tienen complejidad matemática.",
        "d) Producen pixelados evidentes siempre que la cámara realiza un acercamiento a las texturas."
      ],
      "correcta": "c",
      "explicacion": "Son difíciles para recrear elementos muy específicos o detallados, y requieren fórmulas matemáticas complejas."
    },
    {
      "text": "¿Qué problema frecuente suele presentarse con el uso de Texturizados (Imágenes)?",
      "options": [
        "a) Proporcionan gran realismo en suciedad, pero pueden generar cortes al aplicarse al 3D.",
        "b) Generan superficies continuas sin costuras gracias a su resolución matemática infinita.",
        "c) Solo pueden emplearse en motores de renderizado en tiempo real orientados a videojuegos.",
        "d) Modifican directamente la cantidad de polígonos del modelo para adaptarse al realismo."
      ],
      "correcta": "a",
      "explicacion": "Usar fotografías da gran realismo, pero genera el problema de los cortes o 'seams' al envolver una malla."
    },
    {
      "text": "Dentro de los Materiales PBR, ¿qué función tiene el mapa Base Color o Albedo?",
      "options": [
        "a) Representa el nivel de intensidad lumínica que todo el material absorbe en las oquedades.",
        "b) Corresponde al color puro del material y no incluye ninguna sombra ni brillo incorporado.",
        "c) Simula el efecto visual de pequeños detalles de relieve sobre superficies metalizadas lisas.",
        "d) Determina de manera absoluta qué porcentaje de luz atravesará cualquier material orgánico."
      ],
      "correcta": "b",
      "explicacion": "El Albedo es el color original del material desprovisto de información de sombras y brillos cocinados."
    },
    {
      "text": "¿Qué comportamiento tiene el mapa 'Normal' sobre una superficie 3D?",
      "options": [
        "a) Transforma la geometría original de la malla para añadir un volumen tridimensional real.",
        "b) Simula detalles de relieve interaccionando con la iluminación sin alterar la geometría.",
        "c) Determina únicamente si un material específico es de carácter netamente metálico o no.",
        "d) Oscurece las intersecciones poligonales para emular múltiples sombras en sus oquedades."
      ],
      "correcta": "b",
      "explicacion": "Simula variaciones en el relieve a través de la luz, sin llegar a deformar los polígonos del modelo real."
    },
    {
      "text": "¿Qué define principalmente el mapa 'Metallic' en la configuración PBR?",
      "options": [
        "a) Configura qué zonas exactas del material tienen un comportamiento dieléctrico o de metal.",
        "b) Aumenta significativamente el índice de refracción general cuando el material es cristal.",
        "c) Establece un mapa de relieve complejo que interactúa con las diversas luces especulares.",
        "d) Emula la forma en la que la luz rebota bajo la superficie creando brillos traslúcidos."
      ],
      "correcta": "a",
      "explicacion": "Establece, usualmente en blanco y negro, si una zona de la textura es un metal o un material dieléctrico."
    },
    {
      "text": "¿Para qué sirve el mapa 'Roughness' (Rugosidad)?",
      "options": [
        "a) Se emplea principalmente para colorear aquellas zonas que nunca reciben ninguna luz.",
        "b) Regula la difusión de los rayos de luz y ayuda a representar superficies mate o pulidas.",
        "c) Permite alterar la topología de la malla añadiendo múltiples irregularidades poligonales.",
        "d) Produce un marcado efecto de traslucidez que permite ver los fondos a través del objeto."
      ],
      "correcta": "b",
      "explicacion": "Controla qué tan dispersa sale la luz reflejada, ideal para marcar polvo, rayaduras y superficies mate."
    },
    {
      "text": "¿Qué particularidad tiene el mapa 'Height' o 'Displacement' respecto a otros?",
      "options": [
        "a) Altera la reflexión luminosa constante sin llegar a deformar en absoluto la malla visual.",
        "b) Modifica varios canales de luz ambiental para oscurecer las hendiduras más profundas.",
        "c) Deforma la malla geométrica real de la superficie y requiere de un alto consumo de recursos.",
        "d) Crea una gran ilusión óptica de profundidad mediante el uso combinado de vectores de luz."
      ],
      "correcta": "c",
      "explicacion": "A diferencia del mapa normal, este sí desplaza los vértices reales de la malla y por ello consume muchos recursos."
    },
    {
      "text": "¿Qué efecto logra el mapa 'Ambient Occlusion' (AO)?",
      "options": [
        "a) Utiliza diferentes mapas en escala de grises para simular sombras de contacto marcadas.",
        "b) Altera el color base general del objeto para volverlo completamente negro y sin brillos.",
        "c) Desplaza toda la geometría ubicada en zonas cóncavas para dotarlas de un gran realismo.",
        "d) Difumina completamente los rayos de luz directos que rebotan contra superficies pulidas."
      ],
      "correcta": "a",
      "explicacion": "El Ambient Occlusion refuerza las sombras en esquinas, oquedades y áreas de contacto entre superficies."
    },
    {
      "text": "¿Qué simula la técnica Subsurface Scattering (SSS)?",
      "options": [
        "a) Crea múltiples efectos de relieve simulado sobre superficies imitando desgastes de metales.",
        "b) Recrea la gran refracción de luz cuando logra atravesar materiales traslúcidos como cera.",
        "c) Genera sombras grises artificiales muy marcadas en todas las uniones entre dos polígonos.",
        "d) Multiplica notablemente la cantidad de reflejos producidos por una superficie reflectante."
      ],
      "correcta": "b",
      "explicacion": "Imita el paso y dispersión de la luz a través de superficies translúcidas como piel, cera o mármol."
    },
    {
      "text": "En el contexto de Blender, ¿qué herramienta central se usa para crear materiales complejos?",
      "options": [
        "a) El sistema Shader Editor es el que permite organizar las capas de texturas preexistentes.",
        "b) El editor principal para crear materiales basados en sistemas de nodos es Shader Editor.",
        "c) Para cambiar directamente la textura activa se debe emplear siempre el atajo de teclado W.",
        "d) La función exclusiva Node Wrangler se emplea únicamente para optimizar mallas orgánicas."
      ],
      "correcta": "b",
      "explicacion": "El Shader Editor permite construir materiales avanzados conectando distintos nodos."
    },
    {
      "text": "¿Qué editor de materiales moderno utiliza 3DS Max basado en nodos?",
      "options": [
        "a) El editor Slate Material Editor es el sistema más moderno que funciona mediante nodos.",
        "b) El antiguo Compact Material Editor se usa exclusivamente para diseñar los mapas de UVW.",
        "c) Ambos sistemas de materiales exigen que el usuario domine lenguajes matemáticos puros.",
        "d) El tradicional Compact Material solo logra aplicar texturas procedentes de una cámara."
      ],
      "correcta": "a",
      "explicacion": "Slate Material Editor es la herramienta moderna de nodos en 3DS Max, frente a su predecesor Compact Material Editor."
    },
    {
      "text": "En el mapeado UVW, ¿qué representa la coordenada W?",
      "options": [
        "a) Las coordenadas U y V corresponden al espacio tridimensional de sombras generadas en AO.",
        "b) La letra W representa siempre el eje Z y se utiliza para animaciones y procedurales.",
        "c) El término general UVW hace referencia a tres famosos motores de renderizados modernos.",
        "d) La coordenada en U sirve exclusivamente para escalar grandes texturas fotográficas 8K."
      ],
      "correcta": "b",
      "explicacion": "W es la coordenada equivalente al eje Z y suele utilizarse para efectos de animación y mapas procedurales."
    },
    {
      "text": "¿Cuándo resulta más idóneo utilizar el mapeado primitivo 'Planar' (Plano)?",
      "options": [
        "a) Es siempre la mejor opción posible para cubrir cualquier elemento esférico sin pellizcos.",
        "b) Resulta especialmente útil cuando la cara del modelo es paralela al plano de proyección.",
        "c) Se basa en repetir un simple patrón infinito a lo largo de las variadas caras cilíndricas.",
        "d) Este método envuelve toda la malla a la perfección logrando evitar los cortes repetitivos."
      ],
      "correcta": "b",
      "explicacion": "El mapeado planar proyecta la textura desde un lado y es perfecto si la malla es plana y paralela."
    },
    {
      "text": "¿Qué problema suele ocurrir al aplicar un mapeado 'Esférico' en un modelo?",
      "options": [
        "a) Permite solucionar velozmente los problemas de cortes y de costuras en los modelos.",
        "b) Solo debe asignarse sobre formas completamente planas que necesiten muchos polígonos.",
        "c) Consigue envolver casi todo el modelo hasta llegar a los polos creando zonas pellizcadas.",
        "d) Es el único método de mapeado primitivo que evita totalmente la generación de sombras."
      ],
      "correcta": "c",
      "explicacion": "Al envolver la esfera, la textura se concentra y deforma en los polos, creando el clásico 'pellizco'."
    },
    {
      "text": "¿Cuál es el propósito del mapeado Unwrap UVW?",
      "options": [
        "a) Es la técnica que busca desenvolver mallas complejas sobre planos 2D mitigando tensiones.",
        "b) Se trata de un mecanismo procedimental que auto-genera texturas sobre todo el polígono 3D.",
        "c) Representa un modificador exclusivo que suaviza los polígonos cuidando mapas especulares.",
        "d) Consiste en el procedimiento elemental para combinar varias texturas en un único elemento."
      ],
      "correcta": "a",
      "explicacion": "Se utiliza para aplanar modelos tridimensionales complejos en 2D, controlando las deformaciones y estiramientos."
    },
    {
      "text": "¿De qué depende de manera crítica que el Unwrap UVW funcione adecuadamente?",
      "options": [
        "a) La eficiencia real de este proceso radica de usar texturas matemáticas sin ruido visual.",
        "b) Solamente puede lograr el éxito cuando un mapeado cúbico fue asignado a todo el polígono.",
        "c) Este complejo desenvolvimiento depende críticamente de tener una buena topología de malla.",
        "d) Todo el resultado resulta muy independiente de las características poligonales del objeto."
      ],
      "correcta": "c",
      "explicacion": "Si la geometría (topología) del modelo es mala o desordenada, será extremadamente difícil realizar un buen desenvolvimiento UVW."
    },
    {
      "text": "¿Cuál es la principal dificultad del mapeado primitivo 'Cilíndrico'?",
      "options": [
        "a) Garantiza que se puedan generar envoltorios perfectos arriba y abajo de la misma esfera.",
        "b) Envuelve adecuadamente las caras laterales del modelo tridimensional dificultando tapas.",
        "c) Permite proyectar grandes mapas fotográficos directamente en intersecciones cilíndricas.",
        "d) Trabaja con facilidad extrema sobre múltiples caras planas apuntando a distintos ángulos."
      ],
      "correcta": "b",
      "explicacion": "El mapeado cilíndrico funciona muy bien en los lados de un cilindro, pero es difícil mapear correctamente las bases superior e inferior (las tapas)."
    }
  ],
  "MAC_Tema_4_Tests.txt": [
    {
      "text": "¿Cuál es la principal diferencia conceptual entre Iluminación (Lighting) y Sombreado (Shading)?",
      "options": [
        "a) La iluminación se aplica a toda la superficie plana, mientras que el sombreado afecta a un punto específico de la cámara.",
        "b) La iluminación calcula el color de la luz mediante matemáticas en un punto específico, mientras que el sombreado define cómo aplicar este modelo a toda la superficie interpolando valores para darle aspecto tridimensional.",
        "c) La iluminación solo calcula las sombras proyectadas de los objetos y el sombreado añade texturas y color.",
        "d) Son dos términos indistinguibles para describir el mismo proceso matemático."
      ],
      "correcta": "b",
      "explicacion": "La iluminación se centra en el cálculo de la luz en un punto específico utilizando matemáticas y física, mientras que el shading o sombreado se ocupa de interpolar esos valores para toda la superficie del polígono."
    },
    {
      "text": "¿Qué característica es definitoria del modelo de Iluminación Local?",
      "options": [
        "a) Calcula exhaustivamente los reflejos rebotados entre todos los objetos.",
        "b) Es un proceso muy lento que no se puede utilizar en motores de tiempo real.",
        "c) Solo considera fuentes de luz directas, la posición del observador y las propiedades del material, sin tener en cuenta la luz reflejada por otros objetos.",
        "d) Permite generar de forma precisa efectos de refracción a través de cristal."
      ],
      "correcta": "c",
      "explicacion": "La iluminación local, a diferencia de la global, ignora la luz reflejada indirectamente por otros objetos y se limita a luces directas, lo que la hace rápida e ideal para tiempo real."
    },
    {
      "text": "En el modelo de iluminación básico de Phong (1975), ¿cuáles son los tres componentes que se suman para calcular el resultado final?",
      "options": [
        "a) Directa, Indirecta y Global.",
        "b) Lambert, Blinn y Gouraud.",
        "c) Radiosidad, Raytracing y Cáusticas.",
        "d) Ambiente, Difusa y Especular."
      ],
      "correcta": "d",
      "explicacion": "El modelo de Phong suma tres elementos fundamentales: la luz ambiente de fondo, la reflexión difusa de la superficie y el brillo especular."
    },
    {
      "text": "Dentro de los componentes del modelo de Phong, ¿de qué depende la luz Difusa según la Ley de Lambert?",
      "options": [
        "a) Exclusivamente de la posición de la cámara o el observador en el espacio.",
        "b) Del ángulo de reflexión que forma la luz al rebotar en otra pared adyacente.",
        "c) Del ángulo formado entre la normal de la superficie y la fuente de luz directa.",
        "d) De la cantidad de fotones capturados por el kd-tree."
      ],
      "correcta": "c",
      "explicacion": "La luz difusa varía según la ley de Lambert basándose en el ángulo entre la normal de la superficie y la luz, pero es independiente de la posición de la cámara."
    },
    {
      "text": "¿Cuál de las componentes del modelo de Phong básico se ve afectada por la posición de la cámara u observador?",
      "options": [
        "a) La luz Ambiente.",
        "b) La luz Difusa.",
        "c) El componente Especular.",
        "d) La atenuación por la distancia."
      ],
      "correcta": "c",
      "explicacion": "El brillo especular o reflejo concentrado cambia su posición percibida dependiendo directamente del observador y el ángulo de reflexión."
    },
    {
      "text": "¿Qué efecto visual, provocado por el Flat o Facet Shading, es una ilusión óptica del cerebro que exagera el contraste entre bandas oscuras y claras contiguas?",
      "options": [
        "a) Color Bleeding.",
        "b) Aliasing geométrico.",
        "c) Cáusticas de refracción.",
        "d) Mach Banding."
      ],
      "correcta": "d",
      "explicacion": "El Mach Banding es un fenómeno perceptivo humano que acentúa los bordes facetados generados por el Flat Shading."
    },
    {
      "text": "¿Cómo opera el método de Gouraud Shading (Smooth Shading)?",
      "options": [
        "a) Calcula el color una sola vez en el centro del polígono y pinta toda su extensión por igual.",
        "b) Interpola las normales de los vértices y luego recalcula la iluminación pixel a pixel.",
        "c) Calcula el color exclusivamente en los vértices del polígono e interpola ese color resultante hacia el interior (scanline).",
        "d) Divide los polígonos en múltiples parches y calcula las transferencias energéticas mediante factores de forma."
      ],
      "correcta": "c",
      "explicacion": "Gouraud calcula la luz en los vértices y simplemente interpola los colores resultantes para rellenar el polígono, a diferencia de otras técnicas."
    },
    {
      "text": "¿Qué desventaja principal tiene el Gouraud Shading en comparación con modelos de sombreado más detallados?",
      "options": [
        "a) Puede perder o ignorar brillos especulares si éstos inciden en el centro de un polígono grande, debido a que solo calcula la luz en los vértices.",
        "b) Genera Mach Banding intenso y bordes completamente planos.",
        "c) Es extremadamente lento y exige muchísima memoria RAM.",
        "d) Es imposible de utilizar en motores en tiempo real como OpenGL."
      ],
      "correcta": "a",
      "explicacion": "Como el color solo se evalúa en los vértices e interpola el resto, si un punto brillante de luz incide justo en medio del polígono no será detectado, a menos que un vértice coincida allí."
    },
    {
      "text": "¿Cuál es la diferencia principal entre el Phong Shading y el Gouraud Shading?",
      "options": [
        "a) Phong Shading interpola los colores desde los vértices, mientras que Gouraud interpola la densidad de fotones.",
        "b) Phong Shading interpola las normales desde los vértices hacia el interior y recalcula la luz pixel a pixel, logrando resultados más precisos y mejores brillos especulares.",
        "c) Gouraud es más realista que Phong porque calcula la luz por cada píxel de la malla tridimensional.",
        "d) Gouraud Shading es una versión optimizada de Phong y requiere muchos menos recursos para brillos."
      ],
      "correcta": "b",
      "explicacion": "Phong Shading interpola las normales (la orientación de la geometría) en vez de colores estáticos, recalculando la luz en cada píxel y mejorando así los reflejos, pero a costa de mayor carga de procesamiento. Las demás opciones describen modelos invertidos o incorrectos."
    },
    {
      "text": "¿Qué modelo de sombreado se cita explícitamente como una variante optimizada del Phong Shading?",
      "options": [
        "a) Gouraud Shading.",
        "b) Blinn Shading.",
        "c) Flat Shading.",
        "d) Path Tracing."
      ],
      "correcta": "b",
      "explicacion": "El texto menciona brevemente que el Blinn Shading es una variante optimizada del clásico Phong."
    },
    {
      "text": "¿Cómo se soluciona el problema de las anomalías visuales en la interpolación que surgen al tener vértices no compartidos o mala orientación en quads y n-gons?",
      "options": [
        "a) Aplicando un filtro post-procesado para desenfocar los bordes problemáticos.",
        "b) Utilizando un mapa de Radiosidad antes de hacer el sombreado.",
        "c) Triangular la malla siempre antes del shading para garantizar una geometría estable.",
        "d) Evitar la rotación de los modelos dentro de la escena."
      ],
      "correcta": "c",
      "explicacion": "Triangular siempre la malla convierte toda la geometría de quads o n-gons a polígonos de tres lados, resolviendo así ambigüedades en la interpolación."
    },
    {
      "text": "¿Qué significan las siglas BRDF en el contexto de iluminación?",
      "options": [
        "a) Basic Ray-Tracing Distribution Factor.",
        "b) Bidirectional Radiosity Dual Format.",
        "c) Bidirectional Reflectance Distribution Function.",
        "d) Blinn Reflection and Diffuse Function."
      ],
      "correcta": "c",
      "explicacion": "La sigla corresponde a Bidirectional Reflectance Distribution Function, una función matemática que define la reflectancia."
    },
    {
      "text": "¿Qué dispositivo real se utiliza para medir físicamente las propiedades BRDF de un material?",
      "options": [
        "a) Hemicubo tridimensional.",
        "b) Goniofotómetro.",
        "c) Osciloscopio lumínico.",
        "d) Espectrómetro de masas."
      ],
      "correcta": "b",
      "explicacion": "El Goniofotómetro es el aparato que mide cómo reacciona físicamente un material a la luz desde diferentes ángulos."
    },
    {
      "text": "Según la función BRDF, ¿cómo se comportan los materiales clasificados como Anisotrópicos (por ejemplo, metales pulidos)?",
      "options": [
        "a) Reflejan la luz de forma uniforme independientemente del ángulo, similar a un plástico.",
        "b) Atrapan por completo la luz, resultando en un material negro perfecto (superficie sin rebote).",
        "c) Tienen una reflexión que cambia o varía dependiendo de la dirección de la que proviene la luz.",
        "d) Emiten su propia luz al interactuar con otras fuentes de forma constante."
      ],
      "correcta": "c",
      "explicacion": "Los materiales anisotrópicos modifican su patrón de reflexión dependiendo del ángulo o dirección direccional (como los arañazos en el metal pulido), a diferencia de los isotrópicos."
    },
    {
      "text": "¿Qué fenómeno de iluminación global se caracteriza por una interreflexión difusa donde la luz rebota y adquiere el tono de la superficie sobre la que impacta?",
      "options": [
        "a) Ray Casting secundario.",
        "b) Atenuación inversa.",
        "c) Color Bleeding.",
        "d) Especularidad cruzada."
      ],
      "correcta": "c",
      "explicacion": "El Color Bleeding, o sangrado de color, ocurre cuando la luz rebota en una superficie tintada y baña a las superficies cercanas de ese color."
    },
    {
      "text": "¿Cuál es la finalidad de utilizar Mapas HDRI en la configuración de la escena 3D?",
      "options": [
        "a) Sustituir toda la geometría de la escena para ahorrar recursos.",
        "b) Envolver la escena para proporcionar una iluminación global realista y reflejos precisos basados en fotografías del mundo real.",
        "c) Aplicar un filtro de alto contraste a la renderización en tiempo real.",
        "d) Dividir la escena en parches y calcular la radiosidad más rápido."
      ],
      "correcta": "b",
      "explicacion": "Los HDRI (High Dynamic Range Images) tienen información de iluminación fotográfica y al envolver la escena proyectan luz realista y crean reflejos veraces sin necesidad de crear múltiples focos de luz artificiales."
    },
    {
      "text": "En la técnica de Ray-Tracing clásico, ¿desde dónde se trazan o lanzan los rayos inicialmente?",
      "options": [
        "a) Desde las superficies de los objetos hacia todas las fuentes de luz.",
        "b) De forma aleatoria dentro de la escena para calcular el brillo ambiental.",
        "c) Desde el observador (la cámara) hacia los objetos del entorno.",
        "d) Desde cada fuente de luz direccional hacia los polígonos."
      ],
      "correcta": "c",
      "explicacion": "A diferencia de cómo viaja la luz en la vida real, en el Ray-Tracing virtual es más eficiente lanzar los rayos al revés, partiendo de la cámara."
    },
    {
      "text": "¿Qué tipo de interacciones de la luz domina mejor el algoritmo original de Ray-Tracing?",
      "options": [
        "a) La luz indirecta ambiental y el rebote difuso.",
        "b) Reflexiones puras en espejos, refracciones y sombras nítidas.",
        "c) La luz rebotada en superficies altamente rugosas.",
        "d) Las manchas lumínicas en superficies de colores vivos."
      ],
      "correcta": "b",
      "explicacion": "El Ray-Tracing asume rebotes perfectos, por lo que es excelente para simular cristales, espejos y trazar \"shadow rays\" nítidos. Falla con la luz indirecta difusa."
    },
    {
      "text": "¿Por qué el clásico Ray-Tracing (espejos y cristal) NO funciona bien para calcular el efecto del Color Bleeding?",
      "options": [
        "a) Porque el Ray-Tracing asume rebotes directos y perfectos, y no está diseñado para manejar bien la interreflexión indirecta difusa en la que se basan estos efectos.",
        "b) Porque exige millones de parches geométricos.",
        "c) Porque no calcula la transparencia de los cristales y asume que todos los objetos son opacos.",
        "d) Porque lanza fotones que sobrecargan la memoria RAM antes de calcular la luz indirecta."
      ],
      "correcta": "a",
      "explicacion": "El Ray-tracing clásico simula rebotes tipo espejo, mientras que el Color Bleeding requiere rebotar múltiples rayos difusos en muchas direcciones."
    },
    {
      "text": "¿Cuál fue la característica fundamental del antiguo sistema \"Ray Casting\" ideado en 1968?",
      "options": [
        "a) Que requería la creación de un kd-tree para guardar los fotones en la memoria.",
        "b) Que calculaba millones de rebotes difusos secundarios con ecuaciones de Monte Carlo.",
        "c) Que solo determinaba la visibilidad de los objetos desde la cámara, sin procesar rebotes de luz secundarios.",
        "d) Que creaba cáusticas a través de volúmenes densos."
      ],
      "correcta": "c",
      "explicacion": "El Ray Casting fue el antecesor primitivo que determinaba qué polígonos estaban visibles en pantalla al chocar el rayo, pero se detenía ahí, sin simular reflejos."
    },
    {
      "text": "¿En qué principio se basa la técnica de Path Tracing para mejorar las limitaciones del Ray-Tracing?",
      "options": [
        "a) Lanza un único rayo perfecto que envuelve la escena con un mapa HDRI.",
        "b) Lanza nuevos rayos de forma aleatoria mediante el método de Monte Carlo al colisionar con una superficie, para rastrear fuentes de luz directa e indirecta.",
        "c) Ignora la cámara y solo envía fotones desde las lámparas a través de un hemicubo.",
        "d) Interpola el color entre todos los polígonos grandes sin requerir luz artificial."
      ],
      "correcta": "b",
      "explicacion": "El Path Tracing usa algoritmos estocásticos (Monte Carlo) que generan rayos aleatorios tras impactar, explorando la escena en busca de todo tipo de iluminaciones y rebotes."
    },
    {
      "text": "¿Qué problema colateral principal introduce el método de Path Tracing en la imagen renderizada?",
      "options": [
        "a) Bordes muy afilados conocidos como Mach Banding en todos los modelos.",
        "b) Ruido y granulado visual abundante que solo desaparece aplicando numerosas muestras y tiempo de cálculo.",
        "c) Brillos excesivamente perfectos sobre superficies mates, arruinando el realismo.",
        "d) La imposibilidad de capturar reflejos puros tipo espejo."
      ],
      "correcta": "b",
      "explicacion": "La dispersión aleatoria de los rayos causa gran variabilidad que el ojo percibe como ruido o grano en las primeras pasadas, necesitando converger durante largo rato."
    },
    {
      "text": "La Radiosidad (Radiosity) es un algoritmo diseñado primariamente para simular:",
      "options": [
        "a) Reflexiones perfectas y el efecto óptico de mirar a través del cristal.",
        "b) La visibilidad primaria de la cámara en escenas de gran poligonaje.",
        "c) El aspecto metálico de superficies anisotrópicas.",
        "d) Interacciones difusas perfectas y el principio de conservación de energía entre todas las superficies."
      ],
      "correcta": "d",
      "explicacion": "El objetivo de la Radiosidad es simular el intercambio de calor/luz en entornos cerrados, enfocado puramente a rebotes difusos perfectos e indirectos."
    },
    {
      "text": "Para realizar los cálculos de la técnica de Radiosidad, ¿qué operación estructural se debe aplicar primero a los modelos de la escena?",
      "options": [
        "a) Reemplazar todos los triángulos por superficies NURBS matemáticas.",
        "b) Convertir todos los modelos opacos en materiales dieléctricos.",
        "c) Dividir la escena geométricamente en piezas matemáticas llamadas \"Patches\" o parches.",
        "d) Guardar los vértices en un archivo de memoria RAM como kd-tree."
      ],
      "correcta": "c",
      "explicacion": "La radiosidad subdivide las mallas en pequeños fragmentos emisores-receptores denominados Patches."
    },
    {
      "text": "¿Qué describe el término \"Factor de Forma\" (Form Factor) en la Radiosidad?",
      "options": [
        "a) Es el índice de refracción físico de un objeto transparente que desvía la luz.",
        "b) Es una relación estrictamente geométrica que determina el porcentaje de energía que sale de un parche y logra impactar en otro.",
        "c) Es un multiplicador para ajustar el color de los bordes suavizados de la malla.",
        "d) Es el número de rebotes aleatorios que lanza el Path Tracing."
      ],
      "correcta": "b",
      "explicacion": "Es una propiedad matemática que mide cuánta \"visión directa\" tiene un parche i sobre el parche j, dictando así la cantidad de luz a transferirse. No depende de materiales."
    },
    {
      "text": "Al hablar del Factor de Forma, se destaca una ventaja clave de su cálculo frente a otros modelos. ¿Cuál es?",
      "options": [
        "a) Se puede ignorar por completo la topología de la malla original.",
        "b) Exige un goniofotómetro para calibrarlo virtualmente antes del render.",
        "c) No depende de los materiales de la superficie ni de la vista del observador (la cámara).",
        "d) Modifica físicamente las texturas y requiere recalculado continuo por cada frame."
      ],
      "correcta": "c",
      "explicacion": "Al ser una relación estrictamente geométrica entre parches, no le afecta cómo se pinten ni por dónde mire la cámara, siendo una fase preparatoria."
    },
    {
      "text": "¿Cuál de los siguientes pares describe dos métodos utilizados para calcular el Factor de Forma en Radiosidad?",
      "options": [
        "a) Hemicubo y Area sampling.",
        "b) Z-Buffer y Ray Casting.",
        "c) Monte Carlo y HDRI.",
        "d) Gouraud y Phong interpolation."
      ],
      "correcta": "a",
      "explicacion": "El texto indica textualmente: \"Métodos de cálculo: Hemicubo (rápido, con aliasing) y Area sampling (preciso, más usado)\"."
    },
    {
      "text": "¿Qué ventaja ofrece que el algoritmo de Radiosidad sea \"independiente de la vista\"?",
      "options": [
        "a) Permite exportar los archivos a cualquier motor gráfico sin pérdidas geométricas.",
        "b) El cálculo se realiza para toda la escena, permitiendo que la cámara se pueda mover sin tener que recalcular las luces difusas.",
        "c) Que no es necesario colocar fuentes de luz en la escena porque la cámara crea un foco de iluminación global.",
        "d) Los rebotes de luz nunca terminan, haciéndolo ideal para vídeos hiperrealistas."
      ],
      "correcta": "b",
      "explicacion": "Al estar los valores de luz difusa \"horneados\" o almacenados en los parches independientemente de la cámara, moverse por la escena es barato."
    },
    {
      "text": "¿Cuál es la limitación visual fundamental del algoritmo puro de Radiosidad?",
      "options": [
        "a) Solamente puede iluminar zonas afectadas por luces en movimiento.",
        "b) Presenta problemas al calcular rebotes difusos como el color bleeding.",
        "c) No puede calcular brillos especulares ni reflejos y exige mucho coste en la subdivisión geométrica.",
        "d) Consume toda la memoria RAM para albergar millones de fotones invisibles."
      ],
      "correcta": "c",
      "explicacion": "Por su naturaleza difusa, la Radiosidad fracasa intentando simular brillos o reflejos propios de cristales y metales pulidos."
    },
    {
      "text": "¿Cómo abordan típicamente los motores de renderizado el problema de la Radiosidad con los reflejos especulares?",
      "options": [
        "a) Creando un modelo anisotrópico que aplique Gouraud Shading en paralelo.",
        "b) A través de un método híbrido de dos pasadas: combinando Radiosity para la luz difusa con Raytracing para los reflejos.",
        "c) Aumentando la densidad del kd-tree hasta disolver los bordes.",
        "d) Convirtiendo las imágenes a mapas HDRI durante el post-procesado."
      ],
      "correcta": "b",
      "explicacion": "El texto indica literalmente \"Solución: Método de dos pasadas Radiosity + Raytracing\" para cubrir los huecos técnicos mutuos."
    },
    {
      "text": "A diferencia de la Radiosidad, ¿qué particularidad tiene el algoritmo de Mapeo de Fotones (Photon Mapping) respecto a la geometría de los modelos 3D?",
      "options": [
        "a) Depende exclusivamente del tamaño de los polígonos, obligando a subdividir intensamente.",
        "b) Es un algoritmo de dos pasadas pero es independiente de la geometría y no requiere subdividirla en patches.",
        "c) Sustituye las normales geométricas por rayos aleatorios.",
        "d) Utiliza solo puntos tridimensionales eliminando las caras de los modelos."
      ],
      "correcta": "b",
      "explicacion": "Una ventaja central es que no afecta la estructura de la malla en sí porque se apoya en fotones dispersos."
    },
    {
      "text": "Durante la fase 1 (Construcción o Emisión) de los Mapas de Fotones, ¿qué ocurre en la escena?",
      "options": [
        "a) Se disparan rayos desde la lente de la cámara que detectan texturas de los polígonos.",
        "b) Se colocan parches que emiten una fuerza radiante basada en factores de forma usando hemicubos.",
        "c) Se lanzan fotones desde las fuentes de luz que rebotan o se absorben, guardándose en un kd-tree.",
        "d) Se envuelve toda la geometría con una imagen cúbica HDRI."
      ],
      "correcta": "c",
      "explicacion": "Los fotones se disparan desde los focos luminosos, simulan el viaje físico y reposan sus datos en una estructura kd-tree para su uso futuro."
    },
    {
      "text": "¿Qué es un kd-tree en el contexto del mapeo de fotones?",
      "options": [
        "a) Una variante del Path Tracing.",
        "b) Un material isotrópico.",
        "c) Una estructura 3D en la cual se guardan las posiciones finales de los fotones emitidos.",
        "d) Un error de programación provocado por la excesiva cantidad de rebotes."
      ],
      "correcta": "c",
      "explicacion": "Es la estructura de datos espaciales donde los fotones impactados quedan guardados (memoria) tras la fase de construcción."
    },
    {
      "text": "La fase 2 del Mapeo de Fotones se denomina Renderizado (o Gathering). ¿Cómo funciona?",
      "options": [
        "a) Envía de vuelta los fotones a las luces para medir la energía residual.",
        "b) Calcula las sombras difusas interpolando normales de la malla de polígonos.",
        "c) Traza rayos desde la cámara y, al chocar, lee la densidad de fotones cercanos en el kd-tree para definir el nivel de iluminación del punto.",
        "d) Usa la imagen HDRI para pintar píxeles según la información de cámara."
      ],
      "correcta": "c",
      "explicacion": "Desde el observador (la cámara) se lanzan rayos que investigan cuántos fotones hay \"aparcados\" cerca del punto de impacto y calculan la iluminación a partir de su agrupación."
    },
    {
      "text": "¿Para simular qué fenómeno complejo es especialmente recomendado y eficiente el uso de Mapas de Fotones (Photon Mapping)?",
      "options": [
        "a) Las refracciones que concentran haces de luz formando dibujos curvos a través del cristal o agua (Cáusticas).",
        "b) Los reflejos idénticos y rectos de los espejos en un pasillo vacío.",
        "c) El aliasing que aparece al usar resoluciones muy bajas de imagen.",
        "d) La ilusión visual de alto contraste del Mach Banding."
      ],
      "correcta": "a",
      "explicacion": "La técnica permite concentrar multitudes de fotones pasando por áreas refractantes (lentes, vasos, líquidos), creando cáusticas de manera excelente."
    },
    {
      "text": "¿Cuál es un problema operativo que afecta frecuentemente a la técnica del Mapa de Fotones en la práctica?",
      "options": [
        "a) Limita seriamente los movimientos de cámara porque demanda un recálculo geométrico continuo.",
        "b) Requiere un goniofotómetro para medir las superficies o fallará en la simulación.",
        "c) Consume mucha cantidad de memoria RAM al almacenar millones de fotones y los objetos muy pequeños pueden quedar mal iluminados si son escasos.",
        "d) Descompone la imagen completa en ruido granulado puro que jamás converge."
      ],
      "correcta": "c",
      "explicacion": "La dependencia del almacenamiento masivo de fotones demanda muchísima memoria, y las mallas pequeñas pueden tener el defecto de no \"cazar\" suficientes fotones en su área."
    },
    {
      "text": "¿Qué técnica asume rebotes perfectos y maneja muy bien espejos y cristales pero NO la luz indirecta o difusa por sí sola?",
      "options": [
        "a) Radiosidad (Radiosity).",
        "b) Gouraud Shading.",
        "c) Mapas de Fotones.",
        "d) Ray-Tracing."
      ],
      "correcta": "d",
      "explicacion": "El Ray-tracing asume el rebote perfecto desde su origen. La radiosidad es todo lo contrario (asume puro difuso), y Gouraud es una técnica de shading."
    },
    {
      "text": "¿Qué modelo de iluminación (Lighting) es más rápido de procesar y comúnmente usado en motores gráficos para videojuegos?",
      "options": [
        "a) Iluminación Local.",
        "b) Iluminación Global.",
        "c) Radiosidad Híbrida.",
        "d) Path Tracing Direccional."
      ],
      "correcta": "a",
      "explicacion": "Al no tener en cuenta reflexiones de otros objetos, la iluminación local realiza los cálculos al instante, siendo perfecta para DirectX/OpenGL."
    },
    {
      "text": "En Iluminación Local, ¿qué afirma la ley sobre la atenuación de la luz?",
      "options": [
        "a) Que el color de la luz se contamina progresivamente al tocar otras superficies.",
        "b) Que el brillo especular mutará al color del HDRI cuanto más tiempo pase.",
        "c) Que la intensidad de luz generada decrece gradualmente a medida que aumenta la distancia a la fuente lumínica.",
        "d) Que todas las luces terminan convirtiéndose en luz ambiente en un entorno cerrado."
      ],
      "correcta": "c",
      "explicacion": "La atenuación afecta a la potencia de la luz, disminuyéndola acorde a una fórmula conforme un objeto se aleja de la lámpara."
    },
    {
      "text": "¿Cómo soluciona Blinn Shading el procesamiento respecto a Phong Shading?",
      "options": [
        "a) Cambia la iluminación a un formato volumétrico de kd-tree.",
        "b) Es una variante optimizada que agiliza el recálculo pixel a pixel de Phong.",
        "c) Modifica el brillo de la luz ambiente a luz especular.",
        "d) Evita el cálculo de los vértices reescribiendo la posición de la cámara."
      ],
      "correcta": "b",
      "explicacion": "Se expone en el texto como una \"Variante optimizada de Phong\", persiguiendo los mismos resultados con mejor rendimiento."
    },
    {
      "text": "¿Cuál es la principal diferencia conceptual entre los procesos de Iluminación y Sombreado (Shading) en gráficos 3D?",
      "options": [
        "a) La iluminación calcula la luz en un punto específico, mientras el sombreado aplica este modelo a toda la superficie interpolando valores.",
        "b) La iluminación interpola el color a través del polígono, mientras que el sombreado determina la intensidad luminosa de toda la escena.",
        "c) La iluminación solo se aplica a los vértices de la geometría, mientras que el sombreado se procesa exclusivamente en el centro de las caras.",
        "d) La iluminación global sustituye al sombreado en tiempo real, mientras que la iluminación local necesita interpolar normales constantemente."
      ],
      "correcta": "a",
      "explicacion": "La iluminación usa ecuaciones físicas para puntos concretos, y el sombreado define cómo cubrir todo el polígono usando esos cálculos."
    },
    {
      "text": "Dentro del Modelo de Iluminación Básico de Phong (1975), ¿qué característica define mejor a la componente Ambiente?",
      "options": [
        "a) Simula la iluminación indirecta de forma constante y afecta globalmente a todos los objetos de la escena por igual.",
        "b) Depende de la posición de la cámara y genera brillos concentrados que simulan la luz reflejada directamente al ojo.",
        "c) Calcula la atenuación de la luz basándose en el ángulo entre la normal de la superficie y la dirección de los rayos.",
        "d) Requiere calcular interacciones complejas de rebotes de luz entre múltiples objetos para generar sombras muy realistas."
      ],
      "correcta": "a",
      "explicacion": "La luz ambiente en el modelo básico de Phong es una simplificación constante que afecta a toda la escena globalmente, sin calcular rebotes reales."
    },
    {
      "text": "¿Qué factor geométrico es determinante para calcular la intensidad de la luz en la componente Difusa según la Ley de Lambert?",
      "options": [
        "a) El ángulo formado entre el vector normal de la superficie iluminada y la dirección hacia la fuente de luz.",
        "b) El ángulo formado entre el vector de reflexión especular y la dirección en la que se encuentra la cámara.",
        "c) La distancia euclídea exacta entre la cámara del observador y el centro geométrico del polígono iluminado.",
        "d) El ángulo de refracción calculado internamente cuando el rayo atraviesa materiales transparentes o cristalinos."
      ],
      "correcta": "a",
      "explicacion": "La componente difusa (Lambert) depende exclusivamente del ángulo entre la normal de la superficie y la fuente luminosa, independientemente de la cámara."
    },
    {
      "text": "En el modelo de iluminación local clásico, ¿cuál de las siguientes componentes lumínicas varía su resultado si el observador cambia de posición?",
      "options": [
        "a) La componente Especular, ya que los brillos concentrados cambian al modificar el ángulo de reflexión hacia la cámara.",
        "b) La componente Difusa, debido a que la dispersión de la luz depende directamente del punto de vista del usuario.",
        "c) La componente Ambiente, porque la luz de fondo necesita ajustarse al ángulo de visión principal de la escena.",
        "d) La atenuación lumínica, porque la distancia a la fuente de luz se recalcula desde la nueva posición del ojo."
      ],
      "correcta": "a",
      "explicacion": "La luz especular es la única del modelo básico de Phong que depende del punto de vista (cámara), ya que calcula el reflejo directo hacia el observador."
    },
    {
      "text": "¿Por qué el método de sombreado Gouraud se considera una mejora técnica significativa frente al Flat Shading tradicional?",
      "options": [
        "a) Porque calcula la iluminación en los vértices e interpola el color internamente, eliminando el aspecto facetado de la malla.",
        "b) Porque interpola los vectores normales píxel a píxel, logrando brillos especulares perfectos en grandes polígonos.",
        "c) Porque calcula la iluminación una sola vez en el centro de la cara, optimizando el rendimiento general del renderizado.",
        "d) Porque emplea un mapa de fotones para determinar la luz rebotada antes de aplicar el color a los distintos polígonos."
      ],
      "correcta": "a",
      "explicacion": "Gouraud Shading calcula el color en los vértices y lo interpola, lo que suaviza las superficies y elimina los bordes duros típicos del Flat Shading."
    },
    {
      "text": "A pesar de suavizar las superficies, ¿cuál es un defecto visual conocido que puede ocurrir al utilizar Gouraud Shading?",
      "options": [
        "a) Puede omitir o deformar brillos especulares si el punto de máxima reflexión cae en el centro de un polígono grande.",
        "b) Genera un fuerte efecto de 'Mach Banding' en todas las aristas compartidas, exagerando el contraste de los colores.",
        "c) Requiere un volumen excesivo de memoria RAM, ya que almacena mapas de interpolación pesados para cada vértice.",
        "d) Es incapaz de calcular la componente de luz ambiental, dejando las áreas en sombra completamente teñidas de negro."
      ],
      "correcta": "a",
      "explicacion": "Como Gouraud interpola colores desde los vértices, si un brillo especular debe aparecer justo en el medio de un polígono grande, el cálculo no lo captará correctamente."
    },
    {
      "text": "En términos de interpolación geométrica durante el rasterizado, ¿qué procesa internamente el modelo de Phong Shading?",
      "options": [
        "a) Interpola las normales desde los vértices hacia todo el interior y recalcula la iluminación completa píxel a píxel.",
        "b) Interpola exclusivamente los valores de color calculados en los vértices para rellenar progresivamente el polígono.",
        "c) Interpola posiciones geométricas desde el centro de gravedad de la cara hacia sus bordes para calcular la luz.",
        "d) Interpola fotones almacenados previamente en un árbol tridimensional para determinar la intensidad del brillo."
      ],
      "correcta": "a",
      "explicacion": "El Phong Shading destaca por interpolar normales a través del polígono y ejecutar el cálculo de iluminación por cada píxel, mejorando mucho el especular."
    },
    {
      "text": "¿Qué propiedad describe correctamente el comportamiento de la luz en un material anisotrópico según la función BRDF?",
      "options": [
        "a) La cantidad y dirección de la luz reflejada cambia dependiendo del ángulo o dirección en que la luz incide sobre él.",
        "b) La reflexión luminosa se produce de manera perfectamente uniforme e idéntica en todas las direcciones posibles.",
        "c) Toda la luz incidental es completamente absorbida por la superficie, sin producir rebotes especulares o difusos.",
        "d) El material emite luz propia, comportándose de manera idéntica a una fuente de radiación constante y directa."
      ],
      "correcta": "a",
      "explicacion": "Los materiales anisotrópicos (como el metal cepillado) tienen reflexiones que varían dependiendo de la dirección geométrica de la luz y la superficie."
    },
    {
      "text": "¿Cuál es una limitación estructural del algoritmo clásico de Ray-Tracing cuando procesa escenas tridimensionales?",
      "options": [
        "a) No gestiona correctamente la iluminación indirecta difusa (color bleeding) porque asume rebotes lumínicos perfectos.",
        "b) Es completamente incapaz de calcular reflexiones puras o sombras nítidas originadas por focos de luz puntuales.",
        "c) No puede generar imágenes desde la perspectiva de la cámara, requiriendo lanzar los rayos desde las propias luces.",
        "d) Sustituye la geometría de la escena por pequeñas celdas, limitando severamente la resolución máxima del render."
      ],
      "correcta": "a",
      "explicacion": "El Ray-Tracing clásico es excelente para espejos y cristales (rebotes perfectos), pero no maneja bien la dispersión difusa de la luz rebotada (color bleeding)."
    },
    {
      "text": "¿Qué técnica algorítmica utiliza el Path Tracing que provoca la aparición de granulado (ruido visual) en renders inacabados?",
      "options": [
        "a) El uso de algoritmos de Monte Carlo para lanzar rayos secundarios aleatorios al chocar buscando diversas fuentes de luz.",
        "b) La división matemática de la geometría en parches demasiado grandes, lo que genera errores de muestreo por hemicubos.",
        "c) La acumulación excesiva de densidad de fotones en estructuras kd-tree, colapsando la lectura por parte de la cámara.",
        "d) La interpolación lineal exclusiva de normales en los vértices sin procesar rebotes especulares en superficies complejas."
      ],
      "correcta": "a",
      "explicacion": "Path Tracing lanza rayos aleatorios (Monte Carlo) al rebotar; si no hay suficientes muestras, esta aletoriedad se percibe como ruido o grano en la imagen."
    },
    {
      "text": "¿Qué fenómeno lumínico específico de la iluminación global está diseñado para simular el algoritmo de Radiosidad?",
      "options": [
        "a) Las interacciones luminosas difusas perfectas y la conservación de la energía entre todas las superficies de la escena.",
        "b) Los reflejos especulares de alta precisión en objetos metálicos curvos y superficies reflectantes como los espejos.",
        "c) La refracción pura de rayos de luz que atraviesan líquidos o cristales, generando efectos de distorsión óptica.",
        "d) El comportamiento anisotrópico extremo de los materiales, basándose exclusivamente en datos goniofotométricos."
      ],
      "correcta": "a",
      "explicacion": "La Radiosidad es un método especializado en calcular cómo la luz rebota en superficies mates (interacciones difusas) preservando la energía."
    },
    {
      "text": "Para calcular matemáticamente la dispersión de luz difusa, ¿qué operación realiza el algoritmo de Radiosidad sobre la escena?",
      "options": [
        "a) Divide toda la geometría en pequeñas piezas llamadas 'patches' para tratar cada una como emisora y receptora de luz.",
        "b) Lanza millones de fotones desde la cámara principal hasta impactar contra las mallas para almacenar sus trayectorias.",
        "c) Interpola los vértices de las sombras generadas por la luz ambiente y suaviza los bordes usando métodos matriciales.",
        "d) Aplica un mapa dinámico HDRI sobre los polígonos grandes sin requerir subdivisión alguna de la geometría original."
      ],
      "correcta": "a",
      "explicacion": "La Radiosidad subdivide la geometría en pequeños parches (patches) y calcula cómo la energía (luz) se transfiere entre ellos."
    },
    {
      "text": "En el contexto del cálculo por Radiosidad, ¿qué determina exclusivamente el valor del 'Factor de Forma' (Form Factor)?",
      "options": [
        "a) La relación puramente geométrica que define el porcentaje de energía que viaja directamente desde un parche a otro.",
        "b) La capacidad reflectante dependiente del punto de vista que tiene el material asignado a la superficie del parche.",
        "c) El nivel de energía especular que rebota en un ángulo concreto respecto a la posición de la cámara del observador.",
        "d) El número total de fotones almacenados en el kd-tree que logran impactar perpendicularmente contra el área evaluada."
      ],
      "correcta": "a",
      "explicacion": "El factor de forma depende exclusivamente de la geometría (distancia, ángulo y visibilidad entre dos parches), no de los materiales ni del punto de vista."
    },
    {
      "text": "¿Qué ventaja directa aporta la independencia de vista que caracteriza a los resultados del cálculo por Radiosidad?",
      "options": [
        "a) Permite mover la cámara libremente por la escena sin tener que recalcular las complejas interacciones de luz difusa.",
        "b) Facilita la modificación en tiempo real de los materiales especulares sin necesidad de preprocesar el mapa de fotones.",
        "c) Elimina por completo la necesidad de triangular los polígonos complejos antes de procesar las texturas aplicadas.",
        "d) Posibilita la creación de refracciones perfectas en cristales independientemente del ángulo en que incide la luz focal."
      ],
      "correcta": "a",
      "explicacion": "Al calcular las interacciones difusas entre parches de la escena global, el resultado es independiente del observador, permitiendo explorar la escena sin recalcular."
    },
    {
      "text": "A diferencia del Ray-Tracing clásico, ¿desde dónde se inician los trazados durante la fase de construcción en Photon Mapping?",
      "options": [
        "a) Los fotones se disparan desde las propias fuentes de luz luminosas hacia las diversas superficies de la escena 3D.",
        "b) Los trazados primarios se generan en el sensor virtual de la cámara y viajan en retroceso hacia los focos de luz.",
        "c) Los rayos de cálculo nacen exclusivamente en el centro de gravedad de cada objeto volumétrico presente en el nivel.",
        "d) Los haces se proyectan desde el observador rebotando indefinidamente hasta intersectar con un parche emisor difuso."
      ],
      "correcta": "a",
      "explicacion": "El mapa de fotones consta de una primera fase (emisión) donde se lanzan fotones desde las fuentes de luz hacia la escena."
    },
    {
      "text": "¿Qué fenómeno lumínico complejo simulan de manera especialmente eficiente los algoritmos basados en Mapas de Fotones?",
      "options": [
        "a) Las cáusticas generadas por la concentración de luz al atravesar objetos transparentes como agua o cristal curvo.",
        "b) El ruido de interpolación visual conocido como Mach Banding en objetos con baja resolución geométrica o facetada.",
        "c) La atenuación atmosférica producida por densas nubes de polvo y neblina frente a sistemas de Iluminación Local.",
        "d) El sombreado suave de vértices propio de Gouraud sin requerir el cálculo matemático directo de normales internas."
      ],
      "correcta": "a",
      "explicacion": "Los mapas de fotones son muy apreciados por su eficiencia y calidad al renderizar cáusticas (luz refractada/reflejada concentrada)."
    },
    {
      "text": "Durante la segunda fase del Photon Mapping (Gathering o renderizado), ¿cómo se determina la iluminación en un punto impactado?",
      "options": [
        "a) Se lee la densidad de los fotones almacenados previamente en la estructura espacial (kd-tree) cercana a ese impacto.",
        "b) Se dispara un rayo especular de Monte Carlo directamente hacia la fuente emisora para verificar el bloqueo visual.",
        "c) Se calcula el factor de forma entre los distintos parches colindantes para asegurar la correcta preservación de energía.",
        "d) Se interpola el color absoluto entre los cuatro vértices principales del polígono ignorando los rebotes lumínicos extra."
      ],
      "correcta": "a",
      "explicacion": "En la fase de render, al chocar un rayo de visión con la geometría, se busca en el kd-tree espacial cuántos fotones hay cerca para calcular el brillo/color."
    },
    {
      "text": "¿Cómo aportan las imágenes HDRI (High Dynamic Range Imaging) realismo a los cálculos modernos de iluminación global?",
      "options": [
        "a) Envuelven la escena proyectando iluminación y reflejos precisos extraídos de valores lumínicos del mundo fotográfico.",
        "b) Sustituyen los algoritmos de Path Tracing mediante mapas de desplazamiento geométrico muy densos y detallados.",
        "c) Convierten las mallas poligonales en millones de parches de radiosidad para acelerar el rebote difuso de los rayos.",
        "d) Triangulan automáticamente superficies problemáticas evitando errores visuales al aplicar el sombreado de Gouraud."
      ],
      "correcta": "a",
      "explicacion": "Los mapas HDRI capturan luz real en múltiples exposiciones y se usan como un 'entorno' esférico que ilumina y refleja físicamente sobre los objetos 3D."
    },
    {
      "text": "¿Qué es el 'Mach Banding', un problema que surge al utilizar métodos de sombreado simples como el Flat Shading?",
      "options": [
        "a) Una ilusión óptica en la que el cerebro humano exagera artificialmente el contraste entre bandas colindantes de distinto tono.",
        "b) Un fallo de cálculo matemático donde las luces ambientales se suman exponencialmente saturando el blanco de la imagen.",
        "c) Un defecto de textura que aparece exclusivamente cuando los vectores normales de un polígono se invierten por completo.",
        "d) Una anomalía geométrica que impide a los rayos especulares rebotar, eliminando todo el brillo de superficies reflectantes."
      ],
      "correcta": "a",
      "explicacion": "El Mach Banding es un fenómeno perceptivo donde el contraste entre facetas adyacentes de diferente tono se percibe más acentuado en los bordes."
    },
    {
      "text": "¿Cuál es la utilidad principal del instrumento de medición conocido como Goniofotómetro en el ámbito del renderizado 3D?",
      "options": [
        "a) Medir físicamente cómo los materiales del mundo real reflejan la luz para poder crear modelos matemáticos BRDF precisos.",
        "b) Registrar millones de rayos secundarios de Monte Carlo en entornos cerrados para evitar el ruido típico del Path Tracing.",
        "c) Analizar la distancia óptima entre los vértices poligonales para garantizar una interpolación correcta de Gouraud.",
        "d) Proyectar haces de luz de alta intensidad sobre mallas simples para generar mapas de radiosidad en tiempo real absoluto."
      ],
      "correcta": "a",
      "explicacion": "El goniofotómetro mide cómo la luz incide y rebota en superficies reales, generando datos para crear funciones BRDF que simulan el material."
    }
  ],
  "MAC_Tema_5_Tests.txt": [
    {
      "text": "¿Qué tipo de animación es considerada la precursora de la cinemática directa, en la que se fotografían modelos reales fotograma a fotograma?",
      "options": [
        "a) Animatronics",
        "b) Animación por Computador",
        "c) Stop-motion",
        "d) Tradicional manual"
      ],
      "correcta": "c",
      "explicacion": "El Stop-motion utiliza la captura frame a frame de modelos físicos, sirviendo de base analógica para la futura cinemática 3D. El Animatronics usa robótica, la tradicional se dibuja, y la de computador usa MOCAP o IK."
    },
    {
      "text": "¿Cuál de las siguientes unidades temporales representa la jerarquía correcta en animación, ordenada de menor a mayor?",
      "options": [
        "a) Shot < Frame < Escena < Secuencia < Acto",
        "b) Frame < Shot < Secuencia < Escena < Acto",
        "c) Frame < Shot < Escena < Secuencia < Acto",
        "d) Frame < Escena < Shot < Secuencia < Acto"
      ],
      "correcta": "b",
      "explicacion": "La secuencia lógica y descrita es Frame (mínima unidad temporal), Shot (toma única sin cortes), Secuencia (conjunto de tomas), Escena (mismo espacio y tiempo temporal) y Acto. Las demás opciones alteran este orden cronológico básico."
    },
    {
      "text": "¿Qué elemento del desarrollo del personaje revela de manera importante su peso físico y su estado de ánimo a través del balanceo del torso y las extremidades?",
      "options": [
        "a) La estructura interna",
        "b) La silueta",
        "c) El ciclo de marcha (Walk cycle)",
        "d) El modelado en arcilla"
      ],
      "correcta": "c",
      "explicacion": "El Ciclo de Marcha evidencia el peso y la actitud a través del balanceo en movimiento, aportando dinamicidad y personalidad que ni la estructura interna oculta, ni la silueta estática, ni el modelado pueden lograr por sí solos de la misma manera."
    },
    {
      "text": "¿Qué tipo de Storyboard está pensado para la revisión de clientes, se presenta detallado, a color y sin jerga técnica?",
      "options": [
        "a) Storyboard Conceptual",
        "b) Storyboard de Producción",
        "c) Animatics",
        "d) Storyboard de Presentación"
      ],
      "correcta": "d",
      "explicacion": "El Storyboard de presentación omite aspectos técnicos para no abrumar y es visualmente pulido para convencer al cliente. El Conceptual es rápido e informal, el de Producción es técnico para los animadores, y los Animatics son previsualizaciones en video temporalizadas, no dibujos estáticos impresos en papel."
    },
    {
      "text": "¿Qué plano de cámara centra la atención en el sujeto cortando la imagen aproximadamente a la altura del pecho?",
      "options": [
        "a) Plano General",
        "b) Plano Medio",
        "c) Plano Americano",
        "d) Primer Plano"
      ],
      "correcta": "b",
      "explicacion": "El Plano Medio corta por el pecho, centrando al espectador en el personaje sin perder su gestualidad corporal básica. El Plano General muestra entorno, el Americano a las rodillas, y el Primer Plano corta de los hombros hacia arriba para escenas íntimas."
    },
    {
      "text": "¿Qué transmite normalmente el plano Holandés, que implica colocar una cámara con una inclinación entre 20º y 45º?",
      "options": [
        "a) Intimidad y calma",
        "b) Magnificencia y fuerza del personaje",
        "c) Inestabilidad, velocidad y acción",
        "d) Debilidad y fragilidad del sujeto"
      ],
      "correcta": "c",
      "explicacion": "El plano Holandés inclina la línea horizontal para transmitir inestabilidad psicológica, tensión y acción trepidante. El plano picado es el que transmite debilidad, el contrapicado da fuerza, y un plano normal a la altura de los ojos otorgaría estabilidad y calma."
    },
    {
      "text": "¿Qué ángulo de cámara muestra al personaje desde arriba en un ángulo aproximado de 45º, haciéndolo ver débil o frágil ante el espectador?",
      "options": [
        "a) Cenital",
        "b) Picado",
        "c) Contrapicado",
        "d) Nadir"
      ],
      "correcta": "b",
      "explicacion": "El ángulo Picado (desde arriba hacia abajo) empequeñece al personaje y lo hace parecer débil o vulnerable. El Cenital es vertical absoluto, el Nadir es inferior absoluto (totalmente desde abajo), y el Contrapicado (desde abajo hacia arriba) empodera visualmente al personaje."
    },
    {
      "text": "¿Cuál es la diferencia fundamental entre un Paneo y un movimiento de Travelling?",
      "options": [
        "a) El Paneo es un desplazamiento real por el espacio, el Travelling es puramente óptico.",
        "b) El Paneo es un giro sobre el propio eje de la cámara, mientras que el Travelling implica un desplazamiento físico de la cámara a través del espacio.",
        "c) El Paneo se utiliza únicamente para hacer zoom, el Travelling es estático sobre un trípode.",
        "d) No hay diferencia, ambos describen un desplazamiento físico de la cámara en carriles."
      ],
      "correcta": "b",
      "explicacion": "Un Paneo es solo una rotación fija anclada en un punto o trípode (movimiento del \"cuello\"), mientras que el Travelling es el desplazamiento físico de toda la cámara en el espacio (caminar por la escena). El Zoom sería el efecto óptico, lo que hace incorrectas a las otras alternativas."
    },
    {
      "text": "¿Qué película de animación de 1995 es considerada históricamente como el primer largometraje realizado al 100% con gráficos por computadora (CGI)?",
      "options": [
        "a) Terminator 2",
        "b) Toy Story",
        "c) The Matrix",
        "d) Willow"
      ],
      "correcta": "b",
      "explicacion": "Toy Story fue pionera en crear un metraje largo animado íntegramente mediante 3D CGI. Terminator 2 y Willow destacaron históricamente por ser vanguardias en el Morphing, y The Matrix introdujo el Bullet Time, pero no son películas hechas 100% en CGI integral."
    },
    {
      "text": "¿Qué principio de animación tradicional (Disney) se utiliza de manera exagerada para dar la sensación de peso, impacto y flexibilidad de los materiales en movimiento, como en el caso de una pelota rebotando?",
      "options": [
        "a) Anticipación",
        "b) Acción secundaria",
        "c) Estirar y encoger (Squash and Stretch)",
        "d) Exageración"
      ],
      "correcta": "c",
      "explicacion": "Squash and Stretch deforma la geometría para denotar que el objeto tiene masa, elasticidad e impacto al chocar. La Anticipación previene de que el movimiento va a ocurrir, la Acción secundaria lo adorna, y la Exageración por sí sola amplifica una idea o pose, pero no se centra exclusivamente en denotar materialidad física elástica."
    },
    {
      "text": "¿Qué principio de la animación consiste en acelerar y decelerar un movimiento de forma suave, dedicando más fotogramas al inicio y al final y menos a la parte media de la trayectoria?",
      "options": [
        "a) Arcos",
        "b) Timing",
        "c) Acción continuada y superpuesta",
        "d) Entradas y salidas lentas (Slow in & out)"
      ],
      "correcta": "d",
      "explicacion": "Entradas y salidas lentas distribuyen los fotogramas (curvas spline en 3D) para simular el arranque y el frenado progresivo con inercia. El Timing define la duración y ritmo general, Arcos la curvatura de la trayectoria espacial, y la Acción superpuesta evita paradas secas por la inercia secundaria de partes sueltas, no del cuerpo principal."
    },
    {
      "text": "¿Por qué uno de los 12 principios establece que los seres vivos deben animarse siguiendo trayectorias en arcos en lugar de líneas rectas perfectas?",
      "options": [
        "a) Porque es computacionalmente más barato de renderizar.",
        "b) Porque evita crear el problema del Gimbal Lock en la cámara.",
        "c) Porque los movimientos rectos en líneas directas son mecánicos y quedan robóticos, perdiendo naturalidad biológica.",
        "d) Porque los arcos ayudan a generar el efecto Bullet Time sin motion blur."
      ],
      "correcta": "c",
      "explicacion": "En la vida real, las extremidades y articulaciones giran sobre articulaciones, describiendo arcos de forma orgánica. Las líneas rectas exactas son características de máquinas y robots. No tiene relación directa con eficiencia de render, Gimbal Lock (problema de coordenadas), ni Bullet Time."
    },
    {
      "text": "¿Qué nuevo principio adaptado a la animación 3D por Isaac Kerlow define la capacidad de un software para combinar MOCAP, simulaciones dinámicas y keyframes clásicos en una misma escena?",
      "options": [
        "a) Animación facial",
        "b) Cinematografía",
        "c) Rotoscopia",
        "d) Combinación de movimientos (Blend Motion)"
      ],
      "correcta": "d",
      "explicacion": "El Blend Motion permite hibridar capturas de movimiento reales (MOCAP) junto con capas de animación manual por el animador y sistemas de físicas para los props en una única mezcla fluida. La Rotoscopia es un calco sobre metraje 2D y la Cinematografía explota el movimiento de la cámara."
    },
    {
      "text": "¿En qué fase fundamental del flujo de trabajo (pipeline) CGI se elaboran los \"Animatics\" para previsualizar los tiempos generales?",
      "options": [
        "a) Preproducción",
        "b) Producción",
        "c) Postproducción",
        "d) Texturizado"
      ],
      "correcta": "a",
      "explicacion": "En preproducción se establecen las bases narrativas temporales con Storyboards y Animatics antes de empezar a modelar modelos caros en la producción. Postproducción llega tras el renderizado con la composición visual, y Texturizado es un mero sub-paso de la Producción."
    },
    {
      "text": "¿Cuál es la secuencia de pasos lógicos dentro de la fase central de \"Producción\" en un estudio CGI tradicional?",
      "options": [
        "a) Rigging -> Texturing -> Modeling -> Animación",
        "b) Modeling -> Rigging -> Texturing -> Animación -> MOCAP",
        "c) Animación -> MOCAP -> Modeling -> Texturing",
        "d) Lighting -> Compositing -> Rendering"
      ],
      "correcta": "b",
      "explicacion": "El orden dictamina que primero se esculpe la malla o forma del cuerpo (Modeling), luego se le dota de huesos (Rigging), a continuación se pinta y refina su aspecto (Texturing) y por último se le da vida (Animación o captura MOCAP). Opciones alternas invierten las dependencias previas necesarias."
    },
    {
      "text": "¿Qué diferencia técnica y teórica existe entre la Dinámica y la Cinemática en la animación por computador?",
      "options": [
        "a) La Cinemática simula el choque de ropa o agua y la Dinámica se usa solo para movimientos simples de cámara.",
        "b) La Dinámica requiere que el animador ponga fotogramas clave a mano; la Cinemática actúa sola por gravedad.",
        "c) La Dinámica estudia las colisiones, gravedad y masa física que genera el movimiento, mientras que la Cinemática define trayectorias sin importar sus causas.",
        "d) Son exactamente el mismo motor de físicas bajo distintos nombres y se diferencian solo por la marca del software."
      ],
      "correcta": "c",
      "explicacion": "La Cinemática es pura interpolación de coordenadas ignorando masa, fricción o peso. La Dinámica introduce fuerzas físicas reales (fuerza y gravedad) que causan el movimiento resultante. Esto convierte a las alternativas A y B en falsas directamente."
    },
    {
      "text": "¿Cuál es el principal fallo técnico documentado al emplear Ángulos de Euler para la interpolación rotacional de un objeto en el espacio 3D?",
      "options": [
        "a) Causan cálculos muy lentos en los motores dinámicos por exceso de polígonos.",
        "b) Producen un Gimbal Lock (bloqueo por la superposición alineada de dos ejes de rotación).",
        "c) Tienen movimientos fijos y robóticos y no permiten ser editados mediante gráficas de curvas.",
        "d) No pueden usarse en objetos con Skinning, solo en cámara o luces."
      ],
      "correcta": "b",
      "explicacion": "El Gimbal Lock ocurre cuando dos de los tres aros rotacionales de Euler se alinean colapsando un grado de libertad (DOF) espacial y paralizando ciertos giros del objeto en un instante temporal. Los Euler son muy comunes y por sí mismos no aumentan la carga por polígonos ni están limitados en usos."
    },
    {
      "text": "¿Qué ventaja o solución aportan matemáticamente los Quaternions frente a sistemas más simples como las matrices o los ángulos de Euler?",
      "options": [
        "a) Permiten texturizar más rápido.",
        "b) Calculan automáticamente colisiones entre telas suaves.",
        "c) Evitan por completo el temido Gimbal Lock y posibilitan una interpolación de rotación perfectamente esférica (SLERP).",
        "d) Reducen la cantidad de fotogramas por segundo que procesa la tarjeta gráfica."
      ],
      "correcta": "c",
      "explicacion": "Los Quaternions, estructurados en base a números complejos, nunca experimentan Gimbal Lock. Además, el algoritmo SLERP logra trazar arcos cortos perfectos de giro constante entre rotaciones, algo imposible con otros métodos de forma puramente lineal."
    },
    {
      "text": "En la disciplina del Rigging de personajes, ¿a qué se refiere el término \"Envelope\" (área de influencia) cuando se habla del Skinning?",
      "options": [
        "a) Al diseño del interfaz del usuario flotante (UI) que el animador usa para mover una pierna.",
        "b) Al grupo exacto de vértices de la malla geométrica del personaje que resulta influenciado o deformado por el giro de un hueso específico.",
        "c) A la posición recomendada para las luces en torno al cuerpo base para simular profundidad.",
        "d) A la T-Pose, donde el personaje asume forma de T estática."
      ],
      "correcta": "b",
      "explicacion": "El \"envelope\" o envoltura define el alcance de deformación de un hueso sobre la \"piel\" virtual del personaje. No hace referencia a iluminación, interfaz, ni posturas globales (como la pose base relajada o en T)."
    },
    {
      "text": "¿Cuál es la diferencia fundamental de flujo al animar usando Cinemática Directa (FK) frente a Cinemática Inversa (IK)?",
      "options": [
        "a) FK se aplica desde la raíz (hombro) hasta los extremos descendiendo en la jerarquía, mientras que IK se basa en ubicar directamente el extremo final (mano) para que el ordenador resuelva matemáticamente las demás articulaciones.",
        "b) FK calcula posturas con Inteligencia Artificial; IK es fotograma a fotograma dibujado a mano de forma rotoscópica.",
        "c) FK requiere un simulador físico de colisiones masivas de multitud; IK se destina solamente para animar fluidos.",
        "d) FK es un sistema dependiente del historial previo del movimiento (HD), IK es rápido y sin historial previo (HI)."
      ],
      "correcta": "a",
      "explicacion": "FK empuja al animador a rotar de uno en uno sus huesos desde el padre (pecho) hasta el último hijo de la cadena (dedos). IK acorta el proceso permitiendo situar la meta del efector final, siendo el ordenador quien rota la cadena al revés calculando los ángulos (Reverse Kinematics)."
    },
    {
      "text": "¿Cómo interactúa dentro del programa un cuerpo rígido definido como Rígido \"Dinámico\" en comparación con uno Rígido \"Cinemático\"?",
      "options": [
        "a) El Dinámico se deforma ante colisiones como una tela, el Cinemático es inquebrantable y rígido siempre.",
        "b) El Dinámico ignora al resto de la escena y es invisible al render, el Cinemático causa las sombras.",
        "c) El Dinámico reacciona únicamente a fuerzas físicas automatizadas como gravedad o impactos, mientras que el Cinemático es dirigido por un animador (vía keyframes) sin sufrir las leyes de la simulación.",
        "d) El Dinámico siempre es controlado de forma procedural a través de scripts de programación manuales por un desarrollador de motor, el Cinemático lo maneja el artista 3D."
      ],
      "correcta": "c",
      "explicacion": "En una simulación física, un Rigid Body Cinematográfico es un obstáculo móvil animado a mano al cual la gravedad no arrastra, mientras que uno Dinámico se rinde 100% ante la inercia, la masa y su colisión contra otros cuerpos o el suelo."
    },
    {
      "text": "¿Qué configuración de lente óptica en una cámara virtual tiende a reducir la profundidad percibida o \"aplanar\" el fondo de la escena contra el sujeto?",
      "options": [
        "a) Lente Gran angular (18-28mm)",
        "b) Lente Normal (50mm)",
        "c) Teleobjetivo (superior a 100mm)",
        "d) Lente Holandesa anamórfica"
      ],
      "correcta": "c",
      "explicacion": "El Teleobjetivo o lente larga deforma la imagen en Z acercando visiblemente los objetos lejanos creando el efecto compresivo de aplanar los planos de fondo sobre el primer término. Un gran angular, por el contrario, estira el espacio alejando y exagerando perspectivas."
    },
    {
      "text": "¿Qué restricción (Constraint) obliga perpetuamente en la animación a un objeto del personaje (como unos ojos) a seguir fijamente de cara a un controlador externo u objetivo que se mueva por el escenario?",
      "options": [
        "a) Path Constraint (Trayectoria)",
        "b) Look At Constraint (Restricción de mirada)",
        "c) Link/Unlink (Jerarquía conmutable)",
        "d) Orientación pura"
      ],
      "correcta": "b",
      "explicacion": "\"Look At\" está específicamente codificada para asegurar que el eje Z (o similar) de un modelo mire constantemente a un punto tridimensional estipulado (Target o Dummy). Path obliga a caminar sobre una línea dibujada, y Orientación pura copia rotaciones idénticas, no miradas hacia un blanco móvil."
    },
    {
      "text": "En la configuración avanzada de una extremidad manejada por Cinemática Inversa (IK), ¿a qué nos referimos cuando surge un problema de \"Redundancia o Soluciones infinitas\"?",
      "options": [
        "a) A que la memoria RAM del equipo se desborda y el render infinito crashea el motor.",
        "b) A que el punto de destino (efector final) se halla más lejos de la distancia física que pueden alcanzar los huesos totalmente rectos.",
        "c) A que la extremidad dispone de más Grados de Libertad (DOF) de los necesarios, habiendo matemáticamente innumerables dobleces de codos posibles para alcanzar un solo punto concreto.",
        "d) A que hay colisiones constantes entre los cuerpos rígidos del sistema Dinámico."
      ],
      "correcta": "c",
      "explicacion": "La redundancia (también conocida en robótica) significa que si mi brazo tiene muchos eslabones libres, puede tocarse la nariz elevando el codo mucho o escondiendo el codo hacia el pecho; al haber tantas opciones para lograr el mismo fin exacto, el software necesita que el usuario acote y defina la pose. Cuando es inalcanzable, se denomina Solución imposible."
    },
    {
      "text": "¿Qué sistema de cálculo o Solver IK de software como 3ds Max es ideal de aplicar en criaturas que requieran animar ágilmente colas o extremidades tentaculares guiadas a lo largo de un recorrido suave?",
      "options": [
        "a) HI Solver (History-Independent)",
        "b) Spline IK Solver",
        "c) Limb IK Solver",
        "d) HD Solver (History-Dependent)"
      ],
      "correcta": "b",
      "explicacion": "Spline IK permite atar múltiples huesos a una curva Bézier flexible y fluida que ejerce de esqueleto serpenteante continuo. Los demás se asocian mejor a patas robóticas, brazos convencionales de dos tramos o mecanismos de bisagra rígida."
    },
    {
      "text": "¿Qué caracteriza principalmente al solucionador IK llamado HI Solver (History-Independent)?",
      "options": [
        "a) Calcula los ángulos basándose en el historial de posiciones de todos los fotogramas anteriores para ser muy preciso al arrastrar cosas.",
        "b) Es exclusivo de colas de animales porque emplea curvas controladoras de nodos tangenciales.",
        "c) Al calcular de forma independiente del frame previo, no requiere evaluar toda la línea de tiempo hacia atrás; por ello es el más versátil, veloz y apto para cadenas estándar largas como brazos y piernas.",
        "d) No permite IK de ninguna manera, pues solo aplica Cinemática Directa basada en Quaternions SLERP."
      ],
      "correcta": "c",
      "explicacion": "Ser \"History-Independent\" lo hace computacionalmente ligero e inmediato al editar frames salteados, frente al \"HD Solver\" que es más lento pero apto para deslizadores industriales con memoria del recorrido por su History-Dependent."
    },
    {
      "text": "¿Cómo se llama genéricamente a la técnica de animación de generar multitudes de individuos interaccionando y esquivándose basándose en reglas autónomas de IA o simulaciones físicas algorítmicas sin definir manualmente los keyframes de cada individuo por separado?",
      "options": [
        "a) Blend Motion Animático",
        "b) Rotoscopia Poblacional",
        "c) Stop-motion masivo de partículas",
        "d) Animación Procedural o Animación de Multitudes (Crowd animation)"
      ],
      "correcta": "d",
      "explicacion": "La animación procedural delega la minucia del keyframing a rutinas de software, como el flocking (comportamiento de rebaño) o Crowd Animation, donde cientos de elementos de IA navegan por la escena interactuando automáticamente (por ejemplo con la herramienta de Populate de Max). La Rotoscopia es un antiguo recurso 2D."
    },
    {
      "text": "¿A cuántos fotogramas por segundo (FPS) establece la teoría aportada en los archivos de texto que se fija el estándar general para medir la Unidad Temporal en la animación moderna mencionada?",
      "options": [
        "a) 24 fps",
        "b) 25 fps",
        "c) 30 fps",
        "d) 60 fps"
      ],
      "correcta": "c",
      "explicacion": "El resumen de unidades temporales subraya que el estándar estipulado o enseñado como referencia en la estructura es concretamente de 30 fps (propio históricamente del sistema NTSC o vídeo base usado en muchos editores)."
    },
    {
      "text": "¿Por qué es preferible realizar el Rigging configurando el modelo en una \"Pose Relajada\" en la que las articulaciones principales están levemente flexionadas en lugar de una T-Pose absolutamente hiper-extendida y rígida?",
      "options": [
        "a) Porque es la única que permite la compilación del render en alta resolución en las tarjetas gráficas modernas de la marca NVIDIA.",
        "b) Porque facilita matemáticamente el posterior cálculo de la Cinemática Inversa (IK), dándole la pista a las rodillas de en qué dirección deben doblarse al empujar.",
        "c) Porque así se duplican automáticamente los fotogramas del Slow in & out.",
        "d) Porque el estándar de Pixar impone evitar la figura humana realista prohibiendo los brazos rectos bajo estricta regla visual."
      ],
      "correcta": "b",
      "explicacion": "Partir de rodillas y codos micro-doblados confiere pre-orientación (hint angle) para que el IK Solver no se equivoque al doblar la pierna hacia atrás (como las aves) en vez de hacia delante, lo cual optimiza también el estiramiento final de los vértices durante la fase de Skinning (Envelope)."
    },
    {
      "text": "¿A qué se refiere concretamente la configuración de la Profundidad de Campo (DOF - Depth of Field) manejada desde una cámara en la producción CGI?",
      "options": [
        "a) A la distancia de los polígonos base al fondo difuminado del mundo global para optimizar recursos del motor.",
        "b) A las franjas visibles que establecen qué elementos cercanos o lejanos aparecen enfocados nítidamente y qué zonas periféricas permanecen desenfocadas, sirviendo de guía para el ojo del espectador.",
        "c) Al número de grados de giro máximo de la cámara.",
        "d) A la fuerza de los motores físicos de gravedad (MassFX) que interactúan con cuerpos blandos cerca de la óptica."
      ],
      "correcta": "b",
      "explicacion": "En cámaras fotográficas tanto reales como virtuales, la Profundidad de Campo define el rango espacial donde el foco o nitidez es total, y sirve como poderosísima herramienta narrativa separando al personaje de su plano trasero de forma clara y dramática."
    },
    {
      "text": "¿A qué principio de la animación se apela si buscamos que los personajes ostenten un diseño carismático, magnético y que sus acciones consigan que el espectador empatice o conecte emocionalmente con su rol?",
      "options": [
        "a) Puesta en escena (Staging)",
        "b) Dibujo o Modelado Sólido",
        "c) Exageración del pose a pose",
        "d) Personalidad (Appeal)"
      ],
      "correcta": "d",
      "explicacion": "\"Appeal\" o Personalidad aglomera la atracción del diseño del personaje y de cómo actúa para lograr el carisma indispensable. El Dibujo sólido previene que se perciba plano (volumetría 3D), la puesta en escena ordena el escenario en favor de la claridad, pero la Personalidad asegura que importe si el villano se cae o el héroe ríe."
    },
    {
      "text": "¿Qué es un Constraint del tipo \"Jerarquía (Link/Unlink)\" y para qué se usa comúnmente en una secuencia animada de personajes con accesorios?",
      "options": [
        "a) Para hacer un renderizado rápido ignorando objetos inútiles o lejanos.",
        "b) Para emparentar temporalmente objetos que luego van a ser soltados en otro momento (ej. el personaje agarra un vaso de una mesa, se mueve y luego lo suelta en otra estantería).",
        "c) Para forzar a que la cámara siga fijamente en bucle sobre un raíl infinito de forma procedural.",
        "d) Para cambiar un solver IK en cinemática directa de forma History-Dependent (HD)."
      ],
      "correcta": "b",
      "explicacion": "A diferencia de la vinculación normal perenne entre huesos, un Link Constraint dinámico admite transiciones; un vaso en la mesa sigue siendo hijo de \"la mesa\", pero al cambiar de keyframe se \"linkea\" a \"la mano\", compartiendo su movimiento solo mientras dure la retención impuesta."
    },
    {
      "text": "¿Qué tecnología de animación referenciada consiste en pintar y dibujar metraje calcando cuadro por cuadro sobre una película filmada en vivo con actores de imagen real?",
      "options": [
        "a) Blend Motion de Quaternions",
        "b) Captura de Movimiento Óptica por Computador (MOCAP)",
        "c) Rotoscopia",
        "d) Bullet Time Matrix"
      ],
      "correcta": "c",
      "explicacion": "La Rotoscopia es un sistema precursor artesanal 2D en donde el referente grabado servía de plantilla calco directa. La MOCAP traslada datos tridimensionales de sensores sobre trajes reales, no requiere calco a pulso ni se basa en pintar fotogramas de película, y el Bullet Time congela la acción real orbitando sin calcos."
    },
    {
      "text": "¿Qué herramienta técnica, citada en los motores y simuladores tridimensionales mencionados en la materia, calcula exclusivamente las caídas, rebotes de cuerpos rígidos pesados y dinámicas fluidas del aire o telas blandas?",
      "options": [
        "a) Biped Generator",
        "b) MassFX / Reactor",
        "c) Populate de multitudes",
        "d) HD Solver Cinemático"
      ],
      "correcta": "b",
      "explicacion": "MassFX (antiguamente Reactor) aglutina todas las funciones matemáticas referentes a las fuerzas de la naturaleza dinámicas y a cuerpos que experimentan colisión procedural o interacciones entre Soft y Rigid Bodies. Las otras referencias tienen como finalidad riggear o poblar con IA."
    },
    {
      "text": "¿Qué tipo de deformación o fallo se debe prever para ser evitado en singularidades al llevar un efector de Cinemática Inversa a los topes físicos matemáticos de sus articulaciones sin emplear Constraints adecuadas?",
      "options": [
        "a) Pérdida extrema de iluminación dinámica fotorealista.",
        "b) Crash en las unidades espaciales de jerarquía temporal.",
        "c) Fallos matemáticos de posicionamiento, chasquidos abruptos entre rotaciones violentas o bloqueos irresolubles en los huesos al colapsar ángulos espaciales.",
        "d) Problemas de renderización en los cuerpos rígidos inyectados en MassFX debido a colisiones invisibles."
      ],
      "correcta": "c",
      "explicacion": "Las singularidades son errores algebraicos (muy ligados al sistema de coordenadas posicionales y resoluciones del Solver IK) que desencadenan fallos técnicos o tics robóticos repentinos al cruzar una rodilla un punto donde múltiples ejes no logran definir la rotación esperada de retorno natural si no están restringidos."
    },
    {
      "text": "Sobre los tipos de animación, ¿qué técnica utiliza el fotografiado fotograma a fotograma de modelos físicos reales?",
      "options": [
        "a) La técnica de captura de movimientos o MOCAP.",
        "b) La animación tradicional dibujada a mano.",
        "c) La técnica conocida como animación stop-motion.",
        "d) La técnica basada en dispositivos animatronics."
      ],
      "correcta": "c",
      "explicacion": "El stop-motion consiste en fotografiar frame a frame modelos reales (marionetas, arcilla) para crear la ilusión de movimiento continuo."
    },
    {
      "text": "En el desarrollo de un personaje, ¿qué elemento corporal resulta fundamental para revelar el peso y el estado de ánimo general?",
      "options": [
        "a) La proporción exacta de la cabeza y el tronco.",
        "b) La simetría perfecta en todas sus extremidades.",
        "c) El estilo de peinado y la gama cromática elegida.",
        "d) El ciclo de marcha y el balanceo de su cuerpo."
      ],
      "correcta": "d",
      "explicacion": "El ciclo de marcha (Walk cycle), incluyendo el balanceo del torso y las extremidades, es la herramienta principal para revelar el peso físico y la emoción del personaje."
    },
    {
      "text": "Dentro de la clasificación de storyboards, ¿cuál es el que se elabora específicamente sin usar jerga técnica para la revisión de los clientes?",
      "options": [
        "a) El storyboard de presentación, que suele ser a color.",
        "b) El storyboard conceptual, con notas informales.",
        "c) El storyboard de producción, con planos de luces.",
        "d) El storyboard de postproducción, con anotaciones."
      ],
      "correcta": "a",
      "explicacion": "El storyboard de presentación es más detallado y estético (a color) para ser revisado por clientes, evitando intencionadamente tecnicismos incomprensibles para ellos."
    },
    {
      "text": "¿Qué ángulo de cámara se utiliza comúnmente en cine para magnificar a un personaje y dotarlo de una apariencia fuerte o imponente?",
      "options": [
        "a) El ángulo de cámara picado, tomando la imagen desde arriba.",
        "b) El ángulo de cámara normal, a la misma altura de los ojos.",
        "c) El ángulo de cámara cenital, tomado perpendicular al suelo.",
        "d) El ángulo de cámara contrapicado, grabando desde abajo."
      ],
      "correcta": "d",
      "explicacion": "El plano en ángulo contrapicado se graba desde abajo hacia arriba, lo que engrandece y otorga poder o fuerza al sujeto en pantalla."
    },
    {
      "text": "¿Cuál de las siguientes afirmaciones describe de manera correcta el movimiento de cámara conocido técnicamente como 'Paneo'?",
      "options": [
        "a) Es el giro horizontal o vertical de la cámara sobre su propio eje.",
        "b) Es el desplazamiento físico y real de la cámara por el escenario.",
        "c) Es el movimiento óptico interno que sirve para enfocar un sujeto.",
        "d) Es la inclinación de la cámara para crear sensación de velocidad."
      ],
      "correcta": "a",
      "explicacion": "El paneo consiste en rotar o girar la cámara sobre su propio eje (típicamente montada en un trípode) para describir o seguir la escena en horizontal o vertical."
    },
    {
      "text": "Históricamente, ¿qué hito cinematográfico supuso el efecto visual empleado por el T-1000 en la película 'Terminator 2'?",
      "options": [
        "a) La creación del primer entorno completamente generado por ordenador.",
        "b) La técnica de transición fluida de formas conocida como 'Morphing'.",
        "c) El primer uso del 'Bullet Time' para congelar la acción de la escena.",
        "d) El desarrollo del primer personaje animado mediante 'Stop-motion'."
      ],
      "correcta": "b",
      "explicacion": "Terminator 2 (1991) consagró el uso del Morphing para crear las metamorfosis en tiempo real del robot T-1000 de metal líquido."
    },
    {
      "text": "Según los 12 principios de animación, ¿cuál es el objetivo primordial de aplicar el principio de 'Estirar y encoger' (Squash and Stretch)?",
      "options": [
        "a) Acelerar y decelerar los movimientos en el inicio y final de una acción.",
        "b) Preparar al espectador psicológicamente antes de la acción principal.",
        "c) Dar la sensación de peso, impacto y gran flexibilidad a un objeto.",
        "d) Mantener el carisma del personaje y su nivel de atractivo visual."
      ],
      "correcta": "c",
      "explicacion": "El squash and stretch deforma un cuerpo al chocar o moverse para transmitir su densidad, peso y nivel de flexibilidad, simulando la conservación de volumen."
    },
    {
      "text": "¿Qué principio de la animación se encarga de evitar que partes como el pelo o la ropa se detengan de forma brusca al frenar el cuerpo?",
      "options": [
        "a) El principio de las puestas en escena conocido como Staging.",
        "b) El principio visual de seguir los arcos de trayectoria curvos.",
        "c) El principio basado en animar elementos de acción secundaria.",
        "d) El principio técnico de acción superpuesta y acción continuada."
      ],
      "correcta": "d",
      "explicacion": "La acción continuada y superpuesta dicta que elementos sueltos o apéndices (ropa, pelo) siguen moviéndose por inercia aunque el cuerpo principal se haya detenido."
    },
    {
      "text": "Dentro de los 'nuevos' principios aplicados a la animación 3D, ¿a qué se refiere el concepto denominado 'Blend Motion'?",
      "options": [
        "a) Al proceso de iluminar escenas fotorealistas mediante el uso de luz global.",
        "b) A la técnica de calcar sobre metraje de vídeo real para dibujar un modelo.",
        "c) A la mezcla de captura de movimiento, simulaciones dinámicas y keyframes.",
        "d) Al control exhaustivo de expresiones usando manipuladores faciales morfológicos."
      ],
      "correcta": "c",
      "explicacion": "El Blend Motion (o combinación de movimientos) es la capacidad técnica de mezclar de forma armónica clips de MOCAP, simulaciones físicas y keyframes clásicos en un mismo personaje."
    },
    {
      "text": "Durante el flujo de trabajo de un estudio CGI, ¿en qué fase específica se realiza habitualmente el cálculo del Rigging de un personaje?",
      "options": [
        "a) En la fase de preproducción, al mismo tiempo que los storyboards.",
        "b) En la fase de postproducción, una vez completado el texturizado.",
        "c) En la fase de producción, desarrollándose tras el modelado 3D.",
        "d) En la fase de proceso final, mediante composición en capas 2D."
      ],
      "correcta": "c",
      "explicacion": "El Rigging se realiza en la etapa de producción; es necesario contar previamente con el modelado 3D (geometría) antes de insertar el esqueleto interno para animar."
    },
    {
      "text": "En el contexto de los conceptos fundamentales, ¿cuál es la diferencia principal entre cinemática y dinámica en animación 3D?",
      "options": [
        "a) La dinámica estudia las fuerzas físicas implicadas y la cinemática ignora dichas fuerzas.",
        "b) La cinemática estudia las texturas aplicadas y la dinámica evalúa la malla tridimensional.",
        "c) La cinemática se encarga del renderizado final y la dinámica se encarga del modelado base.",
        "d) La dinámica analiza únicamente rotaciones locales y la cinemática analiza las traslaciones."
      ],
      "correcta": "a",
      "explicacion": "La cinemática describe el movimiento de cuerpos y cadenas jerárquicas ignorando la masa o gravedad, mientras que la dinámica genera el movimiento basado puramente en fuerzas físicas."
    },
    {
      "text": "Al utilizar cuaterniones (quaternions) para calcular rotaciones en 3D, ¿qué grave problema técnico se evita respecto a los ángulos de Euler?",
      "options": [
        "a) El temblor y la sacudida excesiva al emplear interpolaciones spline.",
        "b) El efecto conocido como Gimbal Lock o bloqueo y pérdida de un eje.",
        "c) La deformación incorrecta de la topología en uniones articulares.",
        "d) La sobrecarga exponencial de cálculo dentro de los motores físicos."
      ],
      "correcta": "b",
      "explicacion": "Los cuaterniones basan sus cálculos en un sistema de cuatro dimensiones matemáticas que evita por completo el Gimbal Lock o bloqueo direccional de ejes de Euler."
    },
    {
      "text": "¿Cómo funciona exactamente el sistema de animación basado en Cinemática Inversa (IK) al momento de mover a un personaje?",
      "options": [
        "a) El animador mueve la pieza inicial (ej. hombro) y las hijas rotan de forma dependiente y natural.",
        "b) El animador añade fotogramas clave solamente sobre el centro de gravedad del objeto modelado.",
        "c) El animador posiciona la pieza final (ej. mano) y el sistema deduce el resto de rotaciones.",
        "d) El animador asigna un objetivo lejano para que el personaje gire todo su cuerpo apuntando a él."
      ],
      "correcta": "c",
      "explicacion": "A diferencia de FK (que va de padre a hijo), IK permite fijar la posición final (End Effector) para que el ordenador calcule los ángulos hacia atrás en la jerarquía."
    },
    {
      "text": "En los motores de físicas, si aplicamos propiedades a un objeto para que actúe de forma completamente gobernada por la gravedad, sin animarse con keyframes, ¿qué tipo de cuerpo es?",
      "options": [
        "a) Se trata de un cuerpo rígido definido con un comportamiento cinemático.",
        "b) Se trata de un cuerpo blando diseñado con una alta deformación elástica.",
        "c) Se trata de un elemento de trayectoria sujeto a un controlador jerárquico.",
        "d) Se trata de un cuerpo rígido definido con un comportamiento de tipo dinámico."
      ],
      "correcta": "d",
      "explicacion": "Un cuerpo dinámico es aquel cuyo movimiento es calculado al 100% por un motor de dinámicas a través de colisiones, fuerzas y gravedad."
    },
    {
      "text": "Al configurar una cámara virtual en 3D, ¿qué característica controla el uso de las diferentes lentes, como el gran angular o el teleobjetivo?",
      "options": [
        "a) El grado de profundidad de campo desenfocado al final del render.",
        "b) La distancia focal del objetivo, medida comúnmente en milímetros.",
        "c) El nivel general de exposición temporal aplicado a la luz global.",
        "d) La velocidad lineal con la que transcurre un plano de tipo secuencia."
      ],
      "correcta": "b",
      "explicacion": "La distancia focal es la que define el lente. Un valor bajo (18mm) da un gran angular y un valor alto (100mm) hace de teleobjetivo, cambiando la visión del espacio."
    },
    {
      "text": "Dentro de las restricciones avanzadas (constraints), ¿cuál permite hacer que un personaje tome un vaso de una mesa y después lo vuelva a soltar?",
      "options": [
        "a) El constraint conocido bajo el nombre de Look At.",
        "b) El constraint fundamentado en la Trayectoria Path.",
        "c) El constraint basado en la Jerarquía Link y Unlink.",
        "d) El constraint principal de Orientación y Rotación."
      ],
      "correcta": "c",
      "explicacion": "La restricción de Jerarquía (Link/Unlink o Parent/Unparent) permite conectar y desconectar un objeto de otro de forma dinámica durante la animación a lo largo del tiempo."
    },
    {
      "text": "Al utilizar la Cinemática Inversa, ¿qué problema ocurre cuando el punto destino al que debe llegar el efector está más lejos de lo que el brazo puede extenderse?",
      "options": [
        "a) Se produce una redundancia que genera infinitas posibles posturas.",
        "b) Se desencadena un fallo en el sistema al llegar al tope articular.",
        "c) Se genera una situación descrita como de solución final imposible.",
        "d) Se aplican restricciones matemáticas automáticas de sobrecarga pura."
      ],
      "correcta": "c",
      "explicacion": "La 'solución imposible' aparece en los cálculos de IK cuando la longitud sumada de los huesos no basta para alcanzar las coordenadas meta solicitadas por el animador."
    },
    {
      "text": "En 3ds Max, ¿qué solver de cinemática inversa resulta ideal para animar estructuras flexibles como tentáculos o cuerdas usando una curva guía?",
      "options": [
        "a) El sistema denominado HI Solver para trabajar con cadenas óseas largas.",
        "b) El sistema denominado Spline IK para seguir la curvatura de una spline.",
        "c) El sistema denominado HD Solver usado por su dependencia del historial.",
        "d) El sistema denominado Limb IK para trabajar con brazos o piernas cortas."
      ],
      "correcta": "b",
      "explicacion": "El Spline IK Solver es la solución matemáticamente perfecta para conectar una jerarquía de huesos con los nodos de una curva Spline que la curva de tentáculos o colas."
    },
    {
      "text": "En el área de herramientas avanzadas de animación CGI, ¿en qué consiste la llamada 'animación procedural'?",
      "options": [
        "a) En fotografiar modelos fotograma a backwards para obtener su física real.",
        "b) En usar inteligencia artificial o código para calcular un movimiento natural.",
        "c) En aplicar manualmente posturas extremas a lo largo de una línea temporal.",
        "d) En grabar a múltiples actores en vivo para trasladar su masa al simulador."
      ],
      "correcta": "b",
      "explicacion": "La animación procedural evita el uso de keyframes manuales y se basa en variables, algoritmos o scripts programados que generan un ciclo de movimiento de forma automática."
    },
    {
      "text": "En la animación moderna de multitudes, como la que permite la herramienta Populate en 3ds Max, ¿cómo se logra el movimiento armónico de grupos enormes de personajes?",
      "options": [
        "a) Animando de forma individual cada paso mediante poses clave para evitar las colisiones en el grupo.",
        "b) Mezclando simulaciones de inteligencia artificial general con rutinas de movimiento independientes.",
        "c) Duplicando mecánicamente una misma animación cíclica y rotándola con un ligero retraso de tiempo.",
        "d) Convirtiendo las entidades en cuerpos elásticos simulados por gravedad y sin inteligencia interna."
      ],
      "correcta": "b",
      "explicacion": "La animación de masas usa IA para gobernar el comportamiento colectivo sin colisiones ('rebaño') y al mismo tiempo ejecuta librerías de movimientos individuales en cada agente."
    }
  ],
  "MAC_Tema_6_Tests.txt": [
    {
      "text": "¿Qué lenguaje de programación incluye Blender de forma nativa para automatizar tareas?",
      "options": [
        "a) C++",
        "b) Java",
        "c) Python",
        "d) JavaScript"
      ],
      "correcta": "c",
      "explicacion": "El texto indica claramente que Blender incluye Python de forma nativa para automatizar tareas, crear Addons y modificar parámetros, sin mencionar otros lenguajes para este fin."
    },
    {
      "text": "¿Cuáles son las características del lenguaje de programación utilizado en Blender según el texto?",
      "options": [
        "a) Es compilado, de código cerrado y sintaxis compleja.",
        "b) Es interpretado, de código abierto y sintaxis sencilla.",
        "c) Es un lenguaje de etiquetas utilizado exclusivamente para la interfaz gráfica.",
        "d) Es un lenguaje orientado a bases de datos relacionales exclusivamente."
      ],
      "correcta": "b",
      "explicacion": "El documento describe a Python como un lenguaje \"interpretado, de código abierto y sintaxis sencilla\". Las demás opciones proponen características opuestas o incorrectas."
    },
    {
      "text": "¿Cuál es la librería base de Python en Blender a través de la cual se accede a todas las funciones del programa?",
      "options": [
        "a) bl_info",
        "b) bpy",
        "c) bge",
        "d) bgl"
      ],
      "correcta": "b",
      "explicacion": "El texto especifica que la API \"bpy\" es la librería base de Python en Blender, importándose como \"import bpy\". Las otras opciones no son la librería base mencionada."
    },
    {
      "text": "¿Dónde se pueden visualizar de forma automática los comandos de Python que corresponden a las acciones manuales realizadas en la interfaz gráfica de Blender?",
      "options": [
        "a) En el Editor de Texto.",
        "b) En la Ventana de Información (Info).",
        "c) En el panel de Geometry Nodes.",
        "d) En la Consola de Sistema del sistema operativo."
      ],
      "correcta": "b",
      "explicacion": "El texto afirma que todas las acciones de la interfaz gráfica se traducen a comandos de Python visibles en la Ventana de Información."
    },
    {
      "text": "¿Qué es el sistema de Geometry Nodes en Blender?",
      "options": [
        "a) Un sistema de renderizado destructivo en tiempo real basado en polígonos.",
        "b) Una librería externa de Python para compilar materiales fotorealistas.",
        "c) Un sistema de modelado procedural y animación basado en nodos, que es no destructivo.",
        "d) Una consola exclusiva para ejecutar líneas de código en C++."
      ],
      "correcta": "c",
      "explicacion": "El resumen define Geometry Nodes como un \"sistema de modelado procedural y animación basado en nodos (no destructivo, permite automatizar parámetros y distribuciones sin modificar la malla original ni usar código manual)\"."
    },
    {
      "text": "Sobre Geometry Nodes, ¿qué afirma el texto respecto a la escritura de código?",
      "options": [
        "a) Es obligatorio escribir código manual en Python para utilizarlo.",
        "b) Se basa enteramente en código C++ que reemplaza a la API bpy.",
        "c) Permite automatizar parámetros sin necesidad de usar código manual.",
        "d) Solo funciona si se programa un script en el Editor de Texto previamente."
      ],
      "correcta": "c",
      "explicacion": "El texto especifica explícitamente que Geometry Nodes \"permite automatizar parámetros y distribuciones sin modificar la malla original ni usar código manual\"."
    },
    {
      "text": "¿Qué ventana del entorno de trabajo \"Scripting\" está diseñada específicamente para ejecutar líneas individuales de código y hacer pruebas rápidas?",
      "options": [
        "a) Consola de Python.",
        "b) Editor de Texto.",
        "c) Ventana de Info.",
        "d) Panel de Propiedades."
      ],
      "correcta": "a",
      "explicacion": "En el Workspace de Scripting, la \"Consola de Python\" sirve para \"ejecutar líneas individuales y hacer pruebas\", a diferencia del Editor de Texto que es para scripts completos."
    },
    {
      "text": "¿Cuál es la función principal del \"Editor de Texto\" en el Workspace Scripting?",
      "options": [
        "a) Registrar el historial de operaciones ejecutadas paso a paso.",
        "b) Mostrar la ruta de datos (data path) de las propiedades de forma automática.",
        "c) Programar scripts completos y ejecutarlos (Play).",
        "d) Modificar la malla original de forma destructiva interactuando con nodos."
      ],
      "correcta": "c",
      "explicacion": "El texto indica que el Editor de Texto sirve \"para programar scripts completos y ejecutarlos (Play)\"."
    },
    {
      "text": "Si nos situamos sobre un botón o menú en la interfaz de Blender y pulsamos \"Ctrl + C\", ¿qué sucede según el texto?",
      "options": [
        "a) Se copia la ruta de datos (data path) de esa propiedad.",
        "b) Se duplica el objeto seleccionado en la escena actual.",
        "c) Se copia la función de Python de ese botón al portapapeles.",
        "d) Se ejecuta inmediatamente el comando asociado al botón de manera oculta."
      ],
      "correcta": "c",
      "explicacion": "El atajo de teclado \"Ctrl + C\" sobre un botón/menú \"copia la función de Python de ese botón al portapapeles\"."
    },
    {
      "text": "¿Qué atajo de teclado se utiliza para copiar la ruta de datos (data path) de una propiedad en la interfaz?",
      "options": [
        "a) Ctrl + V",
        "b) Shift + Ctrl + C",
        "c) Alt + C",
        "d) Ctrl + C"
      ],
      "correcta": "b",
      "explicacion": "El texto indica explícitamente que \"Shift + Ctrl + C\" (sobre una propiedad) copia la ruta de datos (data path) de dicha propiedad."
    },
    {
      "text": "¿Cuál es el comando básico de ejemplo proporcionado en los apuntes para añadir un cubo primitivo mediante código?",
      "options": [
        "a) bpy.add.primitive_cube()",
        "b) bpy.context.add_cube(location=(x,y,z))",
        "c) bpy.ops.mesh.primitive_cube_add(location=(x,y,z))",
        "d) bpy.data.objects.create_cube()"
      ],
      "correcta": "c",
      "explicacion": "El comando exacto citado en el texto en la sección de Comandos Básicos es \"bpy.ops.mesh.primitive_cube_add(location=(x,y,z))\". Las demás opciones tienen una sintaxis incorrecta."
    },
    {
      "text": "¿Qué código se utiliza para asignar nombres o modificar propiedades refiriéndose al objeto seleccionado o \"activo\" en ese momento?",
      "options": [
        "a) bpy.data.objects[\"Nombre\"]",
        "b) bpy.context.object",
        "c) bpy.types.Operator",
        "d) bpy.ops.mesh"
      ],
      "correcta": "b",
      "explicacion": "Para modificar propiedades directas del objeto usando el contexto activo se utiliza \"bpy.context.object\", mientras que \"bpy.data\" requeriría llamarlo específicamente por su nombre."
    },
    {
      "text": "Si queremos modificar la posición de un objeto llamado \"cubo\" en el eje Y a un valor de 8 mediante código sin usar el contexto activo, ¿qué línea usaríamos según los apuntes?",
      "options": [
        "a) bpy.context.object.location.y = 8",
        "b) bpy.data.objects[\"cubo\"].location[1] = 8",
        "c) bpy.data.objects[\"cubo\"].position_Y = 8",
        "d) bpy.ops.transform.translate(y=8)"
      ],
      "correcta": "b",
      "explicacion": "El texto ofrece como ejemplo para mover un objeto en el eje Y la línea: \"bpy.data.objects[\"cubo\"].location[1] = 8\"."
    },
    {
      "text": "En el comando de animación \"bpy.data.objects['cubo'].keyframe_insert(data_path='location', frame=60, index=1)\", ¿qué indica el argumento \"index=1\"?",
      "options": [
        "a) Que se insertará un fotograma clave en la primera posición de la animación de la escena.",
        "b) Que el fotograma clave se guardará en la propiedad de localización correspondiente al eje Y.",
        "c) Que se modificará el índice numérico del objeto dentro de la colección principal a 1.",
        "d) Que es el primer keyframe (índice 1) que se inserta en toda la escena actual."
      ],
      "correcta": "b",
      "explicacion": "El texto detalla que en ese comando \"Se guarda el fotograma clave en la propiedad de localización, eje Y [index 1]\"."
    },
    {
      "text": "¿Qué es un Addon en Blender según el texto de la Parte 2?",
      "options": [
        "a) Un sistema de modelado procedural integrado en lenguaje C++.",
        "b) Un archivo ejecutable (.exe) que se instala de manera independiente fuera de Blender.",
        "c) Un módulo de script encapsulado de Python (.py) que se integra en la interfaz para automatizar herramientas.",
        "d) Una ventana emergente flotante nativa que no requiere ningún tipo de programación."
      ],
      "correcta": "c",
      "explicacion": "Se define al Addon como un \"módulo de script encapsulado de Python (.py) que se integra en la interfaz de Blender para automatizar herramientas complejas o personalizadas\"."
    },
    {
      "text": "Dentro de la estructura obligatoria de un Addon, ¿qué es \"bl_info\"?",
      "options": [
        "a) Una función que se ejecuta al activar el Addon en las preferencias.",
        "b) Una clase base que define la interfaz gráfica de usuario.",
        "c) Un diccionario de metadatos que contiene nombre, categoría y versión de Blender requerida.",
        "d) Una variable temporal que almacena los datos de los vértices seleccionados."
      ],
      "correcta": "c",
      "explicacion": "El texto afirma literalmente que \"bl_info\" es \"un diccionario de metadatos (nombre, categoría, versión de Blender requerida)\"."
    },
    {
      "text": "En la estructura de un Addon, ¿qué función se ejecuta automáticamente al activarlo en las Preferencias de Blender y se encarga de registrar las clases?",
      "options": [
        "a) def execute()",
        "b) def bl_info()",
        "c) def register()",
        "d) def start()"
      ],
      "correcta": "c",
      "explicacion": "\"def register()\" es la \"Función ejecutada al activar el addon en las Preferencias. Registra las clases\", según se indica en la estructura obligatoria."
    },
    {
      "text": "¿Cuál es la finalidad de la función \"def unregister()\" en un Addon?",
      "options": [
        "a) Deseleccionar el objeto activo de la escena principal.",
        "b) Instalar de forma forzosa el addon por primera vez en Blender.",
        "c) Borrar la escena completa y todos los elementos del archivo actual.",
        "d) Eliminar las clases de la memoria y ejecutarse al desactivar el addon."
      ],
      "correcta": "d",
      "explicacion": "El texto expone que \"def unregister()\" es la \"Función ejecutada al desactivarlo. Elimina las clases de la memoria\"."
    },
    {
      "text": "¿Qué submódulo de la librería \"bpy\" proporciona información y elementos que dependen del estado o la ventana actual de Blender?",
      "options": [
        "a) bpy.data",
        "b) bpy.context",
        "c) bpy.types",
        "d) bpy.ops"
      ],
      "correcta": "b",
      "explicacion": "\"bpy.context\" es el módulo que provee \"Información y elementos que dependen del estado o ventana actual (Ej. objeto seleccionado activo -> bpy.context.active_object)\"."
    },
    {
      "text": "Si deseamos obtener un acceso directo a todos los materiales guardados en el archivo actual, sin importar la selección o ventana en curso, ¿qué módulo del API debemos usar?",
      "options": [
        "a) bpy.context.materials",
        "b) bpy.types.materials",
        "c) bpy.data.materials",
        "d) bpy.props.materials"
      ],
      "correcta": "c",
      "explicacion": "\"bpy.data\" da acceso directo a todos los datos guardados en el archivo actual, sin importar la selección. El texto da como ejemplo claro \"bpy.data.materials\"."
    },
    {
      "text": "¿Para qué se utiliza principalmente el módulo \"bpy.types\"?",
      "options": [
        "a) Para almacenar físicamente todos los datos de mallas e imágenes de un proyecto.",
        "b) Para ejecutar comandos en la interfaz exactamente como si los hiciera el usuario.",
        "c) Para contener la definición de las clases (POO) y usarse como plantilla para crear nuevas clases.",
        "d) Para declarar los atajos de teclado del programa a nivel de sistema operativo."
      ],
      "correcta": "c",
      "explicacion": "El texto describe \"bpy.types\" indicando que \"Contiene la definición de las clases (POO). Se usa como plantilla para crear nuevas clases\"."
    },
    {
      "text": "¿Qué módulo del API \"bpy\" es el encargado de ejecutar acciones (operadores) tal y como las haría un usuario en la interfaz gráfica, como crear un cubo o borrar una lámpara?",
      "options": [
        "a) bpy.ops",
        "b) bpy.data",
        "c) bpy.context",
        "d) bpy.props"
      ],
      "correcta": "a",
      "explicacion": "Se especifica que \"bpy.ops\" (Operadores) \"Ejecutan acciones tal y como las haría un usuario (ej. crear cubos o borrar lámparas)\"."
    },
    {
      "text": "Para crear un operador propio mediante programación en Blender, es necesario heredar de la clase:",
      "options": [
        "a) bpy.types.Panel",
        "b) bpy.types.Operator",
        "c) bpy.context.Active",
        "d) bpy.types.Menu"
      ],
      "correcta": "b",
      "explicacion": "El texto indica claramente en la sección de operadores que \"Para crear tu propio operador se debe heredar de bpy.types.Operator\"."
    },
    {
      "text": "Además de heredar de la clase correspondiente, ¿qué identificador se debe indicar obligatoriamente al definir un operador propio?",
      "options": [
        "a) bl_idname",
        "b) bl_label",
        "c) bl_info",
        "d) data_path"
      ],
      "correcta": "a",
      "explicacion": "Al crear un operador se debe \"indicar un identificador (bl_idname)\", tal y como se establece en el Tema 6 Parte 2."
    },
    {
      "text": "¿Cuál es la función interna obligatoria que debe definirse al crear un operador personalizado en Blender?",
      "options": [
        "a) def draw(self, context):",
        "b) def register():",
        "c) def execute(self, context):",
        "d) def update(self, context):"
      ],
      "correcta": "c",
      "explicacion": "Para un operador propio, el texto estipula que hay que \"definir la función interna obligatoria def execute(self, context):\"."
    },
    {
      "text": "¿Con qué valor debe finalizar la función \"execute\" de un operador propio para indicar que la acción se ejecutó correctamente?",
      "options": [
        "a) return True",
        "b) return {'FINISHED'}",
        "c) return {'DONE'}",
        "d) return 0"
      ],
      "correcta": "b",
      "explicacion": "La regla sobre la función execute marca que \"debe finalizar devolviendo {'FINISHED'}\". Las otras opciones no son la sintaxis válida."
    },
    {
      "text": "¿Qué módulo se utiliza en las interfaces de usuario para capturar los datos introducidos por el usuario en un panel a través de distintos tipos de variables?",
      "options": [
        "a) bpy.ops",
        "b) bpy.context",
        "c) bpy.data",
        "d) bpy.props"
      ],
      "correcta": "d",
      "explicacion": "\"bpy.props\" (Propiedades) proporciona \"Tipos de variables preparadas para capturar datos introducidos por el usuario en el panel\"."
    },
    {
      "text": "¿Qué tipo de propiedad del módulo \"bpy.props\" se utiliza específicamente para dibujar una casilla de verificación (checkbox) en la interfaz?",
      "options": [
        "a) StringProperty",
        "b) BoolProperty",
        "c) IntProperty",
        "d) FloatVectorProperty"
      ],
      "correcta": "b",
      "explicacion": "El texto menciona explícitamente como ejemplo de interfaces de usuario a \"BoolProperty que dibuja un checkbox\"."
    },
    {
      "text": "¿Cómo se denomina al tipo de interfaz gráfica que consiste en fichas que se pueden ocultar o plegar (Collapsible) en los márgenes de la ventana?",
      "options": [
        "a) Pie Menu",
        "b) Toolbar",
        "c) Panel",
        "d) Popup"
      ],
      "correcta": "c",
      "explicacion": "El texto define \"Panel\" como \"Fichas que se pueden ocultar o plegar (Collapsible) en los márgenes\"."
    },
    {
      "text": "¿Qué es un \"Pie Menu\" dentro de los tipos de interfaces gráficas de Blender?",
      "options": [
        "a) Una pestaña permanente en la parte superior de la pantalla.",
        "b) Un menú circular rápido que aparece instantáneamente al pulsar una tecla.",
        "c) Una ventana emergente flotante con texto de aviso y advertencias.",
        "d) Una lista desplegable estándar en un panel de propiedades."
      ],
      "correcta": "b",
      "explicacion": "En el texto, \"Pie Menu\" se describe textualmente como un \"Menú circular rápido que aparece al pulsar una tecla\"."
    },
    {
      "text": "¿Qué término se usa en el resumen para referirse a una \"ventana emergente flotante\"?",
      "options": [
        "a) Popup",
        "b) Collapsible Tab",
        "c) Widget Flotante",
        "d) Data Path"
      ],
      "correcta": "a",
      "explicacion": "La descripción para \"Popup\" en los tipos de interfaces gráficas es, exactamente, \"Ventana emergente flotante\"."
    },
    {
      "text": "Para diseñar el *Layout* de una ventana o panel en la interfaz gráfica, ¿de qué clase o clases se debe heredar según el texto?",
      "options": [
        "a) bpy.types.Operator o bpy.ops",
        "b) bpy.types.Panel o bpy.types.Menu",
        "c) bpy.context o bpy.data",
        "d) bl_info o register"
      ],
      "correcta": "b",
      "explicacion": "El apartado de Layout especifica que \"Para diseñar una ventana, se hereda de bpy.types.Panel o bpy.types.Menu\"."
    },
    {
      "text": "¿Qué método se debe usar al diseñar el *Layout* de un panel o menú para ir colocando los distintos botones u otros elementos de la interfaz?",
      "options": [
        "a) def execute(self, context):",
        "b) def update(self, context):",
        "c) def draw(self, context):",
        "d) def register():"
      ],
      "correcta": "c",
      "explicacion": "Según el resumen, para colocar botones en una interfaz de usuario se debe usar \"el método def draw(self, context):\"."
    },
    {
      "text": "Dentro del método \"draw\", ¿qué comandos específicos se usan para ir colocando los botones organizándolos en la ventana?",
      "options": [
        "a) layout.row() o layout.column()",
        "b) row.append() o column.add()",
        "c) button.create() o interface.draw()",
        "d) panel.x() o panel.y()"
      ],
      "correcta": "a",
      "explicacion": "El texto explica que en el Layout se van colocando botones \"usando layout.row() o layout.column()\"."
    },
    {
      "text": "¿Qué función nativa se utiliza en el código para añadir herramientas o menús creados a los menús nativos de Blender, como por ejemplo en \"bpy.types.VIEW3D_MT_object\"?",
      "options": [
        "a) extend()",
        "b) insert()",
        "c) append()",
        "d) integrate()"
      ],
      "correcta": "c",
      "explicacion": "Los apuntes indican que se pueden añadir funciones a los menús nativos \"usando la función append() en el módulo de UI correspondiente\"."
    },
    {
      "text": "Además de colocarlos en menús visuales, ¿qué otra forma se menciona para poder ejecutar un addon directamente mediante una interacción del usuario sin usar el ratón?",
      "options": [
        "a) Creando un script externo y ejecutándolo a través del Símbolo del Sistema.",
        "b) Asignando Atajos de teclado (Keymaps) directamente en el código del addon.",
        "c) Modificando el código fuente principal de Blender y recompilándolo.",
        "d) Usando comandos de voz con el Editor de Texto de Blender."
      ],
      "correcta": "b",
      "explicacion": "El texto señala expresamente que \"También se pueden asignar Atajos de teclado (Keymaps) directamente en el código para ejecutar el addon\"."
    },
    {
      "text": "¿Cuál es el proceso correcto desde la interfaz del programa (para un usuario final) para instalar y activar un archivo script de addon (.py)?",
      "options": [
        "a) File > Import > Add-on > Seleccionar el script.",
        "b) Ejecutar el script en la Consola de Python y escribir el comando \"Install\".",
        "c) Edit > Preferences > Add-ons > Install -> Activar checkbox.",
        "d) Window > Scripts > Load Add-on -> Reiniciar Blender."
      ],
      "correcta": "c",
      "explicacion": "El proceso exacto de \"Instalación de usuario final\" detallado en el documento es: \"Guardar el script .py -> Edit > Preferences > Add-ons > Install -> Activar checkbox\"."
    },
    {
      "text": "¿Cuál es la principal utilidad de la librería base `bpy` dentro de Blender?",
      "options": [
        "a) Ejecutar programas externos compilados en C++ para renderizado avanzado en tiempo real.",
        "b) Acceder a todas las funciones y comandos del programa mediante secuencias de código Python.",
        "c) Optimizar la topología de las mallas automáticamente sin necesidad de usar modificadores.",
        "d) Renderizar secuencias de video utilizando el motor Eevee para juegos de realidad virtual."
      ],
      "correcta": "b",
      "explicacion": "La librería `bpy` es la API de Python en Blender y permite acceder a todas sus funciones para automatizar tareas, crear Addons y modificar parámetros."
    },
    {
      "text": "En el Workspace \"Scripting\", ¿para qué sirve la ventana denominada \"Info\" (Información)?",
      "options": [
        "a) Para visualizar la estructura de nodos de los materiales asignados al objeto seleccionado.",
        "b) Para mostrar un registro histórico de las operaciones manuales ejecutadas en el entorno.",
        "c) Para redactar y ejecutar directamente scripts completos formados por un número de líneas.",
        "d) Para revisar el rendimiento de la tarjeta gráfica y la memoria RAM del sistema operativo."
      ],
      "correcta": "b",
      "explicacion": "La ventana Info muestra el registro histórico de operaciones ejecutadas, útil para copiar el código de acciones realizadas manualmente."
    },
    {
      "text": "Si deseas copiar la función de Python de un botón específico en la interfaz, ¿qué atajo debes usar?",
      "options": [
        "a) Posicionar el cursor sobre el botón y presionar la combinación de teclas Ctrl más la tecla C.",
        "b) Posicionar el cursor sobre el botón y presionar la combinación Shift más Ctrl más la tecla C.",
        "c) Posicionar el cursor sobre el botón y presionar la combinación de teclas Alt más la tecla F4.",
        "d) Posicionar el cursor sobre el botón y hacer un doble clic rápido con el botón izquierdo del ratón."
      ],
      "correcta": "a",
      "explicacion": "El atajo Ctrl + C sobre un botón o menú copia al portapapeles la función de Python correspondiente a ese elemento."
    },
    {
      "text": "¿Qué ventaja principal ofrece el sistema de \"Geometry Nodes\" respecto al código manual puro?",
      "options": [
        "a) Requiere menos recursos de memoria RAM al calcular dinámicas de fluidos y sistemas de colisión.",
        "b) Permite compilar los resultados en archivos ejecutables que son independientes de la plataforma.",
        "c) Es un sistema procedural y no destructivo basado en nodos que facilita su rápida automatización.",
        "d) Genera automáticamente materiales PBR realistas sin la necesidad de crear texturas muy complejas."
      ],
      "correcta": "c",
      "explicacion": "Geometry Nodes permite modelado procedural y animación basada en nodos, automatizando procesos sin modificar la malla original."
    },
    {
      "text": "¿Cuál es la función del submódulo `bpy.data` dentro de la librería API principal de Blender?",
      "options": [
        "a) Proporcionar acceso a elementos temporales que dependen del estado actual o de la ventana activa.",
        "b) Proveer acceso directo a todos los datos guardados en el archivo actual sin importar la selección.",
        "c) Contener las plantillas o definiciones de las clases para toda la programación orientada a objetos.",
        "d) Ejecutar directamente acciones concretas tal y como las realizaría un usuario común en la interfaz."
      ],
      "correcta": "b",
      "explicacion": "`bpy.data` permite el acceso a todos los datos guardados en el archivo (como materiales, escenas, objetos) independientemente de la ventana."
    },
    {
      "text": "¿Qué función debe estar presente en el código de un operador personalizado (`bpy.types.Operator`) para que ejecute su acción?",
      "options": [
        "a) La función interna `def execute(self, context):` que debe devolver siempre el estado `{'FINISHED'}`.",
        "b) La función interna `def register(self, context):` que debe devolver siempre el estado `{'REGISTER'}`.",
        "c) La función interna `def invoke(self, context):` que debe devolver siempre un estado `{'COMPLETED'}`.",
        "d) La función interna `def process(self, context):` que debe devolver siempre un estado `{'EXECUTED'}`."
      ],
      "correcta": "a",
      "explicacion": "Un operador hereda de `bpy.types.Operator` y debe definir `def execute(self, context):` retornando `{'FINISHED'}` al concluir."
    },
    {
      "text": "¿Qué diccionario es obligatorio definir al inicio del código de un Addon para incluir sus metadatos?",
      "options": [
        "a) El diccionario `bl_addon` que contiene el nombre del script y la categoría correspondiente del Addon.",
        "b) El diccionario `bl_plugin` que especifica la versión del programa y la descripción general del script.",
        "c) El diccionario `bl_info` que detalla el nombre, la categoría y la versión de Blender que es requerida.",
        "d) El diccionario `bl_meta` que almacena los créditos del autor original y los enlaces de la documentación."
      ],
      "correcta": "c",
      "explicacion": "El diccionario `bl_info` es obligatorio e incluye metadatos como nombre, categoría y versión."
    },
    {
      "text": "¿Qué acciones se deben llevar a cabo para instalar un Addon como usuario final directamente en Blender?",
      "options": [
        "a) Guardar el script en la carpeta de instalación del sistema y reiniciar el programa presionando tecla F12.",
        "b) Abrir el archivo `.py` dentro del entorno del Text Editor, ejecutar el script completo y guardar la escena.",
        "c) Compilar el archivo de texto en un formato de programa ejecutable y abrirlo antes de iniciar el entorno 3D.",
        "d) Ir al menú de Edit, Preferences, Add-ons, opción de Install, seleccionar el script y activar la casilla útil."
      ],
      "correcta": "d",
      "explicacion": "La instalación habitual de usuario requiere ir a Edit > Preferences > Add-ons > Install y activar la casilla correspondiente."
    },
    {
      "text": "¿Para qué se utilizan los diferentes tipos de propiedades en `bpy.props` (como la opción `StringProperty`) al crear interfaces?",
      "options": [
        "a) Para definir los diversos comandos de atajos de teclado que ejecutan instantáneamente las distintas herramientas.",
        "b) Para crear ciertas variables preparadas para capturar datos numéricos o textos introducidos por el usuario activo.",
        "c) Para renderizar de manera completamente automática los diferentes pases de luz y sombras en una escena terminada.",
        "d) Para aplicar unos materiales muy complejos a las superficies pulidas de los objetos geométricos tridimensionales."
      ],
      "correcta": "b",
      "explicacion": "Las propiedades de `bpy.props` preparan variables especiales para recolectar información del usuario desde la interfaz."
    },
    {
      "text": "Si deseas insertar un fotograma clave (keyframe) utilizando código Python, ¿qué parámetro debes especificar obligatoriamente?",
      "options": [
        "a) El tipo de curva de interpolación (Bezier o Lineal) y la cantidad de suavizado aplicado a lo largo de la misma.",
        "b) La propiedad que se desea animar mediante el argumento denominado `data_path` y el número de fotograma deseado.",
        "c) El nombre de la cámara activa que renderizará la animación actual y la resolución final del video de exportación.",
        "d) La cantidad total de fotogramas del proyecto en curso y la ruta de almacenamiento de la secuencia de fotogramas."
      ],
      "correcta": "b",
      "explicacion": "Se utiliza el método `keyframe_insert`, que requiere definir el parámetro `data_path` (ej. 'location') y el fotograma."
    },
    {
      "text": "¿Qué característica describe mejor a un menú conocido como \"Pie Menu\" dentro de las interfaces de usuario nativas de Blender?",
      "options": [
        "a) Es una pestaña gráfica colapsable situada en el panel lateral que agrupa visualmente varios elementos modificadores.",
        "b) Es una ventana rectangular emergente que flota sobre la interfaz del usuario y que permite seleccionar los directorios.",
        "c) Es un menú circular de acceso rápido que se despliega de forma temporal al mantener pulsada una tecla en el teclado.",
        "d) Es un avanzado editor de nodos lógico diseñado de forma específica para facilitar la creación de texturas procedurales."
      ],
      "correcta": "c",
      "explicacion": "Un Pie Menu es un menú circular rápido que aparece al pulsar un atajo de teclado en la ventana."
    },
    {
      "text": "En el diseño de una interfaz (UI) heredada de `bpy.types.Panel`, ¿qué método se emplea para disponer visualmente los elementos?",
      "options": [
        "a) El método especial `def layout(self, context):` para colocar botones usando las coordenadas exactas de la pantalla actual.",
        "b) El método especial `def draw(self, context):` para ir estructurando botones mediante los comandos de fila y columna gráfica.",
        "c) El método especial `def design(self, context):` para agrupar todas las propiedades creando listas y diccionarios complejos.",
        "d) El método especial `def render(self, context):` para generar una vista previa de la ventana antes de compilar el script final."
      ],
      "correcta": "b",
      "explicacion": "El método `draw` se utiliza en las interfaces de usuario (como paneles o menús) para organizar los botones utilizando elementos de diseño."
    },
    {
      "text": "¿Cuál de los siguientes submódulos del API ejecutaría directamente la acción de añadir un cubo primitivo en medio de la escena 3D?",
      "options": [
        "a) `bpy.data`, porque permite modificar la información estructural del archivo de forma permanente para el modelo final.",
        "b) `bpy.context`, porque depende de la selección actual de la cámara virtual en el respectivo entorno de visualización.",
        "c) `bpy.types`, porque define la clase abstracta fundamental de una figura primitiva básica para las futuras instancias.",
        "d) `bpy.ops`, porque agrupa los operadores principales que ejecutan las acciones tal y como lo haría el usuario manual."
      ],
      "correcta": "d",
      "explicacion": "El módulo `bpy.ops` contiene todos los operadores (como añadir objetos) que emulan acciones del usuario."
    },
    {
      "text": "Al desactivar de forma temporal un Addon desde las preferencias de Blender, ¿qué función interna del script se ejecuta automáticamente?",
      "options": [
        "a) La función interna llamada `def disconnect()`, encargada de desvincular múltiples referencias dentro de la memoria caché.",
        "b) La función interna llamada `def unregister()`, encargada de eliminar apropiadamente las clases registradas en la memoria.",
        "c) La función interna llamada `def deactivate()`, encargada de detener de manera forzada los procesos en ejecución actuales.",
        "d) La función interna llamada `def disable()`, encargada de borrar todos los atajos de teclado ubicados en el panel principal."
      ],
      "correcta": "b",
      "explicacion": "La función `unregister` revierte los cambios hechos por `register` eliminando las clases de la memoria cuando se desactiva el addon."
    },
    {
      "text": "¿Qué método se utiliza generalmente para añadir de manera directa las nuevas funciones de un Addon en los menús nativos de la interfaz?",
      "options": [
        "a) Se emplea la función `insert()` dentro del menú específico de todas las opciones del panel principal en el editor visual.",
        "b) Se emplea la función `append()` en el módulo de UI correspondiente para poder enlazar adecuadamente el nuevo operador.",
        "c) Se emplea la función `attach()` para lograr pegar el código funcional en el menú desplegable de las nuevas herramientas.",
        "d) Se emplea la función `embed()` dentro de la definición básica del panel lateral para integrar con facilidad las propiedades."
      ],
      "correcta": "b",
      "explicacion": "Se utiliza el método `append()` sobre una estructura de menú de `bpy.types` (por ejemplo, `bpy.types.VIEW3D_MT_object.append(menu_func)`)."
    },
    {
      "text": "¿Qué función cumple el respectivo Workspace \"Scripting\" en relación directa con la ventana llamada Consola interactiva de Python?",
      "options": [
        "a) Permite escribir de forma libre aplicaciones interactivas complejas para presentar modelos tridimensionales en vivo y directo.",
        "b) Permite ejecutar ágilmente líneas individuales de código específico para probar distintos comandos y evaluar su resultado real.",
        "c) Permite exportar velozmente todos los scripts de animación manual para ser utilizados en potentes motores gráficos externos.",
        "d) Permite traducir automáticamente el denso código fuente a diversos otros lenguajes buscando obtener un mayor rendimiento final."
      ],
      "correcta": "b",
      "explicacion": "La Consola de Python se utiliza para ejecutar líneas individuales de forma interactiva y realizar pruebas rápidas de comandos."
    },
    {
      "text": "¿Cómo se puede acceder a la útil propiedad de \"objeto activo\" mediante el uso del submódulo más adecuado de la interfaz de programación?",
      "options": [
        "a) Utilizando el comando `bpy.data.active_object`, ya que almacena fielmente el elemento activo dentro del disco duro interno.",
        "b) Utilizando el comando `bpy.ops.active_object`, ya que ejecuta con rapidez la selección principal del modelo en el espacio 3D.",
        "c) Utilizando el comando `bpy.types.active_object`, ya que define estrictamente el tipo de clase seleccionada actualmente por ti.",
        "d) Utilizando el comando `bpy.context.active_object`, ya que representa correctamente la información que es dependiente del estado."
      ],
      "correcta": "d",
      "explicacion": "El objeto activo depende del estado actual de la selección, por lo que se accede mediante `bpy.context.active_object`."
    },
    {
      "text": "¿Qué representa exactamente el parámetro numérico `index` al insertar un keyframe por código para la propiedad temporal `location` (ej. `index=1`)?",
      "options": [
        "a) El número total predefinido de keyframes exactos que se añadirán simultáneamente en esa misma posición temporal del timeline general.",
        "b) El eje geométrico específico sobre el cual se aplicará de inmediato la transformación actual (donde el número 1 corresponde al eje Y).",
        "c) El orden de prioridad global o relativo en el que se renderizarán a posteriori todas las complejas animaciones de toda la escena activa.",
        "d) La capa de animación secundaria adicional donde se guardará permanentemente el nuevo fotograma clave deseado para la composición global."
      ],
      "correcta": "b",
      "explicacion": "Para un vector como `location` (X, Y, Z), el `index` corresponde al eje afectado, siendo 0 para X, 1 para Y y 2 para Z."
    },
    {
      "text": "Cuando un desarrollador o usuario necesita copiar velozmente la \"ruta de datos\" (data path) de una propiedad, ¿qué es lo que debe hacer?",
      "options": [
        "a) Pulsar las teclas Ctrl más C mientras mantiene presionado firmemente el botón derecho de su ratón sobre la respectiva ventana gráfica.",
        "b) Pulsar las teclas Shift más Ctrl más C directamente sobre la propiedad deseada estando en cualquier panel de la interfaz de usuario.",
        "c) Pulsar las teclas Ctrl más Alt más Supr y posteriormente seleccionar la ruta específica de la propiedad desde el editor de sistema base.",
        "d) Pulsar las teclas Shift más A con el fin de abrir el útil menú emergente y proceder a elegir la opción concreta de copiar la configuración."
      ],
      "correcta": "b",
      "explicacion": "El atajo para copiar el *data path* de una propiedad en Blender es Shift + Ctrl + C sobre dicha propiedad."
    },
    {
      "text": "¿Qué característica esencial del submódulo denominado `bpy.types` lo hace totalmente indispensable para la creación de nuevas herramientas personalizadas?",
      "options": [
        "a) Almacena ordenadamente el registro histórico de comandos ejecutados con éxito, permitiendo deshacer cambios repentinos en los objetos.",
        "b) Funciona eficientemente como un robusto motor de renderizado interno enfocado en previsualizar alteraciones de geometría en tiempo real.",
        "c) Contiene internamente la estricta definición abstracta de clases, sirviendo como plantilla base esencial para diseñar operadores nuevos.",
        "d) Maneja de manera absolutamente exclusiva la importante importación y exportación de archivos en los distintos formatos gráficos puros."
      ],
      "correcta": "c",
      "explicacion": "`bpy.types` almacena las definiciones de clases usadas como plantillas (ej. `bpy.types.Operator`, `bpy.types.Panel`) para extender la interfaz."
    }
  ],
  "MAC_Test_General_50.txt": [
    {
      "text": "En una simulación de físicas, ¿qué variable se ve afectada de manera directa por un impulso?",
      "options": [
        "a) La aceleración general del sistema mecánico de forma muy gradual.",
        "b) La posición original del objeto virtual instantáneamente en el eje.",
        "c) La velocidad de la partícula o cuerpo simulado de forma repentina.",
        "d) La masa total o el volumen del cuerpo de manera completamente fija."
      ],
      "correcta": "c",
      "explicacion": "Un impulso es una fuerza inmensa en un intervalo temporal minúsculo, lo que se traduce en un cambio instantáneo de velocidad."
    },
    {
      "text": "¿Qué operación booleana conserva únicamente la parte común o compartida entre dos mallas?",
      "options": [
        "a) La operación conocida como Unión booleana (AND).",
        "b) La operación conocida como Intersección (OR).",
        "c) La operación conocida como Diferencia (NOT).",
        "d) La operación conocida como Sustracción total."
      ],
      "correcta": "b",
      "explicacion": "La operación booleana de Intersección (OR) conserva únicamente el volumen compartido por los objetos."
    },
    {
      "text": "¿Por qué motivo es necesario aplicar un efecto artificial de 'Motion Blur' en un render 3D?",
      "options": [
        "a) Porque los motores de render 3D no emulan la obturación natural.",
        "b) Porque las simulaciones anulan automáticamente los mapas tonales.",
        "c) Porque los sistemas de nodos limitan la velocidad física calculable.",
        "d) Porque el enfoque focal contrarresta por completo el nivel de blur."
      ],
      "correcta": "a",
      "explicacion": "A diferencia de las cámaras físicas, el renderizado de gráficos 3D no captura la estela de movimiento (obturación), por lo que debe simularse."
    },
    {
      "text": "¿En qué consiste el proceso de retopología en el flujo de trabajo de modelado 3D?",
      "options": [
        "a) Crear una malla optimizada encima de una escultura digital densa.",
        "b) Aplicar un suavizado constante a una malla de muy baja resolución.",
        "c) Eliminar todos los mapas de normales generados durante el esculpido.",
        "d) Subdividir la geometría base para añadir cientos de nuevos vértices."
      ],
      "correcta": "a",
      "explicacion": "La retopología consiste en crear una malla optimizada y animable sobre una escultura de alta densidad de polígonos."
    },
    {
      "text": "¿Qué primitiva geométrica suele contener N-gons por defecto en sus tapas?",
      "options": [
        "a) El cilindro en sus bases planas.",
        "b) La esfera en su ecuador principal.",
        "c) El toroide en sus uniones curvas.",
        "d) El cubo en todas sus seis caras."
      ],
      "correcta": "a",
      "explicacion": "El cilindro por defecto usa un n-gon para rellenar la tapa superior y la tapa inferior, lo cual debe tenerse en cuenta en la topología."
    },
    {
      "text": "¿Cuál es un problema común al modelar empleando un sistema de superficies NURBS?",
      "options": [
        "a) Generan una malla que siempre está compuesta por n-gons.",
        "b) Suavizan el modelo pero impiden aplicar rotaciones básicas.",
        "c) Son muy difíciles de interconectar y mantener continuidad.",
        "d) Requieren siempre topologías de ocho lados para funcionar."
      ],
      "correcta": "c",
      "explicacion": "Los parches NURBS presentan serios problemas de interconexión y mantenimiento de continuidad geométrica."
    },
    {
      "text": "Según la categorización de Blender, ¿a qué grupo pertenece un modificador de dinámicas de fluidos?",
      "options": [
        "a) Al grupo de modificadores categorizados como de tipo Generar.",
        "b) Al grupo de modificadores categorizados como de tipo Simular.",
        "c) Al grupo de modificadores categorizados como de tipo Deformar.",
        "d) Al grupo de modificadores categorizados como de tipo Modificar."
      ],
      "correcta": "b",
      "explicacion": "Blender agrupa las dinámicas y físicas dentro de la categoría Simular, que incluye herramientas de simulación."
    },
    {
      "text": "¿Qué gran ventaja introdujeron las denominadas superficies de subdivisión frente a las previas NURBS?",
      "options": [
        "a) Aseguran generar topologías hechas exclusivamente con triángulos.",
        "b) Solucionan los graves problemas de interconexión en las superficies.",
        "c) Limitan todas las mallas a una única resolución para ahorrar memoria.",
        "d) Eliminan por completo la urgencia de utilizar las texturas UV visuales."
      ],
      "correcta": "b",
      "explicacion": "Las Subdivision Surfaces permitieron trabajar con topologías irregulares sin perder continuidad suave, resolviendo la interconexión NURBS."
    },
    {
      "text": "¿Qué técnica de modelado parte de repetir un perfil 2D a lo largo de una trayectoria tridimensional?",
      "options": [
        "a) Extrusión plana distribuida a lo largo de varios ejes ortogonales.",
        "b) Subdivisión recurrente de la geometría hasta crear formas nuevas.",
        "c) Operación de tipo Solevado (Loft) mediante trayectorias en curva.",
        "d) Revolución estándar alrededor de un único punto de pivote común."
      ],
      "correcta": "c",
      "explicacion": "El Solevado o Loft toma un contorno o perfil 2D y lo extruye repitiéndolo a lo largo del recorrido dictado por una curva 3D."
    },
    {
      "text": "¿Cómo funcionan los deformadores espaciales conocidos en el entorno 3D como 'Wires'?",
      "options": [
        "a) Utilizan una matriz global que afecta todos los puntos de la malla.",
        "b) Emplean curvas 3D arbitrarias para generar una deformación suave.",
        "c) Aplican complejas funciones armónicas sobre una malla base cerrada.",
        "d) Dependen única y exclusivamente de las coordenadas baricéntricas."
      ],
      "correcta": "b",
      "explicacion": "Los deformadores Wire se basan en curvas tridimensionales arbitrarias; la deformación decrece según la distancia a dicha curva."
    },
    {
      "text": "¿Qué comportamiento tiene el mapa 'Normal' sobre una superficie 3D?",
      "options": [
        "a) Transforma la geometría original de la malla para añadir un volumen tridimensional real.",
        "b) Simula detalles de relieve interaccionando con la iluminación sin alterar la geometría.",
        "c) Determina únicamente si un material específico es de carácter netamente metálico o no.",
        "d) Oscurece las intersecciones poligonales para emular múltiples sombras en sus oquedades."
      ],
      "correcta": "b",
      "explicacion": "Simula variaciones en el relieve a través de la luz, sin llegar a deformar los polígonos del modelo real."
    },
    {
      "text": "¿Qué problema frecuente suele presentarse con el uso de Texturizados (Imágenes)?",
      "options": [
        "a) Proporcionan gran realismo en suciedad, pero pueden generar cortes al aplicarse al 3D.",
        "b) Generan superficies continuas sin costuras gracias a su resolución matemática infinita.",
        "c) Solo pueden emplearse en motores de renderizado en tiempo real orientados a videojuegos.",
        "d) Modifican directamente la cantidad de polígonos del modelo para adaptarse al realismo."
      ],
      "correcta": "a",
      "explicacion": "Usar fotografías da gran realismo, pero genera el problema de los cortes o 'seams' al envolver una malla."
    },
    {
      "text": "¿Qué editor de materiales moderno utiliza 3DS Max basado en nodos?",
      "options": [
        "a) El editor Slate Material Editor es el sistema más moderno que funciona mediante nodos.",
        "b) El antiguo Compact Material Editor se usa exclusivamente para diseñar los mapas de UVW.",
        "c) Ambos sistemas de materiales exigen que el usuario domine lenguajes matemáticos puros.",
        "d) El tradicional Compact Material solo logra aplicar texturas procedentes de una cámara."
      ],
      "correcta": "a",
      "explicacion": "Slate Material Editor es la herramienta moderna de nodos en 3DS Max, frente a su predecesor Compact Material Editor."
    },
    {
      "text": "En el contexto de Blender, ¿qué herramienta central se usa para crear materiales complejos?",
      "options": [
        "a) El sistema Shader Editor es el que permite organizar las capas de texturas preexistentes.",
        "b) El editor principal para crear materiales basados en sistemas de nodos es Shader Editor.",
        "c) Para cambiar directamente la textura activa se debe emplear siempre el atajo de teclado W.",
        "d) La función exclusiva Node Wrangler se emplea únicamente para optimizar mallas orgánicas."
      ],
      "correcta": "b",
      "explicacion": "El Shader Editor permite construir materiales avanzados conectando distintos nodos."
    },
    {
      "text": "En el mapeado UVW, ¿qué representa la coordenada W?",
      "options": [
        "a) Las coordenadas U y V corresponden al espacio tridimensional de sombras generadas en AO.",
        "b) La letra W representa siempre el eje Z y se utiliza para animaciones y procedurales.",
        "c) El término general UVW hace referencia a tres famosos motores de renderizados modernos.",
        "d) La coordenada en U sirve exclusivamente para escalar grandes texturas fotográficas 8K."
      ],
      "correcta": "b",
      "explicacion": "W es la coordenada equivalente al eje Z y suele utilizarse para efectos de animación y mapas procedurales."
    },
    {
      "text": "¿Qué particularidad tiene el mapa 'Height' o 'Displacement' respecto a otros?",
      "options": [
        "a) Altera la reflexión luminosa constante sin llegar a deformar en absoluto la malla visual.",
        "b) Modifica varios canales de luz ambiental para oscurecer las hendiduras más profundas.",
        "c) Deforma la malla geométrica real de la superficie y requiere de un alto consumo de recursos.",
        "d) Crea una gran ilusión óptica de profundidad mediante el uso combinado de vectores de luz."
      ],
      "correcta": "c",
      "explicacion": "A diferencia del mapa normal, este sí desplaza los vértices reales de la malla y por ello consume muchos recursos."
    },
    {
      "text": "¿De qué depende de manera crítica que el Unwrap UVW funcione adecuadamente?",
      "options": [
        "a) La eficiencia real de este proceso radica de usar texturas matemáticas sin ruido visual.",
        "b) Solamente puede lograr el éxito cuando un mapeado cúbico fue asignado a todo el polígono.",
        "c) Este complejo desenvolvimiento depende críticamente de tener una buena topología de malla.",
        "d) Todo el resultado resulta muy independiente de las características poligonales del objeto."
      ],
      "correcta": "c",
      "explicacion": "Si la geometría (topología) del modelo es mala o desordenada, será extremadamente difícil realizar un buen desenvolvimiento UVW."
    },
    {
      "text": "¿Cuál de las siguientes es una desventaja de las texturas procedurales?",
      "options": [
        "a) Muestran problemas de cortes visibles al envolver repetidamente modelos complejos en 3D.",
        "b) Requieren de obligatoriamente de mapas UV perfectos para lograr resultados aceptables.",
        "c) Presentan gran dificultad para poder modelar detalles finos y tienen complejidad matemática.",
        "d) Producen pixelados evidentes siempre que la cámara realiza un acercamiento a las texturas."
      ],
      "correcta": "c",
      "explicacion": "Son difíciles para recrear elementos muy específicos o detallados, y requieren fórmulas matemáticas complejas."
    },
    {
      "text": "¿Qué ventaja principal destacan en el uso de texturas procedurales?",
      "options": [
        "a) Permiten resoluciones infinitas, no se pixelan y evitan los cortes en su repetición.",
        "b) Facilitan la creación rápida de arañazos y suciedad específica con un alto realismo.",
        "c) Su principal ventaja es que requieren muy pocos conocimientos matemáticos avanzados.",
        "d) Generan relieves reales en la geometría sin utilizar mapas de desplazamiento complejos."
      ],
      "correcta": "a",
      "explicacion": "Al ser algoritmos matemáticos, pueden escalarse sin perder calidad ni generar efecto sierra o costuras."
    },
    {
      "text": "¿Cuándo resulta más idóneo utilizar el mapeado primitivo 'Planar' (Plano)?",
      "options": [
        "a) Es siempre la mejor opción posible para cubrir cualquier elemento esférico sin pellizcos.",
        "b) Resulta especialmente útil cuando la cara del modelo es paralela al plano de proyección.",
        "c) Se basa en repetir un simple patrón infinito a lo largo de las variadas caras cilíndricas.",
        "d) Este método envuelve toda la malla a la perfección logrando evitar los cortes repetitivos."
      ],
      "correcta": "b",
      "explicacion": "El mapeado planar proyecta la textura desde un lado y es perfecto si la malla es plana y paralela."
    },
    {
      "text": "¿Qué fenómeno lumínico específico de la iluminación global está diseñado para simular el algoritmo de Radiosidad?",
      "options": [
        "a) Las interacciones luminosas difusas perfectas y la conservación de la energía entre todas las superficies de la escena.",
        "b) Los reflejos especulares de alta precisión en objetos metálicos curvos y superficies reflectantes como los espejos.",
        "c) La refracción pura de rayos de luz que atraviesan líquidos o cristales, generando efectos de distorsión óptica.",
        "d) El comportamiento anisotrópico extremo de los materiales, basándose exclusivamente en datos goniofotométricos."
      ],
      "correcta": "a",
      "explicacion": "La Radiosidad es un método especializado en calcular cómo la luz rebota en superficies mates (interacciones difusas) preservando la energía."
    },
    {
      "text": "¿Qué fenómeno lumínico complejo simulan de manera especialmente eficiente los algoritmos basados en Mapas de Fotones?",
      "options": [
        "a) Las cáusticas generadas por la concentración de luz al atravesar objetos transparentes como agua o cristal curvo.",
        "b) El ruido de interpolación visual conocido como Mach Banding en objetos con baja resolución geométrica o facetada.",
        "c) La atenuación atmosférica producida por densas nubes de polvo y neblina frente a sistemas de Iluminación Local.",
        "d) El sombreado suave de vértices propio de Gouraud sin requerir el cálculo matemático directo de normales internas."
      ],
      "correcta": "a",
      "explicacion": "Los mapas de fotones son muy apreciados por su eficiencia y calidad al renderizar cáusticas (luz refractada/reflejada concentrada)."
    },
    {
      "text": "En términos de interpolación geométrica durante el rasterizado, ¿qué procesa internamente el modelo de Phong Shading?",
      "options": [
        "a) Interpola las normales desde los vértices hacia todo el interior y recalcula la iluminación completa píxel a píxel.",
        "b) Interpola exclusivamente los valores de color calculados en los vértices para rellenar progresivamente el polígono.",
        "c) Interpola posiciones geométricas desde el centro de gravedad de la cara hacia sus bordes para calcular la luz.",
        "d) Interpola fotones almacenados previamente en un árbol tridimensional para determinar la intensidad del brillo."
      ],
      "correcta": "a",
      "explicacion": "El Phong Shading destaca por interpolar normales a través del polígono y ejecutar el cálculo de iluminación por cada píxel, mejorando mucho el especular."
    },
    {
      "text": "En el modelo de iluminación local clásico, ¿cuál de las siguientes componentes lumínicas varía su resultado si el observador cambia de posición?",
      "options": [
        "a) La componente Especular, ya que los brillos concentrados cambian al modificar el ángulo de reflexión hacia la cámara.",
        "b) La componente Difusa, debido a que la dispersión de la luz depende directamente del punto de vista del usuario.",
        "c) La componente Ambiente, porque la luz de fondo necesita ajustarse al ángulo de visión principal de la escena.",
        "d) La atenuación lumínica, porque la distancia a la fuente de luz se recalcula desde la nueva posición del ojo."
      ],
      "correcta": "a",
      "explicacion": "La luz especular es la única del modelo básico de Phong que depende del punto de vista (cámara), ya que calcula el reflejo directo hacia el observador."
    },
    {
      "text": "A pesar de suavizar las superficies, ¿cuál es un defecto visual conocido que puede ocurrir al utilizar Gouraud Shading?",
      "options": [
        "a) Puede omitir o deformar brillos especulares si el punto de máxima reflexión cae en el centro de un polígono grande.",
        "b) Genera un fuerte efecto de 'Mach Banding' en todas las aristas compartidas, exagerando el contraste de los colores.",
        "c) Requiere un volumen excesivo de memoria RAM, ya que almacena mapas de interpolación pesados para cada vértice.",
        "d) Es incapaz de calcular la componente de luz ambiental, dejando las áreas en sombra completamente teñidas de negro."
      ],
      "correcta": "a",
      "explicacion": "Como Gouraud interpola colores desde los vértices, si un brillo especular debe aparecer justo en el medio de un polígono grande, el cálculo no lo captará correctamente."
    },
    {
      "text": "¿Qué es el 'Mach Banding', un problema que surge al utilizar métodos de sombreado simples como el Flat Shading?",
      "options": [
        "a) Una ilusión óptica en la que el cerebro humano exagera artificialmente el contraste entre bandas colindantes de distinto tono.",
        "b) Un fallo de cálculo matemático donde las luces ambientales se suman exponencialmente saturando el blanco de la imagen.",
        "c) Un defecto de textura que aparece exclusivamente cuando los vectores normales de un polígono se invierten por completo.",
        "d) Una anomalía geométrica que impide a los rayos especulares rebotar, eliminando todo el brillo de superficies reflectantes."
      ],
      "correcta": "a",
      "explicacion": "El Mach Banding es un fenómeno perceptivo donde el contraste entre facetas adyacentes de diferente tono se percibe más acentuado en los bordes."
    },
    {
      "text": "¿Qué propiedad describe correctamente el comportamiento de la luz en un material anisotrópico según la función BRDF?",
      "options": [
        "a) La cantidad y dirección de la luz reflejada cambia dependiendo del ángulo o dirección en que la luz incide sobre él.",
        "b) La reflexión luminosa se produce de manera perfectamente uniforme e idéntica en todas las direcciones posibles.",
        "c) Toda la luz incidental es completamente absorbida por la superficie, sin producir rebotes especulares o difusos.",
        "d) El material emite luz propia, comportándose de manera idéntica a una fuente de radiación constante y directa."
      ],
      "correcta": "a",
      "explicacion": "Los materiales anisotrópicos (como el metal cepillado) tienen reflexiones que varían dependiendo de la dirección geométrica de la luz y la superficie."
    },
    {
      "text": "A diferencia del Ray-Tracing clásico, ¿desde dónde se inician los trazados durante la fase de construcción en Photon Mapping?",
      "options": [
        "a) Los fotones se disparan desde las propias fuentes de luz luminosas hacia las diversas superficies de la escena 3D.",
        "b) Los trazados primarios se generan en el sensor virtual de la cámara y viajan en retroceso hacia los focos de luz.",
        "c) Los rayos de cálculo nacen exclusivamente en el centro de gravedad de cada objeto volumétrico presente en el nivel.",
        "d) Los haces se proyectan desde el observador rebotando indefinidamente hasta intersectar con un parche emisor difuso."
      ],
      "correcta": "a",
      "explicacion": "El mapa de fotones consta de una primera fase (emisión) donde se lanzan fotones desde las fuentes de luz hacia la escena."
    },
    {
      "text": "¿Cuál es la principal diferencia conceptual entre los procesos de Iluminación y Sombreado (Shading) en gráficos 3D?",
      "options": [
        "a) La iluminación calcula la luz en un punto específico, mientras el sombreado aplica este modelo a toda la superficie interpolando valores.",
        "b) La iluminación interpola el color a través del polígono, mientras que el sombreado determina la intensidad luminosa de toda la escena.",
        "c) La iluminación solo se aplica a los vértices de la geometría, mientras que el sombreado se procesa exclusivamente en el centro de las caras.",
        "d) La iluminación global sustituye al sombreado en tiempo real, mientras que la iluminación local necesita interpolar normales constantemente."
      ],
      "correcta": "a",
      "explicacion": "La iluminación usa ecuaciones físicas para puntos concretos, y el sombreado define cómo cubrir todo el polígono usando esos cálculos."
    },
    {
      "text": "¿Qué ventaja directa aporta la independencia de vista que caracteriza a los resultados del cálculo por Radiosidad?",
      "options": [
        "a) Permite mover la cámara libremente por la escena sin tener que recalcular las complejas interacciones de luz difusa.",
        "b) Facilita la modificación en tiempo real de los materiales especulares sin necesidad de preprocesar el mapa de fotones.",
        "c) Elimina por completo la necesidad de triangular los polígonos complejos antes de procesar las texturas aplicadas.",
        "d) Posibilita la creación de refracciones perfectas en cristales independientemente del ángulo en que incide la luz focal."
      ],
      "correcta": "a",
      "explicacion": "Al calcular las interacciones difusas entre parches de la escena global, el resultado es independiente del observador, permitiendo explorar la escena sin recalcular."
    },
    {
      "text": "Dentro de los 'nuevos' principios aplicados a la animación 3D, ¿a qué se refiere el concepto denominado 'Blend Motion'?",
      "options": [
        "a) Al proceso de iluminar escenas fotorealistas mediante el uso de luz global.",
        "b) A la técnica de calcar sobre metraje de vídeo real para dibujar un modelo.",
        "c) A la mezcla de captura de movimiento, simulaciones dinámicas y keyframes.",
        "d) Al control exhaustivo de expresiones usando manipuladores faciales morfológicos."
      ],
      "correcta": "c",
      "explicacion": "El Blend Motion (o combinación de movimientos) es la capacidad técnica de mezclar de forma armónica clips de MOCAP, simulaciones físicas y keyframes clásicos en un mismo personaje."
    },
    {
      "text": "Al utilizar cuaterniones (quaternions) para calcular rotaciones en 3D, ¿qué grave problema técnico se evita respecto a los ángulos de Euler?",
      "options": [
        "a) El temblor y la sacudida excesiva al emplear interpolaciones spline.",
        "b) El efecto conocido como Gimbal Lock o bloqueo y pérdida de un eje.",
        "c) La deformación incorrecta de la topología en uniones articulares.",
        "d) La sobrecarga exponencial de cálculo dentro de los motores físicos."
      ],
      "correcta": "b",
      "explicacion": "Los cuaterniones basan sus cálculos en un sistema de cuatro dimensiones matemáticas que evita por completo el Gimbal Lock o bloqueo direccional de ejes de Euler."
    },
    {
      "text": "En la animación moderna de multitudes, como la que permite la herramienta Populate en 3ds Max, ¿cómo se logra el movimiento armónico de grupos enormes de personajes?",
      "options": [
        "a) Animando de forma individual cada paso mediante poses clave para evitar las colisiones en el grupo.",
        "b) Mezclando simulaciones de inteligencia artificial general con rutinas de movimiento independientes.",
        "c) Duplicando mecánicamente una misma animación cíclica y rotándola con un ligero retraso de tiempo.",
        "d) Convirtiendo las entidades en cuerpos elásticos simulados por gravedad y sin inteligencia interna."
      ],
      "correcta": "b",
      "explicacion": "La animación de masas usa IA para gobernar el comportamiento colectivo sin colisiones ('rebaño') y al mismo tiempo ejecuta librerías de movimientos individuales en cada agente."
    },
    {
      "text": "En el contexto de los conceptos fundamentales, ¿cuál es la diferencia principal entre cinemática y dinámica en animación 3D?",
      "options": [
        "a) La dinámica estudia las fuerzas físicas implicadas y la cinemática ignora dichas fuerzas.",
        "b) La cinemática estudia las texturas aplicadas y la dinámica evalúa la malla tridimensional.",
        "c) La cinemática se encarga del renderizado final y la dinámica se encarga del modelado base.",
        "d) La dinámica analiza únicamente rotaciones locales y la cinemática analiza las traslaciones."
      ],
      "correcta": "a",
      "explicacion": "La cinemática describe el movimiento de cuerpos y cadenas jerárquicas ignorando la masa o gravedad, mientras que la dinámica genera el movimiento basado puramente en fuerzas físicas."
    },
    {
      "text": "¿Qué principio de la animación se encarga de evitar que partes como el pelo o la ropa se detengan de forma brusca al frenar el cuerpo?",
      "options": [
        "a) El principio de las puestas en escena conocido como Staging.",
        "b) El principio visual de seguir los arcos de trayectoria curvos.",
        "c) El principio basado en animar elementos de acción secundaria.",
        "d) El principio técnico de acción superpuesta y acción continuada."
      ],
      "correcta": "d",
      "explicacion": "La acción continuada y superpuesta dicta que elementos sueltos o apéndices (ropa, pelo) siguen moviéndose por inercia aunque el cuerpo principal se haya detenido."
    },
    {
      "text": "En los motores de físicas, si aplicamos propiedades a un objeto para que actúe de forma completamente gobernada por la gravedad, sin animarse con keyframes, ¿qué tipo de cuerpo es?",
      "options": [
        "a) Se trata de un cuerpo rígido definido con un comportamiento cinemático.",
        "b) Se trata de un cuerpo blando diseñado con una alta deformación elástica.",
        "c) Se trata de un elemento de trayectoria sujeto a un controlador jerárquico.",
        "d) Se trata de un cuerpo rígido definido con un comportamiento de tipo dinámico."
      ],
      "correcta": "d",
      "explicacion": "Un cuerpo dinámico es aquel cuyo movimiento es calculado al 100% por un motor de dinámicas a través de colisiones, fuerzas y gravedad."
    },
    {
      "text": "Dentro de la clasificación de storyboards, ¿cuál es el que se elabora específicamente sin usar jerga técnica para la revisión de los clientes?",
      "options": [
        "a) El storyboard de presentación, que suele ser a color.",
        "b) El storyboard conceptual, con notas informales.",
        "c) El storyboard de producción, con planos de luces.",
        "d) El storyboard de postproducción, con anotaciones."
      ],
      "correcta": "a",
      "explicacion": "El storyboard de presentación es más detallado y estético (a color) para ser revisado por clientes, evitando intencionadamente tecnicismos incomprensibles para ellos."
    },
    {
      "text": "¿Cómo funciona exactamente el sistema de animación basado en Cinemática Inversa (IK) al momento de mover a un personaje?",
      "options": [
        "a) El animador mueve la pieza inicial (ej. hombro) y las hijas rotan de forma dependiente y natural.",
        "b) El animador añade fotogramas clave solamente sobre el centro de gravedad del objeto modelado.",
        "c) El animador posiciona la pieza final (ej. mano) y el sistema deduce el resto de rotaciones.",
        "d) El animador asigna un objetivo lejano para que el personaje gire todo su cuerpo apuntando a él."
      ],
      "correcta": "c",
      "explicacion": "A diferencia de FK (que va de padre a hijo), IK permite fijar la posición final (End Effector) para que el ordenador calcule los ángulos hacia atrás en la jerarquía."
    },
    {
      "text": "En el desarrollo de un personaje, ¿qué elemento corporal resulta fundamental para revelar el peso y el estado de ánimo general?",
      "options": [
        "a) La proporción exacta de la cabeza y el tronco.",
        "b) La simetría perfecta en todas sus extremidades.",
        "c) El estilo de peinado y la gama cromática elegida.",
        "d) El ciclo de marcha y el balanceo de su cuerpo."
      ],
      "correcta": "d",
      "explicacion": "El ciclo de marcha (Walk cycle), incluyendo el balanceo del torso y las extremidades, es la herramienta principal para revelar el peso físico y la emoción del personaje."
    },
    {
      "text": "En el área de herramientas avanzadas de animación CGI, ¿en qué consiste la llamada 'animación procedural'?",
      "options": [
        "a) En fotografiar modelos fotograma a backwards para obtener su física real.",
        "b) En usar inteligencia artificial o código para calcular un movimiento natural.",
        "c) En aplicar manualmente posturas extremas a lo largo de una línea temporal.",
        "d) En grabar a múltiples actores en vivo para trasladar su masa al simulador."
      ],
      "correcta": "b",
      "explicacion": "La animación procedural evita el uso de keyframes manuales y se basa en variables, algoritmos o scripts programados que generan un ciclo de movimiento de forma automática."
    },
    {
      "text": "Si deseas copiar la función de Python de un botón específico en la interfaz, ¿qué atajo debes usar?",
      "options": [
        "a) Posicionar el cursor sobre el botón y presionar la combinación de teclas Ctrl más la tecla C.",
        "b) Posicionar el cursor sobre el botón y presionar la combinación Shift más Ctrl más la tecla C.",
        "c) Posicionar el cursor sobre el botón y presionar la combinación de teclas Alt más la tecla F4.",
        "d) Posicionar el cursor sobre el botón y hacer un doble clic rápido con el botón izquierdo del ratón."
      ],
      "correcta": "a",
      "explicacion": "El atajo Ctrl + C sobre un botón o menú copia al portapapeles la función de Python correspondiente a ese elemento."
    },
    {
      "text": "¿Qué representa exactamente el parámetro numérico `index` al insertar un keyframe por código para la propiedad temporal `location` (ej. `index=1`)?",
      "options": [
        "a) El número total predefinido de keyframes exactos que se añadirán simultáneamente en esa misma posición temporal del timeline general.",
        "b) El eje geométrico específico sobre el cual se aplicará de inmediato la transformación actual (donde el número 1 corresponde al eje Y).",
        "c) El orden de prioridad global o relativo en el que se renderizarán a posteriori todas las complejas animaciones de toda la escena activa.",
        "d) La capa de animación secundaria adicional donde se guardará permanentemente el nuevo fotograma clave deseado para la composición global."
      ],
      "correcta": "b",
      "explicacion": "Para un vector como `location` (X, Y, Z), el `index` corresponde al eje afectado, siendo 0 para X, 1 para Y y 2 para Z."
    },
    {
      "text": "¿Qué función cumple el respectivo Workspace \"Scripting\" en relación directa con la ventana llamada Consola interactiva de Python?",
      "options": [
        "a) Permite escribir de forma libre aplicaciones interactivas complejas para presentar modelos tridimensionales en vivo y directo.",
        "b) Permite ejecutar ágilmente líneas individuales de código específico para probar distintos comandos y evaluar su resultado real.",
        "c) Permite exportar velozmente todos los scripts de animación manual para ser utilizados en potentes motores gráficos externos.",
        "d) Permite traducir automáticamente el denso código fuente a diversos otros lenguajes buscando obtener un mayor rendimiento final."
      ],
      "correcta": "b",
      "explicacion": "La Consola de Python se utiliza para ejecutar líneas individuales de forma interactiva y realizar pruebas rápidas de comandos."
    },
    {
      "text": "¿Qué diccionario es obligatorio definir al inicio del código de un Addon para incluir sus metadatos?",
      "options": [
        "a) El diccionario `bl_addon` que contiene el nombre del script y la categoría correspondiente del Addon.",
        "b) El diccionario `bl_plugin` que especifica la versión del programa y la descripción general del script.",
        "c) El diccionario `bl_info` que detalla el nombre, la categoría y la versión de Blender que es requerida.",
        "d) El diccionario `bl_meta` que almacena los créditos del autor original y los enlaces de la documentación."
      ],
      "correcta": "c",
      "explicacion": "El diccionario `bl_info` es obligatorio e incluye metadatos como nombre, categoría y versión."
    },
    {
      "text": "¿Qué función debe estar presente en el código de un operador personalizado (`bpy.types.Operator`) para que ejecute su acción?",
      "options": [
        "a) La función interna `def execute(self, context):` que debe devolver siempre el estado `{'FINISHED'}`.",
        "b) La función interna `def register(self, context):` que debe devolver siempre el estado `{'REGISTER'}`.",
        "c) La función interna `def invoke(self, context):` que debe devolver siempre un estado `{'COMPLETED'}`.",
        "d) La función interna `def process(self, context):` que debe devolver siempre un estado `{'EXECUTED'}`."
      ],
      "correcta": "a",
      "explicacion": "Un operador hereda de `bpy.types.Operator` y debe definir `def execute(self, context):` retornando `{'FINISHED'}` al concluir."
    },
    {
      "text": "Si deseas insertar un fotograma clave (keyframe) utilizando código Python, ¿qué parámetro debes especificar obligatoriamente?",
      "options": [
        "a) El tipo de curva de interpolación (Bezier o Lineal) y la cantidad de suavizado aplicado a lo largo de la misma.",
        "b) La propiedad que se desea animar mediante el argumento denominado `data_path` y el número de fotograma deseado.",
        "c) El nombre de la cámara activa que renderizará la animación actual y la resolución final del video de exportación.",
        "d) La cantidad total de fotogramas del proyecto en curso y la ruta de almacenamiento de la secuencia de fotogramas."
      ],
      "correcta": "b",
      "explicacion": "Se utiliza el método `keyframe_insert`, que requiere definir el parámetro `data_path` (ej. 'location') y el fotograma."
    },
    {
      "text": "¿Qué ventaja principal ofrece el sistema de \"Geometry Nodes\" respecto al código manual puro?",
      "options": [
        "a) Requiere menos recursos de memoria RAM al calcular dinámicas de fluidos y sistemas de colisión.",
        "b) Permite compilar los resultados en archivos ejecutables que son independientes de la plataforma.",
        "c) Es un sistema procedural y no destructivo basado en nodos que facilita su rápida automatización.",
        "d) Genera automáticamente materiales PBR realistas sin la necesidad de crear texturas muy complejas."
      ],
      "correcta": "c",
      "explicacion": "Geometry Nodes permite modelado procedural y animación basada en nodos, automatizando procesos sin modificar la malla original."
    },
    {
      "text": "¿Qué método se utiliza generalmente para añadir de manera directa las nuevas funciones de un Addon en los menús nativos de la interfaz?",
      "options": [
        "a) Se emplea la función `insert()` dentro del menú específico de todas las opciones del panel principal en el editor visual.",
        "b) Se emplea la función `append()` en el módulo de UI correspondiente para poder enlazar adecuadamente el nuevo operador.",
        "c) Se emplea la función `attach()` para lograr pegar el código funcional en el menú desplegable de las nuevas herramientas.",
        "d) Se emplea la función `embed()` dentro de la definición básica del panel lateral para integrar con facilidad las propiedades."
      ],
      "correcta": "b",
      "explicacion": "Se utiliza el método `append()` sobre una estructura de menú de `bpy.types` (por ejemplo, `bpy.types.VIEW3D_MT_object.append(menu_func)`)."
    },
    {
      "text": "En el Workspace \"Scripting\", ¿para qué sirve la ventana denominada \"Info\" (Información)?",
      "options": [
        "a) Para visualizar la estructura de nodos de los materiales asignados al objeto seleccionado.",
        "b) Para mostrar un registro histórico de las operaciones manuales ejecutadas en el entorno.",
        "c) Para redactar y ejecutar directamente scripts completos formados por un número de líneas.",
        "d) Para revisar el rendimiento de la tarjeta gráfica y la memoria RAM del sistema operativo."
      ],
      "correcta": "b",
      "explicacion": "La ventana Info muestra el registro histórico de operaciones ejecutadas, útil para copiar el código de acciones realizadas manualmente."
    },
    {
      "text": "¿Cuál es la principal utilidad de la librería base `bpy` dentro de Blender?",
      "options": [
        "a) Ejecutar programas externos compilados en C++ para renderizado avanzado en tiempo real.",
        "b) Acceder a todas las funciones y comandos del programa mediante secuencias de código Python.",
        "c) Optimizar la topología de las mallas automáticamente sin necesidad de usar modificadores.",
        "d) Renderizar secuencias de video utilizando el motor Eevee para juegos de realidad virtual."
      ],
      "correcta": "b",
      "explicacion": "La librería `bpy` es la API de Python en Blender y permite acceder a todas sus funciones para automatizar tareas, crear Addons y modificar parámetros."
    }
  ]
};