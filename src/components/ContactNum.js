
import { useEffect } from 'react'; 
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from 'aos';
import 'aos/dist/aos.css';

  //This contact form is for the home page, ux, and capstone


const ContactNum = () => { 
    
useEffect(() => {
    Aos.init({
        duration:"1000",
        once: true, 
        
    });


}, []);

    return (
        <section className= "social-media-bottom space-between">
            <h3 className="about-title padding-bottom-less">Like What you see?</h3> 
             <div className="github-link-bottom padding-bottom-less">
               
                <a href onClick={()=> window.open("https://github.com/ainsleymarsh")} className="github">
                    <FontAwesomeIcon icon={faGithub}  size = '2x'/>
                </a>

                <a href onClick={()=> window.open("https://www.linkedin.com/in/ainsley-marsh-736156203/?originalSubdomain=ca")} className="github">
                    <FontAwesomeIcon icon={faLinkedin}  size = '2x'/>
                </a>
            </div> 
                <div className= "email-link space-bottom">
                    <a href="mailto:ainsleymarsh1999@gmail.com" target="_blank" rel="noopener noreferrer" className="email">ainsleymarsh1999@gmail.com</a>
                </div>

                

           
        
        </section>
        );
}

export default ContactNum;