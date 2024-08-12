import "./style.css"
import { useState } from "react"

/* 
  Este é o componente CardCarousel, ele vai na exibição de um conjunto de imagens.
  Ele recebe como parâmetro uma lista de imagens e precisa de ao menos uma para ser exibido.
*/

function CardCarousel({ photos }) {

    // constantes e funções utilizadas na animação de rolagem do carrossel
    const [scrollPosition, setScrollPosition] = useState(0)

    const handleNextClick = () => {
        const cardWidth = document.querySelector('.carousel-item').offsetWidth;
        const carouselWidth = document.querySelector('.carousel-inner').scrollWidth - document.querySelector('.carousel-inner').offsetWidth;
        if (scrollPosition < carouselWidth) {
            const nextPosition = scrollPosition + cardWidth;
            setScrollPosition(nextPosition);
            document.querySelector('.carousel-inner').scrollTo({
                left: nextPosition,
                behavior: 'smooth'
            })
        }
    }

    const handlePrevClick = () => {
        const cardWidth = document.querySelector('.carousel-item').offsetWidth;
        if (scrollPosition > 0) {
            const prevPosition = scrollPosition - cardWidth;
            setScrollPosition(prevPosition);
            document.querySelector('.carousel-inner').scrollTo({
                left: prevPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div id="cardCarousel" className="carousel">
            <div className="carousel-inner">
                {photos.map((photo, index) => (
                    <div className={"carousel-item ${index === 0 ? 'active' : ''}"} key={index}>
                        <div className="card">
                            <div className="img-wrapper">
                                <img src={photo} alt="..." />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={handlePrevClick}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={handleNextClick}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >
    )
}

export default CardCarousel