class Hospital {

    // 1. Calcular dosis de medicamento
    calcularDosis(peso: number, mgPorKg: number): number {
        const dosis = peso * mgPorKg;
        return dosis;
    }

    // 2. Calcular Índice de Masa Corporal (IMC)
    calcularIMC(peso: number, altura: number): number {
        if (altura <= 0) {
            throw new Error("La altura debe ser mayor a cero.");
        }

        const imc = peso / (altura * altura);
        return imc;
    }

    // 3. Registrar visitas
    registrarVisitas(visitasActuales: number, nuevas: number): number {
        const totalVisitas = visitasActuales + nuevas;
        return totalVisitas;
    }
}


// Ejemplo de uso
const hospital = new Hospital();

console.log("Dosis:", hospital.calcularDosis(70, 5));                  // 350 mg
console.log("IMC:", hospital.calcularIMC(70, 1.75));                  // 22.85
console.log("Visitas:", hospital.registrarVisitas(10, 3));            // 13
