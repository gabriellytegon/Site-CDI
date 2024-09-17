import './style.css'

function AvatarHome({src="https://placehold.co/400", alt, nome}){
    return(
        <div className="avatarHome">
            <img src={src} alt={alt} />
            <div className='avatarHome_p'>
                <p>{nome}</p>
            </div>
        </div>
    )
}

export default AvatarHome

{/* <AvatarHome src="https://static.escolakids.uol.com.br/2019/07/lontra.jpg" alt="akkakak" nome="Antonio carlos zambom"></AvatarHome> */}