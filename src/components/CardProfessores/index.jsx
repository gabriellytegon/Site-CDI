import './style.css';
import AvatarProfessores from '../AvatarProfessores/index';

function CardProfessores({nome, pesquisa, lattes, prof, foto, alt}){
    return(
        <div className="cardProfessores">
            <AvatarProfessores src={foto} alt={alt}/>
            <div className="cardProfessores_txt">
                <h1>{nome}</h1>
                <p>Área de pesquisa TCC/IC: {pesquisa}</p>
                <a href={lattes} target="_blank" rel="noopener noreferrer">Link do currículo lattes {prof}</a>
            </div>
        </div>
    )
}

export default CardProfessores

{/* <CardProfessores nome="Marcos" pesquisa="AJSJAJKASJK" lattes="lalala" prof="sddadw" foto="https://static.escolakids.uol.com.br/2019/07/lontra.jpg" alt="adwwwd"></CardProfessores> */}