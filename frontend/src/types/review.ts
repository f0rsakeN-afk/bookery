export interface deleteProps {
  id: string;
}

export interface deleteReviewResponse {
  status: string;
  message: string;
}

export interface addReviewProps {
  dataWithReview: {
    text: string;
    rating: number;
    user: string | undefined;
    product: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

export interface addReviewResponse {
  status: string;
  message: string;
  data: {
    text: string;
    rating: number;
    product: string;
    user: string;
    _id: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface updateReviewProps {
  id: string;
  dataWithRating: addReviewProps;
}
