import styled from 'styled-components'

export const ContainerLoading = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  flex: 1;
  height: 100%;
`
export const Content = styled.div`
  padding-top: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  justify-content: center;
  img {
    margin: auto;
    max-width: 900px;
    max-height: 360px;
  }
  div {
    display: flex;
    justify-items: left;
    width: 315px;
    flex-direction: column;

    h1 {
      color: #ffffff;
      font-size: 28px;
      margin-top: 39px;
      font-weight: bold;
    }
    h2 {
      margin-top: 8px;
      font-size: 14px;
      color: #999999;
    }

    p {
      margin-top: 20px;
      opacity: 0.8;
      font-size: 16px;
      color: #ffffff;
      line-height: 28px;
      font-weight: initial;
    }
    span {
      margin-top: 20px;
      font-size: 14px;
      color: #999999;
    }
    label {
      margin-top: 10px;
      opacity: 0.8;
      font-size: 14px;
      color: #ffffff;
      line-height: 24px;
    }

    button {
      font-size: 16px;
      font-family: Helvetica;
      font-weight: bold;
      border: 0;
      background: #e5556e;
      display: block;
      margin-top: 20px;
      text-align: center;
      color: white;
      border-radius: 24px;
      padding: 15px;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
`
