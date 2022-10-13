import star from "../images/icon-star.svg";
import "../styles/Rating.css";
const options = [1, 2, 3, 4, 5];

export default function Rating({ rating, setRating, setSubmitted }) {
  return (
    <div className="rating-component">
      <div className="star-icon">
        <img src={star} alt="star-icon" />
      </div>

      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="options">
        {options.map((option) => (
          <button
            onClick={() => setRating(option)}
            className={rating === option ? "active-button" : ""}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={() => setSubmitted(true)} className="submit-button">
        SUBMIT
      </button>
    </div>
  );
}
