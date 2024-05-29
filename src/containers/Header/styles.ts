import styled from 'styled-components'

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1366px;
  width: 100%;
  .logo-larva {
    width: 189px;
    height: 109px;
  }
  .logo-nome {
    width: 163px;
    height: 79px;
  }
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 11px 13px 0 6px;
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
