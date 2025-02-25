# Documentación del Proceso de Creación

## Chatbot Utilizado
Cascade - Un asistente de código AI proporcionado por Codeium, integrado en Windsurf IDE.

## Prompt Utilizado
```
tengo que hacer una haz una pull request que incluya una carpeta copiada de template, con el nombre reversestring-RAC. 
Dentro de esa carpeta tiene que haber página web con lógica en javascript que invierta el orden de una cadena de texto.
Ejemplo: si introduzco AI4Devs devuelve sveD4AI.

Hazlo apoyado en el seed html+js que proporcionamos dentro de la carpeta template.

Debe incluir no solo el código generado, sino también, fundamental, el prompt utilizado y el chatbot utilizado en prompts.md.
```

## Proceso y Explicación
1. Se ha creado una nueva carpeta llamada `reversestring-RAC` basada en el template proporcionado.
2. La implementación incluye:
   - Una interfaz de usuario limpia y moderna
   - Inversión de texto en tiempo real mientras el usuario escribe
   - Un botón "Reverse" que aparece cuando hay más de 3 caracteres
   - Un botón "Copy" para copiar el resultado al portapapeles
3. La lógica de inversión utiliza el método `split("")` para convertir el string en un array de caracteres, `reverse()` para invertir el array, y `join("")` para volver a unir los caracteres en un string.

## Funcionalidades
- Inversión instantánea del texto mientras se escribe
- Botón "Reverse" opcional para forzar la inversión
- Botón "Copy" para copiar el resultado
- Interfaz responsiva y amigable al usuario
- Manejo de errores para la funcionalidad de copiado

## Ejemplo de Uso
Input: "AI4Devs"
Output: "sveD4IA"
