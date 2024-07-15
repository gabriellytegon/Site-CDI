import Header from "../../components/Header";
import "./style.css";
import CardEvento from "../../components/CardEvento";
import Carrocel from "../../components/CardCarousel";
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
                    <div className="col-8 pt-3">
                        <h2 className="title text-center mb-3">Eventos já realizados</h2>
                        <p>A CDI é campeã em proporcionar experiências ÚNICAS e TRANSFORMADORAS. Acreditamos no poder da vivência a cima de tudo e por isso sempre nos preocupamos em preparar atividades imersivas aos alunos.</p>
                        <div className="d-flex mt-5">
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="container-fluid mb-5">
                <div className="row justify-content-center">
                    <div className="col-6 pt-3 eventContent">
                        <h2 className="title text-center">Mural de Eventos</h2>
                        <p className="text-center">Acompanhe o nosso mural para ficar por dentro dos próximos eventos que ocorrerão:</p>
                        <div className="aling-card">
                            <CardEvento
                                width="420px"
                                height="90px"
                                title="Evento 1"
                                date="01/01/2021"
                                description="Descrição do evento 1">
                            </CardEvento>

                            <CardEvento
                                width="420px"
                                height="90px"
                                title="Evento 1"
                                date="01/01/2021"
                                description="Descrição do evento 1">
                            </CardEvento>

                            <CardEvento
                                width="420px"
                                height="90px"
                                title="Evento 1"
                                date="01/01/2021"
                                description="Descrição do evento 1">
                            </CardEvento>

                            <CardEvento
                                width="420px"
                                height="90px"
                                title="Evento 1"
                                date="01/01/2021"
                                description="Descrição do evento 1">
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