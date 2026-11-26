// Número inicial de mesas disponibles
let mesasDisponibles = 5;

// Elementos del DOM
const formulario = document.getElementById("form-reserva");
const mensaje = document.getElementById("mensaje");
const disponibles = document.getElementById("disponibles");
const boton = document.getElementById("boton-reservar");


// 1. Verificar disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!Number.isInteger(mesasSolicitadas) || mesasSolicitadas <= 0) {
                reject(new Error("El número de mesas no es válido."));

            } else if (mesasSolicitadas <= mesasDisponibles) {
                resolve("Hay mesas disponibles.");

            } else {
                reject(new Error("No hay suficientes mesas disponibles."));
            }

        }, 1000);

    });
}


// 2. Simular el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const exito = Math.random() < 0.8;

            if (exito) {
                resolve(`Correo de confirmación enviado a ${nombreCliente} (simulado).`);

            } else {
                reject(new Error("Falló el envío del correo de confirmación."));
            }

        }, 1000);

    });
}


// 3. Función principal para realizar la reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {

    let reservaConfirmada = false;

    try {

        mensaje.textContent = "Verificando disponibilidad...";

        // Esperamos el resultado de la primera promesa
        const resultado = await verificarDisponibilidad(mesasSolicitadas);

        console.log(resultado);

        // Confirmamos la reserva
        mesasDisponibles -= mesasSolicitadas;
        disponibles.textContent = mesasDisponibles;

        reservaConfirmada = true;

        mensaje.textContent = "Reserva confirmada. Enviando correo...";

        // Esperamos el envío de confirmación
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);

        console.log(confirmacion);

        mensaje.textContent =
            `Reserva confirmada para ${nombreCliente}, ` +
            `${mesasSolicitadas} mesa(s). ${confirmacion}`;

    } catch (error) {

        console.error(error.message);

        if (reservaConfirmada) {
            mensaje.textContent =
                `Tu reserva está confirmada, pero ${error.message}`;

        } else {
            mensaje.textContent =
                `No se pudo realizar la reserva: ${error.message}`;
        }
    }
}


// 4. Evento del formulario
formulario.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    const nombreCliente = document.getElementById("nombre").value.trim();
    const mesasSolicitadas = Number(
        document.getElementById("mesas").value
    );

    boton.disabled = true;

    try {
        await hacerReserva(nombreCliente, mesasSolicitadas);
    } finally {
        boton.disabled = false;
    }

});