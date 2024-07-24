import './style.css';

function CardEvento(props) {
    return (
        <section>
            <div className='card-evento'>
                <div className='col-8 d-flex flex-column justify-content-evenly'>

                    <div className='title'>Nome do Evento <div className='subTitle'>Descrição: <span>{props.descricao}</span></div></div>

                    <div className="textBody">
                        <div className='subTitle'>Data: <span>{props.data}</span></div>
                        <div className='subTitle'>Hora: <span>{props.hora}</span></div>
                        <div className='subTitle mb-3'>Local: <span>{props.link}</span></div>
                        <button type="button" class="btn btn-primary">Inscreva-se aqui</button>
                    </div>

                </div>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <div className="circleImg">
                        <img src={props.imageUrl}></img>
                    </div>
                </div>
            </div>


            {/* <div style={title}>{props.title}</div>
            <div style={cardStyle}>

                <div className="textBody">
                    <div>Data: {props.data}</div>
                    <div>Hora: {props.hora}</div>
                    <div>Link para inscrição: {props.link}</div>
                </div>
                <div className="circleImg">
                    <img src={props.imageUrl}></img>
                </div>
            </div> */}
        </section>
    );
}

export default CardEvento;