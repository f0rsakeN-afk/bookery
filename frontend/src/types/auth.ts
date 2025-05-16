/*Login */

export interface dataProps {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  passwordConfirm?: string;
  phone?: string;
  location?: string;
  bio?: string;
  occupation?: string;
  company?: string;
  timeZone?: string;
  language?: string;
  role?: "user" | "admin";
  createdAt?: Date;
  updatedAt?: Date;
  __v?: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  message: string;
}

/* Register */
export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface RegisterResponse {
  status: string;
  message: string;
  token: string;
  data: dataProps;
}
