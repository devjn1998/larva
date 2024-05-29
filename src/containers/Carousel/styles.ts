import styled from 'styled-components'

export const Produtos = styled.div`
  .imagem {
    width: 100%;
    object-fit: cover;
  }
  display: flex;
  margin-top: 18px;
  align-items: center;
  justify-content: center;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 32px;
    li {
      a {
        img {
          border-radius: 100%;
          border: 8px solid #052539;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          width: 160px;
          height: 170px;
          &:hover {
            border-color: #ccc;
          }
        }
      }
    }
  }
`
