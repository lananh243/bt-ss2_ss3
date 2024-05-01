"use strict";
class Product1 {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class CartProduct extends Product1 {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.quantity = quantity;
    }
    calculatePrice() {
        return this.price * this.quantity;
    }
    increaseQuantity() {
        return this.quantity++;
    }
    decreaseQuantity() {
        if (this.quantity > 0) {
            return this.quantity--;
        }
        else {
            console.log("Không thể giảm nữa");
        }
    }
}
class ShopProduct extends Product1 {
    constructor(id, name, price, stock) {
        super(id, name, price);
        this.stock = stock;
    }
}
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(product, quantity) {
        if (quantity > product.stock) {
            console.log("Không đủ hàng trong kho");
            return;
        }
        let cartProduct = new CartProduct(product.id, product.name, product.price, quantity);
        this.items.push(cartProduct);
    }
    removeItem(product) {
        const index = this.items.indexOf(product);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.calculatePrice();
        }
        const formattedTotal = total.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        return formattedTotal;
    }
}
// sản phẩm
let product1 = new Product1(1, "áo", 20000);
let product2 = new Product1(2, "quần", 30000);
let product3 = new Product1(3, "giày", 40000);
// giỏ hàng và thêm sản phẩm
let cart = new Cart();
cart.addItem(product1, 2);
cart.addItem(product2, 4);
cart.addItem(product3, 6);
// Xóa sản phẩm
cart.removeItem(cart.items[1]);
console.log("Sản phẩm trong giỏ");
for (let item of cart.items) {
    console.log(`Tên :${item.name}`);
    console.log(`Số lượng :${item.quantity}`);
    console.log(`Giá :${item.price}`);
}
// tính tổng
console.log("Tổng các sản phẩm trong giỏ hàng: ", cart.getTotal());
