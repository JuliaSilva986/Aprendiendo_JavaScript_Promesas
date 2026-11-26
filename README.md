# 🍽️ Sistema de Reservas con JavaScript

Mini proyecto desarrollado como parte del módulo de **Promesas y Async/Await de DEV.F**.

## 📌 Descripción

Aplicación web que simula un sistema de reservas para un restaurante, utilizando promesas y `async/await` para gestionar operaciones asíncronas como la verificación de disponibilidad de mesas y el envío de confirmaciones.

## ⚙️ Funcionalidades

- Consultar la disponibilidad de mesas.
- Realizar reservas indicando el nombre del cliente y la cantidad de mesas.
- Actualizar el número de mesas disponibles después de cada reserva.
- Simular el envío de un correo de confirmación.
- Manejar errores cuando no hay mesas suficientes o falla la confirmación.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

## 📚 Conceptos practicados

- Promesas (`Promise`).
- Métodos `resolve()` y `reject()`.
- Funciones asíncronas con `async/await`.
- Manejo de errores con `try/catch`.
- Simulación de operaciones asíncronas con `setTimeout()`.
- Uso de `Math.random()`.
- Manipulación del DOM y eventos.

## 🎯 Objetivo

Practicar el uso de promesas y `async/await` mediante un sistema que simula operaciones asíncronas y permite manejar diferentes escenarios de éxito y error.

**Nota:** Las reservas y el envío de correos son simulados. Los datos se almacenan temporalmente y se restablecen al recargar la página.