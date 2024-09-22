import { FeedbackProvider } from "../components/context/FeedbackContext";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";

function Feedback() {
  return (
    <>
      <FeedbackProvider>
        <FeedbackForm />
        <div className="container">
          <FeedbackStats />
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </>
  );
}

export default Feedback;