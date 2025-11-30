class Banco {
    // 1. Depositar
    depositar(saldo: number, monto: number): number {
        const nuevoSaldo = saldo + monto;
        return nuevoSaldo;
    }

    // 2. Retirar
    retirar(saldo: number, monto: number): number {
        if (monto > saldo) {
            throw new Error("Fondos insuficientes");
        }
        const nuevoSaldo = saldo - monto;
        return nuevoSaldo;
    }

    // 3. Transferir
    transferir(saldoOrigen: number, monto: number): number {
        if (monto > saldoOrigen) {
            throw new Error("No se puede transferir más de lo que hay");
        }
        const nuevoSaldo = saldoOrigen - monto;
        return nuevoSaldo;
    }
}

// =======================
// PRUEBAS EN CONSOLA
// =======================

const banco = new Banco();

console.log("Depósito (100 + 50):", banco.depositar(100, 50));
console.log("Retiro (150 - 40):", banco.retirar(150, 40));
console.log("Transferencia (200 - 50):", banco.transferir(200, 50));
