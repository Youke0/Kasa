import { Link } from 'react-router-dom'
import './Error.css'
import Header from '../../components/Header/Header'


function Error() {
    return (
        <div>
            <Header />
            <main>
                <p className='text_404'>
                    404
                </p>
                <p className='message_error'>
                    Oups ! La page que vous demandez n'existe pas.
                </p>
                <div>
                    <Link to ='/' className='return_home'>Retourner sur la page d'accueil</Link>
                </div>
            </main>
        </div>
    )
}

export default Error