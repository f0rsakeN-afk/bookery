/* Update password*/
export interface updatePasswordProps {
  oldPassword: string;
  newPassword: string;
  newPassword2: string;
}

export interface updatePasswordResponse {
  status: string;
  message: string;
}

/* New password */
export interface NewPasswordProps {
  newPassword1: string;
  newPassword2: string;
}

export interface NewPasswordResponse {
  status: string;
  message: string;
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
export interface userDetailsResponse{
  name:string;
  email:string
}
