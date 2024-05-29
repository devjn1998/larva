import imgCarousel from '../../img/componentes/carousel.png'
import produto1 from '../../img/produtos/produto1.jpg'
import produto2 from '../../img/produtos/produto2.jpg'
import produto3 from '../../img/produtos/produto3.jpg'
import produto4 from '../../img/produtos/produto4.jpg'
import { Produtos } from './styles'

const Carousel = () => (
  <section>
    <div className="imagem">
      <img src={imgCarousel} alt="" />
    </div>
    <Produtos>
      <ul>
        <li>
          <a href="#">
            <img src={produto1} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={produto2} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={produto3} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={produto4} alt="" />
          </a>
        </li>
      </ul>
    </Produtos>
  </section>
)

export default Carousel
