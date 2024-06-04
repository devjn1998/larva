import styled from 'styled-components'

export const CarouselItens = styled.section`
  position: relative;
  .carousel {
    width: 100%;
    height: 300px; /* Tamanho do carousel */
    overflow: hidden;
  }
  .imagem {
    img {
      max-width: 100%;
      width: 100%;
      object-fit: cover;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .footer-mobile {
    display: none;
    @media (max-width: 430px) {
      display: block;
      text-align: center;
      margin-top: 12px;
      margin-left: 22px;
      padding: 16px;
    }
  }
`

export const ProdutosStyles = styled.div`
  display: flex;
  margin-top: 51px;
  align-items: center;
  justify-content: center;
  background-color: #052539;
  padding: 32px;
  @media (max-width: 768px) {
    padding: 16px;
    margin-top: 0px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 12px;
    position: relative;
    text-align: center;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 430px) {
      grid-template-columns: 1fr;
    }
    li {
      a {
        .products {
          border-radius: 5%;
          border: 8px solid #052539;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 170px;
          &:hover {
            border-color: #ccc;
          }
          @media (max-width: 768px) {
            width: 90%;
            height: 150px;
          }
          @media (max-width: 430px) {
            width: 80%;
            height: 160px;
          }
        }
      }
    }
  }
  .go-site-mobile {
    display: none;
    @media (max-width: 430px) {
      display: block;
      text-align: center;
      padding: 8px;
    }
  }
`
