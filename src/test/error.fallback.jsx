import {ErrorBoundary} from 'react-error-boundary'
import {
  ErrorWrapp,
  InnerContainer,
  VideoBackground,
  ErrorContent,
  InlineText,
  OutlineText,
  HeadingText,
  ButtonWrapp
} from '../styled-elements/error.error'
import Video from '../images/CALL OF DUTY BLACK OPS COLD WAR.mp4'
import { Button } from '../styled-elements/global.styles'

const ErrorFallback = ({error, resetErrorBoundary}) => {
  return (
    <ErrorWrapp>
      <InnerContainer>
        <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
      </InnerContainer>
      <ErrorContent>
        <InlineText>
          <OutlineText>Eroor</OutlineText>
          <HeadingText>You</HeadingText>
          <OutlineText>404</OutlineText>
        </InlineText>
        <HeadingText>Shouln't</HeadingText>
        <HeadingText>Be Here</HeadingText>
        <ButtonWrapp>
          <Button onClick={resetErrorBoundary}>Try Again</Button>
        </ButtonWrapp>
      </ErrorContent>
    </ErrorWrapp>
  )
}

export default ErrorFallback