import React from 'react'
import { HeaderContainer, ImageWrapper, NavItem, StyledSelect, SelectWrapper } from './header.styles'
import Image from 'next/image'
import Logo from '../../assets/logo.png'
import useIsMobile from '../../hooks/hooks'
import { IconButton } from '../Hero/hero.styles'

export const Header = () => {
  const isMobile = useIsMobile()

  return (
    <HeaderContainer>
        <ImageWrapper>
            <Image
                src={Logo}
                alt="logo"
                objectFit={"contain"}
                width={isMobile ? 99 : 158}
                height={isMobile ? 19 : 33}
            />
            <NavItem>
                <span>About Us</span>
            </NavItem>
            <NavItem>
                <span>View Jobs</span>
            </NavItem>
            <NavItem>
                <span>Blog</span>
            </NavItem>
        </ImageWrapper>
        <SelectWrapper>
            <StyledSelect>
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="CA">CA</option>
                <option value="ZA">ZA</option>
            </StyledSelect>
        </SelectWrapper>
        {isMobile ? <IconButton style={{marginRight: '0px'}}>
            <Image
                src="/images/icon-menu.svg"
                width={19}
                height={16}
            />
        </IconButton> : null}
    </HeaderContainer>
  )
}
