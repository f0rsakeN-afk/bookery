/*Login */
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
}
