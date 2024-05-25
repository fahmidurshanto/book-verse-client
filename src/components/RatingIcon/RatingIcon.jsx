import { useState } from "react";
import { FaStar } from "react-icons/fa";
const RatingIcon = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex">
      {[...Array(10)].map((star, idx) => {
        const currentRating = idx + 1;
        return (
          <label key={idx}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              onClick={() => setRating(currentRating)}
              value={currentRating}
            />

            <div>
              <FaStar
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                className="star cursor-pointer"
                size={18}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default RatingIcon;
