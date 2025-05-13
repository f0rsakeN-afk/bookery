export interface productTypes {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  price: number;
  quantity?: string;
  category?: string;
  brand?: string;
  discountPercentage: number;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  priceAfterDiscount: number;
}

export interface productDetailTypes {
  status: string;
  data: productTypes;
}

export interface allProductTypesResponse {
  status: string;
  results: number;
  data: productTypes[];
  pagination: {
    totalItems: number;
    totalPages: number;
    page: number;
    limit: 8;
  };
}
/*  "pagination": {
        "totalItems": 9,
        "totalPages": 2,
        "page": 1,
        "limit": 8
    } */
