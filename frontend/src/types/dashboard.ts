export interface deleteProductProps {
  id: string;
}

export interface deleteProductResponse {
  status: string;
  message: string;
}

export interface user {
  _id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface getAllUsersResponse {
  status: string;
  results: number;
  data?: user[];
}

export interface productTypes {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  price: number;
  quantity: number ;
  category: string;
  brand: string;
  discountPercentage: number;
  image: string | File;
  createdAt?: string;
  updatedAt?: string;
  priceAfterDiscount?: number;
  shipping: {
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
  };
}
