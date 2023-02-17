import './Banner.css'
import img from '../../assets/image_desktop_banner.png'

function Banner() {
    return <section className='banner'>
        <img src= {img} className='banner_img' alt='image_banner'></img>
        <h2>Chez vous, partout et ailleurs</h2>
    </section>
}

export default Banner