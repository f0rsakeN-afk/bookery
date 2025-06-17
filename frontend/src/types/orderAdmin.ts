export interface OrderResponse {
  status: string;
  results: number;
  data: Order[];
}

export interface Order {
  _id: string;
  user: User;
  shippingInfo: ShippingInfo;
  products: OrderedProduct[];
  paymentMethod: string;
  paymentStatus: "pending" | "paid" | "failed";
  totalPrice: number;
  orderStatus: "processing" | "shipped" | "delivered" | "cancelled" | string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface ShippingInfo {
  address: string;
  city: string;
  phone: string;
  postalCode: string;
}

export interface OrderedProduct {
  _id: string;
  product: Product;
  quantity: number;
}

export interface Product {
  _id: string;
  id: string;
  title: string;
  price: number;
  discountPercentage: number;
  priceAfterDiscount: number;
  image: string;
}
