import styled from 'styled-components'

export const CarouselItens = styled.section`
  position: relative;
  .carousel {
    width: 100%;
    height: 300px; /* Tamanho do carousel */
    overflow: hidden;
  }
  .carousel-button {
    position: absolute;
    top: 76%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
  }

  .carousel-button.prev {
    background-color: #031d2e;
    border: none;
    position: absolute;
    left: 8%;
  }

  .carousel-button.next {
    background-color: #031d2e;
    border: none;
    position: absolute;
    right: 8%;
  }
`

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
    column-gap: 12px;
    li {
      a {
        img {
          border-radius: 5%;
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
