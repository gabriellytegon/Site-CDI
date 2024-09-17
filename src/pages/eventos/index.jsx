import Header from "../../components/Header";
import "./style.css";
import CardEvento from "../../components/CardEvento";
import pinguim from '../../assets/images/Pinguim.jpeg'
import CardCarousel from "../../components/CardCarousel";
import Footer from "../../components/Footer";


const Eventos = () => {
    const photos = [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
    ];

    return (
        <>
            <Header title="Eventos" content="Fique por dentro dos principais eventos da FT!" />

            <div className="container-fluid mb-5 mt-5">
                <div className="row justify-content-center">
                    <div className="pt-3 w-100">
                        <h2 className="tittle text-center mb-3 titles-h2">Eventos já realizados</h2>
                        <p>A CDI é campeã em proporcionar experiências ÚNICAS e TRANSFORMADORAS. Acreditamos no poder da vivência a cima de tudo e por isso sempre nos preocupamos em preparar atividades imersivas aos alunos.</p>
                        <div id="carousel-eventos">
                            <CardCarousel photos={photos}></CardCarousel>
                        </div>
                    </div>

                </div>
            </div>



            <div className="container-fluid mb-5">
                <div className="row justify-content-center">
                    <div className="col-9">
                        <div className="d-flex justify-content-end">
                            <img src={pinguim} width={"200"}></img>
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-10 pt-3 eventContent">
                        <h2 className="tittle text-center titles-h2">Mural de Eventos</h2>
                        <p className="text-center">Acompanhe o nosso mural para ficar por dentro dos próximos eventos que ocorrerão:</p>
                        <div className="aling-card">
                            <CardEvento
                                width="820px"
                                height="220px"
                                title="Evento 1"
                                data="01/01/2021"
                                hora="19:00"
                                descricao="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">
                            </CardEvento>

                            <CardEvento
                                width="820px"
                                height="220px"
                                title="Evento 1"
                                data="01/01/2021"
                                hora="19:00"
                                descricao="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">
                            </CardEvento>

                            <CardEvento
                                width="820px"
                                height="220px"
                                title="Evento 1"
                                data="01/01/2021"
                                hora="19:00"
                                descricao="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">
                            </CardEvento>

                            <CardEvento
                                width="820px"
                                height="220px"
                                title="Evento 1"
                                data="01/01/2021"
                                hora="19:00"
                                descricao="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">
                            </CardEvento>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Eventos;