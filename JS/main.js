// 1. Obtener el elemento <canvas> del documento HTML
var canvas = document.getElementById("canvas");
// document.getElementById("canvas") busca en el DOM un elemento con el id "canvas".
// La variable `canvas` almacena una referencia a este elemento para manipularlo.


// 2. Obtener el contexto de dibujo en 2D del canvas
var ctx = canvas.getContext("2d");
// `canvas.getContext("2d")` obtiene el contexto de renderizado en dos dimensiones.
// Esto nos permite utilizar métodos para dibujar en el lienzo (canvas).
// La variable `ctx` almacenará este contexto para realizar las operaciones de dibujo.


// 3. Definir el color de relleno para las futuras figuras
ctx.fillStyle = "rgb(18, 161, 228)";
// `fillStyle` define el color de relleno que se usará en las figuras que se dibujen a continuación.
// En este caso, se establece el color "green" (verde).


// 4. Dibujar un rectángulo relleno en el canvas
ctx.fillRect(10, 10, 200, 100);
// `fillRect(x, y, width, height)` dibuja un rectángulo relleno usando el color definido en `fillStyle`.
// - `x = 10`: Coordenada horizontal donde comienza el rectángulo.
// - `y = 10`: Coordenada vertical donde comienza el rectángulo.
// - `width = 100`: Ancho del rectángulo en píxeles.
// - `height = 100`: Altura del rectángulo en píxeles.
// Como el color de relleno está configurado en "green", el rectángulo será de color verde.

