import { useFeedback } from "./context/FeedbackContext";
import { FaRegularCircleXmark } from "solid-icons/fa";

function FeedbackItem(props) {
  const { deleteFeedback } = useFeedback();
  const feedback = props.feedback;

  return (
    <div class="card">
      <div class="r-display">{feedback.rating}</div>
      <div>{feedback.text}</div>
      <button class="close" onClick={() => deleteFeedback(feedback.id)}>
        <FaRegularCircleXmark />
      </button>
    </div>
  );
}

export default FeedbackItem;