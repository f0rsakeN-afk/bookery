export interface ContactProps {
  email: string;
  subject: string;
  query: string;
}

export interface ContactResponse {
  status: string;
  message: string;
}
