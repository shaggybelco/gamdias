import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, SectionWrapp } from './global.styles'
import { IoIosArrowDown } from 'react-icons/io'

export const SectionContainer = styled(SectionWrapp)`
  background: ${props => props.theme.colors.SpaceCadet};
  min-height: 100vh;
  display: grid;
  align-items: center;
  
  ${SectionWrapp}
`

export const ContainerContent = styled(Container)`
  display: grid;
  grid-template-columns: 50% auto;

  @media screen and (max-width: 991px) {
    grid-template-columns: none;
    gap: 2em;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 4em;

  @media screen and (max-width: 991px) {
    margin-right: unset;
  }
`

export const HeadingText = styled.h1`
  font-weight: 800;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.Ivory};
  font-size: ${props => props.theme.fontSize.large};

  @media screen and (max-width: 991px) {
    font-size: ${props => props.theme.fontSize.medium};
  }
`

export const ParagraphText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.theme.colors.LavenderBlue};
`

export const SpanText = styled.span`
  color: ${props => props.theme.colors.DeepPink};
`

export const CarouselSlider = styled.div`
  overflow: hidden;
`

const slider = keyframes`
  0% { left: 0; }
  20% { left: 0; }
  25% { left: -100%; }
  45% { left: -100%; }
  50% { left: -200%; }
  70% { left: -200%; }
  75% { left: -300%; }
  95% { left: -300%; }
  100% { left: -400%; }
`

export const CarouselFigure = styled.figure`
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  animation: 20s ${slider} infinite;
`

export const CarouselImg = styled.img`
  width: 20%;
  float: left;
`

export const FooterText = styled(Container)`
  font-size: 16px;
`

export const TitleText = styled.p`
  color: ${props => props.theme.colors.Ivory};
  padding: 2em 0 1em 0;
  letter-spacing: 1px;
`

export const ContainerCards = styled(Container)`
  display: grid; 
  gap: 2em;

  @media screen and (min-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
  }
`

export const RouterLinkText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 2em;
  cursor: pointer;
`
export const LinkText = styled.span`
  font-style: normal;
  color: ${props => props.theme.colors.LavenderBlue};
`

export const ArrowIcon = styled(IoIosArrowDown)`
  color: ${props => props.theme.colors.LavenderBlue};
`

export const PaginateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`