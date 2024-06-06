import './style.css';

function CardEvento(props) {
    const cardStyle = {
        width: props.width || "400px",
        height: props.height || "80px",
        backgroundColor: "#ffffff",
        borderRadius: "0px 0px 7px 7px",
        border: "2px solid #8e8ffe",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "none",
        padding: "0 40px 10px 40px",
    };

    const title = {
        backgroundColor: "#ffffff",
        width: props.width || "400px",
        border: "2px solid #8e8ffe",
        paddingTop: "10px",
        borderBottom: "none",
        borderRadius: "7px 7px 0px 0px",
        display: "flex",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "20px"
    }

    return (
        <section>
            <div style={title}>{props.title}</div>
            <div style={cardStyle}>

                <div className="textBody">
                    <div>Data: {props.data}</div>
                    <div>Hora: {props.hora}</div>
                    <div>Link para inscrição: {props.link}</div>
                </div>
                <div className="circleImg">
                    <img src={props.imageUrl}></img>
                </div>
            </div>
        </section>
    );
}

export default CardEvento;