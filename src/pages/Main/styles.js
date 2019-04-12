import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  nav {
    width: 100%;
    line-height: 60px;
    img {
      color: #fff;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0px;
      margin: 0px;
      background-color: #e5556e;
      list-style: none;

      li {
        margin-left: 30px;
        display: inline;
        &:last-child {
          margin-left: auto;
        }
        img {
          vertical-align: middle;
          position: relative;
          bottom: 2px;
        }
        i {
          vertical-align: middle;
          position: relative;
          bottom: 2px;
          margin-right: 30px;
          cursor: pointer;
        }
        a {
          font-size: 16px;
          padding: 2px 10px;

          /* visual do link */
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          font-family: Helvetica;
          font-weight: bold;
        }
      }
    }
  }
`
