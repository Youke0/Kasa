import "./Hero.css"

function Hero({ host }) {
  return (
    <div className="hero">
      <p className="host_name">{host.name}</p>
      <img className="hero_picture" src={host.picture} alt="user profile" />
    </div>
  )
}

export default Hero
