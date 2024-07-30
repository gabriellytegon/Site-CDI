import './style.css'
import Header from '../../components/Header';

const GuiaParaIngressantes = () => {
    return (
        <>
            <Header 
                title='Guia para ingressantes' 
                content='Chegou no campus e se sentiu perdido? A CDI te ajuda!'
            />
            <div className="mapadocampus">
                <div className="title">
                    <h2>Mapa do campus</h2>
                </div>
                <div className="content">
                    <img src="" alt="" id='mapa'/>
                </div>
            </div>
        </>
    )
}

export default GuiaParaIngressantes;