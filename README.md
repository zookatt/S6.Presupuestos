# React + Vite

# Proyecto Calculardora de Presupuestos
=================================

¡Bienvenido/a al proyecto Calculadora de Presupuestos! Este ejercicio consta de varias etapas para crear una aplicación interactiva de presupuestos en React. A continuación, se detallan las instrucciones para cada ejercicio:

## Ejercicio 1 - Formulario Reactivo
---------------------------------

En este ejercicio, he creado un formulario reactivo con tres checkboxes representando diferentes servicios y sus costos asociados. Los servicios(Options.jsx) son:

*   Hacer una campaña SEO (300 €)
*   Hacer una campaña de publicidad (400 €)
*   Hacer una página web (500 €)

El usuario marcará las opciones deseadas, y el precio total se actualizará en consecuencia.
Creacion de Contexto appContext y componente CompoContext.jsx para gestionar la logica global para calculo total de presupuesto.

## Ejercicio 2 - Personalización de la Página Web
----------------------------------------------

En este ejercicio, implementarás la opción de ajustar el servicio de "Web"(ExtrasWeb.jsx). Se creará un componente visible cuando el usuario seleccione esta opción, permitiéndole elegir el número de páginas y de idiomas.

El coste total de la página web se calculará según la fórmula: `(Número de páginas + Número de idiomas) * 30€`.

Uso de CompoContext.jsx para actualizar el total de presupuesto con valores de count1 y count2 con la funcion valueExtras.

## Ejercicio 3 - Facilitando la Entrada de Datos
---------------------------------------------

Agregue dos botones a los lados de los campos de páginas y lenguajes para permitir al usuario aumentar o disminuir su cantidad de paginas o idiomas en una unidad(ExtrasWeb.jsx).

## Ejercicio 4 - Navegación entre Vistas
-------------------------------------

Implementa una pantalla de bienvenida al usuario explicando el propósito y el funcionamiento de la web. Además, añade botones de navegación: uno que redirige a la pantalla principal de la calculadora(App) y otro que lleva de vuelta a la pantalla de bienvenida(Welcome - Welcome.jsx). Utilice React Router para la navegación entre vistas.

## Ejercicio 5 - Generación de Múltiples Presupuestos
--------------------------------------------------

Añadi nuevos componente(Form.jsx) de tres inputs para el nombre del presupuesto y del cliente, y junto con el servicio seleccionado y el precio total calculado, agrega esta información(Info.jsx) a un listado de presupuestos.
