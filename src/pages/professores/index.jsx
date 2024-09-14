import "./style.css"
import Header from "../../components/Header";
import CardProfessores from "../../components/CardProfessores";
import Footer from "../../components/Footer"

const Professores = () => {
    return(
        <>
            <Header title="Professores" content="Os melhores professores de tecnologia do Brasil estão aqui na FT-Unicamp"></Header>

            <div className="textoProfessores">
                <h2 className="titles-h2">Nossos professores de tecnologia</h2>
                <p>Aqui você vai conhecer os professores da Faculdade de Tecnologia da Unicamp. Temos os melhores professores do Brasil, com as melhores qualificações e uma excelente base de conhecimento, podendo contar com seus diplomas internacionais como mestrados, doutorados e pós-graduações.</p>
            </div>

            <CardProfessores nome="Ana Estela Antunes Da Silva" pesquisa="Aprendizado de máquina, mineração de dados textuais e sistemas inteligentes de tomada de decisão" lattes="http://lattes.cnpq.br/9070607576528017" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/ana_estela.JPG" alt="foto Prof. Ana Estela"></CardProfessores>

            <CardProfessores nome="André Franceschi De Angelis" pesquisa="" lattes="http://lattes.cnpq.br/8382118396658129" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/Salesiano_Foto_0.JPG" alt="Foto Prof. Angelis"></CardProfessores>

            <CardProfessores nome="André Leon Sampaio Gradvohl" pesquisa="" lattes="http://lattes.cnpq.br/9343261628675642" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/andre_leon_0.jpg" alt="Foto Prof. André"></CardProfessores>

            <CardProfessores nome="Antônio Carlos Zambon" pesquisa="" lattes="http://lattes.cnpq.br/6938680728798425" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/zambon_1.JPG" alt="Foto Prof. Zambom"></CardProfessores>

            <CardProfessores nome="Celmar Guimarães Da Silva" pesquisa="" lattes="http://lattes.cnpq.br/5243256763404267" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/celmar_0.jpg" alt="Foto Prof. Celmar"></CardProfessores>

            <CardProfessores nome="Gisele Busichia Baioco" pesquisa="" lattes="http://lattes.cnpq.br/0016546400683999" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/gisel_2.JPG" alt="Foto Prof. Gisele"></CardProfessores>

            <CardProfessores nome="Guilherme Palermo Coelho" pesquisa="Computação bio-inspirada, otimização (mono e multi-objetivo) e redes neurais artificiais, ensembles e agrupamento de dados" lattes="http://lattes.cnpq.br/0597865875425201" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/GuilhermePCoelho_quad.JPG" alt="Foto Prof. Guilherme"></CardProfessores>

            <CardProfessores nome="Ivan Luiz Marques Ricarte" pesquisa="" lattes="http://lattes.cnpq.br/4372943322993518" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/ivan_ricarte.JPG" alt="Foto Prof. Ivan"></CardProfessores>

            <CardProfessores nome="João Roberto Bertini Junior" pesquisa="" lattes="http://lattes.cnpq.br/1627235547325264" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/bertini.png" alt="Foto Prof. Bertini"></CardProfessores>

            <CardProfessores nome="Lívia Couto Ruback Rodrigues" pesquisa="Redes Complexas, Análise de Redes Sociais, Desinformação, Computação Social" lattes="http://lattes.cnpq.br/5717311679602180" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/foto_livia.png" alt="Foto Prof. Lívia"></CardProfessores>

            <CardProfessores nome="Luis Augusto Angelotti Meira" pesquisa="" lattes="http://lattes.cnpq.br/7266558656801036" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/FotoMeira.jpg" alt="Foto Prof. Luis"></CardProfessores>

            <CardProfessores nome="Luiz Camolesi Júnior" pesquisa="" lattes="http://lattes.cnpq.br/9002330620493052" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/camolesi_0.jpg" alt="Foto Prof. Luiz"></CardProfessores>

            <CardProfessores nome="Marcos Augusto Francisco Borges" pesquisa="" lattes="http://lattes.cnpq.br/8433486304141432" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/borges.jpg" alt="Foto Prof. Marcos"></CardProfessores>

            <CardProfessores nome="Marli De Freitas Gomes Hernandez" pesquisa="" lattes="http://lattes.cnpq.br/2014304463458284" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/marli.png" alt="Foto Prof. Marli"></CardProfessores>

            <CardProfessores nome="Nusrat Jahan Lisa" pesquisa="" lattes="https://lattes.cnpq.br/1412300855471191" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/NusratJahanLisa.jpg" alt="Foto Prof. Nusrat"></CardProfessores>

            <CardProfessores nome="Plínio Roberto Souza Vilela" pesquisa="Teste de Software, Engenharia de Software, Algoritmos para Roteamento de Veículos" lattes="http://lattes.cnpq.br/3674036702112123" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/photoPlinio.JPG" alt="Foto Prof. Plínio"></CardProfessores>

            <CardProfessores nome="Ulisses Martins Dias" pesquisa="" lattes="http://lattes.cnpq.br/4926594438458702" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/Ulises.JPG" alt="Foto Prof. Ulisses"></CardProfessores>

            <CardProfessores nome="Varese S. Timóteo" pesquisa="" lattes="http://lattes.cnpq.br/7138726557754661" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/varese.JPG" alt="Foto Prof. Varese"></CardProfessores>

            <CardProfessores nome="Vitor Rafael Coluci" pesquisa="" lattes="http://lattes.cnpq.br/5495322642019035" foto="https://www3.ft.unicamp.br/sites/default/files/fotosDocentes/victor.jpg" alt="Foto Prof. Coluci"></CardProfessores>

            <Footer></Footer>
        </>
    )
}

export default Professores;