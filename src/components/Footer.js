
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Footer(){
    return (
        <footer>
         
            <div className="center-icons">
                <Link className="display-flex-contact" to= "/">
                    <FontAwesomeIcon icon={faHome} className="icon" size = '1x'/>
                    Home
                </Link>

                <Link className="display-flex-contact" to= "/about">
                    <FontAwesomeIcon icon={faUser} className="icon" size = '1x'/>
                    About
                </Link>
       
                <Link className="display-flex-contact" to= "/contact">
                     <FontAwesomeIcon icon={faEnvelope} className="icon" size = '1x'/> 
                     Contact
                </Link>
             </div>

                 <p className="copyright">&copy; 2021 Ainsley Marsh </p>
         
        </footer>
    )
}

export default Footer;