import { SetStateAction, useState } from 'react'
import footer from '../../img/componentes/footer.png'
import { Produtos } from '../Carousel/styles'
import { MenuBar } from './styles'

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Sedas') // define o primeiro estado

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab)
  }

  return (
    <MenuBar>
      <div className="Itens">
        <ul>
          <div className="item">
            <li>
              <a
                className={activeTab === 'Sedas' ? 'active' : ''}
                onClick={() => handleTabClick('Sedas')}
                href="#"
              >
                Sedas
              </a>
            </li>
          </div>
          <div className="item">
            <li>
              <a
                className={activeTab === 'Piteiras' ? 'active' : ''}
                onClick={() => handleTabClick('Piteiras')}
                href="#"
              >
                {' '}
                Piteiras
              </a>
            </li>
          </div>
          <div className="item">
            <li>
              <a
                className={activeTab === 'Bongs' ? 'active' : ''}
                onClick={() => handleTabClick('Bongs')}
                href="#"
              >
                Bongs
              </a>
            </li>
          </div>
          <div className="item">
            <li>
              <a
                className={activeTab === 'Silicones' ? 'active' : ''}
                onClick={() => handleTabClick('Silicones')}
                href="#"
              >
                Silicones
              </a>
            </li>
          </div>
          <div className="item">
            <li>
              <a
                className={activeTab === 'Acessórios' ? 'active' : ''}
                onClick={() => handleTabClick('Acessórios')}
                href="#"
              >
                Acessórios
              </a>
            </li>
          </div>
        </ul>
        <div className="footer">
          <img src={footer} />
        </div>
      </div>
      {activeTab === 'Sedas' && <Produtos />}
      {activeTab === 'Piteiras' && <Produtos />}
    </MenuBar>
  )
}

export default Menu
