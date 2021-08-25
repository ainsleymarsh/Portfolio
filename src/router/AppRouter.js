import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from '../components/Nav';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageContact from '../pages/PageContact';
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Confirmation from "../pages/Confirmation";
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';





 function AppRouter() {
  return (
    <Router>
      <ScrollToTop/>
  
   
    <main>
      <div className="wrapper">
      <Navigation/>    
      
        <Switch>
          <Route path ="/" exact><PageHome/></Route>
          <Route path="/page2"><Page2/></Route>
          <Route path="/page3"><Page3/></Route>
          <Route path="/page4"><Page4/></Route>
          <Route path="/confirmation"><Confirmation/></Route>
          <Route path="/about"><PageAbout/></Route>
          <Route path="/contact"><PageContact/></Route>

        </Switch>      
      
      
      <Footer/>
      </div>

      
    </main>
    </Router>
  );
}

export default AppRouter;
