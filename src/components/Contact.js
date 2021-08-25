import { useState } from 'react'; 
import 'aos/dist/aos.css';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Redirect} from 'react-router-dom';



//this contact page connects to the backend php


function App(){

   const [status, setStatus] = useState("Submit");
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [success, setSuccess] = useState(false);
   
   const handleSubmit = async (e) => {
      e.preventDefault();
    /*  setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };*/
      const details = { name: name, email: email, message: message  }
      let response = await fetch("http://localhost:8080/form/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      //body:"Hello"
      });
      setStatus("Submit");
      let result = await response.json();
      console.log(result);


      if (result.message === 'Success'){
         setSuccess(true);
      }

    };

    function onNameChange(e){
      setName(e.target.value)
    }

    function onEmailChange(e){
      setEmail(e.target.value)
    }

    function onMessageChange(e){
      setMessage(e.target.value)
    }

    



    return(

      <div className="flex-container">
        {success === true && <Redirect to= "/confirmation"/> } 

          <div className="contact-description" >
              <h1 className="welcome">Say Hi!</h1>
              <p>If you like to reach me or have any further inquiries you can contact me on my email, linkedin, or the contact form! Hope to hear from you soon! </p>
            <div className="email-contact" >
                <a href="mailto:ainsleymarsh1999@gmail.com" target="_blank" rel="noopener noreferrer" className="email-contact">ainsleymarsh1999@gmail.com</a>
            </div>
            <div className="github-contact">
            <a href onClick={()=> window.open("https://github.com/ainsleymarsh")} className="github">
                    <FontAwesomeIcon icon={faGithub}  size = '3x'/>
                </a>

                <a href onClick={()=> window.open("https://www.linkedin.com/in/ainsley-marsh-736156203/?originalSubdomain=ca")} className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin}  size = '3x'/>
                </a>
            </div>

          </div>  
          
          <div className="contact-container">
        
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
              <label htmlFor="name">Name</label>
            <div className="form-group">
              
                <input type="text" className="form-control" id="name" value={name} onChange={onNameChange} />
            </div>
                <label htmlFor="exampleInputEmail1">Email address</label>
            <div className="form-group">
                
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={onEmailChange} />
              
            </div>
                <label className="message-title" htmlFor="message">Message</label>  
            <div className="form-group">
                <textarea className="form-control" id="message" value={message} onChange={onMessageChange} />
            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                
               
          </form>
          </div>

       
      </div>

    );

}

export default App;