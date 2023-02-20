import React from 'react'
import { HeroContainer, BearImg, LeftContainer, TextContainer, SubTextContainer, VerticalDivider, MobileChangedText, ButtonInput, SearchBar, InputContainer, StyledInput, SelectWrapper, IconButton } from './hero.styles'
import Image from 'next/image'
import { Button } from '../common/Button/Button'
import useIsMobile from '../../hooks/hooks'

export const Hero = () => {
  const isMobile = useIsMobile()
  return (
    <HeroContainer>
        <LeftContainer>
            <TextContainer>
                <span>We learn{!isMobile ? "." : ","}</span>
            </TextContainer>
            <TextContainer>
                <MobileChangedText isMobile={isMobile}>We</MobileChangedText> <span>understand{!isMobile ? "." : ","}</span>
            </TextContainer>
            <TextContainer>
                <MobileChangedText isMobile={isMobile}>We </MobileChangedText><span style={{color: '#D92CFF'}}>deliver jobs.</span>
            </TextContainer>
            <SubTextContainer>
                <span>Personalizing each and every search for millions of job seekers</span>
            </SubTextContainer>
            <SearchBar>
                {!isMobile ? 
                    <InputContainer>
                    <ButtonInput>
                        <IconButton>
                            <Image src="/images/icon-map.svg" width={20} height={20}></Image>
                        </IconButton>
                        <StyledInput placeholder='search jobs, keywords, companies'></StyledInput>
                    </ButtonInput>
                    <VerticalDivider />
                    <ButtonInput>
                        <IconButton>
                            <Image src="/images/icon-search.svg" width={20} height={20}></Image>
                        </IconButton>
                        <StyledInput placeholder='Enter location or “remote”'></StyledInput>
                    </ButtonInput>
                    </InputContainer> :
                    <InputContainer>
                        <ButtonInput>
                            <StyledInput placeholder='Search job Titles, keywords, companies'></StyledInput>
                        </ButtonInput>
                    </InputContainer>
                }
                <Button title="Search Jobs"></Button>
            </SearchBar>
        </LeftContainer>
        <BearImg />
    </HeroContainer>
  )
}
