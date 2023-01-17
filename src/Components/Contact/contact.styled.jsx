import styled from "styled-components";

export const ContactContainer = styled.div`
    color: #274a8b;
    width: 100%;

    @media screen and (max-width:768px) {
        padding: 20px 0;
        width: 100%;
        
    }
`
export const ContainerCover = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;

`
export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const ContactRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* margin-top: 40px; */
`
export const ContactColumn1 = styled.div`
    display: grid;
    grid-template-columns:160px 160px;
    grid-template-rows:160 160px;
    grid-column-gap: 40px;
    justify-content: space-around;
    align-items: center;
    margin-right: 60px;
    padding: 20px;
    width: auto;
    @media screen and (max-width:768px) {
        grid-template-columns:80px 80px;
        grid-template-rows:80px 80px;
        grid-column-gap: 10px;
    }
`
export const ContactBox = styled.div`
    box-shadow:0px 0px 11px rgba(0,0,0,.5);
    border-radius:10px;
    background-color: #274a8b;
    color: white;
    padding: 15px;
    display: block;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: whitesmoke ;
    text-align: center;

    &:hover{
        transform: scale(1.1);
        transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.55);
    }
    @media screen and (max-width:768px) {
        grid-template-columns:40px 40px;
        grid-template-rows:40px 40px;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
    
`
export const ContactColumn2 = styled.div`
    width: auto;
    height: 400px;
`