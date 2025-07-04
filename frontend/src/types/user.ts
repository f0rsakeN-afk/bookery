import { dataProps } from "./auth";

/* Update password*/
export interface updatePasswordProps {
  id:string;
  password: string;
  currentPassword: string;
  passwordConfirm: string;
}

export interface updatePasswordResponse {
  status: string;
  message: string;
}

/* New password */
export interface newPasswordDataProps {
  password: string;
  passwordConfirm: string;
}

export interface NewPasswordProps {
  data: newPasswordDataProps;
  token: string;
}

export interface NewPasswordResponse {
  status: string;
  message: string;
  token: string;
  data: dataProps;
}

/* Reset Password */
export interface ResetPasswordProps {
  email: string;
}

export interface ResetPasswordResponse {
  status: string;
  message: string;
}

/* User details */
export interface userDetailsResponse {
  status: string;
  data: dataProps;
}
