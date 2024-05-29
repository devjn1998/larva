import { MenuBar } from './styles'

const Menu = () => (
  <MenuBar>
    <div className="Itens">
      <ul>
        <div className="item">
          <li>
            <a className="active" href="#">
              Sedas
            </a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="#"> Piteiras</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="#">Bongs</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="#">Silicones</a>
          </li>
        </div>
        <div className="item">
          <li>
            <a href="#">Acessórios</a>
          </li>
        </div>
      </ul>
    </div>
  </MenuBar>
)

export default Menu
