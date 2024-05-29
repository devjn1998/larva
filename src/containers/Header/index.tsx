import botao1 from '../../img/componentes/botao1.png'
import botao2 from '../../img/componentes/botao2.png'
import logoNome from '../../img/logos/larva-logo-nome.png'
import logo from '../../img/logos/larva-logo.png'
import { ContainerHeader } from '../../styles'
import { HeaderMenu } from './styles'

const Header = () => (
  <ContainerHeader>
    <HeaderMenu>
      <div className="logos">
        <img className="logo-larva" src={logo} />
        <img className="logo-nome" src={logoNome} />
      </div>

      <ul>
        <li>
          <a href="#">
            <img className="botaoSigIn" src={botao1} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="botaoProdutos" src={botao2} alt="" />
          </a>
        </li>
      </ul>
    </HeaderMenu>
  </ContainerHeader>
)

export default Header
