import { useNavigate } from 'react-router-dom'
import {
  SectionContainer,
  CarouselFigure,
  CarouselImg,
  CarouselSlider,
  ContainerCards,
  ContainerContent,
  HeadingText,
  ParagraphText,
  TextContent,
  SpanText,
  FooterText,
  TitleText,
  RouterLinkText,
  LinkText,
  ArrowIcon
} from '../../styled-elements/index.elements'
import { Card, Skelleton } from '../'
import { animateScroll as scroll } from 'react-scroll'

const Index = ({ data }) => {

  const one = Math.floor(Math.random() * (data.length - 1) + 1)
  const two = Math.floor(Math.random() * (data.length - 1) + 1)
  const three = Math.floor(Math.random() * (data.length - 1) + 1)
  const navigate = useNavigate()
  
  const toggleGames = () => {
    scroll.scrollToTop()
    navigate('/games')
  }

  return (
    <SectionContainer>
      <ContainerContent>
        <TextContent>
          <HeadingText>
            Time to
            <SpanText> Play</SpanText>
          </HeadingText>
          <ParagraphText>
            It’s time to discover new games, and we here to help
            you with the choice
          </ParagraphText>
        </TextContent>
        <CarouselSlider>
          <CarouselFigure>
            <CarouselImg src={`https://wallpaperaccess.com/full/4425387.jpg`} alt={`sliderone`} />
            <CarouselImg src={`https://wallpaperaccess.com/full/275059.jpg`} alt={`sliderone`} />
            <CarouselImg src={`https://wallpaperaccess.com/full/1264433.png`} alt={`sliderone`} />
            <CarouselImg src={`https://wallpaperaccess.com/full/1096890.png`} alt={`sliderone`} />
            <CarouselImg src={`https://wallpaperaccess.com/full/4425387.jpg`} alt={`sliderone`} />
          </CarouselFigure>
        </CarouselSlider>
      </ContainerContent>
      <FooterText>
        <TitleText>popular games</TitleText>
      </FooterText>
      <ContainerCards>
        <Card src={data[one].avatar}
          title={data[one].name}
          alt={data[one].name}
          onClick={() => navigate('/detail-info', { state: data[one] })}
        />
        <Card src={data[two].avatar}
          title={data[two].name}
          alt={data[two].name}
          onClick={() => navigate('/detail-info', { state: data[two] })}
        />
        <Card src={data[three].avatar}
          title={data[three].name}
          alt={data[three].name}
          onClick={() => navigate('/detail-info', { state: data[three] })}
        />
      </ContainerCards>
      <FooterText>
        <RouterLinkText onClick={toggleGames}>
          <LinkText>click here for more</LinkText>
          <ArrowIcon />
        </RouterLinkText>
      </FooterText>
    </SectionContainer>
  )
}

export default Index