import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Lexend", sans-serif;
    list-style: none;

    body {
      padding-top: 5px;
      background-color: #031d2e;
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 351px auto;
  column-gap: 14px;
`

export const ContainerHeader = styled.header`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
