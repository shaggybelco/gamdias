import {
  SectionContainer,
  ContainerContent
} from '../../styled-elements/index.elements'
import {
  GameImage,
  GameDetail,
  GameName,
  GameDescription,
  GameRelease,
  ButtonWrapp,
  GamePlartform,
  PlartformText,
  GameTrailer,
  IframeWrapper,
} from '../../styled-elements/elements.elements'
import { Button } from '../../styled-elements/global.styles'
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLocation, useNavigate } from 'react-router-dom'

const PageDetail = () => {

  const { state } = useLocation()
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const authenticate = () => {
    if (user) {
      console.log('authenticated!')
    } 
    else {
      navigate('/login')
    }
  }

  return (
    <SectionContainer>
      <ContainerContent>
        {/* <GameImage src={state.avatar} alt={state.name}/> */}
        <IframeWrapper>
          <GameTrailer src={state.trailer} loading='lazy' allowFullScreen />
        </IframeWrapper>
        <GameDetail>
          <GameName>{state.name}</GameName>
          <GameDescription>{state.description}</GameDescription>
          <GameRelease>{state.releaseDate}</GameRelease>
          <ButtonWrapp>
            <Button primary onClick={authenticate}>Get Game</Button>
          </ButtonWrapp>
          <GamePlartform>
            <PlartformText>Plartform: </PlartformText>
            <FaWindows color='#FFB900' />
            <FaPlaystation color='#FFFFFF' />
            <FaXbox color='#107C10' />
          </GamePlartform>
        </GameDetail>
      </ContainerContent>
    </SectionContainer>
  )
}

export default PageDetail