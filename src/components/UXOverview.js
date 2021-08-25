import React, {useEffect} from "react";
import xdPic from '../images/laptop-movies.png';
import capstone from'../images/capstone-wireframes.gif';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Aos from 'aos';
import 'aos/dist/aos.css';





function PortfolioOverview(){

    useEffect(() => {
        Aos.init({
            duration:"1000",
            once: true, 
            
        });
    
    
    }, []);
    return (

        //divs are used to wrap the title and paragraph, this is to add transitions and animations

    <section className="movie-overview"> 
    
                            <div className="box-wrapper"  data-aos= "fade-zoom-in">

                                    <h2 className="welcome padding-top">Project Description</h2>    
                                <div className="p-container padding-bottom">
                                    <p className= "process-description">An even better portfolio in the making! With aos and screen transitions. Wireframes/Mockups have been thoroughly made in Figma! Coming soon </p>
                                </div>
                                
                            </div>

                    {/* <AliceCarousel autoPlay autoPlayInterval="10000" infinite= "true">
                           
                            <div className="box-wrapper"  data-aos= "fade-zoom-in">
                                <h2 className="welcome padding-top">BrainStorm</h2>   
                                <div className="p-container">
                                    <p className= "process-description">As a group of four we started with mockups and design in Figma. We discussed how to give the best user experience by making alternative designs and making our site accessible for all users. This included experimenting with different types of designs for the services in order to find a design pleasing to the eye and accessible. On mobile we added a navigation in the footer in order for the user to be able to easily access the navigation instead of scrolling to the top of the webpage </p>
                                </div>
                            </div>

                            <div  data-aos= "fade-zoom-in">
                                    <h2 className="welcome padding-top">Setup</h2>   
                                <div className="p-container">
                                    <p className= "process-description"> We set up the tasks that were needed to be completed in Trello. First we discussed the sitemap and content plan for the site. Then we all worked on the functionality of the site in PHP. We used the backend of WordPress in order to upload featured images and create content and used PHP to update it onto the site </p>
                                </div> 
                                
                            </div>

                            <div  data-aos= "fade-zoom-in">
                                  <h2 className="welcome padding-top">Goal</h2>
                                <div className="p-container">
                                    <p className= "process-description"> To create a functional gym and personal training website. The primary audience is targeted to everyone promoting body positivity and being inviting and positive to all clients. The gym's features includes PreNatal, Nutrition, Individual Personal Training, and Rehab classes. The overall site is clean and inviting. At first our group was leaning towards a gym with a dark background and a crisp hero image. However, since we wanted to target the website towards everyone, our website is clean and crisp with subtle blue highlights, and an underlining tone of light grey.  </p>
                                </div>
                            </div>

                            <div  data-aos= "fade-zoom-in">   
                                    <h2 className="welcome padding-top">Challenge</h2>
                                <div className="p-container">
                                    <p className= "process-description">A challenge faced was figuring out how to target the individual blog posts rather than the entire blog page. At first I went into the element trying to target the specific element rather than finding the individual page class name and then targeting the class within the page. I wasn't able to visually see my code in the code editor because of how the blog posts were set up with no ACFs, but after undertsanding how to target each element in the inspector the styling and overall functionality was easier to acheive </p>
                               </div>
                            
                             </div>

                             <div  data-aos= "fade-zoom-in">   
                               <h2 className="welcome padding-top">Solutions</h2>
                                    <div className="p-container">
                                        <p className= "process-description"> At first I spent quite a bit of time understanding how to flex or use grid on the blog posts since I could not add divs. I researched and ended up having to discuss my confusion with my prof, even though this may have appeared simple discussing this issue with my prof helped me be able to visualize how to style WordPress more efficiently. When the time came for me to style the 404 page this went more quickly than before, and I finally understood how and what I was looking for </p>
                                    </div>
                             </div>
                            
                                    
                            
                   </AliceCarousel>


            <Tabs className="padding-top">
            <TabList className="tabs">
            <Tab>Site Planning</Tab>
            <Tab>Wireframes</Tab>
          
            </TabList>

             <TabPanel className="tab-1">
           
                 
                    <div className="process">
                         
                            <AliceCarousel  autoPlay autoPlayInterval="10000" infinite= "true">
                            <div className="box-wrapper padding-top"  data-aos= "fade-zoom-in">
                                    <h2 className="welcome">Overview</h2>    
                                <div className="p-container">
                                    <p className= "process-description">This business is looking for a fresh, new website to make their services more accessible for new and existing members. The goal of this website is to show potential clients that there is more to health and fitness than just aesthetics and that a healthy lifestyle is for EVERYONE. This website will help the company grow their customer base by promoting the company’s safe and motivating environment.</p>
                                </div>

                             </div>

                             <div className="box-wrapper padding-top"  data-aos= "fade-zoom-in">
                                    <h2 className="welcome">Target Audience</h2>    
                                <div className="p-container">
                                    <p className= "process-description">The target audience of this business is anyone who wants to improve their health and fitness but doesn’t want to focus on the numbers on the scale or the inches of their waist. Anybody who may feel uncomfortable in a traditional gym or training environment focused on aesthetics rather than performance goals. </p>
                                </div>

                             </div>
                             <div className="box-wrapper padding-top"  data-aos= "fade-zoom-in">
                                    <h2 className="welcome">Next Steps</h2>    
                                <div className="p-container">
                                    <p className= "process-description">nce the business has received this Memo of Understanding they will approve the agreed upon requirements of the project or request any changes to the document. Once approved, Our Team will move on to the next deliverable of the project.</p>
                                </div>

                             </div>
                            </AliceCarousel>

                        <h2 className= "mobile-container">Mockups</h2>
                       
                    </div>


                </TabPanel>

                

                <TabPanel>

                <h3 className="mobile-container">◌ Desktop ◌</h3>
                        <div className="video1-container">
                        
                            <img data-aos="fade-right" className= "video1"src={capstone} alt="desktop wireframes movie" />
                            <div className= "paragraph-container">
                                    <p className="videop1 wrap" data-aos="fade-zoom-in"> Wireframes were created in Figma. The wireframes are based off of what was created in the site architecture and content plan. First we created the mobile wireframes and then went to desktop. After the completion of the wireframes we found what WordPress pages would correlate to each section of the wireframe page</p>
                            </div>
                        </div>
        
                    

                </TabPanel>
                        
                            
                
                </Tabs> 

                      
            <section className= "movie-margin-top">

                <div className="project-header">



                     <div className="xd-wrap">  
                            <div className="portfolio-center">   
                                <img data-aos= "fade-zoom-in"  className="xd-img" src={xdPic} alt="ux project" />
                            </div>     
                            <div data-aos= "fade-zoom-in" className="img-class-xd">
                                <h2>Movie Database </h2>
                            
                                <div className = "submit-project">
                                    <button  className="xd-button padding"> <NavLink to ="/page2" className="xd-submit"> View Next Project</NavLink></button>
                            
                                </div>

                             </div>     
                        
                        
                    

                    </div>
                </div>
            </section>  */}
    </section>


    )
}

export default PortfolioOverview;