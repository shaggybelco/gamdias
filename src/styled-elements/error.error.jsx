import styled from 'styled-components'
import { Container } from './global.styles'

export const ErrorWrapp = styled.div`
  background: ${props => props.theme.colors.SpaceCadet};
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg, rgba(0, 0, 0, .2) 0%, 
      rgba(0, 0, 0, .6) 100%
    ),
    linear-gradient(180deg, rgba(0, 0, 0, .2) 0%, transparent 100%);
    z-index: 2;
  }
`

export const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a43;
`

export const ErrorContent = styled(Container)`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InlineText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2em;
`

export const OutlineText = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 800;
  color: ${props => props.theme.colors.DeepPink};
`

export const HeadingText = styled.h1`
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.Ivory};

  @media screen and (max-width: 540px) {
    font-size: 40px;
  }
`

export const ButtonWrapp = styled.div`
  margin-top: 2em;
`