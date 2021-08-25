
import Skills from '../components/Skills';
import Project from '../components/Project';
import Header from '../components/Header';
import ContactNum from '../components/ContactNum';




const PageHome = () => {
    return (
    
    

      
        <div className="wrapper">
           
            <title> Ainsley Marsh | UX/UI </title>
            <meta name="description" content="UX/UI designer. Recently graduated from BCIT FRont End Web Developer Program. A portfolio showcasing my work and projects " />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
      
        
        
        <Header/>
        <Skills/>     
        <Project/>
        <ContactNum/>
        
        </div>
      
    
      
    );
  }
  
  export default PageHome