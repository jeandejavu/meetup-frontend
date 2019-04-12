import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignForm = styled.form`
  margin: auto;
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  img {
    height: 32px;
  }

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  span {
    color: #ffffff;
    font-size: 16px;
    margin-top: 39px;
    font-family: Helvetica;
    font-weight: bold;
  }

  input {
    border: 0px;
    background: transparent;
    color: #f6f6f6;
    margin-top: 10px;
    transition: border 0.15s ease;
    font-family: Helvetica;
    font-size: 20px;
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
  }

  a {
    margin-top: 20px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    opacity: 0.6;
    cursor: pointer;
    font-size: 16px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  h2 {
    margin-top: 14px;
    font-size: 16px;
    opacity: 0.8;
    font-weight: normal;
    line-height: 28px;
    text-align: left;
  }

  span {
    font-size: 16px;
    margin: 40px 0px 0px 0px;
    font-family: Helvetica;
    font-weight: bold;
  }
  span:first-of-type {
    margin: 0px 0px 0px 0px;
  }
  span:last-of-type {
    margin-bottom: 20px;
  }

  label {
    margin-top: 14px;
    font-size: 18px;
  }

  label:first-of-type {
    margin-top: 0px;
  }

  input[type='checkbox'] {
    border-radius: 4px;
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    outline: 0;
    background: #544b57;
    margin-right: 10px;
    vertical-align: middle;
    position: relative;
    bottom: 7px;
  }

  input[type='checkbox']:checked {
    background: #f64067;
  }
`
