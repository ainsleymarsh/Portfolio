import React, {useEffect} from "react";
import { NavLink } from 'react-router-dom';
import capstonePic from '../images/mobile.png';
import video2 from'../images/desktop-wireframes.gif';
import video1 from'../images/mobile-wireframes.gif';
import video3 from'../images/sortfeature.gif';
import video4 from'../images/favouritesfeature.gif';
import video5 from'../images/singlepage.gif';
import video6 from'../images/linkfunctionality2.gif';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Aos from 'aos';
import 'aos/dist/aos.css';




function MovieOverview(){

    useEffect(() => {
        Aos.init({
            duration:"1000",
            once: true, 
            
        });
    
    
    }, []);
    return (

        
    <section className="movie-overview">

                <AliceCarousel autoPlay autoPlayInterval="10000" infinite= "true">
                       
                    <div className="box-wrapper padding-top"  data-aos= "fade-zoom-in">

                            <h2 className= "welcome">Project Description</h2>    
                        <div className="p-container">
                            <p className= "process-description">This project was built with React, SCSS, and HTML. An external database the TMDB allowed access to the images and overview of each movie. This project was completed in a team of three. Wireframes were built in Figma and Mockups were built in Adobe XD. This project was more coding based rather than UX based. No report was made during this project</p>
                        </div> 
                          
                    </div>
                    
                    <div className="box-wrapper padding-top"  data-aos= "fade-zoom-in">

                        <h2 className="welcome">Setup</h2>   
                        <div className="p-container">
                            <p className= "process-description"> We set up with React and created a new Git repository in order to be able to push and pull code. The work was divided into different sections and we met up daily to discuss our progress and what we were struggling on. Near the end of the project we all sat together and designed the small details as a team</p>
                        </div>

                    </div>
                    
                
                <div className="box-wrapper padding-top"  data-aos= "fade-zoom-in">
                    
                    <h2 className="welcome">Goal</h2>
                    <div className="p-container">
                        <p className= "process-description"> To create a functional and appealing movie database with ideal user experience and ease of use</p>
                    </div> 
                    
                  
                </div>

                <div className="box-wrapper padding-top" data-aos= "fade-zoom-in">
                    
                    <h2 className="welcome">BrainStorm</h2>   
                       <div className="p-container">
                           <p className= "process-description">As a group of three we started with mockups and design in XD. We discussed the different user interface and what our end goal was for this website. Even though not yet achieved our hopes were to create a login feature so as to make a more ideal user experience. We proceeded in building a site plan and styleguide so as to figure out the ideal colour scheme, fonts, and layout for the optimal user experience. Logo was developed in Adobe Illustrate</p>
                       </div>
                 
               </div>

                <div className="box-wrapper padding-top"  data-aos= "fade-zoom-in">
                  <h2 className="welcome">Challenge</h2>
                    <div className="p-container">
                        <p className= "process-description">A challenge faced was the navigation header. This was pulled from CodePen and the code had a few functional problems. This led to a horizontal scrollbar because of the absolute positioning. It took a while to troubleshoot the issue, but after experimenting with the header on another project we were able to adjust the code</p>
                    </div>
                
                </div>

                <div className="box-wrapper padding-top"  data-aos= "fade-zoom-in">
                 
                    <h2 className="welcome">Solutions</h2>
                    <div className="p-container">
                        <p className= "process-description"> One thought was to find a different code from codepen, but after researching and testing the issue we were able to troubleshoot and find a solution</p>
                    </div>
              
                </div>

                

                    
                       
                      
                      
                </AliceCarousel>
        
               
        <div className= "paragraph-wrap padding-top">
            
            <Tabs>
            <TabList className="tabs">
            <Tab>Wireframes</Tab>
            <Tab>Mockups</Tab>
           
            </TabList>

             <TabPanel className="tab-1">
           
                 <h3 className="mobile-container">◌ Mobile ◌</h3>
                        <div className="video2-container">
            
                            <img className="video1"  data-aos= "fade-right" src={video1} alt="mobile wireframes movie" />
                                <div className= "paragraph-container">
                                    <p className="videop1 wrap" data-aos="fade-zoom-in"> Wireframes were created in figma. This wireframe shows the use of the hamburger menu. We prototyped the wireframe in such a way that when the hamburger menu and drop down menu was clicked the menu and drop down would be responsive</p>
                                </div>
                        </div>
                                <h3 className="desktop-container">◌ Desktop ◌</h3>
                        <div className="video1-container">
                        
                            <img className="video2"  data-aos= "fade-left"src={video2} alt="desktop wireframes movie" />
                            <div className= "paragraph-container">
                                    <p className="videop1 wrap"data-aos="fade-zoom-in"> Desktop wireframes were first created in XD and transfered over to figma. This wireframe show the home page, the about page, and the favourites. Also the wireframes are prototype to show the responsiveness of the site</p>
                            </div>
                        </div>
                
                </TabPanel>

                <TabPanel>
        
                    <h3 className="sorting-container">◌ The Sorting Feature ◌</h3>
                    <div className="video1-container"> 
                                <img className="video1" data-aos= "fade-right" src={video3} alt="sorting feature movie" />
                            <div className= "paragraph-container">
                                <p className="videop3 wrap" data-aos="fade-zoom-in">The sorting feature was created to sort the movies dependant on the URL of the movies that was pulled from the TMDB API. This allows the movies to be sorted whether in Upcoming, Popular, Now Playing, and Top Rated.
                                By using TMDB's API movies can be further sorted by genre's, actors, and rating</p>
                            </div>
                    </div>

                         <h3 className="favourites-container">◌ The Favourites Feature ◌</h3>    
                    <div className="video1-container">
                        <img className="video2" data-aos= "fade-left" src={video4} alt="favourite feature movie" />

                        <div className= "paragraph-container">
                            <p className="videop1 wrap" data-aos="fade-zoom-in"> The favourite's feature allows users to favourite movies on the home page or single page and brings the favourited movies into one location, on the favourites page. This information is stored so that when you leave the page website your favourited movie will still be there. The favourited movie can be removed on the Home page, Single Page, or Favourites page. Once removed the heart will be unfilled </p>
                        </div>
                     </div>
        
                         <h3 className="single-container">◌ The Single Page ◌</h3>
                    <div className="video1-container">
            
                        <img className="video1" data-aos= "fade-right" src={video5} alt="single page movie" />
                         <div className= "paragraph-container">
                             <p className="videop1 wrap" data-aos="fade-zoom-in"> The Single page can be accessed from the home page from hovering over a movie and clicking on the more info. The Single page shows the movies hero image, the rating, the overview, and the cast for the movie. The API allows for the correct picture, rating, and cast to be matched with each movie </p>
                         </div>
                    </div>
                        <h3 className="navigation-container">◌ The Navigation Header ◌</h3>
                     <div className="video1-container">
                             <img className="video2 wrap" data-aos= "fade-left" src={video6} alt="navigation movie" />
                             <div className= "paragraph-container">
                                 <p className="videop1 wrap" data-aos="fade-zoom-in"> This shows the different types of pages on the webssite through the navigation. On mobile the navigation is a slider which flexes into a row when hitting the desktop point. The navigation is also accessible on a fixed footer making it easier for usability especially in mobile</p>
                             </div>
                      </div> 

                        </TabPanel>
                        
                
                </Tabs> 

        </div>


         
        <section className= "movie-margin-top">

        <div className="project-header">



            <div className="portfolio-wrap"> 
                <div className="portfolio-center">
                    <img data-aos= "fade-zoom-in"className="portfolio-img" src={capstonePic} alt="capstone project" />
                </div>
                <div className="img-class-portfolio">

                        <h2>Capstone</h2>
                       
                    <div className = "submit-project">
                        <button className="movie-button padding"> <NavLink to ="/page3" className="portfolio-submit">View Next Project</NavLink></button>
                    
                    </div>

                </div>     
                
            
            </div>
        </div>
        </section> 
    </section>

    


    )
}

export default MovieOverview;