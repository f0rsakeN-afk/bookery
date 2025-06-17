export interface addToWishlistProps {
  productId: string;
}

export interface ShippingDimensions {
  length: number;
  height: number;
  width: number;
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
  discountPercemtage: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  priceAfterDiscount: number;
}

export interface ProductResponse {
  status: string;
  results: number;
  data: Product[];
}
