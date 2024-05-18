import './style.css'
import './media.css'
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
        <div className="menu">
            <div className="header">
            <div className="logoArea">
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
                    <a href="#">Sobre nós</a>
                    </li>
                    <li>
                    <a href="#">Eventos</a>
                    </li>
                    <li>
                    <a href="#">Professores</a>
                    </li>
                    <li>
                    <a href="#">Guia para ingressantes</a>
                    </li>
                    <li>
                    <a href="#">Vida no campus</a>
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