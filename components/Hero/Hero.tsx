import React, { useEffect } from 'react'
import { HeroContainer, BearImg, LeftContainer, TextContainer, SubTextContainer, ButtonInput, SearchBar, InputContainer, StyledInput, SelectWrapper, IconButton } from './hero.styles'
import Image from 'next/image'
import Background from '../../assets/background.png'
import SearchIcon from '../../assets/icon-search.svg'
import MapIcon from '../../assets/icon-map.svg'
import { browser } from 'process'
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
                <span>We understand{!isMobile ? "." : ","}</span>
            </TextContainer>
            <TextContainer>
                <span>We </span><span style={{color: '#D92CFF'}}>deliver jobs.</span>
            </TextContainer>
            <SubTextContainer>
                <span>Personalizing each and every search for millions of job seekers</span>
            </SubTextContainer>
            <SearchBar>
                {!isMobile ? 
                    <InputContainer>
                    <ButtonInput>
                        <IconButton>
                            <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50004 0.289429C2.90608 0.289429 0.000244141 3.31438 0.000244141 7.01245C0.000244141 8.34588 0.357982 9.79191 1.0233 10.8666L6.10872 19.0746C6.1937 19.2083 6.34169 19.2894 6.50045 19.2894C6.65922 19.2894 6.80679 19.2083 6.89218 19.0746L11.9776 10.8666C12.6421 9.79191 13.0007 8.34588 13.0007 7.01204C13.0002 3.31396 10.0944 0.289429 6.50045 0.289429H6.50004ZM6.50004 1.21674C9.57252 1.21674 12.0713 3.79666 12.0713 7.01245C12.0713 8.17077 11.7285 9.5042 11.1863 10.3814L6.50004 17.9593L1.8138 10.381C1.2716 9.50461 0.928786 8.17036 0.928786 7.01204C0.928786 3.79625 3.42714 1.21633 6.50004 1.21633V1.21674ZM6.50004 3.53503C4.71052 3.53503 3.25014 4.99348 3.25014 6.78063C3.25014 8.56778 4.71052 10.0262 6.50004 10.0262C8.28955 10.0262 9.74993 8.56778 9.74993 6.78063C9.74993 4.99348 8.28955 3.53503 6.50004 3.53503ZM6.50004 4.46234C7.78756 4.46234 8.82139 5.49481 8.82139 6.78063C8.82139 8.06645 7.78756 9.09891 6.50004 9.09891C5.21251 9.09891 4.17868 8.06645 4.17868 6.78063C4.17868 5.49481 5.21251 4.46234 6.50004 4.46234Z" fill="#B2B2B2"/>
                            </svg>
                        </IconButton>
                        <StyledInput placeholder='search jobs, keywords, companies'></StyledInput>
                    </ButtonInput>
                    <div style={{width: "1px", height: "29px",margin: 'auto', border: "1px solid #E5E5E5"}}></div>
                    <ButtonInput>
                        <IconButton>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.43692 0.789429C3.33562 0.789429 0 4.12498 0 8.22618C0 12.3274 3.33562 15.6629 7.43692 15.6629C9.30439 15.6629 11.0107 14.9678 12.3172 13.828L19.129 20.6397C19.3186 20.8348 19.6671 20.8412 19.8585 20.6479C20.0499 20.4547 20.0476 20.098 19.8503 19.9107L13.0467 13.1072C14.1846 11.8008 14.8738 10.0922 14.8738 8.22709C14.8738 4.12543 11.5382 0.789429 7.43692 0.789429ZM7.43692 1.81473C10.9837 1.81473 13.8481 4.67907 13.8481 8.22572C13.8481 11.7724 10.9837 14.6367 7.43692 14.6367C3.89019 14.6367 1.02578 11.7728 1.02578 8.22618C1.02578 4.67953 3.89019 1.81519 7.43692 1.81519V1.81473Z" fill="#B2B2B2"/>
                            </svg>
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
