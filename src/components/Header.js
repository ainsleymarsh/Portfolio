
import React, {useEffect} from "react";
import headerPic2 from '../images/ainsley-pic3.png';
import small from '../images/ainsley-pic-small.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//svg image code is applied in this file


const Header = () => { 

    useEffect(() => {
        Aos.init({
            duration:1200
            
        });
    
    
    }, []);

    
    return (

    <header className= "container-header">

      

         <section id="cf"> 

         <div className="float-header">
           
            <div className="picture-container">
             <img className="header-img" id="header" data-aos= "fade-zoom-in" src={small} srcSet={`${small} 800w, ${headerPic2} 1000w`} alt = "header hero"/>
            </div>

                    <div className= "paragraph-description">

                        <h1 data-aos= "fade-right" className="name">Ainsley Marsh</h1>
                        <h2 data-aos= "fade-right" className="skills">Web Designer & Developer</h2>
                        <h3 data-aos= "fade-right" className="job">Front End Web Developer</h3>
                    </div>

                
                </div>
          <section className= "social-media">
                
            <div data-aos= "fade-zoom-in" className="github-link">
       
                <a href onClick={()=> window.open("https://github.com/ainsleymarsh")} className="github">
                    <FontAwesomeIcon icon={faGithub}  size = '2x'/>
                </a>

                <a href onClick={()=> window.open("https://www.linkedin.com/in/ainsley-marsh-736156203/?originalSubdomain=ca")} className="github">
                    <FontAwesomeIcon icon={faLinkedin}  size = '2x'/>
                </a>
            </div>   
        
        </section>
        
        </section> 
       
    </header>
    )
}

export default Header;