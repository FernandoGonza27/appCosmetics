import React from "react";
import "./product.css"
const Product = () => {
    return (
        <div>
            <h1>Productos Destacados</h1>
            <div className="product">
                <img src="https://m.media-amazon.com/images/I/414vHtZ5lwL._AC_UF1000,1000_QL80_.jpg" alt="Producto 1" />
                <h2>Producto 1</h2>
                <p>Precio: $XX.XX</p>
                <p>Descripción breve del producto 1.</p>
            </div>
            {/* Repite la estructura anterior para los otros productos */}
        </div>
    );
}

export default Product;