import { useEffect, useState } from 'react'
import footer from '../../img/componentes/footer.png'
import produto5 from '../../img/produtos/180_fumo_para_cigarro_sasso_hash_extra_suave_virginia_blend_pacote_25g_15008_1_0744a1b8a915ed2a1a6e9e920e7ada00.webp'
import produto6 from '../../img/produtos/180_seda_papelito_brown_slim_king_size_un_13261_1_1460fc1d8c38b03bea47fceea446fcdb.webp'
import produto7 from '../../img/produtos/180_seda_raw_classic_king_size_slim_un_7633_1_400e1f407f8bcfec483ad829c97faa3d.webp'
import produto8 from '../../img/produtos/180_tesoura_em_metal_para_tabaco_abdz_dobravel_31675_1_153e19c23c7dc20b47b847a2184d9ff8.webp'
import produto1 from '../../img/produtos/produto1.jpg'
import produto2 from '../../img/produtos/produto2.jpg'
import produto3 from '../../img/produtos/produto3.jpg'
import produto4 from '../../img/produtos/produto4.jpg'
import { MenuBar } from './styles'

const Menu = ({ setImagens }: any) => {
  const [activeTab, setActiveTab] = useState('Sedas') // define o primeiro estado
  const [initialImages, setInitialImages] = useState(['Sedas'])

  const items: any = {
    Sedas: [
      { src: produto1 },
      { src: produto2 },
      { src: produto3 },
      { src: produto4 }
    ],
    Piteiras: [
      { src: produto5 },
      { src: produto6 },
      { src: produto7 },
      { src: produto8 }
    ],
    Bongs: [{ src: produto5 }, { src: produto6 }, { src: produto7 }],
    Silicones: [
      { src: produto5 },
      { src: produto6 },
      { src: produto7 },
      { src: produto8 }
    ],
    Acessorios: [
      { src: produto5 },
      { src: produto6 },
      { src: produto7 },
      { src: produto8 }
    ]
  }

  useEffect(() => {
    handleTabClick('Sedas')
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTabClick = (category: any) => {
    setActiveTab(category)
    setImagens(items[category].map((item: any) => item.src))
    console.log(category)
  }

  return (
    <MenuBar>
      <div className="Itens">
        <ul>
          <div className="item">
            {Object.keys(items).map((category: any) => (
              // eslint-disable-next-line react/jsx-key
              <li key={category}>
                <a
                  className={activeTab === category ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick(category)
                  }}
                  href="#"
                >
                  {category}
                </a>
              </li>
            ))}
          </div>
        </ul>
        <div className="footer">
          <img src={footer} />
        </div>
      </div>
      {/* {activeTab === 'Sedas' && <ProdutosStyles />}
      {activeTab === 'Piteiras' && <ProdutosStyles />} */}
    </MenuBar>
  )
}

export default Menu
function setInitialImages(arg0: any) {
  throw new Error('Function not implemented.')
}
