import { useState } from 'react'
import imgCarousel from '../../img/componentes/carousel.png'
import produto1 from '../../img/produtos/produto1.jpg'
import produto2 from '../../img/produtos/produto2.jpg'
import produto3 from '../../img/produtos/produto3.jpg'
import produto4 from '../../img/produtos/produto4.jpg'
import { CarouselItens, Produtos } from './styles'
import next from '../../img/icons/next.png'
import prev from '../../img/icons/prev.png'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1))
  }

  return (
    <CarouselItens>
      <div className="imagem">
        <img src={imgCarousel} alt="" />
      </div>
      <Produtos>
        <ul>
          {Array.from({ length: 4 }, (_, index) => (
            <li className="carousel" key={index}>
              <a href="#">
                <img
                  src={
                    index === currentSlide
                      ? produto1
                      : index === currentSlide + 1
                        ? produto2
                        : index === currentSlide + 2
                          ? produto3
                          : produto4
                  }
                  alt=""
                />
              </a>
            </li>
          ))}
        </ul>
      </Produtos>
      <button className="carousel-button prev" onClick={handlePrev}>
        <span>
          <img src={prev} alt="" />
        </span>
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        <span>
          <img src={next} alt="" />
        </span>
      </button>
    </CarouselItens>
  )
}

export default Carousel
