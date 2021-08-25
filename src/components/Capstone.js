
import React, {useEffect} from "react";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'aos/dist/aos.css';
import large from '../images/mobile.png';
import 'react-tabs/style/react-tabs.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



function MovieDatabase(){



    
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

         <div className="button-center">
                        <button className="movie-button" data-aos= "fade-up"onClick={()=> window.open("https://ainsleymarsh.ca/fitness/")}> View LiveSite</button>
          </div> 
        
          <div className="skillset padding-top">
                <h2 className="skills">Skill Sets</h2>

               <div className="box-wrapper bg-color padding">
                    <div className="box1" size = '3x'>

                         <FontAwesomeIcon icon={faWordpress}  size = '2x'/>
                         <div data-aos= "fade-in" className="js-hover">
                               WordPress
                         </div>

                    </div>
                    <div className="box2">
                         <FontAwesomeIcon icon={faHtml5}  size = '2x'/>
                         <div data-aos= "fade-in" className="js-hover">
                              HTML
                          </div>
            
                
                    </div>

                     <div className="box3" >
                         <FontAwesomeIcon icon={faPhp}  size = '2x'/>
                         <div data-aos= "fade-in" className="js-hover">
                              Php
                          </div>
                
                     </div>
                    <div className="box4" >
                          <FontAwesomeIcon icon={faSass}  size = '2x'/>

                          <div data-aos= "fade-in" className="js-hover">
                              Sass
                          </div>
               
                
                     </div>
           
               </div>
          </div>        
        
    </section>
    )
}

export default MovieDatabase;