import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCarousel from "../../components/CardCarousel";
import Button from "../../components/Button";
import AvatarHome from "../../components/AvatarHome";
import Footer from "../../components/Footer";
import imagemBSI from '../../assets/images/imagemBSI.png'
import imagemTADS from '../../assets/images/imagemTADS.png'
import checkIcon from '../../assets/icons/checkIcon.svg'
import './style.css'
import './media.css'

const Home = () => {
    const imagensCarrossel = [
        'src/assets/images/carrossel/imagem_2024-06-19_191234553.png',
        'src/assets/images/carrossel/IMG-20230615-WA0152.jpg',
        'src/assets/images/carrossel/IMG-20230615-WA0155.jpg',
        'src/assets/images/carrossel/IMG-20230615-WA0161.jpg',
        'src/assets/images/carrossel/IMG-20230629-WA0004.jpg',
        'src/assets/images/carrossel/IMG-20230816-WA0053.jpg',
        'src/assets/images/carrossel/IMG-20230927-WA0123.jpg',
        'src/assets/images/carrossel/IMG-20231005-WA00181.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0021.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0027.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0032.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0038.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0044.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0047.jpg',
        'src/assets/images/carrossel/IMG-20231110-WA0048.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA0071.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA0073.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA0074.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA00721.jpg',
        'src/assets/images/carrossel/IMG-20231130-WA00781.jpg',
        'src/assets/images/carrossel/IMG-20240425-WA0075.jpg',
        'src/assets/images/carrossel/IMG-20240426-WA0073.jpg',
        'src/assets/images/carrossel/IMG-20240523-WA0037.jpg',
        'src/assets/images/carrossel/IMG-20240615-WA0005.jpg',
        'src/assets/images/carrossel/IMG-20240618-WA0065.jpg',
        'src/assets/images/carrossel/IMG-20240619-WA0051.jpg',
        'src/assets/images/carrossel/Screenshot_2024-06-19-19-20-47-544_com.instagram.android-edit.jpg'];
    
    const members = [
        {   
            area: "Presidência",
            members: [
                {nome: 'Rafael Henrique', avatarUrl: 'src/assets/images/membros/Cópia de Rafael Henrique- Eventos e Relações Externas.jpg'},
                {nome: 'Matheus Andrade', avatarUrl: 'src/assets/images/membros/Cópia de Matheus Andrade - Eventos.jpg'},
            ],
        },
        {
            area: "A.A.E.",
            members: [
                {nome: 'Ana Carolina', avatarUrl: 'src/assets/images/membros/Cópia de Ana Carolina - Assuntos acadêmicos e estudantis.jpeg'},
            ],
        },
        {
            area: "Admistrativo",
            members: [
                {nome: 'Brener Camargo', avatarUrl: 'src/assets/images/membros/Cópia de Brener Camargo - Administrativo.jpeg'},
                {nome: 'Gabriel Gato', avatarUrl: 'src/assets/images/membros/Cópia de Gabriel Gato - Administrativo_Logística.jpg'},
            ],
        },
        {
            area: "Eventos",
            members: [
                {nome: 'Ana Clara', avatarUrl: 'src/assets/images/membros/Cópia de Ana Clara - Eventos.jpeg'},
            ],
        },
        {
            area: "Financeiro",
            members: [
                {nome: 'Carolina Quiterio', avatarUrl: 'src/assets/images/membros/Cópia de Carolina Quiterio - Gestão de Pessoas.HEIC'},
                {nome: 'Tales Dias', avatarUrl: 'src/assets/images/membros/Cópia de Tales Dias - Financeiro.jpeg'},
                {nome: 'Vitor Alves', avatarUrl: 'src/assets/images/membros/Cópia de Vitor Alves - Financeiro.heif'},
            ],
        },
        {
            area: "G.P.",
            members: [
                {nome: 'Emily', avatarUrl: 'src/assets/images/membros/Cópia de Emily - Projetos e Gestão de Pessoas.jpg'},
            ],
        },
        {
            area: "Marketing",
            members: [
                {nome: 'Julia Fernandes', avatarUrl: 'src/assets/images/membros/Cópia de Julia Fernandes - marketing e comunicação.jpeg'},
                {nome: 'Ori Minohara', avatarUrl: 'src/assets/images/membros/Cópia de Ori Minohara - Marketing.png'},
                {nome: 'Ricardo Kenzo Koga', avatarUrl: 'src/assets/images/membros/Cópia de Ricardo Kenzo Koga - Marketing.JPG'},
            ],
        },
        {
            area: "Projetos",
            members: [
                {nome: 'Gabrielly Tegon', avatarUrl: ''},
                {nome: 'Raissa', avatarUrl: ''},
                {nome: 'Higor Gabriel', avatarUrl: 'src/assets/images/membros/Cópia de Higor Gabriel - Administrativo_.jpg'},
                {nome: 'Hitallo Azevedo', avatarUrl: ''},
                {nome: 'Thiago', avatarUrl: ''},
                {nome: 'Nelson', avatarUrl: ''},
            ],
        },
    ]

    return (
        <>
            <Header></Header>
            <div id="cdi">
                <h1 className="titles-h2">O que é a CDI?</h1>
                <p>
                    Além de ser um canal oficial de comunicação entre os alunos e os docentes, organizamos uma série de eventos como: cursos, palestras e visitas técnicas em parceria com a comunidade e com empresas tech.
                    <br></br>
                    Nós trabalhamos para que sua jornada na Universidade seja aproveitada da melhor forma possível! Conte com a CDI durante seu ano letivo para tirar dúvidas e sugerir ideias.
                </p>
                <div id="conceitos">
                    <div className="conceito">
                        <h2>Missão</h2>
                        <p>
                            Apoiamos a comunidade de T.I. da FT e desenvolvemos os membros da comissão para que suas jornadas acadêmicas sejam as mais enriquecedoras.
                        </p>
                    </div>
                    <div className="conceito">
                        <h2>Visão</h2>
                        <p>
                            Até 2026, pretendemos aumentar em 50% nosso impacto na comunidade de T.I.
                        </p>
                    </div>
                    <div className="conceito">
                        <h2>Valores</h2>
                        <p id="lista-valores">
                            <span><img src={checkIcon} alt="icone de check" /> Comprometimento</span>
                            <span><img src={checkIcon} alt="icone de check" /> Empatia</span>
                            <span><img src={checkIcon} alt="icone de check" /> Transparência</span>
                        </p>
                    </div>
                </div>
                <div id="carousel">
                    <CardCarousel photos={imagensCarrossel}></CardCarousel>
                </div>
            </div>

            <div id="cursos">
                <h1 className="titles-h2">Cursos de tecnologia</h1>

                <div id="bsi">
                    <img src={imagemBSI} alt="imagem BSI" className="imagem-curso" />
                    <div className="conteudo-curso">
                        <div className="curso_texto">
                            <h2>Bacharelado em Sistemas de Informação</h2>
                            <p>O curso de S.I possui um papel fundamental em um mundo que viabiliza a rapidez da informação pois a compreensão dos sistemas informacionais é de extrema importância. O profissional qualificado pela área desenvolve duas principais habilidades: projetar e implantar os sistemas que integram o mundo digital.</p>
                            <div className="detalhes-curso">
                                <p className="item"><img src={checkIcon} alt="icone de check" /> Período: Integral</p>
                                <p className="item"><img src={checkIcon} alt="icone de check" /> Carga horária estimada: 3.060 horas</p>
                                <p className="item"><img src={checkIcon} alt="icone de check" /> Integralização: 08 semestres</p>
                                <p className="item"><img src={checkIcon} alt="icone de check" /> Vagas: 45</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Button
                                buttonText={"Acesse o currículo pleno"}
                                width={200}
                                fontSize={14}
                                link={'https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/94g/curriculo.html'}
                                option={1}
                            />
                        </div>
                    </div>
                </div>

                <div id="tads">
                    <div className="conteudo-curso">
                        <div className="curso_texto">
                            <h2>Tecnologia em Análise e Desenvolvimento de Sistemas</h2>
                            <p>O curso de T.A.D.S, têm como intuito formar profissionais com uma base sólida, de modo ao qual seja prático aplicar os conhecimentos teóricos na intensa vivência prática que o mundo da tecnologia proporciona.</p>
                            <div className="detalhes-curso">
                                <p className="item"><img src={checkIcon} alt="icone de check" /> Período: Noturno</p>
                                <p className="item"><img src={checkIcon} alt="icone de check" /> Carga horária estimada: 2.430 horas</p>
                                <p className="item"><img src={checkIcon} alt="icone de check" /> Integralização: 07 semestres</p>
                                <p className="item"><img src={checkIcon} alt="icone de check" /> Vagas: 45</p>
                            </div>
                        </div>
                        <div className="botao">
                            <Button
                                buttonText={"Acesse o currículo pleno"}
                                width={200}
                                fontSize={14}
                                link={'https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/36t/curriculo.html'}
                                option={1}
                            />
                        </div>
                    </div>
                    <img src={imagemTADS} alt="imagem TADS" className="imagem-curso"/>
                </div>
            </div>

            <div id="equipe">
                <h1 className="titles-h2">Conheça nossos membros!</h1>

                <div className="areas">

                    { 
                        // Renderiza cada área e seus membros
                        members.map((area) => (
                            <div className="area" key={area.area}>
                                <div className="area-title">
                                    <h2>{area.area}</h2>
                                </div>
                                <div className="area-members">
                                    {area.members.map((member) => (
                                        <div className="membro" key={member.nome}>
                                            <AvatarHome src={member.avatarUrl} alt={"Membro da CDI " + member.nome} nome={member.nome}></AvatarHome>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;