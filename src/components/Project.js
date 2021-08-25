
import React, {useEffect} from "react";
import capstone from '../images/mobile.png';
import large from '../images/laptop-movies.png';
import uxPic from '../images/mobile.jpg';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const Project = () => { 

    useEffect(() => {
        Aos.init({
            duration:"1000",
            once: true, 
            
        });
    
    
    }, []);

    
    return (
        <section className= "project-header">
                    <h2 className="projects padding-top space-between">Projects</h2>
            <AliceCarousel autoPlay autoPlayInterval="10000" infinite= "true">
                <div className="project-wrap">  

                        <div className="portfolio-center">
                        
                            <img  data-aos= "fade-zoom-in" className="project-img" src={large} alt="movie database project" />
                        </div>
                        <div data-aos= "fade-zoom-in" className="img-class">
                            <h2>Movie Database</h2>
                            <p> A Movie Database created with React, JS, CSS-3, and HTML-5</p> 
                            
                            <div className = "submit-project">
                            <button className="movie-button"> <NavLink to ="/page2" className="project-submit"> View Project</NavLink></button>
                            
                            </div>

                        </div>     
                        
                        
                    

                </div>

                    <div className="portfolio-wrap"> 
                        <div className="portfolio-center">
                            <img data-aos= "fade-right"className="portfolio-img" src={capstone} alt="capstone project" />
                        </div>
                        <div data-aos= "fade-zoom-in" className="img-class-portfolio">
                                <h2>Capstone</h2>
                                <p> A Website created with WordPress, PHP, JS, CSS-3, and HTML-5</p> 
                                
                            <div className = "submit-project">
                                <button className="movie-button"> <NavLink to ="/page3" className="portfolio-submit">View Project</NavLink></button>
                            
                            </div>

                        </div>     
                        
                        
                    

                     </div>


                    <div className="xd-wrap">  
                            <div className="portfolio-center">   
                                <img data-aos= "fade-right"  className="xd-img" src={uxPic} alt="ux project" />
                            </div>     
                            <div data-aos= "fade-zoom-in" className="img-class-xd">
                                <h2>Portfolio (In Progress)</h2>
                                <p> A New Portfolio created with HTML-5, CSS-3, and JS</p> 
                            
                                <div className = "submit-project">
                                    <button  className="movie-button"> <NavLink to ="/page4" className="xd-submit"> View Project</NavLink></button>
                            
                                </div>

                             </div>     
                        
                        
                    

                    </div>
           

                </AliceCarousel>
        </section>
    );
}

export default Project;