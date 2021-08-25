import large from '../images/laptop-movies.png';
import medium from '../images/medium-movies.png';
import small from '../images/small-movies.png';
import React, {useEffect} from "react";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
               <img className="movie-img" data-aos= "fade-zoom-in" id="header" src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} alt = "desktop-movie"/>
     
          </div>
         
          <div className="button-center">
                        <button className="movie-button" data-aos= "fade-up"onClick={()=> window.open("https://ainsleymarsh.ca/discoveryflix/")}> View LiveSite</button>
          </div> 

          <div className="skillset padding-top">
                <h2 className="skills">Skill Sets</h2>

               <div className="box-wrapper bg-color padding">
                    <div className="box1" size = '3x'>

                         <FontAwesomeIcon icon={faJs}  size = '2x'/>
                         <div data-aos= "fade-zoom-in" className="js-hover">
                               JS
                         </div>

                    </div>
                    <div className="box2">
                         <FontAwesomeIcon icon={faHtml5}  size = '2x'/>
                         <div data-aos= "fade-zoom-in" className="js-hover">
                              HTML
                          </div>
            
                
                    </div>

                     <div className="box3" >
                         <FontAwesomeIcon icon={faReact}  size = '2x'/>
                         <div data-aos= "fade-zoom-in" className="js-hover">
                              React
                          </div>
                
                     </div>
                    <div className="box4" >
                          <FontAwesomeIcon icon={faSass}  size = '2x'/>

                          <div data-aos= "fade-zoom-in" className="js-hover">
                              Sass
                          </div>
               
                
                     </div>
           
               </div>
          </div>        
        
    </section>
    )
}

export default MovieDatabase;