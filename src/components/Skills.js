
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'aos/dist/aos.css';
   

const Skills = () => {
    
    return (
        <section className="skillset">
                <h2 className="skills padding-top">Skill Sets</h2>

            <div className="box-wrapper">
                <div className="box-1" size = '2x'>

                    <FontAwesomeIcon icon={faJs}  size = '2x'/>
           
                    <div data-aos= "fade-in" className="js-hover">
                        JS
                    </div>
                
                
                </div>
                <div className="box-2">
                    <FontAwesomeIcon icon={faHtml5}  size = '2x'/>
        
                    <div data-aos= "fade-in" className="js-hover">
                        HTML-5
                    </div>
                    
                    
                </div>

                <div className="box-3">
                    <FontAwesomeIcon icon={faReact}  size = '2x'/>

                    <div data-aos= "fade-in" className="js-hover">
                        React
                    </div>
                    
                
                    
                </div>
                <div className="box-4">
                    <FontAwesomeIcon icon={faSass}  size = '2x'/>

                    <div data-aos= "fade-in" className="js-hover">
                        SASS
                    </div>
                    
                    
                </div>
                <div className="box-6">
                    <FontAwesomeIcon icon={faWordpress}  size = '2x'/>
            
                    <div data-aos= "fade-in" className="js-hover">
                        WordPress
                    </div>
                    
                    
                </div>
        
                <div className="box-9">
                    <FontAwesomeIcon icon={faPhp}  size = '2x'/>
                    
                    <div data-aos= "fade-in" className="js-hover">
                        PHP
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Skills;