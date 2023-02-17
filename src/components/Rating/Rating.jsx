import "./Rating.css"
import starActive from "../../assets/star-active.svg"
import starInactive from "../../assets/star-inactive.svg"

function Rating({ rating }) {
  const baseRating = [1, 2, 3, 4, 5]
  return (
    <div className="rating">
      {baseRating.map((r, index) => (
        <img
          key={`${r}-${index}`}
          src={r <= rating ? starActive : starInactive}
          alt="rating star"
        />
      ))}
    </div>
  )
}

export default Rating
