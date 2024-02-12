import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from '../../styled-elements/navbar.elements'
import { Button } from '../../styled-elements/global.styles'
import { FaTimes, FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { useAuthContext } from '../hooks/useAuthContext'
import { useSignout } from '../hooks/useSignout'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const { user } = useAuthContext()
  const {signout} = useSignout()

  const handleClick = () => setClick(!click)
  const handleSignout = () => signout()
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  const toggleHome = async () => {
    scroll.scrollToTop()
    setClick(false)
    navigate('/')
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={toggleHome}>
            <NavIcon />
            GAMDIAS
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/games'>Games</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/shop'>Shop</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/forum'>Forum</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (

                user ? (<NavBtnLink>
                  <Button primary onClick={handleSignout}>LOGOUT</Button>
                </NavBtnLink>) : (<NavBtnLink to='/login'>
                  <Button primary>LOGIN</Button>
                </NavBtnLink>)

              ) : (

                user ? (<NavBtnLink>
                  <Button fontBig primary onClick={handleSignout}>LOGOUT</Button>
                </NavBtnLink>) : (<NavBtnLink to='/login'>
                  <Button fontBig primary>LOGIN</Button>
                </NavBtnLink>)

              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar