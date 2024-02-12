import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 800ms linear;
  z-index: 3;
`

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.SpaceCadet};
    transform: scale(0);
    transition: all 800ms linear;
    transform-origin: 0 50%;
    border-radius: 8px;
    z-index: 2;
    opacity: .6;
  }

  &:hover::before {
    transform: scale(1);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }
`

export const OverlayText = styled.h4`
  color: ${props => props.theme.colors.White};
  text-justify: newspaper;
  letter-spacing: 1px;
`

export const CardFlap = styled.img`
  width: 100%;
  /* max-height: 180px; */
  border-radius: 8px;
  object-fit: fit;
  overflow: hidden;
`