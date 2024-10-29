import Header from "../../components/Header";
import "./style.css";
import CardEvento from "../../components/CardEvento";
import pinguim from "/assets/images/Pinguim.jpeg";
import CardCarousel from "../../components/CardCarousel";
import Footer from "../../components/Footer";

const Eventos = () => {
  const photos = [
    "/assets/images/eventos/imagem_2024-06-19_191234553.png",
    "/assets/images/eventos/IMG-20240523-WA0037.jpg",
    "/assets/images/eventos/IMG-20231110-WA0035.jpg",
    "/assets/images/eventos/IMG-20240425-WA0075.jpg",
    "/assets/images/eventos/Screenshot_2024-06-19-19-21-18-291_com.instagram.android-edit.jpg",
    "/assets/images/eventos/IMG-20240619-WA0051.jpg",
    "/assets/images/eventos/IMG-20231130-WA0077(1).jpg",
    "/assets/images/eventos/IMG-20231005-WA00181.jpg",
    "/assets/images/eventos/IMG-20231110-WA0047.jpg",
    "/assets/images/eventos/IMG-20230615-WA0156.jpg",
    "/assets/images/eventos/IMG-20240615-WA0005.jpg",
    "/assets/images/eventos/IMG-20231110-WA0032.jpg",
    "/assets/images/eventos/IMG-20231130-WA0071.jpg",
    "/assets/images/eventos/IMG-20230629-WA0004.jpg",
    "/assets/images/eventos/IMG-20231110-WA0027.jpg",
    "/assets/images/eventos/IMG-20230615-WA0161.jpg",
    "/assets/images/eventos/Screenshot_2024-06-19-19-20-47-544_com.instagram.android-edit.jpg",
    "/assets/images/eventos/IMG-20231130-WA0073.jpg",
    "/assets/images/eventos/IMG-20231110-WA0038.jpg",
    "/assets/images/eventos/IMG-20230816-WA0057.jpg",
    "/assets/images/eventos/IMG-20240426-WA0073.jpg",
    "/assets/images/eventos/IMG-20230927-WA0123.jpg",
    "/assets/images/eventos/IMG-20231110-WA0044.jpg",
    "/assets/images/eventos/IMG-20230615-WA0155.jpg",
    "/assets/images/eventos/IMG-20231110-WA0028.jpg",
    "/assets/images/eventos/IMG-20231130-WA00721.jpg",
    "/assets/images/eventos/IMG-20240502-WA00901.jpg",
    "/assets/images/eventos/IMG-20231130-WA0074.jpg",
    "/assets/images/eventos/IMG-20230816-WA0053.jpg",
    "/assets/images/eventos/IMG-20230615-WA0152.jpg",
    "/assets/images/eventos/IMG-20231007-WA0002.jpg",
    "/assets/images/eventos/IMG-20240618-WA0065.jpg",
    "/assets/images/eventos/IMG-20231110-WA0048.jpg",
    "/assets/images/eventos/IMG-20231110-WA0021.jpg",
    "/assets/images/eventos/IMG-20230816-WA0050.jpg",
  ];

  const eventos = [
    // {
    //   id: 0,
    //   nomeEvento: "",
    //   data: "",
    //   hora: "",
    //   descricao: "",
    //   imageUrl: "",
    //   local: ""
    // },
    // {
    //   id: 1,
    //   nomeEvento: "",
    //   data: "",
    //   hora: "",
    //   descricao: "",
    //   imageUrl: "",
    //   local: ""
    // }
  ]

  return (
    <>
      <Header
        title="Eventos"
        content="Fique por dentro dos principais eventos da FT!"
      />

      <div className="container-eventos">
        <h2 className="tittle text-center mb-3 titles-h2">
          Eventos já realizados
        </h2>
        <p>
          A CDI é campeã em proporcionar experiências ÚNICAS e TRANSFORMADORAS.
          Acreditamos no poder da vivência a cima de tudo e por isso sempre nos
          preocupamos em preparar atividades imersivas aos alunos.
        </p>
        <div id="carousel-eventos">
          <CardCarousel photos={photos}></CardCarousel>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="pinguim-container d-flex justify-content-end">
              <img src={pinguim} width={"200"}></img>
            </div>
          </div>
        </div>
          <div className="eventContent">
            <h2 className="tittle text-center titles-h2">Mural de Eventos</h2>
            <p className="text-center">
              Acompanhe o nosso mural para ficar por dentro dos próximos eventos
              que ocorrerão:
            </p>
            <div className="event-cards">
              {(eventos.length > 0) ? eventos.map((evento) => (
                <CardEvento
                  nomeEvento={evento.nomeEvento}
                  data={evento.data}
                  hora={evento.hora}
                  imageUrl={evento.imageUrl}
                  descricao={evento.descricao}
                  local={evento.local}
                  key={evento.id}
                ></CardEvento>
              )) : <h2>Não há eventos no momento</h2>}
            </div>
          </div>
        </div>
      <Footer></Footer>
    </>
  );
};

export default Eventos;
