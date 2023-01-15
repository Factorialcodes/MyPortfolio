import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background-color: #fff;
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`

export const  NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    width: 200px;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;

`

export const MobileView =styled.div`
    display: none;

    @media screen  and (max-width:768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    color: #000;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen  and (max-width:768px){
        display: none;
    }
`


export const NavItem = styled.li`
    height: 80px;

`
export const NavLinks = styled(LinkScroll)`
    display: flex;
    color: #274a8b;
    align-items: center;
    list-style: none;
    text-align: center;
    padding: 0 1rem;
    cursor: pointer;
    height: 100%;

    &:hover{
        border: 1px solid #274a8b;
    }
`