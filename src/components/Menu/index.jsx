import './style.css'
import './media.css'
import { Link } from 'react-router-dom'
import logoCDI from '../../assets/icons/logoCDI.svg'

/*
    Este é o componente Menu, por padrão ele utilizará a opção para home page.
    Que é recomendada pelo maior espaçamento da navbar,
    enquanto a opção "no" tem um margin top menor, recomendado para as outras páginas,
    sem ser a home.
*/

// eslint-disable-next-line react/prop-types
const Menu = ({forHome='yes'}) => {
    return (
        <>
        <div className="menuMenu">
            <div className="menuHeader">
            <div className={forHome == 'yes' ? 'logoArea': 'genericLogoArea'}>
                <div className="logoImage">
                <img
                    src={logoCDI}
                    alt="Logotipo da Comissão Discente de Informática"
                    id='logoCDI'
                />
                </div>
            </div>
            <div className={forHome == 'yes' ? 'navigationHome' : forHome == 'no' ? 'navigationGeneric': ''}>
                <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Sobre nós</Link>
                    </li>
                    <li>
                        <Link to={'/eventos'}>Eventos</Link>
                    </li>
                    <li>
                        <Link to={'/professores'}>Professores</Link>
                    </li>
                    <li>
                    <a href="#">Guia para ingressantes</a>
                    </li>
                    <li>
                        <Link to={'/vidanocampus'}>Vida no campus</Link>
                    </li>
                    <li>
                    <a href="#">Contato</a>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        </>
    )
}

export default Menu;