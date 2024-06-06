import './style.css';

function AvatarProfessores({src, alt}){
    return(
        <div className="avatar_professores">
            <img className='avatar_professores_img' src={src} alt={alt}/>
        </div>
    )
}

export default AvatarProfessores