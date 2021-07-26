import React from 'react'; 
import { 
ServicesContainer, 
ServicesH1, 
ServicesWrapper, 
ServicesCard, 
ServicesIcon, 
Icon1, 
ServicesH2, 
ServicesP
} from '../Services/ServicesElements'


const Services = () => {
    return ( 
        <ServicesContainer id="services"> 
          <ServicesH1>Our Services</ServicesH1> 
          <ServicesWrapper>
               <ServicesCard>
                   <ServicesIcon src={Icon1}/> 
                   <ServicesH2>Reduce Expenses</ServicesH2> 
                   <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
               </ServicesCard>
          </ServicesWrapper>
            
        </ServicesContainer>
 
    );
};

export default Services
