import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel/Carousel"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import data from "../../data/data"
import NotFound from "../Error/Error"
import Chip from "../../components/Chip/Chip"
import Hero from "../../components/Hero/Hero"
import Rating from "../../components/Rating/Rating"
import Collapse from "../../components/Collapse/Collapse"
import "./Logement.css"

function Housing() {
  const { id } = useParams()
  const housing = new data().getLogementById(id)
  if (!housing) {
    return <NotFound />
  }
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Carousel housing={housing} />
          <section className="housing-info">
            <div className="housing-info__general">
              <h1>{housing.title}</h1>
              <h3>{housing.location}</h3>
              <div className="tags">
                {housing.tags.map((tag, index) => (
                  <Chip key={`${tag}-${index}`} text={tag} />
                ))}
              </div>
            </div>
            <div className="housing-info__host">
              <Hero host={housing.host} />
              <Rating rating={housing.rating} />
            </div>
          </section>
          <section className="housing-description">
            <div className="collapse-logement">
            <Collapse title="Description" content={housing.description} />
            </div>
            <div className="collapse-logement">
            <Collapse title="Équipements" content={
                <ul>
                  {housing.equipments.map((equipment, index) => (
                    <li className="équipements_détails" key={`${equipment}-${index}`}>{equipment}</li>
                  ))}
                </ul>
              } />
            </div>
          </section>
        </main>
      </div>
      <div className="footer_logement">
      <Footer />
      </div>
    </>
  )
}

export default Housing