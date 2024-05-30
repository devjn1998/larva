import styled from 'styled-components'

export const MenuBar = styled.aside`
  background-color: #052539;
  max-width: 351px;
  height: 784px;
  position: relative;
  .Itens {
    margin-top: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    align-items: center;
    ul {
      width: 80%;
      padding: 22px;
      .item {
        border-bottom: solid 7px #031d2e;
        width: 100%;
      }
    }
      li {
        font-weight: bold;
        font-size: 28px;
        padding-bottom: 12px;
        padding-top: 8px;
        a {
          text-decoration: none;
          color: rgba(221, 225, 228, 0.5);
          &.active {
            color: #df933b;
          }
        }
      }
    }
    .footer {
      padding-bottom: 12px;
      img {
        text-align: center;

      }
    }

  }
`
