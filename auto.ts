class Auto {

    // Método 1: Acelerar
    acelerar(velocidadActual: number, incremento: number): number {
        const nuevaVelocidad = velocidadActual + incremento;
        return nuevaVelocidad;
    }

    // Método 2: Frenar
    frenar(velocidadActual: number, decremento: number): number {
        let nuevaVelocidad = velocidadActual - decremento;

        // Si la velocidad queda negativa, se ajusta a 0
        if (nuevaVelocidad < 0) {
            nuevaVelocidad = 0;
        }

        return nuevaVelocidad;
    }

    // Método 3: Recorrer (calcular velocidad media)
    recorrer(distancia: number, tiempo: number): number {
        if (tiempo <= 0) {
            throw new Error("El tiempo debe ser mayor que cero.");
        }

        const velocidadMedia = distancia / tiempo;
        return velocidadMedia;
    }
}


// Ejemplo de uso
const miAuto = new Auto();

console.log("Acelerar:", miAuto.acelerar(50, 20));       // 70 km/h
console.log("Frenar:", miAuto.frenar(70, 30));           // 40 km/h
console.log("Velocidad media:", miAuto.recorrer(120, 2)); // 60 km/h
