import { createMemo } from "solid-js";
import { useFeedback } from "./context/FeedbackContext";

function FeedbackStats() {
  const { state } = useFeedback();

  // Calculate total number of feedback items
  const totalFeedback = createMemo(() => state.feedback.length);

  // Calculate average rating
  const averageRating = createMemo(() => {
    if (state.feedback.length === 0) return 0;
    const totalRating = state.feedback.reduce(
      (acc, curr) => acc + curr.rating,
      0
    );
    return (totalRating / state.feedback.length).toFixed(1);
  });

  return (
    <>
      <div className="feedback-stats">
        <p>Total Feedbacks: {totalFeedback()}</p>
        <p>Average Rating: {averageRating()}</p>
      </div>
    </>
  );
}

export default FeedbackStats;