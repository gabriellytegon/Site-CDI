import './style.css';
import logoInstagram from '/assets/images/logoInstagramCdi.svg';
import logoGmailCdi from '/assets/images/logoGmailCdi.svg';
import logolinkedinCdi from '/assets/images/logolinkedinCdi.svg';
import logoCDI from '/assets/images/logoCdi.svg';

const Footer = () => {
    return (
            <div id="footer">
                <img id="logoCdiFooter" src={logoCDI} alt="LogoCDI" />
                <div id="informations">
                    <h1>CONTATE-NOS</h1>
                    <div className="midia">
                        <a href="https://www.instagram.com/cdi.unicamp/?igshid=N2NkYzJhMW04Yg==" rel='noreferrer' target="_blank" className="midia-item">
                            <img src={logoInstagram} alt="Instagram" /> {/* Substitui o ícone pelo novo logo */}
                            <span>@cdi.unicamp</span>
                        </a>
                        <a href="mailto:comissao.informatica.ft@gmail.com" rel='noreferrer' target="_blank" className="midia-item">
                            <img src={logoGmailCdi} alt="Gmail CDI" />
                            <span>comissao.informatica.ft@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/cdi-ft-unicamp/" rel='noreferrer' target="_blank" className="midia-item">
                            <img src={logolinkedinCdi} alt="Linkedin CDI" />
                            <span>CDI-FT Unicamp</span>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Footer;
