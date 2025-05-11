export interface ContactProps {
  email: string;
  subject: string;
  query: string;
}

interface dataTypes {
  email: string;
  subject: string;
  query: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactResponse {
  status: string;
  message:string;
  data: dataTypes;
}

export interface getAllMessagesResponse {
  status: string;
  results: number;
  data: dataTypes[];
}
