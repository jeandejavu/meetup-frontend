import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PreferencesForm = styled.form`
  margin: auto;
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

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
    margin: 30px 0px 20px 0px;
    font-family: Helvetica;
    font-weight: bold;
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
    bottom: 2px;
  }

  input[type='checkbox']:checked {
    background: #f64067;
  }

  button {
    font-size: 16px;
    font-family: Helvetica;
    font-weight: bold;
    border: 0;
    background: #e5556e;
    display: block;
    margin-top: 30px;
    text-align: center;
    color: white;
    border-radius: 24px;
    padding: 15px;
    cursor: pointer;
  }
`
