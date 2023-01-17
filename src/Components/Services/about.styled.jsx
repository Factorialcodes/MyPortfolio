import styled from "styled-components"

export const HeroContainer =  styled.div`
    color: #fff;
    /* background-color: rgba(34, 85, 221, 0.333); */
    /* margin-top: 50px; */
    /* margin-bottom: 50px; */
    height: auto;
    @media screen and (max-width:768px) {
        padding: 100px 0;
        width: 100%;
        margin-top: 50px;
    /* margin-bottom: 50px; */
    }
`
export const HeroWrapper =  styled.div`
    color: #274a8b;
    /* display: grid; */
    z-index:1;
    /* height: 400px; */
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    /* padding: 0 24px; */
    /* justify-content: center; */
    /* background-color: green; */

`
export const InfoRow =  styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;
    @media screen and (max-width:768px){
        margin-bottom: 100px;
        /* grid-template-areas:${({imgStart}) => (imgStart? `'col1' 'col2'` : `'col1' 'col1' col2 col2;`)}; */
    }
 
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    /* padding: 0 15px; */
    grid-area: col1;
    /* border: 1px solid black; */

    padding: 20px;
    width: 500px;
    `
export const Column2 = styled.div`
    /* display: grid; */
    width: 400px;
    grid-area:col2;
    column-gap: 10px;
    row-gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    
    @media screen and (max-width:768px) {
        /* margin-bottom: 20px; */
        /* display: flex; */

    }

`

export const TextWrapper= styled.div`
    /* max-width:540px; */
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine= styled.div`
    
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: capitalize;
    margin-bottom: 16px;

    @media screen and (max-width:768px){
        /* grid-template-areas:${({imgStart}) => (imgStart? `'col1' 'col2'` : `'col1' 'col1' col2 col2;`)}; */
        text-align: center;
    }
` 

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    /* height: 100%; */
    /* border: 1px solid black; */
`
export const StatsBox = styled.div`
    display: grid;
    grid-template-columns:120px 120px;
    grid-template-rows:120 120px;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
`
export const Img = styled.img`
    display: ${({img}) => img ? 'none' : 'flex' };
    width: ${({size}) => size};
    

    @media screen and (max-width:768px) {
        max-width:  ${({small_size}) => small_size};
    }
`
export const Button = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    /* padding: 0 35px 0 35px; */
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
`
export const ColumnSocials = styled.h4`
    
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width:768px){
        font-size: 14px;
    }

`
export const HeaderTopic = styled.div`
    color: #274a8b ;
    font-size: 40px;
    font-weight: 600;
    display: flex;
    justify-content: center;
`
export const Statement = styled.p`
    color: #274a8b ;
    font-size: 16px;

    @media screen and (max-width:768px) {
        text-align: center;
    }

`
export const Stats = styled.div`
    display: ${({borderLine}) => (!borderLine? 'none' : 'block')};;
    border: ${({borderLine}) => (borderLine? '1px solid black' : '')};
    /* border-radius: 1px solid #274a8b; */
    padding: 40px;
    font-size: 40px;
    text-align: center;
    font-weight: 600;
    box-shadow:0px 0px 11px rgba(0,0,0,.5);
    background-color: #274a8b;
    color: ghostwhite;
    
`