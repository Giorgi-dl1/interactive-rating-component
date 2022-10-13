import { useState } from "react";
import Rating from "./Components/Rating";
import Result from "./Components/Result";

function App() {
  const [rating, setRating] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      {submitted ? (
        <Result rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setSubmitted={setSubmitted}
        />
      )}
    </div>
  );
}

export default App;
