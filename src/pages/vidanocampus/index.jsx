import Header from "../../components/Header";
import Button from "../../components/Button";
import penguin from '../../assets/images/Pinguim.jpeg'
import './style.css'
import './media.css'

const VidaNoCampus = () => {
    return (
        <>
            <Header
                title="Vida no campus"
                content="Se você quer saber como é a vida de um Unicamper chegou na página certa!"
            />

            <div id="bandeco">
                <div className="title">
                    <h1>Bandeco</h1>
                    <h2>Vulgo bandejão</h2>
                </div>
                <div className="content">
                    <div className="horarios">
                        <img src={penguin} alt="imagem de penguim acenando" id="penguin"/>
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
                    <Button 
                        buttonText={"Clique para acessar o cardápio do dia"}
                        fontSize={14}
                        link={"https://www.prefeituralimeira.unicamp.br/restaurante-universitario/"}
                        option={1}
                        width={400}
                    />
                </div>
            </div>

            <div id="intercampi">
                <article>
                    <h1>Intercamp</h1>

                    <p className="w-75">
                        O ônibus intercamp é um transporte gratuito cedido pela UNICAMP que
                         possibilita que a comunidade da UNICAMP em Limeira (FT, FCA e Cotil) 
                        tenha acesso às atividades que ocorrem no campus de Barão Geraldo.
                    </p>

                    <Button
                        buttonText={"Clique para consultar horários"}
                        width={400}
                        fontSize={14}
                        link={'#'}
                        option={0}
                    />
                    <Button
                        buttonText={"Clique para fazer a reserva"}
                        width={400}
                        fontSize={14}
                        link={'https://sistemas.ft.unicamp.br/intercamp/'}
                        option={0}
                    />
                </article>
                <aside>
                    <img src="src\assets\images\bus.svg" alt="imagem ônibus" />
                </aside>
            </div>

            <div id="more">
                <div className="title">
                    <h2 className="fw-bold text-center h-25">Conheça mais sobre o campus da FT:</h2>
                </div>
                <div className="content">
                    <div className="video-container">
                        <video src=""></video>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VidaNoCampus;