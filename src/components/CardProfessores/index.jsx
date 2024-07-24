import './style.css';
import AvatarProfessores from '../AvatarProfessores/index';

function CardProfessores({nome, pesquisa, lattes, prof, foto, alt}){
    return(
        <div className="cardProfessores">
            <AvatarProfessores src={foto} alt={alt}/>
            <div className="cardProfessores_txt" style={pesquisa ? {padding: '15px 30px'} : {padding: '45px 30px'}}>
                <h1>{nome}</h1>
                {pesquisa && (
                    <p>Área de pesquisa TCC/IC: {pesquisa}</p>
                )}
                <a href={lattes} target="_blank" rel="noopener noreferrer">Link do currículo lattes</a>
            </div>
        </div>
    )
}

export default CardProfessores