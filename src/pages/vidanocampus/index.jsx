import Header from "../../components/Header";
import Button from "../../components/Button";
import Cardapio from "../../components/Cardapio";
import penguin from '/assets/images/Pinguim.jpeg'
import './style.css'
import './media.css'
import Footer from "../../components/Footer";

const VidaNoCampus = () => {
    return (
        <>
            <Header
                title="Vida no campus"
                content="Se você quer saber como é a vida de um Unicamper chegou na página certa!"
            />

            <div id="bandeco">
                <div className="content">
                    <div className="horarios">
                        <h2 className="fw-bold titles-h2">Você não vai perder o bandeco né?!</h2>
                        <div className="bandeco-horarios">
                            <div className="bandeco-box cafe-da-manha">
                                <h3 className="fw-bold text-center">Café da manhã</h3>
                                <div>
                                    <p>Horário: <b>07:00 - 08:30</b></p>
                                    <p>Valor: <b>R$ 2,00</b></p>
                                </div>
                            </div>
                            <div className="bandeco-box almoco">
                                <h3 className="fw-bold text-center">Almoço</h3>
                                <div>
                                    <p>Horário: <b>11:00 - 14:00</b></p>
                                    <p>Valor: <b>R$ 3,00</b></p>
                                </div>
                            </div>
                            <div className="bandeco-box jantar">
                                <h3 className="fw-bold text-center">Jantar</h3>
                                <div>
                                    <p>Horário: <b>18:00 - 19:45</b></p>
                                    <p>Valor: <b>R$ 3,00</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardapio-container">
                    <Cardapio></Cardapio>
                </div>
            </div>


            <div id="intercampi">
                <img src={penguin} alt="imagem de penguim acenando" id="penguin"/>
                <article>
                    <div className="text-content">
                        <h1>Intercamp</h1>
                        <p>
                            O ônibus intercamp é um transporte gratuito cedido pela UNICAMP que
                             possibilita que a comunidade da UNICAMP em Limeira (FT, FCA e Cotil)
                            tenha acesso às atividades que ocorrem no campus de Barão Geraldo.
                        </p>
                    </div>

                    <div className="buttons">
                        <Button
                            buttonText={"Clique para mais informações"}
                            width={400}
                            fontSize={14}
                            link={'https://www3.ft.unicamp.br/pt-br/acessorapido/intercamp'}
                            option={1}
                        />
                        <Button
                            buttonText={"Clique para fazer a reserva"}
                            width={400}
                            fontSize={14}
                            link={'https://sistemas.ft.unicamp.br/intercamp/'}
                            option={1}
                        />
                    </div>
                </article>
            </div>

            <div id="more">
                <div className="title">
                    <h2 className="fw-bold text-center h-25 titles-h2">Conheça mais sobre o campus da FT:</h2>
                </div>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8pzCYwxIW8k?si=RiomZc4J1cgAPnmz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default VidaNoCampus;