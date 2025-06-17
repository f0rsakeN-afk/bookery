export interface ProductSummary {
  _id: string;
  id: string;
  title: string;
  price: number;
  image: string;
  priceAfterDiscount: number | null;
}

export interface OrderedProduct {
  _id: string; 
  product: ProductSummary;
  quantity: number;
}

export interface ShippingInfo {
  address: string;
  city: string;
  phone: string;
  postalCode: string;
}

export interface Order {
  _id: string; 
  user: string; 
  shippingInfo: ShippingInfo;
  products: OrderedProduct[];
  paymentMethod: 'cash_on_delivery' | 'esewa' | string;
  paymentStatus: 'paid' | 'pending' | 'failed' | string;
  totalPrice: number;
  orderStatus: 'processing' | 'shipped' | 'delivered' | 'cancelled' | string;
  createdAt: string;
  updatedAt: string;
}

export interface UserOrderHistoryResponse {
  status: string;
  results: number;
  data: Order[];
}
