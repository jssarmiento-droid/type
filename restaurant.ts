class Restaurante {

    // 1. Calcular total del producto
    calcularTotal(precio: number, cantidad: number): number {
        const total = precio * cantidad;
        return total;
    }

    // 2. Aplicar descuento al total del pedido
    aplicarDescuento(total: number, descuento: number): number {
        const totalConDescuento = total - (total * descuento / 100);
        return totalConDescuento;
    }

    // 3. Calcular propina
    calcularPropina(total: number, porcentaje: number): number {
        const propina = total * (porcentaje / 100);
        return propina;
    }
}


// Ejemplo de uso
const rest = new Restaurante();

console.log("Total del producto:", rest.calcularTotal(10, 3));         // 30
console.log("Total con descuento:", rest.aplicarDescuento(100, 10));  // 90
console.log("Propina:", rest.calcularPropina(90, 15));                // 13.5
