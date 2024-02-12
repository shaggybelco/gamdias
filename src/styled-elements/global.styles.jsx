import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 60px;
  padding-left: 60px;
  
  @media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const SectionWrapp = styled.section`
  padding: 32px 0;
`
export const Button = styled.button`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? '#5E2BFF' : '#EC368D')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #FBFFF1;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all .3s ease-out;
    background: ${({ primary }) => (primary ? '#EC368D' : '#5E2BFF')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export default GlobalStyles