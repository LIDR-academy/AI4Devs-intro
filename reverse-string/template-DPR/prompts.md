eres un desarrollador web experimentado.

Dame el coding necesario para realizar la típica Kata de reverseString, usando JavaScript.

LA estructura seria:
- Un título: "Reverse String" pero dado la vuelta
- Una caja de texto
- Un botón "Reverse" con un emote de reciclaje color azul
- Una etiqueta "Result" conde se pueda ver el resultado una vez pulsado el botón "Reverse"
- Un botón "Copy" (con un emote de clipboard), que al pulsárlo te copie en el portapapeles el valor de "Result"

Te paso el archivo index.html de mi proyecto:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html> 


--------------------------

Necesito algunos cambios a nivel visual:
Estilo de los botones, letra en negrita, pasaba a color blanco y haz que el fondo de los botones sea el que ahora es el fondo de sus letras.
Posicional del botón Reverse:
Ahora esta junto a la caja de texto, lo quiero debajo, en una nueva linea.
Prueba con otro emote que no sea el de reciclaje que exprese mejor la idea.

---------------------------

dale un poco mas de margen a la palabra Result: añade espacio entre esta y el botón Reverse.

---------------------------

tengo un warning en el que me dice que reversed es redundante, linea 4 de script.js

tengo un wasnint en el html  que dice missing associated label. puedes arreglarlos y explicar que ha ocurrido?

---------------------------

necesito añadir algunos cambios de funcionalidad en nuestro programa:

1.- Limina el boton Reverse
2. Haz que en cada actualización de la caja de texto se recargue el label de reverse. Pero sigue esta lógica:
   Si la caja tiene 3 letras o menos, la etiqueta "result" tendra contenido "" y el botón de copy estara deshabilitado.
   En caso contrario actua como hasta ahora.

-----------------

cambia el comportamiento del botón, siempre esta habilitado pero es solo visible cuando el valor de Result sea diferente de blanco.

-------------------

sigo viendo el botón cuando Result es ""

---------------------

Por favor reescribe el código haciendo que los comentarios expliquen lo que hace actualmente, no la progresión que hemos ido siguiendo

--------------------

puedes extraer los comportamientos en funciónes con nombres autoexplicados para evitar tantos comentarios?
