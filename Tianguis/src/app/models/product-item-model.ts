import { producto } from './producto';
export class CartItemModel {
    productId: number;
    productName: string;
    productPrice: number;
    qty: number;

    constructor(producto: producto) {
        this.productId = producto.id;
        this.productName = producto.nombre;
        this.productPrice = producto.precio;
        this.qty = 1;
    }
}