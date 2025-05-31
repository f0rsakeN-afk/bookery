import { Star } from "lucide-react";

interface StarRatingLoaderProps {
  rating: number;
}

const StarRatingLoader = ({ rating }: StarRatingLoaderProps) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="w-4 h-4"
          fill={index < rating ? "#facc15" : "transparent"}
          stroke={index < rating ? "#facc15" : "#d1d5db"}
        />
      ))}
    </div>
  );
};

export default StarRatingLoader;
