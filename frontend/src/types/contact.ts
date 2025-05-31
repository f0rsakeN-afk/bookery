export interface ContactProps {
  /*   email: string; */
  user?: string;
  subject: string;
  query: string;
}

interface dataTypes {
  /*   email: string; */
  subject: string;
  query: string;
  _id: string;
  user: {
    _id: string;
    name?: string;
    email?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ContactResponse {
  status: string;
  message: string;
  data: dataTypes;
}

export interface getAllMessagesResponse {
  status: string;
  results: number;
  data: dataTypes[];
}

export interface deleteMessagesProps {
  id: string;
}

export interface deleteMessagesResponse {
  status: string;
  message: string;
}
