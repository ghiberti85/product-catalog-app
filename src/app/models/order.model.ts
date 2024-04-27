// order.model.ts
export interface OrderItem {
    productId: number;
    quantity: number;
  }
  
  export interface Order {
    id: number;
    clientId: number;
    products: OrderItem[];
  }
  