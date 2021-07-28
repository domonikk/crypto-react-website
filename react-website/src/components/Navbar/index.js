import React from 'react';
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink 
} from './NavbarElements' 
import {FaBars} from 'react-icons/fa' 
import {animateScroll as scroll} from 'react-scroll'

const Navbar= ({toggle}) => {  

    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    

    return (
        <>  
           <Nav> 
               <NavbarContainer>
                   <NavLogo to='/' onClick={toggleHome}>Dolla</NavLogo> 
                   <MobileIcon onClick={toggle}>
                       <FaBars/>
                   </MobileIcon> 
                   <NavMenu>
                       <NavItem>
                           <NavLinks 
                           to='about' 
                           smooth={true} 
                           duration={500} 
                           spy={true} 
                           exact='true' o
                           offset={-80}
                           >About</NavLinks>
                       </NavItem> 
                       <NavItem>
                           <NavLinks to='discover'
                            smooth={true} 
                            duration={500}
                            spy={true} 
                            exact='true'
                            offset={-80}
                           >Discover</NavLinks>
                       </NavItem> 
                       <NavItem>
                           <NavLinks to='services' 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                           >Services</NavLinks>
                       </NavItem> 
                       <NavItem>
                           <NavLinks to='signup' 
                            smooth={true} 
                            duration={500}
                             spy={true} 
                             exact='true'
                              offset={-80}
                           >Sign Up</NavLinks>
                       </NavItem>
                   </NavMenu> 
                   <NavBtn> 
                       <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                   </NavBtn>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar;