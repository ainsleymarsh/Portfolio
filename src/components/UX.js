
import React, {useEffect} from "react";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'aos/dist/aos.css';
import large from '../images/portfolio-large.jpg';
import 'react-tabs/style/react-tabs.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



function Portfolio(){



    
    useEffect(() => {
     Aos.init({
         duration:"1000",
         once: true, 
         
     });
 
 
 }, []);

    return (

    <section className="content-wrapper">
         
         <div className="image-container-movie">
            <img className="movie-img" data-aos= "fade-zoom-in" id="header" src={large} alt = "desktop-movie"/>
   
         </div>

         {/* <div className="button-center">
                        <button className="movie-button" data-aos= "fade-up"onClick={()=> window.open("https://ainsleymarsh.ca/fitness/")}> View LiveSite</button>
          </div>  */}
        
          <div className="skillset padding-top">
                <h2 className="skills">Skill Sets</h2>

               <div className="box-wrapper bg-color padding">
                    <div className="box1" size = '3x'>

                         <FontAwesomeIcon icon={faJs}  size = '2x'/>
                         <div data-aos= "fade-in" className="js-hover">
                               Js
                         </div>

                    </div>
                    <div className="box2">
                         <FontAwesomeIcon icon={faHtml5}  size = '2x'/>
                         <div data-aos= "fade-in" className="js-hover">
                              HTML
                          </div>
            
                
                    </div>

                    <div className="box4" >
                          <FontAwesomeIcon icon={faCss3}  size = '2x'/>

                          <div data-aos= "fade-in" className="js-hover">
                              CSS-3
                          </div>
               
                
                     </div>
           
               </div>
          </div>        
        
    </section>
    )
}

export default Portfolio;