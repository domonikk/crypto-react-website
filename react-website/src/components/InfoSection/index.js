import React from 'react';
import {
InfoContainer,
InfoRow,
InfoWrapper,
Column1,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap, 
Column2, 
Img, 
ImgWrap
} from '../InfoSection/InfoElements.js'; 
import { Button} from '../ButtonElement.js';

const InfoSection = ({lightBg,lightText,id,imgStart,topLine,headline,darkText,description,primary,dark,buttonLabel,img,alt}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1> 
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine> 
                        <Heading  lightText={lightText}> {headline} </Heading> 
                        <Subtitle darkText={darkText}> {description} </Subtitle> 
                        <BtnWrap>
                            <Button to="home" 
                              smooth={true}  
                              duration={500} 
                              spy={true} 
                              exact='true' 
                              offset={-80} 
                              primary = {primary ? 1 : 0} 
                              dark = {dark ? 1 : 0}
                            > 
                              {buttonLabel} 
                            </Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1> 
                    <Column2> 
                      <ImgWrap> 
                         <Img src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection



