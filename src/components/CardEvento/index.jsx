import './style.css';

function CardEvento(props) {
    return (
        <div className='card-evento'>
            <div className='info-evento'>
                <div className="event-details">
                    <h3>{props.nomeEvento}</h3>
                    <p>Descrição: {props.descricao}</p>
                    <p>Data: {props.data}</p>
                    <p>Local: {props.local}</p>
                    <p>Hora: {props.hora}</p>
                </div>

                <div>
                    <a type="button" className="btn btn-primary">Inscreva-se aqui</a>

                </div>

            </div>
            <div className='imagem-evento'>
                <div className="circleImg">
                    <img src={props.imageUrl}></img>
                </div>
            </div>
        </div>
    );
}

export default CardEvento;