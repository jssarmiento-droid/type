class Estudiante {

    // 1. agregarNota
    agregarNota(promedio: number, nuevaNota: number): number {
        const nuevoPromedio = (promedio + nuevaNota) / 2;
        return nuevoPromedio;
    }

    // 2. aprobar
    aprobar(nota: number, minima: number): boolean {
        return nota >= minima;
    }

    // 3. calcularFaltas
    calcularFaltas(faltasActuales: number, nuevas: number): number {
        return faltasActuales + nuevas;
    }
}

// ========================
// PRUEBAS EN CONSOLA
// ========================

const alumno = new Estudiante();

console.log("Nuevo promedio:", alumno.agregarNota(15, 18));  
console.log("¿Aprueba?:", alumno.aprobar(14, 15));  
console.log("Faltas totales:", alumno.calcularFaltas(3, 2));
