import { useState } from 'react'
import buttonRunSite from '../../img/componentes/botao2.png'
import imgFooter from '../../img/componentes/footer.png'
import imgCarousel from '../../img/componentes/larva-apresentation.jpg'
import { CarouselItens, ProdutosStyles } from './styles'
// const Sedas = [
//   { src: produto1 },
//   { src: produto2 },
//   { src: produto3 },
//   { src: produto4 }
// ]
// const Piteiras = [{ src: produto5 }]
// const Bongs = [{ src: produto5 }]
// const Silicones = [{ src: produto5 }]
// const Acessorios = [{ src: produto5 }]

const Carousel = ({ imagens }: any) => {
  const [activeTab, setActiveTab] = useState('Sedas')
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <CarouselItens>
      <div className="imagem">
        <img src={imgCarousel} alt="" />
      </div>
      <ProdutosStyles>
        {/* <ul>
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
        </ul> */}
        <ul>
          {imagens.map((image: any, index: any) => (
            <>
              <li key={index}>
                <a href="#">
                  <img
                    className="products"
                    src={image}
                    alt=""
                    onClick={() => setCurrentSlide(index + 1)}
                  />
                </a>
              </li>
            </>
          ))}
          {/* {getActiveTabProducts().map((item, index) => (
            <li className="carousel" key={index}>
              <a href="#">
                <img
                  src={item.src}
                  alt=""
                  onClick={() => setCurrentSlide(index)}
                />
              </a>
            </li>
          ))} */}
          <div className="go-site-mobile">
            <a href="#">
              <img className="buttonRunSite" src={buttonRunSite} alt="" />
            </a>
          </div>
        </ul>
      </ProdutosStyles>
      <div className="footer-mobile">
        <a href="#">
          <img src={imgFooter} alt="" />
        </a>
      </div>
    </CarouselItens>
  )

  // function getActiveTabProducts() {
  //   switch (activeTab) {
  //     case 'Sedas':
  //       return Sedas
  //     case 'Piteiras':
  //       return Piteiras
  //     case 'Bongs':
  //       return Bongs
  //     case 'Silicones':
  //       return Silicones
  //     case 'Acessorios':
  //       return Acessorios
  //     default:
  //       return []
  //   }
  // }
}

export default Carousel
