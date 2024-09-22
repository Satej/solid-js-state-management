import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header text="PIXELFORD Feedback App." />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/feedback" component={Feedback} />
      </Router>
    </>
  );
}

export default App;