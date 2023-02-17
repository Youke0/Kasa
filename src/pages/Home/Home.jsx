import './Home.css'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import data from '../../data/data'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'

function Home() {
    const logements = new data ().getLogement()
    return (
        <div>
                <Header /> 
                <Banner />
                <main className='logements'>
                    <ul>
                        {logements.map((logement) => 
                        <li key={logement.id}>
                            <Card logement={logement}/>
                        </li>
                        )}
                    </ul>
                </main>
                <div className=''>
                    <Footer />
                </div>
        </div>
    )
}

export default Home