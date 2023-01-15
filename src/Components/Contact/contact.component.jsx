import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { Column1, Column2, ColumnSocials, HeaderTopic, HeroContainer, HeroWrapper, Img, InfoRow } from '../Services/about.styled'
import { ContactBox, ContactColumn1, ContactColumn2, ContactContainer, ContactRow, ContactWrapper, ContainerCover } from './contact.styled'

const Contact = ({img, socialTwitter, size,sizeImg}) => {
  return (
    <>
        <ContactContainer>
            <ContainerCover>
                <ContactWrapper>
                    <HeaderTopic>Contacts</HeaderTopic>
                </ContactWrapper>
                <ContactRow>
                    <ContactColumn1>
                        {/* <ContactBox>Hi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit voluptatibus necessitatibus libero, omnis pariatur ullam quasi repellendus doloremque quibusdam!</ContactBox>
                        <ContactBox>Hi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit voluptatibus necessitatibus libero, omnis pariatur ullam quasi repellendus doloremque quibusdam!</ContactBox>
                        <ContactBox>Hi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit voluptatibus necessitatibus libero, omnis pariatur ullam quasi repellendus doloremque quibusdam!</ContactBox> */}
                        <ContactBox>
                            <Img size={sizeImg} src={socialTwitter}/>
                            <ColumnSocials>Twitter</ColumnSocials>
                        </ContactBox>
                        <ContactBox>
                            <Img size={sizeImg} src={socialTwitter}/>
                            <ColumnSocials>Twitter</ColumnSocials>
                        </ContactBox>
                        <ContactBox>
                            <Img size={sizeImg} src={socialTwitter}/>
                            <ColumnSocials>Twitter</ColumnSocials>
                        </ContactBox>
                        <ContactBox>
                            <Img size={sizeImg} src={socialTwitter}/>
                            <ColumnSocials>Twitter</ColumnSocials>
                        </ContactBox>
                        
                    </ContactColumn1>
                    <ContactColumn2>
                        <Img size={size} src={img}/>
                    </ContactColumn2>
                </ContactRow>
            </ContainerCover>
        </ContactContainer>
    </>
  )
}

export default Contact