import "./Carousel.css"
import { useState } from "react"
import carouselArrow from "../../assets/carousel_arrow.svg"

function Carousel({ housing }) {
  const picsLength = housing.pictures.length
  const [pictureIndex, setPictureIndex] = useState(0)
  return (
    <div className="carousel">
      {picsLength > 1 && (
        <button
          className="left"
          onClick={() =>
            setPictureIndex((pictureIndex + picsLength - 1) % picsLength)
          }
        >
          <img src={carouselArrow} alt="carousel arrow" />
        </button>
      )}
      {picsLength > 1 && (
        <button
          className="right"
          onClick={() => setPictureIndex((pictureIndex + 1) % picsLength)}
        >
          <img src={carouselArrow} alt="carousel arrow" />
        </button>
      )}
      <img
        className="carousel-picture"
        src={housing.pictures[pictureIndex]}
        alt={`${housing.title} - ${pictureIndex}`}
      />
      <div className="carousel_compteur">
        <p>{pictureIndex + 1}/{picsLength}</p>
      </div>
    </div>
  )
}

export default Carousel
