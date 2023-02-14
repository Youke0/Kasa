import "./Card.css"
import PropTypes from "prop-types"

function Card ({logement}) {
    console.log(logement)
    return (
        <div className="bloc_logements">
        <a href={'logement/$(logement.id)'} className="logement_style">
            <img className="image_logement" src={logement.cover} alt={logement.cover} />
            <p>{logement.title}</p>
        </a>
        </div>
    )
}

Card.propTypes={
    home:PropTypes.object,
}

export default Card