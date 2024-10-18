import './style.css';

function CardEvento({ nomeEvento, data, local, hora, descricao, imageUrl}) {
    return (
        <div className='card-evento'>
            <div className='info-evento'>
                <div className="event-details">
                    <h3>{nomeEvento}</h3>
                    <p id='event-description'><strong>Descrição:</strong> {descricao}</p>
                    <p><strong>Data:</strong> {data}</p>
                    <p><strong>Local:</strong> {local}</p>
                    <p><strong>Hora:</strong> {hora}</p>
                </div>

                <div>
                    <a type="button" className="btn btn-primary">Inscreva-se aqui</a>

                </div>

            </div>
            <div className='imagem-evento'>
                <div className="circleImg">
                    <img src={imageUrl}></img>
                </div>
            </div>
        </div>
    );
}

export default CardEvento;