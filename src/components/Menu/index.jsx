import './style.css'
import './media.css'
import { Link } from 'react-router-dom'
import logoCDI from '/assets/icons/logoCDI.svg'
import menuIcon from '/assets/icons/menuIcon.svg'
import { useEffect, useState } from 'react'

/*
    Este é o componente Menu, por padrão ele utilizará a opção para home page.
    Que é recomendada pelo maior espaçamento da navbar,
    enquanto a opção "no" tem um margin top menor, recomendado para as outras páginas,
    sem ser a home.
*/

// eslint-disable-next-line react/prop-types
const Menu = ({forHome='yes'}) => {

    const [windowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(windowWidth < 1000 ? false : true);

    // eslint-disable-next-line no-unused-vars
    const [pageName, _] = useState(document.URL)
    const [pageIndicator, setPageIndicator] = useState({
        sobrenos: '',
        eventos: '',
        professores: '',
        guiaparaingressantes: '',
        vidanocampus: ''
    })

    useEffect(() => {
        let page = pageName.split('/')
        page = page[page.length - 1]
        switch (page) {
            case "":
                setPageIndicator({
                    eventos: "",
                    vidanocampus: "",
                    guiaparaingressantes: "",
                    professores: "",
                    sobrenos: "index"
                })
                break
                
            case "eventos":
                setPageIndicator({
                    eventos: "index",
                    vidanocampus: "",
                    guiaparaingressantes: "",
                    professores: "",
                    sobrenos: ""
                })
                break

            case "professores":
                setPageIndicator({
                    eventos: "",
                    vidanocampus: "",
                    guiaparaingressantes: "",
                    professores: "index",
                    sobrenos: ""
                })
                break

            case "guiaparaingressantes":
                setPageIndicator({
                    eventos: "",
                    vidanocampus: "",
                    guiaparaingressantes: "index",
                    professores: "",
                    sobrenos: ""
                })
                break

            case "vidanocampus":
                setPageIndicator({
                    eventos: "",
                    vidanocampus: "index",
                    guiaparaingressantes: "",
                    professores: "",
                    sobrenos: ""
                })
                break
        }
    }, [pageName])


    function openNavigation() {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    document.addEventListener('scroll', () => {
        if (windowWidth < 1000) {
            setIsOpen(false);
        }
    })

    // document.addEventListener('click', (e) => {
    //     if (e.target != list) {
    //         // setIsOpen(false)
    //     }
    // })
    
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
                    <div className={"menuIcon"} onClick={openNavigation}>
                        <img src={menuIcon} id='menuIcon'/>
                    </div>
                    <nav style={{display: isOpen ? 'block' : 'none'}} id='navbar'>
                        <ul>
                            <li>
                                <Link to={'/'}><div className={`${pageIndicator.sobrenos}`}>Sobre nós</div></Link>
                            </li>
                            <li>
                                <Link to={'/eventos'}><div className={`${pageIndicator.eventos}`}>Eventos</div></Link>
                            </li>
                            <li>
                                <Link to={'/professores'}><div className={`${pageIndicator.professores}`}>Professores</div></Link>
                            </li>
                            <li>
                                <Link to={'/guiaparaingressantes'}><div className={`${pageIndicator.guiaparaingressantes}`}>Guia para ingressantes</div></Link>
                            </li>
                            <li>
                                <Link to={'/vidanocampus'}><div className={`${pageIndicator.vidanocampus}`}>Vida no campus</div></Link>
                            </li>
                            <li>
                                <a href="#footer">Contato</a>
                            </li>
                        </ul>
                    </nav>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,117.3C672,117,768,171,864,202.7C960,235,1056,245,1152,218.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu;