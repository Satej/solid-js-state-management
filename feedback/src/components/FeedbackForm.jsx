import { createSignal } from "solid-js";
import { useFeedback } from "./context/FeedbackContext";
import Button from "./layout/Button";
import Rating from "./Rating";

const spanStyle = {
  display: "block",
  fontStyle: "italic",
  marginTop: "10px",
};

function FeedbackForm() {
  const { addFeedback } = useFeedback();

  const [text, setText] = createSignal("");
  const [msg, setMsg] = createSignal("");
  const [rating, setRating] = createSignal(8);

  const textHandler = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    if (inputText.trim() === "") {
      setMsg("");
    } else if (inputText.trim().length <= 20) {
      setMsg("Your feedback must be above 20 characters");
    } else {
      setMsg("");
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (text().trim().length > 20) {
      const newFeedback = {
        text: text(),
        rating: rating(),
      };
      await addFeedback(newFeedback);
      setText("");
      setMsg("Feedback submitted successfully!");
    }
  };

  return (
    <div class="container">
      <div class="card">
        <form onSubmit={formSubmit}>
          <h3>Kindly drop Feedback for our service you just experienced.</h3>
          <Rating ratingState={setRating} />
          <br />
          <br />
          <div class="input-group">
            <input
              type="text"
              value={text()}
              placeholder="Write your feedback here"
              onInput={textHandler}
            />
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </div>
          {msg() && (
            <span class="message" style={spanStyle}>
              {msg()}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;