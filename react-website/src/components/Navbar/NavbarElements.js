import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`  
   background: #000; 
   margin-top:-10px; 
   margin-left: -10px; 
   margin-right: -8px;
   height: 90px; 
   display: flex; 
   jutify-contetnt: center; 
   align-items: center; 
   font-size: 1rem; 
   position: stsicky; 
   top:0; 
   z-index:10; 


   @media screen and (max-width:768px){
       transition: 0.8s all ease;
   } 
`  

export const NavbarContainer = styled.div` 
  display: flex; 
  justify-content: space-between; 
  height: 100%; 
  z-index: 1; 
  width: 100%; 
  padding: 0 24px; 
  max-width: 1100px;  
  font-family: 'Encode Sans', sans-serif; 
  
`  

export const NavLogo = styled(LinkR)` 
  color: #fff; 
  justify-self: flex-start; 
  cursor: pointer; 
  font-size: 1.5rem; 
  display: flex; 
  aligh-items: center; 
  margin-left: 50px;  
  margin-top: 30px;
  font-weight:bold; 
  text-decoration:none; 
  font-family: 'Encode Sans', sans-serif; 
`; 

export const MobileIcon= styled.div` 
    display: none;  

    @media screen and (max-width:768px){
        display: block; 
        position: absolute; 
        top:0; 
        right:0; 
        transform: translate(-100%, 60%); 
        font-size: 1.8rem; 
        cursor: pointer;  
        color: #fff;

    } 
` 

export const NavMenu = styled.ul` 
    display: flex; 
    align-items: center; 
    list-style: none; 
    text-align: center; 
    margin-left: 22px;

    @media screen and (max-width: 768px){
        display: none; 
    }
` 

export const NavItem =styled.li` 
  height: 80px;  
`

//react scroll link 
export const NavLinks = styled(LinkScroll)` 
   color: #fff; 
   display: flex; 
   align-items: center; 
   text-decoration: none; 
   padding: 0 1rem;
   height: 100%; 
   cursor: pointer;   
   font-family: 'Encode Sans', sans-serif; 
   

   &.active{
       border-bottom: 3px solid #01bf71; 
   }
` ;

export const NavBtn = styled.nav`
   display: flex; 
   align-items: center; 


   @media screen and (max-width: 768px){
       display: none; 
   }
` 

export const NavBtnLink = styled(LinkR)`
   border-radius: 50px; 
   background: #01bf71; 
   white-space: nowrap; 
   padding: 10px 22px; 
   color: #010606; 
   font-size: 16px; 
   outline: none; 
   border: none; 
   cursor: pointer;  
   transition: all 0.2s ease-in-out; 
   text-decoration: none;   
   font-family: 'Encode Sans', sans-serif; 

   &:hover{
       transition: all 0.2s ease-in-out; 
       background:#fff; 
       color:#010606;
   }

`


