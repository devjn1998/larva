import styled from 'styled-components'

export const MenuBar = styled.aside`
  background-color: #052539;
  max-width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
    height: 100%;
  }
  @media (max-width: 430px) {
    display: block;
  }

  .Itens {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    align-items: center;
    @media (max-width: 768px) {
      margin-top: 0px;
    }
    @media (max-width: 430px) {
      text-align: center;
    }

    ul {
      width: 80%;
      padding: 22px;
      @media (max-width: 430px) {
        padding: 22px;
      }
      .item {
        border-bottom: solid 7px #031d2e;
        width: 100%;
        margin-bottom: 48px;
        @media (max-width: 768px) {
          margin-bottom: 0px;
        }
        @media (max-width: 430px) {
          margin-bottom: 0px;
        }
      }
    }
      li {
        font-weight: bold;
        font-size: 28px;
        padding-bottom: 12px;
        padding-top: 8px;
        @media (max-width: 430px) {
          padding: 16px;
        }
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
      max-width: 100%;
      width: 100%;
      padding-bottom: 12px;
      @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
      }

      @media (max-width: 430px) {
        padding-bottom: 0px;
      }
      img {
        text-align: center;
        max-width: 100%;
        width: 90%;
        @media (max-width: 768px) {
          padding: 0px;
          margin-top: 0px;
          max-width: 100%;
          width: 100%;
        }
        @media (max-width: 430px) {
          display: none;
        }
      }
    }

  }
`
