import "./style.css"
import Header from "../../components/Header";
import CardProfessores from "../../components/CardProfessores";
// import Footer from "../../components/Footer"

const Professores = () => {
    return(
        <>
            <Header title="Professores" content="Os melhores professores de tecnologia do Brasil estão aqui na FT-Unicamp"></Header>

            <div className="textoProfessores">
                <h2>Nossos professores de tecnologia</h2>
                <p>Aqui você vai conhecer os professores da Faculdade de Tecnologia da Unicamp. Temos os melhores professores do Brasil, com as melhores qualificações e uma excelente base de conhecimento, podendo contar com seus diplomas internacionais como mestrados, doutorados e pós-graduações.</p>
            </div>

            <CardProfessores nome="Ana Estela Antunes Da Silva" pesquisa="Aprendizado de máquina, mineração de dados textuais e sistemas inteligentes de tomada de decisão" lattes="http://lattes.cnpq.br/9070607576528017" prof="da professora" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/ana_estela.JPG" alt="foto ana estela"></CardProfessores>

            <CardProfessores nome="Ana Estela Antunes Da Silva" pesquisa="Aprendizado de máquina, mineração de dados textuais e sistemas inteligentes de tomada de decisão" lattes="http://lattes.cnpq.br/9070607576528017" prof="da professora" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/ana_estela.JPG" alt="foto ana estela"></CardProfessores>

            <CardProfessores nome="Ana Estela Antunes Da Silva" pesquisa="Aprendizado de máquina, mineração de dados textuais e sistemas inteligentes de tomada de decisão" lattes="http://lattes.cnpq.br/9070607576528017" prof="da professora" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/ana_estela.JPG" alt="foto ana estela"></CardProfessores>

            <CardProfessores nome="Ana Estela Antunes Da Silva" pesquisa="Aprendizado de máquina, mineração de dados textuais e sistemas inteligentes de tomada de decisão" lattes="http://lattes.cnpq.br/9070607576528017" prof="da professora" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/ana_estela.JPG" alt="foto ana estela"></CardProfessores>

            <CardProfessores nome="Ana Estela Antunes Da Silva" pesquisa="Aprendizado de máquina, mineração de dados textuais e sistemas inteligentes de tomada de decisão" lattes="http://lattes.cnpq.br/9070607576528017" prof="da professora" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/ana_estela.JPG" alt="foto ana estela"></CardProfessores>

            <CardProfessores nome="Ana Estela Antunes Da Silva" pesquisa="Aprendizado de máquina, mineração de dados textuais e sistemas inteligentes de tomada de decisão" lattes="http://lattes.cnpq.br/9070607576528017" prof="da professora" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/ana_estela.JPG" alt="foto ana estela"></CardProfessores>

            <br></br><br></br><br></br>
        </>
    )
}

export default Professores;