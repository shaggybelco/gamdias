import styled from 'styled-components'
import { FaSearch, FaMicrophone } from 'react-icons/fa'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Filter = styled.div`
  padding: 10px 20px;
  cursor: pointer;
`

// GAME DETAIL ELEMENTS
export const GameImage = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: rgba(251, 255, 241, .4) 1.95px 1.95px 2.6px;
`

export const GameDetail = styled.div`
  display: grid;
  margin-left: 4em;
  align-items: center;

  @media screen and (max-width: 991px) {
    margin: unset;
  }
`

export const GameName = styled.h2`
  font-size: 30px;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.Ivory};
`

export const GameDescription = styled.p`
  letter-spacing: 1px;
  text-align: justify;
  color: ${props => props.theme.colors.MaximumBluePurple};
  `

export const GameRelease = styled.p`
  margin: 8px 0;
  font-weight: 600;
  color: ${props => props.theme.colors.LavenderBlue};
`

export const ButtonWrapp = styled.div`
  margin: 0;
  padding: 8px 0;
`

export const GamePlartform = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const PlartformText = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: ${props => props.theme.colors.Ivory};
`

export const IframeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`

export const GameTrailer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`
export const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`
export const SearchFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 5px 10px;
  gap: 5px;
  width: 40%;
  color: ${props => props.theme.colors.SpaceCadet};
  background: ${props => props.theme.colors.Ivory};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

  @media screen and (max-width: 768px){
    width: unset;
  }
`
export const Search = styled.input`
  border: none;
  outline: none;
  padding: 2px 10px;
  width: 100%;
  font-weight: 500;
`
export const SearchIcon = styled(FaSearch)`
  cursor: pointer;
`
export const MicrophoneIcon = styled(FaMicrophone)`
  cursor: pointer;
`