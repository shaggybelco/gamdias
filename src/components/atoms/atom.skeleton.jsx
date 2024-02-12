import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  width: 300px;
  height: 180px;
  /* background: ${props => props.theme.colors.Ivory}; */
  background: #fff;
  padding: 10px;
  border-radius: 8px;
`

const shinner = keyframes`
  to {
    background-position: -100% 0;
  }
`

const ImageSkelleton = styled.div`
  /* background-image: linear-gradient(90deg, #CCC 0px, 
    rgb(229, 229, 229 / 90%) 40px, #CCC 80px); */
  /* background-size: 300%;
  background-position: 100% 0; */
  background: red;
  border-radius: inherit;
  animation: ${shinner} 1.5s infinite;
`
const ImageWrapper = styled(ImageSkelleton)`
  height: 100px;
`

const ImageTitle = styled(ImageSkelleton)`
  height: 15px;
  margin-bottom: 15px;
`

const Skelleton = () => {
  return ( 
    <Container>
      <ImageTitle/>
      <ImageWrapper/>
    </Container>
   )
}
 
export default Skelleton