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
    }
  ],
  "MAC_Test_General_50.txt": [
    {
      "num": 1,
      "text": "¿Qué es una malla low poly?",
      "options": [
        "a) Una malla con gran cantidad de detalles geométricos.",
        "b) Una malla con bajo poligonaje.",
        "c) Una malla generada mediante texturizado procedimental.",
        "d) Una malla de curvas NURBS exclusivamente."
      ],
      "correcta": "b"
    },
    {
      "num": 2,
      "text": "¿Qué significa el término \"normales\" en una malla 3D?",
      "options": [
        "a) La textura base sin aplicar modificadores.",
        "b) El centro de gravedad de la malla.",
        "c) Un vector perpendicular a un polígono o vértice que indica la orientación de la cara (haz vs. envés).",
        "d) La escala predeterminada del objeto."
      ],
      "correcta": "c"
    },
    {
      "num": 3,
      "text": "¿Cuál de los siguientes elementos NO es un componente modificable en el Box Modeling tradicional?",
      "options": [
        "a) Vértices",
        "b) Aristas (Edges)",
        "c) Caras (Faces)",
        "d) Fotones"
      ],
      "correcta": "d"
    },
    {
      "num": 4,
      "text": "¿Qué técnica permite crear un volumen simétrico rotacional de 360 grados (ej. una copa) girando un perfil 2D sobre un eje?",
      "options": [
        "a) Extrusión",
        "b) Loft (Objetos solevados)",
        "c) Revolución / Torno (Lathe)",
        "d) Subsurface Scattering"
      ],
      "correcta": "c"
    },
    {
      "num": 5,
      "text": "¿Qué método de Subdivision Surface es el mejor para aproximar mallas de quads y garantiza suavidad C2?",
      "options": [
        "a) Loop",
        "b) Catmull-Clark",
        "c) Doo-Sabin",
        "d) Butterfly"
      ],
      "correcta": "b"
    },
    {
      "num": 6,
      "text": "¿Qué método de Subdivision Surface es un esquema de aproximación considerado el mejor para mallas triangulares?",
      "options": [
        "a) Loop",
        "b) Catmull-Clark",
        "c) Doo-Sabin",
        "d) Butterfly"
      ],
      "correcta": "a"
    },
    {
      "num": 7,
      "text": "¿Qué utilizan los Deformadores FFD (Free-Form Deformation) para modificar la geometría de un objeto?",
      "options": [
        "a) Mapas de pesos pintados a mano.",
        "b) Partículas con gravedad.",
        "c) Una rejilla o lattice (puntos de control) que envuelven el objeto.",
        "d) Una línea guía 2D a lo largo de un eje z."
      ],
      "correcta": "c"
    },
    {
      "num": 8,
      "text": "¿Cuál es el tipo de polígono ideal para garantizar una buena deformación en personajes animados?",
      "options": [
        "a) Triángulos (Tris) y Cuadriláteros (Quads)",
        "b) N-Gons (Polígonos de más de 4 lados)",
        "c) Estrellas",
        "d) Formas esféricas puras"
      ],
      "correcta": "a"
    },
    {
      "num": 9,
      "text": "¿En qué consiste el proceso de Retopología?",
      "options": [
        "a) Añadir millones de polígonos a un modelo base para esculpirlo en ZBrush.",
        "b) Calcular las coordenadas UV de manera automática.",
        "c) Construir una malla optimizada encima de una escultura digital densa (High-Poly) conservando la apariencia.",
        "d) Eliminar los bordes afilados y unirlos mediante booleanas."
      ],
      "correcta": "c"
    },
    {
      "num": 10,
      "text": "¿Cuál es el propósito de la Subdivisión Adaptativa?",
      "options": [
        "a) Renderizar la imagen más rápido cambiando la resolución de la pantalla.",
        "b) Incrementar o reducir la densidad de polígonos dinámicamente según la distancia del objeto a la cámara o curvatura.",
        "c) Dividir el objeto en varios archivos para aligerar la memoria.",
        "d) Convertir mallas poligonales en curvas Bézier automáticamente."
      ],
      "correcta": "b"
    },
    {
      "num": 11,
      "text": "¿En qué se basan los materiales PBR (Physically Based Rendering)?",
      "options": [
        "a) En coloreados planos tipo dibujos animados.",
        "b) En modelos empíricos o estilizados de apariencia infantil.",
        "c) En algoritmos que replican el comportamiento físico real de la luz al interactuar con la materia.",
        "d) Únicamente en el sombreado de Gouraud."
      ],
      "correcta": "c"
    },
    {
      "num": 12,
      "text": "¿Qué controla el mapa de Roughness (Rugosidad)?",
      "options": [
        "a) El relieve geométrico que deforma la malla.",
        "b) La cantidad de luz ambiental en la escena.",
        "c) La dispersión microtopográfica de los rayos de luz reflejados, definiendo si es mate o brillante/pulido.",
        "d) El color difuso del objeto, ignorando las sombras."
      ],
      "correcta": "c"
    },
    {
      "num": 13,
      "text": "¿Qué mapa PBR simula perturbaciones tridimensionales de relieve interactuando con la luz, sin alterar o sobrecargar la geometría real?",
      "options": [
        "a) Ambient Occlusion Map",
        "b) Diffuse Map",
        "c) Height Map (Displacement)",
        "d) Normal Map"
      ],
      "correcta": "d"
    },
    {
      "num": 14,
      "text": "¿Qué coeficiente óptico crítico se emplea en materiales dieléctricos y transparentes (ej. cristales) para definir la desviación de la luz al atravesarlos?",
      "options": [
        "a) SSS (Subsurface Scattering)",
        "b) IOR (Índice de Refracción)",
        "c) Albedo",
        "d) DOF (Depth of Field)"
      ],
      "correcta": "b"
    },
    {
      "num": 15,
      "text": "¿Qué tipo de mapa emula la atenuación de la luz ambiental en recovecos, grietas y esquinas oscuras mediante una escala de grises?",
      "options": [
        "a) Especular",
        "b) Emisivo",
        "c) Oclusión Ambiental (Ambient Occlusion)",
        "d) Color Base"
      ],
      "correcta": "c"
    },
    {
      "num": 16,
      "text": "¿Qué técnica genera patrones matemáticos en tiempo de ejecución eliminando la dependencia de imágenes externas fijas?",
      "options": [
        "a) Mapeado UVW Cúbico",
        "b) Texturizado Procedimental",
        "c) Proyección Esférica",
        "d) Unwrap UVW"
      ],
      "correcta": "b"
    },
    {
      "num": 17,
      "text": "¿Qué representa el Color Base (Albedo) de un material?",
      "options": [
        "a) El mapa que deforma la malla.",
        "b) El espectro de color reflejado de manera difusa, sin contener luces direccionales ni sombras ambientales incrustadas.",
        "c) Las zonas que emiten luz propia (autoiluminadas).",
        "d) La reflexión de la cámara en el entorno."
      ],
      "correcta": "b"
    },
    {
      "num": 18,
      "text": "¿Qué es el SSS (Subsurface Scattering)?",
      "options": [
        "a) El cálculo del sombreado de Phong en superficies pulidas.",
        "b) El fenómeno por el cual los fotones penetran un material translúcido, se dispersan y salen por un punto distinto (ej. piel, cera).",
        "c) El reflejo espejo de las superficies metálicas.",
        "d) Un mapa de normales exagerado."
      ],
      "correcta": "b"
    },
    {
      "num": 19,
      "text": "¿Cuál es el objetivo de la técnica Unwrap UVW?",
      "options": [
        "a) Aplicar un material metálico de forma instantánea.",
        "b) Generar mapas procedurales sin fin.",
        "c) Desenvolver la malla tridimensional en un plano bidimensional para pintar o ajustar texturas sin estiramientos.",
        "d) Agrupar todas las normales en un mismo vector."
      ],
      "correcta": "c"
    },
    {
      "num": 20,
      "text": "A diferencia del Mapa de Normales, ¿qué mapa desplaza y deforma REALMENTE la geometría de la malla 3D?",
      "options": [
        "a) Mapa de Alturas (Height / Displacement)",
        "b) Mapa de Color Base",
        "c) Mapa de Oclusión Ambiental",
        "d) Mapa Especular"
      ],
      "correcta": "a"
    },
    {
      "num": 21,
      "text": "¿Qué modelo de iluminación considera las fuentes de luz directas y las propiedades del material, pero ignora los reflejos y rebotes entre objetos?",
      "options": [
        "a) Iluminación Local",
        "b) Radiosidad",
        "c) Path Tracing",
        "d) Photon Mapping"
      ],
      "correcta": "a"
    },
    {
      "num": 22,
      "text": "En el Modelo de Iluminación Local (como Phong), ¿qué componente simula de manera constante y básica la luz indirecta o de fondo de la escena?",
      "options": [
        "a) Especular",
        "b) Emisiva",
        "c) Ambiente (Ambient)",
        "d) Difusa"
      ],
      "correcta": "c"
    },
    {
      "num": 23,
      "text": "¿Qué afirma la Ley de Lambert respecto a la reflexión difusa?",
      "options": [
        "a) Que la luz depende del índice de refracción del observador.",
        "b) Que la luz solo puede reflejarse en superficies metálicas (conductoras).",
        "c) Que el brillo percibido es proporcional al coseno del ángulo formado entre la dirección de la luz y la normal de la superficie.",
        "d) Que la intensidad de luz decrece con el cuadrado de la masa."
      ],
      "correcta": "c"
    },
    {
      "num": 24,
      "text": "¿Qué son los Mapas HDRI en iluminación global?",
      "options": [
        "a) Mapas de bits de baja resolución para pintar materiales cartoon.",
        "b) Mapas que dividen la escena en \"patches\" para calcular radiosidad.",
        "c) Imágenes de alto rango dinámico que envuelven la escena para aportar iluminación y reflejos realistas basados en el mundo real.",
        "d) Luces puntuales ubicadas frente a la cámara."
      ],
      "correcta": "c"
    },
    {
      "num": 25,
      "text": "¿Qué variante del trazado de rayos simula el camino físico de la luz lanzando rayos aleatorios (Monte Carlo) y suele generar bastante ruido visual antes de converger?",
      "options": [
        "a) Radiosidad",
        "b) Pathtracing",
        "c) Ray-casting",
        "d) Gouraud Shading"
      ],
      "correcta": "b"
    },
    {
      "num": 26,
      "text": "¿Cuál de estas es una característica clave del método de Radiosidad?",
      "options": [
        "a) Es excelente para generar brillos especulares muy definidos.",
        "b) Divide la escena en patches y asume interacción difusa perfecta, siendo independiente del punto de vista.",
        "c) Es el método más rápido en videojuegos.",
        "d) Ignora las sombras suaves y se centra solo en refracciones perfectas de espejos."
      ],
      "correcta": "b"
    },
    {
      "num": 27,
      "text": "¿Qué método de sombreado interpola los vectores normales de los vértices hacia todo el interior del polígono, calculando la iluminación pixel a pixel para lograr brillos suaves y precisos?",
      "options": [
        "a) Flat Shading",
        "b) Gouraud Shading",
        "c) Phong Shading",
        "d) Facet Shading"
      ],
      "correcta": "c"
    },
    {
      "num": 28,
      "text": "¿Qué problema visual soluciona Gouraud Shading respecto a Flat Shading?",
      "options": [
        "a) Añade rebotes de luz (radiosidad).",
        "b) Suaviza el aspecto facetado al interpolar el color desde los vértices hacia el interior del polígono.",
        "c) Mejora los brillos especulares en polígonos extremadamente grandes.",
        "d) Acelera la compilación del render."
      ],
      "correcta": "b"
    },
    {
      "num": 29,
      "text": "¿Qué es el \"Mach banding\"?",
      "options": [
        "a) Una ilusión óptica que exagera el contraste entre bandas oscuras y claras contiguas (típico de shading simple).",
        "b) El cálculo físico de la luz en un motor tipo Unreal.",
        "c) Un algoritmo para simular pelo y multitudes.",
        "d) Un atajo de teclado para animar la cámara."
      ],
      "correcta": "a"
    },
    {
      "num": 30,
      "text": "¿Qué técnica de iluminación global requiere la emisión y almacenamiento de partículas en un kd-tree antes de calcular la imagen desde la cámara, siendo ideal para simular cáusticas?",
      "options": [
        "a) Mapas de Fotones (Photon Mapping)",
        "b) Iluminación Local",
        "c) Flat Shading",
        "d) Path Tracing"
      ],
      "correcta": "a"
    },
    {
      "num": 31,
      "text": "¿A qué se denomina \"Rigging\"?",
      "options": [
        "a) A la creación de la textura procedural de un material orgánico.",
        "b) Al diseño y construcción del esqueleto interno y jerarquía de controladores para gobernar el personaje.",
        "c) Al cálculo de la radiosidad en una escena nocturna.",
        "d) A la renderización de partículas."
      ],
      "correcta": "b"
    },
    {
      "num": 32,
      "text": "¿Qué técnica de animación jerárquica aplica las rotaciones de forma descendente, del padre al hijo (por ejemplo, del hombro, luego al codo, luego a la muñeca)?",
      "options": [
        "a) Cinemática Directa (FK - Forward Kinematics)",
        "b) Cinemática Inversa (IK - Inverse Kinematics)",
        "c) Rotoscopia",
        "d) Skinning"
      ],
      "correcta": "a"
    },
    {
      "num": 33,
      "text": "¿Qué hace la Cinemática Inversa (IK)?",
      "options": [
        "a) Mueve a todos los personajes simultáneamente mediante IA (masas).",
        "b) Pesa los vértices de la malla para que sigan al hueso.",
        "c) El animador ubica la parte final (End Effector) en el destino y el sistema calcula automáticamente las rotaciones requeridas por las articulaciones previas.",
        "d) Permite que una esfera rebote físicamente sin keyframes."
      ],
      "correcta": "c"
    },
    {
      "num": 34,
      "text": "En la rotación en el espacio 3D, ¿qué notación matemática hipercompleja se utiliza para evitar el bloqueo de ejes y pérdida de grados de libertad llamado \"Gimbal Lock\"?",
      "options": [
        "a) Ángulos de Euler",
        "b) Cuaterniones (Quaternions)",
        "c) Matriz de Van Der Monde",
        "d) Cosenos directores"
      ],
      "correcta": "b"
    },
    {
      "num": 35,
      "text": "¿Cuál es el algoritmo ideal para interpolar cuaterniones y garantizar giros con velocidad constante y trayectorias curvas suaves perfectas?",
      "options": [
        "a) LERP (Interpolación Lineal)",
        "b) SLERP (Spherical Linear Interpolation)",
        "c) Subsurface Interpolation",
        "d) Radiosidad"
      ],
      "correcta": "b"
    },
    {
      "num": 36,
      "text": "Según los principios de Disney, ¿qué principio de animación se refiere a exagerar la deformación de un cuerpo para darle sensación de masa, impacto y flexibilidad (como una pelota de goma al rebotar)?",
      "options": [
        "a) Anticipación",
        "b) Puesta en escena (Staging)",
        "c) Estirar y encoger (Squash and Stretch)",
        "d) Arcos"
      ],
      "correcta": "c"
    },
    {
      "num": 37,
      "text": "¿Qué es la técnica de Rotoscopia?",
      "options": [
        "a) Rellenar automáticamente los fotogramas inbetweens con IA.",
        "b) Calcar o dibujar fotograma a fotograma tomando como referencia una grabación de imagen real de soporte.",
        "c) Girar (rotar) un perfil 2D para modelar una figura de revolución.",
        "d) Añadir efectos volumétricos al entorno 3D."
      ],
      "correcta": "b"
    },
    {
      "num": 38,
      "text": "¿Qué plano de cámara corta aproximadamente por la altura de los muslos o rodillas del personaje?",
      "options": [
        "a) Plano detalle",
        "b) Plano holandés",
        "c) Plano medio",
        "d) Plano americano"
      ],
      "correcta": "d"
    },
    {
      "num": 39,
      "text": "¿Cómo se denomina el movimiento en el que la cámara rota sobre su propio eje (por ejemplo, montada en un trípode) para seguir la acción?",
      "options": [
        "a) Paneo",
        "b) Travelling",
        "c) Zoom In",
        "d) Roll (Balanceo de Euler)"
      ],
      "correcta": "a"
    },
    {
      "num": 40,
      "text": "¿Qué ángulo de cámara se ubica directamente debajo del sujeto y perpendicular al suelo, creando sensaciones dramáticas y de vértigo?",
      "options": [
        "a) Cenital",
        "b) Medio",
        "c) Nadir",
        "d) Picado"
      ],
      "correcta": "c"
    },
    {
      "num": 41,
      "text": "¿Cuál es el módulo raíz de la API de Python embebida en Blender que sirve como puerta de acceso a la interactividad del programa?",
      "options": [
        "a) `sys`",
        "b) `bpy`",
        "c) `math`",
        "d) `bl_ops`"
      ],
      "correcta": "b"
    },
    {
      "num": 42,
      "text": "¿Qué submódulo se encarga de monitorizar y proveer elementos que dependen del estado actual de la interfaz o selección del usuario (como el objeto que está actualmente seleccionado)?",
      "options": [
        "a) `bpy.ops`",
        "b) `bpy.data`",
        "c) `bpy.context`",
        "d) `bpy.types`"
      ],
      "correcta": "c"
    },
    {
      "num": 43,
      "text": "¿Para qué se utiliza principalmente `bpy.data`?",
      "options": [
        "a) Para capturar el evento de click del ratón.",
        "b) Para acceder a la totalidad de la base de datos interna del archivo actual (mallas, materiales, colecciones, etc.), independientemente de si están seleccionados o no.",
        "c) Para realizar operaciones booleanas exclusivamente.",
        "d) Para inicializar el motor de render Cycles."
      ],
      "correcta": "b"
    },
    {
      "num": 44,
      "text": "¿Qué submódulo encapsula las acciones y comandos funcionales nativos que ejecuta Blender como si un usuario hiciera click en las herramientas (como crear objetos o borrar)?",
      "options": [
        "a) `bpy.context`",
        "b) `bpy.ops`",
        "c) `bpy.props`",
        "d) `bpy.ui`"
      ],
      "correcta": "b"
    },
    {
      "num": 45,
      "text": "¿Qué función es estrictamente obligatoria en un script para dar de alta sus clases y que Blender las reconozca al activar un Addon?",
      "options": [
        "a) `init()`",
        "b) `draw()`",
        "c) `execute()`",
        "d) `register()`"
      ],
      "correcta": "d"
    },
    {
      "num": 46,
      "text": "¿Cuál es la función simétrica destinada a descargar de la memoria las referencias de las clases cuando el Addon se desactiva?",
      "options": [
        "a) `unregister()`",
        "b) `delete()`",
        "c) `remove_addon()`",
        "d) `bl_close()`"
      ],
      "correcta": "a"
    },
    {
      "num": 47,
      "text": "¿Qué submódulo se utiliza para definir los tipos de variables (StringProperty, BoolProperty) que permiten capturar los datos introducidos por el usuario en los botones e interfaz?",
      "options": [
        "a) `bpy.types`",
        "b) `bpy.props`",
        "c) `bpy.utils`",
        "d) `bpy.logic`"
      ],
      "correcta": "b"
    },
    {
      "num": 48,
      "text": "¿En qué método de una clase tipo `Operator` se define obligatoriamente el código principal que se ejecuta al pulsar el botón correspondiente en la escena?",
      "options": [
        "a) `execute(self, context)`",
        "b) `draw(self, context)`",
        "c) `start_action()`",
        "d) `__init__(self)`"
      ],
      "correcta": "a"
    },
    {
      "num": 49,
      "text": "¿Qué atajo de teclado se utiliza comúnmente en la interfaz gráfica de Blender para copiar el comando de Python oculto detrás de un botón hacia el portapapeles?",
      "options": [
        "a) Shift + D",
        "b) Alt + G",
        "c) Ctrl + C (situando el ratón encima del botón)",
        "d) F12"
      ],
      "correcta": "c"
    },
    {
      "num": 50,
      "text": "Cuando se quiere programar y diseñar la organización visual de los paneles o pestañas en el entorno gráfico (UI) de Blender, ¿de qué clase base se debe heredar?",
      "options": [
        "a) `bpy.types.Operator`",
        "b) `bpy.types.Panel` (o Menu)",
        "c) `bpy.types.Property`",
        "d) `bpy.types.Mesh`"
      ],
      "correcta": "b"
    }
  ]
};