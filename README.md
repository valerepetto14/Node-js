# Node-js

Node.js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. También aporta muchos beneficios y soluciona muchísimos problemas, por lo que sería más que interesante realizar nuestro curso de Node.js para obtener las bases, conceptos y habilidades necesarias que nos motiven a profundizar en sus opciones e iniciar la programación. 

Node.js fue creado por los desarrolladores originales de JavaScript. Lo transformaron de algo que solo podía ejecutarse en el navegador en algo que se podría ejecutar en los ordenadores como si de aplicaciones independientes se tratara. Gracias a Node.js se puede ir un paso más allá en la programación con JavaScript no solo creando sitios web interactivos, sino teniendo la capacidad de hacer cosas que otros lenguajes de secuencia de comandos como Python pueden crear. 

Tanto JavaScript como Node.js se ejecutan en el motor de tiempo de ejecución JavaScript V8 (V8 es el nombre del motor de JavaScript que alimenta Google Chrome. Es lo que toma nuestro JavaScript y lo ejecuta mientras navega con Chrome). Este motor coge el código JavaScript y lo convierte en un código de máquina más rápido. El código de máquina es un código de nivel más bajo que la computadora puede ejecutar sin necesidad de interpretarlo primero, ignorando la compilación y por lo tanto aumentando su velocidad. 

## Para qué sirve Node.js
Node.js utiliza un modelo de entrada y salida sin bloqueo controlado por eventos que lo hace ligero y eficiente (con entrada nos referimos a solicitudes y con salida a respuestas). Puede referirse a cualquier operación, desde leer o escribir archivos de cualquier tipo hasta hacer una solicitud HTTP. 

La idea principal de Node.js es usar el modelo de entrada y salida sin bloqueo y controlado por eventos para seguir siendo liviano y eficiente frente a las aplicaciones en tiempo real de uso de datos que se ejecutan en los dispositivos. Es una plataforma que no dominará el mundo del desarrollo web pero si que satisface las necesidades de una gran mayoría de programadores. 

La finalidad de Node.js no tiene su objetivo en operaciones intensivas del procesador, de hecho, usarlo para programación de más peso eliminará casi todas sus ventajas. Donde Node.js realmente brilla es en la creación de aplicaciones de red rápidas, ya que es capaz de manejar una gran cantidad de conexiones simultáneas con un alto nivel de rendimiento, lo que equivale a una alta escalabilidad.

## Cómo funciona Node.js 
El funcionamiento interno del entorno de ejecución para JavaScript, Node.js, es bastante interesante. En comparación con las técnicas tradicionales de servicio web donde cada conexión (que crea una solicitud) genera un nuevo subproceso, ocupando la RAM del sistema y regularmente maximizando la cantidad de RAM disponible, Node.js opera en un solo subproceso, utilizando el modelo entrada y entrada sin bloqueo de la salida, lo que le permite soportar decenas de miles de conexiones al mismo tiempo mantenidas en el bucle de eventos.

El nodo está completamente controlado por eventos. Resumiendo podemos decir que el servidor consta de un subproceso que procesa un evento tras otro. 

Cuando hay una nueva solicitud se genera un tipo de evento. El servidor empieza a procesarlo y, cuando hay una operación de bloqueo de entrada y salida, no espera hasta que se complete y en su lugar crea una función de devolución de llamada. El servidor comienza en el acto a procesar otro evento (tal vez otra solicitud) y cuando finaliza la operación de entrada y salida, continuará trabajando en la solicitud ejecutando la devolución de llamada tan pronto como tenga tiempo. 

Por lo tanto, el servidor nunca necesita crear más subprocesos o cambiar entre subprocesos, lo que significa que tiene muy poca sobrecarga.  

Hay que mencionar que en el nivel más bajo de codificación (código C++), encontramos varios subprocesos en Node.js: hay un grupo de eventos de entrada y salida cuyo trabajo es recibir las interrupciones de los propios eventos de entrada y salida y poner los eventos correspondientes en la cola para ser procesados por el hilo principal evitando así la posible interrupción del mismo. 

## Ventajas de Node.js
En primer lugar y como gran ventaja, es tener Javascript incorporado en la plataforma Node.js, siendo un lenguaje fácil de aprender y que puede ser manejado por programadores de Java.

Node.js se desarrolla en un entorno de tiempo de ejecución de fuente libre que ayudará en el almacenamiento de creación de proyectos únicos.

El modelo de entrada y salida impulsado por eventos ayuda mucho en el manejo simultáneo de peticiones.

El administrador y el usuario incorporan estrategias de codificación similares que desembocan en la creación de abundantes aplicaciones de internet de gran competencia.

Con la implementación de plataformas de desarrollo de software como GitHub Inc., la comunidad Node.js ha crecido de forma exponencial y activa.

Como es un modelo de programación de un solo subproceso, Node.js ofrece abundantes características y opciones. Para tener una buena retención de los eventos de salida en tiempo de ejecución, como las devoluciones de llamada, se implementa Node.js

Node.js es la plataforma de software más utilizada en este momento estando por encima en entornos de ejecución y lenguajes de programación como PHP y C a la vez que tiene un tiempo de ejecución (tiempo real) muy superior.

No es un código muy complejo pero requiere muchas más líneas de codificación y mayor comprensión que el lenguaje PHP.

El envío de archivos de gran peso también se puede realizar mediante el uso de la tecnología Node.js.

Node.js es una de las tecnologías más usadas hoy en día, y se ha convertido en una de las plataformas más populares utilizadas para el desarrollo de aplicaciones web, aplicaciones de escritorio y servicios. Espero que después de leer este artículo se logre tener una base de conocimientos básicos que animen a comenzar a escribir sus propias aplicaciones Node.js.
