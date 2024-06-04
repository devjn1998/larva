import styled from 'styled-components'

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
  }
  @media (max-width: 430px) {
    display: block;
  }

  .logo-nome {
    max-width: 163px;
    width: 100%;
    height: 79px;
    position: absolute;
    z-index: 9999;
    padding: 0 12px 0 12px;
    @media (max-width: 430px) {
      display: block;
      justify-content: center;
    }
  }
  ul {
    list-style: none;
    display: flex;
    max-width: 100%;
    width: 100%;
    justify-content: flex-end;
    @media (max-width: 768px) {
    }
    @media (max-width: 430px) {
      display: none;
    }
    li {
      padding: 6px 6px 6px 6px;
    }
    .botaoSigIn {
      width: 137px;
      height: 62px;
    }
    .botaoProdutos {
      width: 269px;
      height: 62px;
    }
  }
`
