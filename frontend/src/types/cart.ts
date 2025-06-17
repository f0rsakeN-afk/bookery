export interface addToCartProps {
  productId: string;
  quantity?: number;
}

export interface ShippingDimensions {
  length: number;
  width: number;
  height: number;
}

export interface ShippingInfo {
  dimensions: ShippingDimensions;
  weight: number;
}

export interface Product {
  shipping: ShippingInfo;
  _id: string;
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  brand: string;
  discountPercentage: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  priceAfterDiscount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  _id: string; 
}

export interface CartResponse {
  status: string;
  results: number;
  data: CartItem[];
}
