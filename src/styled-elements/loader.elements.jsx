import styled from 'styled-components'
import { keyframes } from 'styled-components'

const anime = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`

export const WrappCube = styled.div`
  background: ${props => props.theme.colors.SpaceCadet};
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 8;
`

const Cube = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  animation: ${anime} 2s infinite ease-out;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .12), 0 2px 2px rgba(0, 0, 0, .12),
    0 4px 4px rgba(0, 0, 0, .12), 0 8px 8px rgba(0, 0, 0, .12),
    0 16px 16px rgba(0, 0, 0, .120);
  
  z-index: 10;
`

export const OuterCube = styled(Cube)`
  width: 10vw;
  height: 10vw;
  background: #9B87FE;

  ${Cube}
`

export const InnerCubeOne = styled(Cube)`
  width: 5vw;
  height: 5vw;
  background: #C2BEDB;

  ${Cube}
`

export const InnerCubeTwo = styled(Cube)`
  width: 2.5vw;
  height: 2.5vw;
  background: #FFB870;

  ${Cube}
`

// SKELETON LOADING

export const CardWrapp = styled.div`
  height: 200px;
  width: 500px;
  background: ${props => props.theme.colors.Ivory};
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
`