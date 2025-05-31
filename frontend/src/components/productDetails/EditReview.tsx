import { reviewTypes } from "@/types/product";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { Button } from "../ui/button";
import { useUpdateReview } from "@/services/reviews";

interface editReviewProps {
  review: reviewTypes;
  onSuccess?: () => void;
}

const EditReview = ({ review, onSuccess }: editReviewProps) => {
  const { register, reset, handleSubmit } = useForm();
  const [rating, setRating] = useState<number>(review.rating!);

  const updateMutation = useUpdateReview();

  //@ts-ignore
  const onSubmit = (data) => {
    console.log(data);
    const dataWithRating = { ...data, rating };
    updateMutation.mutate(
      { id: review._id!, dataWithRating },
      {
        onSuccess: () => {
          reset();
          if (onSuccess) onSuccess();
        },
      }
    );
  };

  return (
    <div className="font-inter">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5"
      >
        <h2 className="text-center text-xl font-semibold">Edit Review</h2>
        <Wrapper>
          <Label htmlFor="review">Review</Label>
          <Textarea
            {...register("text")}
            disabled={updateMutation.isPending}
            defaultValue={review.text}
            maxLength={250}
            className="max-h-30"
          />
        </Wrapper>
        <Wrapper>
          <Label htmlFor="rating">Rating</Label>
          <Rating
            value={rating}
            onChange={setRating}
            style={{ maxWidth: 200 }}
          />
        </Wrapper>
        <Button type="submit" disabled={updateMutation.isPending}>
          Submit
        </Button>
      </form>
    </div>
  );
};

interface wrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
  return <div className="flex flex-col space-y-3">{children}</div>;
};

export default EditReview;
