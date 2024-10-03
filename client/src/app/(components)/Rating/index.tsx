import { Star } from "lucide-react";
import React from "react";

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  return [1, 2, 3, 4, 5].map(index => (
    <Star
      key={index}
      color={index <= rating ? "#FFC107" : "#E4E5E6"}
      className="h-4 w-4"
    />
  ));
}

export default Rating;
