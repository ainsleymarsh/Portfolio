import React, {useEffect} from "react";
import xdPic from '../images/mobile.jpg';
import capstone from'../images/capstone-wireframes.gif';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import video2 from'../images/siteDesign.gif';
import video1 from'../images/addToCart.gif';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Aos from 'aos';
import 'aos/dist/aos.css';





function CapstoneOverview(){

    useEffect(() => {
        Aos.init({
            duration:"1000",
            once: true, 
            
        });
    
    
    }, []);
    return (

        //divs are used to wrap the title and paragraph, this is to add transitions and animations

    <section className="movie-overview">

                    <AliceCarousel autoPlay autoPlayInterval="10000" infinite= "true">
                            <div className="box-wrapper"  data-aos= "fade-zoom-in">

                                    <h2 className="welcome padding-top">Project Description</h2>    
                                <div className="p-container">
                                    <p className= "process-description">This project was built with WordPress, PHP, Sass, and HTML-5. Wireframes and mockups were created in Figma, and Github Desktop was used in order to share and pull code. This project was completed in a group of four. Trello was used for organization and project planning, and daily zoom meetings were held in order to communicate.</p>
                                </div>
                                
                            </div>
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

                        <h3 className="sorting-container">◌ The Design ◌</h3>
                    <div className="video1-container"> 
                                <img className="video1" data-aos= "fade-right" src={video2} alt="capstone video"/>

                            <div className= "paragraph-container">
                                <p className="videop3 wrap" data-aos="fade-zoom-in">The overall design of the site is one to appeal to all different types of users. The colour scheme choosen was to help achieve a clean layout while creating a spacious and orderly feel. This site contains a services, team, blog, and contact page. An Istagram feature was also added and linked to an account. </p>
                            </div>
                    </div>

                         <h3 className="favourites-container">◌ The Cart Feature ◌</h3>    
                    <div className="video1-container">
                    <img className="video2" data-aos= "fade-left" src={video1} alt="capstone video"/>

                        <div className= "paragraph-container">
                            <p className="videop1 wrap" data-aos="fade-zoom-in"> The products offered are also given for different quantity and picing. The client will then be able to select the quantity wanted and add it tho their cart. When added a notification is show that it has been succesfully put into the cart. The customer can then proceed to the checkout where the order will then be processed and a customized email will be sent with the order details. </p>
                        </div>
                     </div>
        
                       
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
                                <h2> Portfolio (In Progress) </h2>
                            
                                <div className = "submit-project">
                                    <button  className="xd-button padding"> <NavLink to ="/page4" className="xd-submit"> View Next Project</NavLink></button>
                            
                                </div>

                             </div> 
                                 
                        
                        
                    

                    </div>
                </div>
            </section> 
    </section>


    )
}
<script type="text/javascript" async src="https://play.vidyard.com/embed/v4.js"></script>
export default CapstoneOverview;