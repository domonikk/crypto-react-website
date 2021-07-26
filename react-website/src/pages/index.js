import React, {useState} from 'react' ;
import Sidebar from '../components/Sidebar' ;
import Navbar from '../components/Navbar' ;
import HeroSection from '../components/HeroSection';  
import InfoSection from '../components/InfoSection/index';
import { homeObjOne } from '../components/InfoSection/Data';
 





const Home = () => {  
    //function to open and close toggle for mobile view
    const [isOpen, setIsOpen] = useState(false); 

    const toggle =()=> {
        setIsOpen(!isOpen);
    };  
   


    return(
       <>  
          <Sidebar isOpen={isOpen} toggle={toggle}/>  
          <Navbar toggle={toggle}/>  
          <HeroSection/>    
          <InfoSection  {...homeObjOne}/>                             
          
                
       </>
    );
};

export default Home;
