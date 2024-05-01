"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId) {
        this.id = id;
        this.tableId = tableId;
        this.items = [];
    }
    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(menuItem) {
        this.menu.push(menuItem);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(reservation) {
        const table = this.tables.find((table) => table.id === reservation.tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                this.reservations.push(reservation);
                console.log("Đặt bàn thành công.");
            }
            else {
                console.log("Bàn đã được đặt trước.");
            }
        }
        else {
            console.log("Không tìm thấy bàn.");
        }
    }
    placeOrder(order) {
        this.orders.push(order);
        console.log("Đặt món thành công.");
    }
    generateBill(tableId) {
        const order = this.orders.find((order) => order.tableId === tableId);
        if (order) {
            const total = order.getTotal();
            const formattedTotal = total.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            });
            console.log(`Tổng hóa đơn cho bàn ${tableId}: ${formattedTotal}`);
            const table = this.tables.find((table) => table.id === tableId);
            if (table) {
                table.available = true;
            }
        }
        else {
            console.log(`Không tìm thấy đơn hàng cho bàn ${tableId}.`);
        }
    }
}
// Nhà hàng 
let restaurant = new Restaurant();
// thêm món vào menu
let menuItem1 = new MenuItem(1, "cơm tấm", 40000);
let menuItem2 = new MenuItem(2, "Bún chả", 30000);
restaurant.addMenuItem(menuItem1);
restaurant.addMenuItem(menuItem2);
// thêm bàn
let table1 = new Table(1, 4);
let table2 = new Table(2, 6);
restaurant.addTable(table1);
restaurant.addTable(table2);
// Đặt bàn trước
let reservation1 = new Reservation(1, "Lê", 1);
let reservation2 = new Reservation(2, "Mai", 2);
restaurant.makeReservation(reservation1);
restaurant.makeReservation(reservation2);
// Đặt món
let order1 = new Order(1, 1);
order1.items.push(menuItem1);
order1.items.push(menuItem2);
restaurant.placeOrder(order1);
// tính tổng hóa đơn
restaurant.generateBill(1);
