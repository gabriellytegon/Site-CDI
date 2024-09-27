import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCarousel from "../../components/CardCarousel";
import Button from "../../components/Button";
import AvatarHome from "../../components/AvatarHome";
import Footer from "../../components/Footer";
import imagemBSI from '/assets/images/imagemBSI.png'
import imagemTADS from '/assets/images/imagemTADS.png'
import checkIcon from '/assets/icons/checkIcon.svg'
import './style.css'
import './media.css'

const Home = () => {
    const imagensCarrossel = [
        '/assets/images/carrossel/imagem_2024-06-19_191234553.png',
        '/assets/images/carrossel/IMG-20230615-WA0152.jpg',
        '/assets/images/carrossel/IMG-20230615-WA0155.jpg',
        '/assets/images/carrossel/IMG-20230615-WA0161.jpg',
        '/assets/images/carrossel/IMG-20230629-WA0004.jpg',
        '/assets/images/carrossel/IMG-20230816-WA0053.jpg',
        '/assets/images/carrossel/IMG-20230927-WA0123.jpg',
        '/assets/images/carrossel/IMG-20231005-WA00181.jpg',
        '/assets/images/carrossel/IMG-20231110-WA0021.jpg',
        '/assets/images/carrossel/IMG-20231110-WA0027.jpg',
        '/assets/images/carrossel/IMG-20231110-WA0032.jpg',
        '/assets/images/carrossel/IMG-20231110-WA0038.jpg',
        '/assets/images/carrossel/IMG-20231110-WA0044.jpg',
        '/assets/images/carrossel/IMG-20231110-WA0047.jpg',
        '/assets/images/carrossel/IMG-20231110-WA0048.jpg',
        '/assets/images/carrossel/IMG-20231130-WA0071.jpg',
        '/assets/images/carrossel/IMG-20231130-WA0073.jpg',
        '/assets/images/carrossel/IMG-20231130-WA0074.jpg',
        '/assets/images/carrossel/IMG-20231130-WA00721.jpg',
        '/assets/images/carrossel/IMG-20231130-WA00781.jpg',
        '/assets/images/carrossel/IMG-20240425-WA0075.jpg',
        '/assets/images/carrossel/IMG-20240426-WA0073.jpg',
        '/assets/images/carrossel/IMG-20240523-WA0037.jpg',
        '/assets/images/carrossel/IMG-20240615-WA0005.jpg',
        '/assets/images/carrossel/IMG-20240618-WA0065.jpg',
        '/assets/images/carrossel/IMG-20240619-WA0051.jpg',
        '/assets/images/carrossel/Screenshot_2024-06-19-19-20-47-544_com.instagram.android-edit.jpg'];
    
    const members = [
        {   
            area: "Presidência",
            members: [
                {nome: 'Rafael Henrique', avatarUrl: '/assets/images/membros/Alunos/Presidencia/Rafa - Presidência.png'},
                {nome: 'Matheus Andrade', avatarUrl: '/assets/images/membros/Alunos/Presidencia/Matheus.png'},
            ],
        },
        {
            area: "A.A.E.",
            members: [
                {nome: 'Abdu', avatarUrl: '/assets/images/membros/Alunos/Assuntos Acadêmicos/Abdu.jpg'},
                {nome: 'Lilia', avatarUrl: '/assets/images/membros/Alunos/Assuntos Acadêmicos/Lilia.jpg'},
                {nome: 'Moskitao', avatarUrl: '/assets/images/membros/Alunos/Assuntos Acadêmicos/Moskitao.jpeg'},
                {nome: 'Phillipi Poloni', avatarUrl: '/assets/images/membros/Alunos/Assuntos Acadêmicos/Phillipi Poloni.png'},
                {nome: 'Sean Torres', avatarUrl: '/assets/images/membros/Alunos/Assuntos Acadêmicos/Sean Torres dos Santos.jpeg'},
            ],
        },
        {
            area: "Admistrativo",
            members: [
                {nome: 'Brener Camargo', avatarUrl: '/assets/images/membros/Alunos/Administrativo/Brener Camargo - ADM.jpg'},
                {nome: 'Daniel', avatarUrl: '/assets/images/membros/Alunos/Administrativo/Daniel-ADM.png'},
                {nome: 'Gabriel Gato', avatarUrl: '/assets/images/membros/Alunos/Administrativo/Gabriel Gato-ADM.jpg'},
                {nome: 'Gino', avatarUrl: '/assets/images/membros/Alunos/Administrativo/Gino-ADM.png'},
                {nome: 'Karen', avatarUrl: '/assets/images/membros/Alunos/Administrativo/Karen-ADM.png'},
                {nome: 'Pedro', avatarUrl: '/assets/images/membros/Alunos/Administrativo/Pedro-ADM.png'},
                {nome: 'Samuel', avatarUrl: '/assets/images/membros/Alunos/Administrativo/Samuel-ADM.png'},
            ],
        },
        {
            area: "Eventos",
            members: [
                {nome: 'Giovana', avatarUrl: '/assets/images/membros/Alunos/Eventos/Giovana Ruiz de Souza.png'},
                {nome: 'Koga', avatarUrl: '/assets/images/membros/Alunos/Eventos/Koga.jpeg'},
                {nome: 'Leo Bonfa', avatarUrl: '/assets/images/membros/Alunos/Eventos/Leo Bonfa.jpg'},
                {nome: 'Lucas', avatarUrl: '/assets/images/membros/Alunos/Eventos/Lucas de Oliveira Lopes Cardoso.png'},
                {nome: 'Maria Eduarda', avatarUrl: '/assets/images/membros/Alunos/Eventos/Maria Eduarda Bertole Matos.png'},
                {nome: 'Privas', avatarUrl: '/assets/images/membros/Alunos/Eventos/Privas.jpg'},
            ],
        },
        {
            area: "Financeiro",
            members: [
                {nome: 'Vitor Alves', avatarUrl: '/assets/images/membros/Alunos/Finanças/Alves.jpeg'},
                {nome: 'Beatriz', avatarUrl: '/assets/images/membros/Alunos/Finanças/Beatriz Galvao.jpeg'},
                {nome: 'Carolina', avatarUrl: '/assets/images/membros/Alunos/Finanças/Carolina-Finanças.png'},
                {nome: 'Davie', avatarUrl: '/assets/images/membros/Alunos/Finanças/Davie-Finanças.png'},
                {nome: 'Marcos', avatarUrl: '/assets/images/membros/Alunos/Finanças/Marcos-Finanças.png'},
                {nome: 'Nathália', avatarUrl: '/assets/images/membros/Alunos/Finanças/Nathália-Finanças.png'},
                {nome: 'Tales', avatarUrl: '/assets/images/membros/Alunos/Finanças/Tales-Finanças.jpg'},
            ],
        },
        {
            area: "G.P.",
            members: [
                {nome: 'Duda', avatarUrl: '/assets/images/membros/Alunos/Gestão de Pessoas/Duda Gomes.jpeg'},
                {nome: 'Hans', avatarUrl: '/assets/images/membros/Alunos/Gestão de Pessoas/Hans.jpeg'},
                {nome: 'Laura', avatarUrl: '/assets/images/membros/Alunos/Gestão de Pessoas/Laura-Gestão-de-Pessoas.png'},
                {nome: 'Andrezza', avatarUrl: '/assets/images/membros/Alunos/Gestão de Pessoas/Andrezza-Gestão-de-Pessoas.png'},
            ],
        },
        {
            area: "Marketing",
            members: [
                {nome: 'Júlia', avatarUrl: '/assets/images/membros/Alunos/Marketing/Cópia de Julia Fernandes - marketing e comunicação.jpeg'},
                {nome: 'Bruno', avatarUrl: '/assets/images/membros/Alunos/Marketing/Bruno Ricardo Corrêa.png'},
                {nome: 'Arual', avatarUrl: '/assets/images/membros/Alunos/Marketing/Arual Gouveia Nunes de Sousa.png'},
                {nome: 'Ori Minohara', avatarUrl: '/assets/images/membros/Alunos/Marketing/Cópia de Ori Minohara - Marketing.png'},
                {nome: 'Gabriel', avatarUrl: '/assets/images/membros/Alunos/Marketing/Gabriel Silva Romualdo.png'},
                {nome: 'Gui Vaz', avatarUrl: '/assets/images/membros/Alunos/Marketing/Gui Vaz Alegrete.jpeg'},
                {nome: 'João Victor', avatarUrl: '/assets/images/membros/Alunos/Marketing/João Victor Targino Yokoyama.png'},
                {nome: 'Lucas Mota', avatarUrl: '/assets/images/membros/Alunos/Marketing/Lucas Mota.jpeg'},
                {nome: 'Marcelo', avatarUrl: '/assets/images/membros/Alunos/Marketing/Marcelo dos Santos da Boa Morte.png'},
                {nome: 'Rafael', avatarUrl: '/assets/images/membros/Alunos/Marketing/Rafael Guilherme.jpeg'},
                {nome: 'Yasmin', avatarUrl: '/assets/images/membros/Alunos/Marketing/Yasmim Daiana de Jesus Oliveira Silva.png'},
            ],
        },
        {
            area: "Projetos",
            members: [
                {nome: 'Gabrielly Tegon', avatarUrl: '/assets/images/membros/Alunos/Projetos/Gaby.jpeg'},
                {nome: 'Raissa', avatarUrl: '/assets/images/membros/Alunos/Projetos/Raissa-Projetos.png'},
                {nome: 'Higor Gabriel', avatarUrl: '/assets/images/membros/Alunos/Projetos/Higor Gabriel-Projetos.jpg'},
                {nome: 'Hitallo Azevedo', avatarUrl: '/assets/images/membros/Alunos/Projetos/Hitallo.jpeg'},
                {nome: 'Thyago', avatarUrl: '/assets/images/membros/Alunos/Projetos/Thyago-Projetos.JPG'},
                {nome: 'Nelson', avatarUrl: '/assets/images/membros/Alunos/Projetos/Nelson-Projetos.png'},
                {nome: 'Renan', avatarUrl: '/assets/images/membros/Alunos/Projetos/Renan Martins-Projetos.jpg'},
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