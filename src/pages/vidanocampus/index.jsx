import Header from "../../components/Header";
import Button from "../../components/Button";
import penguin from '../../assets/images/Pinguim.jpeg'
import checkIcon from '../../assets/icons/checkIcon.svg'
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
                        <h3 className="fw-semibold">Horários</h3>
                        <p><img src={checkIcon} alt="icone de check" /> Café da manhã: das 07h00 às 08h30</p>
                        <p><img src={checkIcon} alt="icone de check" /> Almoço: das 10h30 às 14h00</p>
                        <p><img src={checkIcon} alt="icone de check" /> Jantar: das 17h30 às 19h45</p>
                        <p className="valor-bandeco">Valor: R$3,00</p>
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