import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { CgSpinnerTwo } from 'react-icons/cg'

export const ContainerFluid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  height: 100vh;
  align-items: center;
  background: ${props => props.theme.colors.SpaceCadet};

  @media screen and (max-width: 768px) {
    grid-template-columns: unset;
    width: 100%;
  }
`
export const FormContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 80px;
  padding-left: 80px;
  width: 100%;
  
  @media screen and (max-width: 991px){
    padding-right: 50px;
    padding-left: 50px;
  }

  @media screen and (max-width: 550px){
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const TextWrapp = styled.div`
  display: flex;
  font-size: 20px;
  gap: 8px;
  margin-bottom: 2em;
`
export const TextDesc = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  color: ${props => props.theme.colors.MaximumBluePurple};
`
export const Devider = styled.div`
  color: ${props => props.theme.colors.MaximumBluePurple};
  font-weight: 500;
`

export const InputContainer = styled.div`
  display: grid;
  margin-bottom: 8px;
`
export const Label = styled.label`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.LavenderBlue};
  text-transform: capitalize;
  font-weight: 500;
  margin-bottom: 8px;
`
const shake = keyframes`
  25% {
    transform: translateX(4px);
  }

  50% {
    transform: translateX(-4px);
  }

  75% {
    transform: translateX(4px);
  }
`
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 10px;
  width: 100%;
  background: rgba(161, 161, 237, .5);
  color: ${props => props.theme.colors.LavenderBlue};
  border-radius: 5px;

  &::placeholder {
    color: ${props => props.theme.colors.LavenderBlue};
  }

  &:invalid {
    animation: ${shake} 300ms;
    border: 1px solid #e7195a;
  }
`
export const ErrorText = styled.p`
  font-size: 12px;
  margin-top: 5px;
  letter-spacing: 1px;
  color: red;
`
export const TermsCondition = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`
export const Checkbox = styled.input`
  border: 1px solid #D0D0F6;
  outline: none;
  background: rgba(161, 161, 237, .5);
`
export const TermParagraph = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.LavenderBlue};
  letter-spacing: 1px;
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
`
export const SpanLink = styled(Link)`
  color: ${props => props.theme.colors.MaximumBluePurple};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 5px;
  background: ${({ primary }) => (primary ? '#5E2BFF' : '#FBFFF1')};
  color: ${({ primary }) => (primary ? '#FBFFF1' : '#22223B')};
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    transition: all .3s ease-out;
    background: ${({ primary }) => (primary ? '#EC368D' : '#D0D0F6')};
    color: ${({ primary }) => (primary ? '#FBFFF1' : '#22223B')};
  }
`
export const ImageWrapper = styled.div`
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100vh;
`
export const ButtonDevider = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 8px;
  width: 100%;
`
export const Line = styled.hr`
  width: 100%;
  border: 1px solid #9F9FED;
  background: #9F9FED;
`
export const DeviderText = styled.p`
  color: #9F9FED;
  font-size: ${props => props.theme.fontSize.small};
`
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const AnimateIcon = styled(CgSpinnerTwo)`
  animation: ${spin} infinite 2s linear;
  display: ${({ loading }) => (loading ? 'unset' : 'none')};
`

export const ErrorMessage = styled.div`
  padding: 10px;
  background: #ffefef;
  border: 1px solid #e7195a;
  color: var(--error);
  border-radius: 4px;
  margin-bottom: 1em;
`