import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 20px;
  height: 100%;
  margin: auto;
  width: 100%;
`

export const SearchBox = styled.div`
  margin: auto;
  max-width: 960px;
  position: relative;

  input[type='text'] {
    background-color: #2e2d35;
    width: 100%;
    border: 0px solid;
    border-radius: 4px;
    margin: 9px 0;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    transition: 0.3s;
    font-size: 15px;
    color: #8e8e93;
    letter-spacing: 0;

    padding-left: 40px;
    height: 50px;
  }
  i {
    position: absolute;
    left: 0;
    top: 8px;
    padding: 14px 8px;
    color: #aaa;
    transition: 0.3s;
  }
`
