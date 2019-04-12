import styled from 'styled-components'

export const ContainerLoading = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  padding-top: 20px;
  height: 100%;
  margin: auto;
  width: 100%;
`
export const Sessao = styled.div`
  margin: auto;
  max-width: 960px;
  h1 {
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
  }
`
export const MeetupList = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  flex-wrap: wrap;
`
export const MeetupItem = styled.div`
  width: 300px;
  height: 190px;
  background: #fff;
  border-radius: 5px;
  margin: 0px 10px 20px;

  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  img {
    border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: 110px;
    min-height: 110px;
  }

  div {
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    margin: 20px 0 0 20px;
  }
  p {
    font-size: 14px;
    color: #999999;
    margin: 5px 0px 0 20px;
  }

  a {
    box-shadow: rgba(0, 0, 0, 0.4) 0 2px 5px;
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    bottom: 15px;
    right: 20px;
    padding-top: 5px;
    line-height: 1;
    background: #e5556e;
    text-align: center;
    color: white;
    /* stops bg color from leaking outside the border: */
    -webkit-border-radius: 50%;
    border-radius: 50%;
    font-size: 20px;
    font-size: 2rem;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    -ms-transition-duration: 0.3s;
    -o-transition-duration: 0.3s;
    -transition-duration: 0.3s;
    transition-duration: 0.3s;
    cursor: pointer;
  }
`
