import { useNavigate } from "@solidjs/router";
import Button from "../components/layout/Button";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="head">Thank you for visiting PIXELFORD</h1>
          <p>We believe you enjoyed your photography session</p>
          <p style={{ "margin-bottom": "20px" }}>
            We would like you to give a feedback about your last experience in
            our studio
          </p>
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate("/feedback")}
          >
            Leave a Feedback
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;