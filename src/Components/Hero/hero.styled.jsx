import styled from "styled-components"

export const HeroContainer =  styled.div`
    color: #fff;
    /* background:; */

    @media screen and (max-width:768px) {
        padding: 100px 0;
    }
`
export const HeroWrapper =  styled.div`
    display: grid;
    z-index:1;
    height: 460px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    /* padding: 0 24px; */
    justify-content: center;
    /* background-color: green; */

`
export const InfoRow =  styled.div`
    display: flex;
    flex-wrap: wrap;
    /* grid-auto-columns: minmax(auto, 1fr); */
    align-items: center;
    justify-content: center;
    /* background-color: yellow; */

    @media screen and (max-width:768px){
        /* grid-template-areas:${({imgStart}) => (imgStart? `'col1' 'col2'` : `'col1' 'col1' col2 col2;`)}; */
    }
    
    `
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    
    @media screen and (max-width:768px){
        align-items: center;

    }
    /* border: 1px solid black; */
    `
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    /* border: 1px solid black; */
    grid-area:col2;
`

export const TextWrapper= styled.div`
    max-width:540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width:768px){
    /* grid-template-areas:${({imgStart}) => (imgStart? `'col1' 'col2'` : `'col1' 'col1' col2 col2;`)}; */
    text-align: center;
    align-items: center;
}
`
export const TopLine= styled.div`
    color: #274a8b;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    

` 

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 768px){
        justify-content: center;

    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img = styled.img`
    max-width: 360px;
    height: auto;

    @media screen and (max-width: 1000px){
        max-width: 200px;

    }
`
export const Button = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: #274a8b;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 5px;

    &:hover{
        border: 2px solid #274a8b ;
        background-color: white ;
        color: #274a8b;
    }

    @media screen and (max-width: 768px){
        align-items: center;

    }
    
`
export const ColumnSocials = styled.div`
    color: #274a8b ;
    font-size: 20px;
    font-weight: 500;

`
export const AboutContainer= styled.div`
    color: #274a8b ;
    font-size: 20px;
    font-weight: 500;

`