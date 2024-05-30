import styled from 'styled-components'

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  position: relative;
  .logo-larva {
    width: 189px;
    height: 109px;
    position: absolute;
    top: 1;
    left: 98px;
    z-index: 99999;
    padding-top: 12px;
  }
  .logo-nome {
    max-width: 163px;
    width: 100%;
    height: 79px;
    position: absolute;
    left: 294px;
    z-index: 9999;
  }
  ul {
    list-style: none;
    display: flex;
    max-width: 100%;
    width: 100%;
    justify-content: flex-end;
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
