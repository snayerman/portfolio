import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Home from '../Home/Home.jsx';
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import About from '../About/About.jsx';

export default class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      return (
         <div className="container">
            <div className="sideBarContainer">
               <Sidebar {...this.props} />
            </div>
            
            <Switch>
               <Route exact path='/' render={() => <Home {...this.props} />} />
               <Route path='/home' render={() => <Home {...this.props}/>} />
               <Route path='/skills' render={() => <Skills {...this.props}/>} />
               <Route path='/projects' render={() => <Projects {...this.props}/>} />
               <Route path='/about' render={() => <About {...this.props}/>} />
            </Switch>
         </div>
      );
   }
}