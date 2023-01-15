import styled from "styled-components";

export const ContactContainer = styled.div`
    color: #274a8b;
    width: 100%;
    /* max-width: 1100px; */
    /* margin-top: 40px; */
    /* background-color: aliceblue; */
    /* margin: 0 10px 0 10px; */
    @media screen and (max-width:768px) {
        padding: 20px 0;
        width: 100%;
        
    }
`
export const ContainerCover = styled.div`
    
    display: grid;
    /* grid-template-columns: minmax(100vw, 1fr);
    grid-template-rows: minmax(100vh, 1fr); */
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
    /* width: 100%; */
    /* padding: 0 24px; */
    
`
export const ContactRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: center;
    margin-top: 40px;
`
export const ContactColumn1 = styled.div`
    display: grid;
    grid-template-columns:160px 160px;
    grid-template-rows:160 160px;
    grid-column-gap: 40px;
    /* grid-template-rows: 40px; */
    /* grid-auto-flow: column; */
    justify-content: space-around;
    align-items: center;
    margin-right: 60px;
    padding: 20px;
    width: auto;
    @media screen and (max-width:768px) {
        grid-template-columns:80px 80px;
        grid-template-rows:80px 80px;
        grid-column-gap: 10px;
        /* padding: 20px 0;
        width:400px ; */
        
    }
`
export const ContactBox = styled.div`
    /* border: 1px solid black; */
    box-shadow:0px 0px 11px rgba(0,0,0,.5);
    border-radius:10px;
    background-color: #274a8b;
    color: white;
    padding: 15px;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color:#247 ;
    /* width: 40px; */

    
`
export const ContactColumn2 = styled.div`
    /* border: 1px solid black; */
    width: auto;
    height: 400px;
`