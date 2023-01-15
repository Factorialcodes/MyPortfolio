import styled from "styled-components";

export const FormWrapper = styled.div`
    /* position: relative; */
    margin: 45px 0;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 460px;
    height: auto;
    /* background-color: yellow ; */

`
export const TextInput = styled.input`
    background: none;
    color: #247a8b;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid black;
    margin: 25px 0;
`
export const TextLabel = styled.label`
    /* color: $sub-color; */
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
`