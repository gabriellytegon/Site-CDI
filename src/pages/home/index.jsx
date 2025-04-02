import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCarousel from "../../components/CardCarousel";
import Button from "../../components/Button";
import AvatarHome from "../../components/AvatarHome";
import Footer from "../../components/Footer";
import imagemBSI from "/assets/images/imagemBSI.png";
import imagemTADS from "/assets/images/imagemTADS.png";
import checkIcon from "/assets/icons/checkIcon.svg";
import "./style.css";
import "./media.css";

const Home = () => {
  const imagensCarrossel = [
    "/assets/images/carrossel/IMG_8359.jpg",
    "/assets/images/carrossel/IMG_8370.jpg",
    "/assets/images/carrossel/IMG_0680.jpg",
    "/assets/images/carrossel/IMG_8322.jpg",
    "/assets/images/carrossel/PHOTO-2024-08-15-19-43-13 3.jpg",
    "/assets/images/carrossel/PHOTO-2024-08-15-19-43-12.jpg",
    "/assets/images/carrossel/PHOTO-2024-08-15-19-43-19.jpg",
    "/assets/images/carrossel/PHOTO-2024-08-15-19-43-22 3.jpg",
    "/assets/images/carrossel/imagem_2024-06-19_191234553.png",
    "/assets/images/carrossel/IMG-20230615-WA0152.jpg",
    "/assets/images/carrossel/IMG-20230615-WA0155.jpg",
    "/assets/images/carrossel/IMG-20230615-WA0161.jpg",
    "/assets/images/carrossel/IMG-20230629-WA0004.jpg",
    "/assets/images/carrossel/IMG-20230816-WA0053.jpg",
    "/assets/images/carrossel/IMG-20230927-WA0123.jpg",
    "/assets/images/carrossel/IMG-20231005-WA00181.jpg",
    "/assets/images/carrossel/IMG-20231110-WA0047.jpg",
    "/assets/images/carrossel/IMG-20231130-WA0071.jpg",
    "/assets/images/carrossel/IMG-20231130-WA00721.jpg",
    "/assets/images/carrossel/IMG-20231130-WA0073.jpg",
    "/assets/images/carrossel/IMG-20231130-WA0074.jpg",
    "/assets/images/carrossel/IMG-20231130-WA00781.jpg",
    "/assets/images/carrossel/IMG-20240425-WA0075.jpg",
    "/assets/images/carrossel/IMG-20240426-WA0073.jpg",
    "/assets/images/carrossel/IMG-20240523-WA0037.jpg",
    "/assets/images/carrossel/IMG-20240618-WA0065.jpg",
    "/assets/images/carrossel/IMG-20240619-WA0051.jpg",
    "/assets/images/carrossel/Screenshot_2024-06-19-19-20-47-544_com.instagram.android-edit.jpg",
    ];

const members = [
    {
      area: "Presidência",
      members: [
        {
          nome: "Duda Gomes",
          avatarUrl: "/assets/images/membros/presidencia/duda.jpeg",
        },
        {
          nome: "Filé",
          avatarUrl: "/assets/images/membros/presidencia/file.jpg",
        },
      ],
    },
    {
      area: "Assuntos Acadêmicos",
      members: [
        {
          nome: "Phillipi Poloni",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/salsixa.jpg",
        },
        {
          nome: "Moskitao",
          avatarUrl: "/assets/images/membros/assuntos_academicos/moskitao.jpeg",
        },
        {
          nome: "Sean Torres",
          avatarUrl:
            "/assets/images/membros/assuntos_academicos/sean.jpeg",
        },
      ],
    },
    {
      area: "Eventos",
      members: [
        {
          nome: "Leonardo Bonfá",
          avatarUrl: "/assets/images/membros/eventos/leo.jpg",
        },
        {
          nome: "Lucas de Oliveira",
          avatarUrl:
            "/assets/images/membros/eventos/lucas.png",
        },
        {
          nome: "Gabriel Sorensen",
          avatarUrl:
            "/assets/images/membros/eventos/gabriel.jpeg",
        },
        {
          nome: "João Pedro Calsavara",
          avatarUrl:
            "/assets/images/membros/eventos/joao.jpeg",
        },
      ],
    },
    {
      area: "Finanças",
      members: [
        {
          nome: "Marcos",
          avatarUrl: "/assets/images/membros/financas/Marcos.jpg",
        },
        {
          nome: "Beatriz Galvao",
          avatarUrl: "/assets/images/membros/financas/beatriz.jpeg",
        },
        {
          nome: "Nathália",
          avatarUrl: "/assets/images/membros/financas/nathalia.png",
        },
      ],
    },
    {
      area: "Recursos Humanos",
      members: [
        {
          nome: "Laura",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/laura.jpg",
        },
        {
          nome: "Daniel Rosell",
          avatarUrl: "/assets/images/membros/recursos_humanos/daniel.jpg",
        },
        {
          nome: "Samuel Rodrigues",
          avatarUrl:
            "/assets/images/membros/recursos_humanos/samuel.png",
        },
      ],
    },
    {
      area: "Marketing",
      members: [
        {
          nome: "Lucas Mota",
          avatarUrl: "/assets/images/membros/marketing/baianinho.jpg",
        },
        {
          nome: "Bruno Corrêa",
          avatarUrl:
            "/assets/images/membros/marketing/bruno.jpg",
        },
        {
          nome: "Gabriel Romualdo",
          avatarUrl:
            "/assets/images/membros/marketing/gabriel.jpg",
        },
        {
          nome: "Marcelo dos Santos",
          avatarUrl:
            "/assets/images/membros/marketing/marcelo.png",
        },
      ],
    },
    {
      area: "Projetos",
      members: [
        {
          nome: "Raissa",
          avatarUrl: "/assets/images/membros/projetos/raissa.png",
        },
        {
          nome: "Guilherme Ramalho",
          avatarUrl: "/assets/images/membros/projetos/guilherme.jpeg"
        },
        {
          nome: "Davie Schimidt",
          avatarUrl: "/assets/images/membros/projetos/davie.png",
        },
      ],
    },
  ];

  return (
    <>
      <Header></Header>
      <div id="cdi">
        <h1 className="titles-h2">O que é a CDI?</h1>
        <p>
          Além de ser um canal oficial de comunicação entre os alunos e os
          docentes, organizamos uma série de eventos como: cursos, palestras e
          visitas técnicas em parceria com a comunidade e com empresas tech.
          <br></br>
          Nós trabalhamos para que sua jornada na Universidade seja aproveitada
          da melhor forma possível! Conte com a CDI durante seu ano letivo para
          tirar dúvidas e sugerir ideias.
        </p>
        <div id="conceitos">
          <div className="conceito">
            <h2>Missão</h2>
            <p>
              Apoiamos a comunidade de T.I. da FT e desenvolvemos os membros da
              comissão para que suas jornadas acadêmicas sejam as mais
              enriquecedoras.
            </p>
          </div>
          <div className="conceito">
            <h2>Visão</h2>
            <p>
              Até 2026, pretendemos aumentar em 50% nosso impacto na comunidade
              de T.I.
            </p>
          </div>
          <div className="conceito">
            <h2>Valores</h2>
            <p id="lista-valores">
              <span>
                <img src={checkIcon} alt="icone de check" /> Comprometimento
              </span>
              <span>
                <img src={checkIcon} alt="icone de check" /> Empatia
              </span>
              <span>
                <img src={checkIcon} alt="icone de check" /> Transparência
              </span>
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
              <p>
                O curso de S.I possui um papel fundamental em um mundo que
                viabiliza a rapidez da informação pois a compreensão dos
                sistemas informacionais é de extrema importância. O profissional
                qualificado pela área desenvolve duas principais habilidades:
                projetar e implantar os sistemas que integram o mundo digital.
              </p>
              <div className="detalhes-curso">
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Período: Integral
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Carga horária
                  estimada: 3.060 horas
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Integralização:
                  08 semestres
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Vagas: 45
                </p>
              </div>
            </div>
            <div className="botao">
              <Button
                buttonText={"Acesse o currículo pleno"}
                width={200}
                fontSize={14}
                link={
                  "https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/94g/curriculo.html"
                }
                option={1}
              />
            </div>
          </div>
        </div>

        <div id="tads">
          <div className="conteudo-curso">
            <div className="curso_texto">
              <h2>Tecnologia em Análise e Desenvolvimento de Sistemas</h2>
              <p>
                O curso de T.A.D.S, têm como intuito formar profissionais com
                uma base sólida, de modo ao qual seja prático aplicar os
                conhecimentos teóricos na intensa vivência prática que o mundo
                da tecnologia proporciona.
              </p>
              <div className="detalhes-curso">
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Período: Noturno
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Carga horária
                  estimada: 2.430 horas
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Integralização:
                  07 semestres
                </p>
                <p className="item">
                  <img src={checkIcon} alt="icone de check" /> Vagas: 45
                </p>
              </div>
            </div>
            <div className="botao">
              <Button
                buttonText={"Acesse o currículo pleno"}
                width={200}
                fontSize={14}
                link={
                  "https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2024/cursos/36t/curriculo.html"
                }
                option={1}
              />
            </div>
          </div>
          <img src={imagemTADS} alt="imagem TADS" className="imagem-curso" />
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
                      <AvatarHome
                        src={member.avatarUrl}
                        alt={"Membro da CDI " + member.nome}
                        nome={member.nome}
                      ></AvatarHome>
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
  );
};

export default Home;
