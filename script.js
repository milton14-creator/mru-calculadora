document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('mru-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe y recargue la página

        // Obtener los valores del formulario
        const velocidad = parseFloat(document.getElementById('velocidad').value);
        const tiempo = parseFloat(document.getElementById('tiempo').value);
        const distancia = parseFloat(document.getElementById('distancia').value);

        // Verificar qué valor falta y calcularlo
        let resultado = '';

        if (!isNaN(velocidad) && !isNaN(tiempo) && isNaN(distancia)) {
            // Si velocidad y tiempo están presentes, calcular distancia
            const distanciaCalculada = velocidad * tiempo;
            resultado = `La distancia recorrida es: ${distanciaCalculada} metros.`;
        } else if (!isNaN(velocidad) && isNaN(tiempo) && !isNaN(distancia)) {
            // Si velocidad y distancia están presentes, calcular tiempo
            const tiempoCalculado = distancia / velocidad;
            resultado = `El tiempo que ha transcurrido es: ${tiempoCalculado} segundos.`;
        } else if (isNaN(velocidad) && !isNaN(tiempo) && !isNaN(distancia)) {
            // Si tiempo y distancia están presentes, calcular velocidad
            const velocidadCalculada = distancia / tiempo;
            resultado = `La velocidad del objeto es: ${velocidadCalculada} m/s.`;
        } else {
            resultado = 'Por favor, ingresa dos de los tres valores (velocidad, tiempo o distancia).';
        }

        // Mostrar el resultado en la página
        document.getElementById('resultado').textContent = resultado;
    });
});
