import React from "react";
import MovieDatabase from '../components/MovieDatabase';
import MovieOverview from '../components/MovieOverview';
import ContactGit from '../components/ContactGit';




const Page2 = () => {

    
  return (
 
      <div className="wrapper">
       
        <title> Ainsley Marsh | Movie Database</title>
        <meta name="description" content="Movie Database created with React, SCSS, and HTML. A BCIT project. Pulling the API from TMDB " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     
      
      <MovieDatabase/>
      <MovieOverview/>
      <ContactGit/>
      
      </div>

   
  );
}

export default Page2