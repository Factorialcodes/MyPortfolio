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
    Img
} from './hero.styled'

const Hero = ({topLine,id,img}) => {
  return (
    <>
        <HeroContainer>
            <HeroWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <BtnWrap>
                            <Button>Hire Me</Button>
                            <Button>Download Cv</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        {/* <HeroImage/> */}
                        <ImgWrap>
                            <Img src={HeroImage}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </HeroWrapper>
        </HeroContainer>
    </>
  )
}

export default Hero