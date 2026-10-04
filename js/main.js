// Simulador de Productos - Pinturest

// CLASE Producto
class Producto {
    constructor(id, nombre, precio, stock, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
    }

    mostrarInfo() {
        console.log(`📦 [${this.categoria}] ${this.nombre} | Precio: $${this.precio} | Stock: ${this.stock}`);
    }
}

// ARRAY DE OBJETOS - catálogo de productos
const catalogo = [
    new Producto(1, "Pintura Negra", 6000, 50, "Pinturas"),
    new Producto(2, "Pintura Blanca", 4500, 30, "Pinturas"),
    new Producto(3, "Pintura Universal", 5500, 20, "Pinturas"),
    new Producto(4, "Pincel Fino", 1500, 100, "Pinceles"),
    new Producto(5, "Pincel Ancho", 1800, 80, "Pinceles"),
    new Producto(6, "Rodillo Estándar", 3000, 25, "Rodillos"),
    new Producto(7, "Rodillo Profesional", 4000, 10, "Rodillos"),
    new Producto(8, "Sellador", 7000, 0, "Otros"),
];

// Mostrar catálogo inicial
console.log("--- CATÁLOGO COMPLETO ---");
for (const producto of catalogo) {
    producto.mostrarInfo();
}

// FIND - Buscar producto por ID
const idBuscado = Number(prompt("Ingresá el ID del producto que querés buscar (1 al 8):"));
const productoBuscado = catalogo.find(p => p.id === idBuscado);

if (productoBuscado) {
    console.log(`\n🔍 Producto encontrado:`);
    productoBuscado.mostrarInfo();
} else {
    console.log(`\n❌ No se encontró ningún producto con el ID ${idBuscado}.`);
}

// FILTER - Filtrar productos con stock disponible
const productosDisponibles = catalogo.filter(p => p.stock > 0);
console.log(`\n✅ Productos con stock disponible (${productosDisponibles.length}):`);
for (const producto of productosDisponibles) {
    producto.mostrarInfo();
}

// FILTER - Filtrar por categoría
const categoriaBuscada = prompt("¿Qué categoría querés ver? (Pinturas / Pinceles / Rodillos / Otros)").trim();
const productosPorCategoria = catalogo.filter(p => p.categoria.toLowerCase() === categoriaBuscada.toLowerCase());

if (productosPorCategoria.length > 0) {
    console.log(`\n📂 Productos en la categoría "${categoriaBuscada}":`);
    for (const producto of productosPorCategoria) {
        producto.mostrarInfo();
    }
} else {
    console.log(`\n❌ No se encontraron productos en la categoría "${categoriaBuscada}".`);
}

// MAP - Mostrar precios con IVA (21%)
const catalogoConIva = catalogo.map(p => ({
    nombre: p.nombre,
    precioConIva: (p.precio * 1.21).toFixed(2)
}));

console.log("\n💰 Precios con IVA incluido (21%):");
for (const producto of catalogoConIva) {
    console.log(`${producto.nombre}: $${producto.precioConIva}`);
}

// REDUCE - Calcular valor total del inventario
const valorTotalInventario = catalogo.reduce((acc, p) => acc + p.precio * p.stock, 0);
console.log(`\n📊 Valor total del inventario: $${valorTotalInventario}`);

alert(`Pinturest tiene ${catalogo.length} productos. Valor total del inventario: $${valorTotalInventario}. Revisá la consola para más detalles.`);