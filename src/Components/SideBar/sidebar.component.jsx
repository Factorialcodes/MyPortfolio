import React from 'react'
import { CloseIcon
    ,Icon
    ,SidebarContainer
    ,SidebarWrapper 
    ,SidebarMenu
    ,SidebarLinks
} from './sidebar.styled'

const SideBar = ({isOpen, toggle}) => {
    const menu = [
        { id: 1, name: "Home" ,linkUrl:''},
        { id: 2, name: "About",linkUrl:'/About' },
        { id: 3, name: "Service", linkUrl:'/service'},
        { id: 4, name: "Contact", linkUrl:'/contact' },
        { id: 5, name: "Hire me", linkUrl:'/hireme' }
      ];
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                {menu.map(({id,name,linkUrl}) =>(
                    <SidebarLinks key={id} to={`${linkUrl}`} >{name}</SidebarLinks>
                ))}
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar