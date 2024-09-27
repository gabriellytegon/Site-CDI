import Menu from "../Menu";
import ricoImage from "/assets/images/PinguimHome.png";
import "./style.css";
import "./media.css"

/* 
  Este é o componente Header, ele vai no topo de cada página, se não passado nenhum parametro, por padrão ele renderizará 
  a home page. Se passado titulo e conteudo como parametros ele renderizará uma página genérica.
*/

// eslint-disable-next-line react/prop-types
const Header = ({ title = "", content = "" }) => {
  return (
    <>
        <div className={title == '' && content == '' ? 'homeBackground' : 'genericBackground'}>
          <Menu forHome={title == '' && content == '' ? 'yes' : 'no'}></Menu>
          <div className={title == '' && content == '' ? "homeContentArea" : "genericContentArea"}>
            <article>
              <div className={title == '' && content == '' ? "" : "hidden"}>
                <h3 className="fw-medium">Nós somos a</h3>
                <h2 className="fw-semibold">Comissão Discente de</h2>
                <h1 className="fw-bold">INFORMÁTICA</h1>
                <h3 className="fw-semibold">da Faculdade de Tecnologia da UNICAMP</h3>
              </div>
              <div className="header-content alignCenter">
                <h1 className="fw-bold">{title}</h1>
                <h2 className="fw-medium">{content}</h2>
              </div>
            </article>
            <aside className={title == '' && content == '' ? "" : "hidden"}>
              <img src={ricoImage} alt="imagem do pinguim rico" id="penguim"/>
            </aside>
          </div>
        </div>
    </>
  );
};

export default Header;
