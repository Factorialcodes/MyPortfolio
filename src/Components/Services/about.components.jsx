import React from 'react'
import  HeroImage from '../../Images/Layer2.png'
import { BtnWrap,
    Column1,
    Column2,
    HeroContainer,
    HeroWrapper,
    ImgWrap,
    InfoRow,
    TextWrapper,
    TopLine,
    Button,
    Img,
    HeaderTopic,
    Statement,
    Stats,
    StatsBox
} from './about.styled'

const About = ({quote,id,quoteHeader,img,number,borderLine,size}) => {
  return (
    <>
        <HeroContainer>
            <HeroWrapper>
                <HeaderTopic>{id}</HeaderTopic>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{quoteHeader}</TopLine>
                            <Statement>{quote}</Statement>
                        </TextWrapper>
                    </Column1>
                    <Column2>

                        {/* {borderLine=> borderLine ?(<Img size={size} src={img}/>): (<Stats borderLine={borderLine}>{number}</Stats>)} */}
                        <ImgWrap>
                            <Img size={size} src={img}/>
                        </ImgWrap>
                        <StatsBox>
                            <Stats borderLine={borderLine}>{number}</Stats>  
                            <Stats borderLine={borderLine}>{number}</Stats>  
                            <Stats borderLine={borderLine}>{number}</Stats>  
                            <Stats borderLine={borderLine}>{number}</Stats>  
                        </StatsBox>
                    </Column2>
                </InfoRow>
            </HeroWrapper>
        </HeroContainer>
    </>
  )
}

export default About