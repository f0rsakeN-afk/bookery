import { useForm } from "react-hook-form";
import { useState } from "react";
import { reviewTypes } from "@/types/product";
import { Send, Edit2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useAddReview, useDeleteReview } from "@/services/reviews";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { maskEmail } from "@/utils/maskEmail";
import { Separator } from "../ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Rating } from "@smastrom/react-rating";
import { useAuth } from "@/context/AuthContext";
import StarRatingLoader from "./StarRating";
import EditReview from "./EditReview";

interface reviewProps {
  reviews: reviewTypes[] | undefined;
  id: string;
}

const Reviews = ({ reviews, id }: reviewProps) => {
  const [deleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const { reset, register, handleSubmit } = useForm();

  const { user } = useAuth();

  const deleteReviewMutation = useDeleteReview();
  const addReviewMutation = useAddReview();

  const [rating, setRating] = useState<number>(3);

  //@ts-ignore
  const onSubmit = (data) => {
    if (!data.text) {
      toast.warning("Please write a review before submitting");
      return;
    }

    if (rating < 1) {
      toast.warning("Rating cannot be less than 1");
      return;
    }

    const dataWithReview = {
      ...data,
      product: id,
      user: user?._id,
      rating,
    };
    addReviewMutation.mutate(
      { dataWithReview },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
    /*console.log(dataWithReview); */
  };

  return (
    <div className="space-y-3 md:space-y-6">
      <h2 className="text-2xl font-playfair font-semibold text-primary/90">
        Reviews
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          user?.role === "admin" ? "hidden" : "grid",
          " grid-cols-1 md:grid-cols-3 gap-4 bg-background font-inter"
        )}
      >
        <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row gap-3 items-start md:items-center">
          <Input
            disabled={addReviewMutation.isPending || user?.role === "admin"}
            placeholder="Write a review..."
            {...register("text")}
            className="w-full md:flex-1"
          />

          <div className="flex justify-center md:justify-start">
            <Rating
              style={{ maxWidth: 200 }}
              value={rating}
              onChange={setRating}
            />
          </div>

          <Button
            type="submit"
            disabled={addReviewMutation.isPending || user?.role === "admin"}
            className="flex gap-2 items-center whitespace-nowrap"
          >
            Submit <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>

      <section className="space-y-4 font-inter">
        <h3 className="text-lg font-semibold text-primary">
          Comments ({reviews && reviews.length})
        </h3>

        {reviews?.length === 0 ? (
          <p className="text-muted-foreground ">
            Be the first to share your thoughts! Your feedback helps others and
            makes a difference.
          </p>
        ) : (
          reviews &&
          reviews.map((review) => (
            <div key={review.id} className="flex flex-col gap-2">
              <div className="flex justify-between items-start md:items-center">
                <div className="flex flex-col">
                  <StarRatingLoader rating={review.rating!} />
                  <section className="">
                    <p className="font-medium text-sm text-primary/80">
                      {review.user?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {maskEmail(review.user?.email!)}
                    </p>
                  </section>
                </div>
                <div
                  className={cn(
                    user?._id === review.user?._id ? "flex" : "hidden",
                    " gap-2 mt-2 md:mt-0"
                  )}
                >
                  <Dialog
                    open={editingReviewId === review._id}
                    onOpenChange={(open) => {
                      if (!open) setEditingReviewId(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingReviewId(review._id!)}
                      >
                        <Edit2 className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </DialogTrigger>

                    <DialogContent>
                      <EditReview
                        review={review}
                        onSuccess={() => setEditingReviewId(null)}
                      />
                    </DialogContent>
                  </Dialog>

                  <AlertDialog
                    open={deleteDialogOpen}
                    onOpenChange={setIsDeleteDialogOpen}
                  >
                    <AlertDialogTrigger asChild>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you sure you want to delete this review?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. It will permanently
                          delete the review and remove all associated data from
                          our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          disabled={deleteReviewMutation.isPending}
                        >
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          disabled={deleteReviewMutation.isPending}
                          onClick={() =>
                            deleteReviewMutation.mutate(
                              { id: review._id! },
                              { onSuccess: () => setIsDeleteDialogOpen(false) }
                            )
                          }
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <p className="text-sm text-muted-foreground font-inter">
                {review.text}
              </p>

              <Separator />
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Reviews;
