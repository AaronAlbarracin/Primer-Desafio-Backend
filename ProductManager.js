class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Por favor, proporcione todos los campos obligatorios.");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.log("Ya existe un producto con el mismo código.");
            return;
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            products: []
        };

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }

    getProductById(idProduct) {
        const productIndex = this.products.findIndex(product => product.id === idProduct);

        if (productIndex === -1) {
            console.log("Producto no encontrado.");
            return;
        }

        const product = this.products[productIndex];

        if (product.products.includes(product.id)) {
            console.log("El producto se agregó correctamente");
            return;
        }

        product.products.push(product.id);
    }
}

const ManagerProd = new ProductManager();
ManagerProd.addProduct('Regla', 'transparente', 120, 'sin imagen', 'cod1', 22);
ManagerProd.addProduct('Cuaderno', 'verde', 400, 'sin imagen', 'cod2', 13);
ManagerProd.addProduct('Carpeta', 'negro', 210, 'sin imagen', 'cod3', 56);

ManagerProd.addProduct('', 'Descripción', 100, 'sin imagen', 'cod1', 10); // Ejemplo de producto con campos obligatorios faltantes
ManagerProd.addProduct('Lapicera', 'Azul', -5, 'sin imagen', 'cod4', 5); // Ejemplo de producto con precio inválido
ManagerProd.addProduct('Libro', 'Amarilla', 50, 'sin imagen', 'cod2', 20); // Ejemplo de producto duplicado por código

ManagerProd.getProductById(1);
ManagerProd.getProductById(2);
ManagerProd.getProductById(3);

console.log(ManagerProd.getProducts());
