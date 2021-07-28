import React from 'react' 
import {
 FooterContainer,
 FooterWrap, 
 FooterLinkTitle, 
 FooterLink,
 FooterLinksContainer,
 FooterLinkItems,
 FooterLinksWrapper, 
 SocialLogo,
 SocialIconLink, 
 SocialMedia, 
 SocialMediaWrap, 
 SocialIcons, 
 WebsiteRights
} from './FooterElements.js'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa' 
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => { 
    const toggleHome = () =>{
        scroll.scrollToTop();
    };
    
    return (
        <FooterContainer>
            <FooterWrap> 
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it Works</FooterLink>
                            <FooterLink to="/signin">Testimonial</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorship</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/">Submit Videos</FooterLink>
                            <FooterLink to="/">Ambassador</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> 
                <SocialMedia> 
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            dolla 
                        </SocialLogo> 
                        <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights> 
                        <SocialIcons> 
                            <SocialIconLink href="/" target="_blank" arie-label="facebook"> <FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arie-label="twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arie-label="instagram"><FaInstagram/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer> 
    );
};

export default Footer
