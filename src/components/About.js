import React, {useEffect} from "react";
import profilePic from '../images/profilePic3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => { 

    useEffect(() => {
        Aos.init({
            duration:1200
            
        });
    
    
    }, []);

    
    return (   
      
    <section data-aos="fade-zoom-in" className= "aos-container">
        

        <div className= "about-container">
        <h2 className= "welcome">Hello There!</h2>
            <img className="about-img" id="about" src={profilePic} alt="thought bubble" />
          
        </div>

        <div className= "about-container">
            <h3 className ="welcome">❦ About Me ❦</h3>
              <p className="about-description">Hello! Welcome to my portfolio! My name is Ainsley Marsh and I'm currently in BCIT's Front End Web Development Program. I have always loved designing and art which I was very pleased to find correlates with UX/UI and also the coding with HTML and CSS. I enjoy learning new coding platforms so as to expand my knowledge of coding, but also be able to try new designs and functionality that gives the user/client the optimal user experience. </p>  
            <h3 className ="about-title">❦ Favourite Part of Web Development ❦</h3>
            
               <p className="about-description"> My favourite technical skill in Front End Web Development is CSS and React. Both skills go hand in hand in creating a functional and smooth website. The React allows for smooth transitions and the CSS allows for design    </p> 
            <h3 className ="about-title">❦ Outside of Coding ❦</h3>
              <p className="about-description">In my freetime I enjoy piano, fibre arts, puzzles, and of course coding! I live in Toronto </p> 
              
        </div> 


        
     </section>

        
    )
}

export default About;