import icon from "../images/illustration-thank-you.svg";
import "../styles/Result.css";
export default function Result({ rating }) {
  return (
    <div className="rating-component result">
      <img src={icon} alt="icon" />
      <div className="rating-result">You slected {rating} out of 5</div>
      <h1>Thank you!</h1>

      <p>
        {" "}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
