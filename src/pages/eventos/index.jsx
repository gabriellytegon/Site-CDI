import Header from "../../components/Header";
import "./style.css";
import CardEvento from "../../components/CardEvento";
import pinguim from "../../assets/images/Pinguim.jpeg";
import CardCarousel from "../../components/CardCarousel";
import Footer from "../../components/Footer";

const Eventos = () => {
  const photos = [
    "../../../assets/images/eventos/imagem_2024-06-19_191234553.png",
    "src/assets/images/eventos/IMG-20240523-WA0037.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0035.jpg",
    "src/assets/images/eventos/IMG-20240425-WA0075.jpg",
    "src/assets/images/eventos/Screenshot_2024-06-19-19-21-18-291_com.instagram.android-edit.jpg",
    "src/assets/images/eventos/IMG-20240619-WA0051.jpg",
    "src/assets/images/eventos/IMG-20231130-WA0077(1).jpg",
    "src/assets/images/eventos/IMG-20231005-WA00181.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0047.jpg",
    "src/assets/images/eventos/IMG-20230615-WA0156.jpg",
    "src/assets/images/eventos/IMG-20240615-WA0005.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0032.jpg",
    "src/assets/images/eventos/IMG-20231130-WA0071.jpg",
    "src/assets/images/eventos/IMG-20230629-WA0004.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0027.jpg",
    "src/assets/images/eventos/IMG-20230615-WA0161.jpg",
    "src/assets/images/eventos/Screenshot_2024-06-19-19-20-47-544_com.instagram.android-edit.jpg",
    "src/assets/images/eventos/IMG-20231130-WA0073.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0038.jpg",
    "src/assets/images/eventos/IMG-20230816-WA0057.jpg",
    "src/assets/images/eventos/IMG-20240426-WA0073.jpg",
    "src/assets/images/eventos/IMG-20230927-WA0123.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0044.jpg",
    "src/assets/images/eventos/IMG-20230615-WA0155.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0028.jpg",
    "src/assets/images/eventos/IMG-20231130-WA00721.jpg",
    "src/assets/images/eventos/IMG-20240502-WA00901.jpg",
    "src/assets/images/eventos/IMG-20231130-WA0074.jpg",
    "src/assets/images/eventos/IMG-20230816-WA0053.jpg",
    "src/assets/images/eventos/IMG-20230615-WA0152.jpg",
    "src/assets/images/eventos/IMG-20231007-WA0002.jpg",
    "src/assets/images/eventos/IMG-20240618-WA0065.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0048.jpg",
    "src/assets/images/eventos/IMG-20231110-WA0021.jpg",
    "src/assets/images/eventos/IMG-20230816-WA0050.jpg",
  ];

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
        <div className="row justify-content-center">
          <div className="col-10 pt-5 pb-5 eventContent">
            <h2 className="tittle text-center titles-h2">Mural de Eventos</h2>
            <p className="text-center">
              Acompanhe o nosso mural para ficar por dentro dos próximos eventos
              que ocorrerão:
            </p>
            <div className="aling-card flex gap-3">
              <CardEvento
                width="820px"
                height="220px"
                title="Evento 1"
                data="01/01/2021"
                hora="19:00"
                descricao="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              ></CardEvento>

              <CardEvento
                width="820px"
                height="220px"
                title="Evento 1"
                data="01/01/2021"
                hora="19:00"
                descricao="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              ></CardEvento>

              <CardEvento
                width="820px"
                height="220px"
                title="Evento 1"
                data="01/01/2021"
                hora="19:00"
                descricao="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              ></CardEvento>

              <CardEvento
                width="820px"
                height="220px"
                title="Evento 1"
                data="01/01/2021"
                hora="19:00"
                descricao="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              ></CardEvento>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Eventos;
