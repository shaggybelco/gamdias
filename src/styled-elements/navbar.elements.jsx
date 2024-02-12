import styled from 'styled-components'
import { Container } from './global.styles'
import { Link } from 'react-router-dom'
import { FaFantasyFlightGames } from 'react-icons/fa'

export const Nav = styled.nav`
  background: ${props => props.theme.colors.SpaceCadet};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`

export const NavLogo = styled.div`
  color: ${props => props.theme.colors.Ivory};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: 600;
`

export const NavIcon = styled(FaFantasyFlightGames)`
  margin-right: .5em;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8em;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all .5s ease;
    background: ${props => props.theme.colors.SpaceCadet};
  }
`
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: ${props => `2px solid ${props.theme.colors.DeepPink}`};
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5em 1em;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2em;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all .3 ease;
     }
  }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-left: 20px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  @media screen and (max-width: 991px) {
    padding: 8px 16px;
  }
`