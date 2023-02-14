import '../Banner/Banner.css'
import image from '../../assets/image_a_propos_banner.png'

function BannerAPropos() {
    return <aside>
        <img src= {image} className='banner_img banner_a_propos' alt='image_banner'></img>
    </aside>
}

export default BannerAPropos