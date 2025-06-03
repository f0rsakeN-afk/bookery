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
