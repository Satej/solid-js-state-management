import { Show, For, createSignal, onCleanup } from "solid-js";
import { useFeedback } from "./context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./layout/Spinner";

function FeedbackList() {
  const { state } = useFeedback();
  const [delayedLoading, setDelayedLoading] = createSignal(true);

  // Set a delay of 1 second before showing the feedback list
  const timer = setTimeout(() => setDelayedLoading(false), 1000);

  // Cleanup the timeout if the component unmounts before the timer completes
  onCleanup(() => clearTimeout(timer));

  return (
    <Show
      when={!state.loading && !delayedLoading()}
      fallback={
        <div className="spinner-container">
          <Spinner />
        </div>
      }
    >
      <Show when={state.feedback && state.feedback.length === 0}>
        <p>No feedbacks yet!</p>
      </Show>
      <Show when={state.feedback && state.feedback.length > 0}>
        <div>
          <For each={[...state.feedback].reverse()}>
            {(item) => (
              <div key={item.id}>
                <FeedbackItem feedback={item} />
              </div>
            )}
          </For>
        </div>
      </Show>
    </Show>
  );
}

export default FeedbackList;