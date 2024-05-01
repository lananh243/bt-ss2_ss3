class MenuItem {
    id: number
    name: string
    price: number
    constructor(id:number,name:string,price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    id: number
    capacity: number
    available: boolean
    constructor(id:number, capacity:number){
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}
class Reservation {
    id: number
    customerName: string
    tableId: number
    constructor(id:number,customerName:string,tableId:number){
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    id: number;
    tableId: number;
    items: MenuItem[];
  
    constructor(id: number, tableId: number) {
      this.id = id;
      this.tableId = tableId;
      this.items = [];
    }
  
    getTotal(): number {
      let total = 0;
      for (const item of this.items) {
        total += item.price;
      }
      return total;
    }
}
class Restaurant {
    menu: MenuItem[];
    tables: Table[];
    reservations: Reservation[];
    orders: Order[];
  
    constructor() {
      this.menu = [];
      this.tables = [];
      this.reservations = [];
      this.orders = [];
    }
  
    addMenuItem(menuItem: MenuItem): void {
      this.menu.push(menuItem);
    }
  
    addTable(table: Table): void {
      this.tables.push(table);
    }
  
    makeReservation(reservation: Reservation): void {
      const table = this.tables.find((table) => table.id === reservation.tableId);
      if (table) {
        if (table.available) {
          table.available = false;
          this.reservations.push(reservation);
          console.log("Đặt bàn thành công.");
        } else {
          console.log("Bàn đã được đặt trước.");
        }
      } else {
        console.log("Không tìm thấy bàn.");
      }
    }
  
    placeOrder(order: Order): void {
      this.orders.push(order);
      console.log("Đặt món thành công.");
    }
    generateBill(tableId: number): void {
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
        } else {
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
let reservation1 = new Reservation(1, "Lê", 1)
let reservation2 = new Reservation(2, "Mai", 2);
restaurant.makeReservation(reservation1);
restaurant.makeReservation(reservation2)
// Đặt món
let order1 = new Order(1, 1);
order1.items.push(menuItem1);
order1.items.push(menuItem2);
restaurant.placeOrder(order1)
// tính tổng hóa đơn
restaurant.generateBill(1);