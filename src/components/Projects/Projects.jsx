import React, { Component } from 'react';
import Header from '../Header/Header.jsx';

export default class Projects extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      let className = !this.props.pages.projects ? "projectsContainer flyOut" : "projectsContainer";
      
      return (
         <div className="pageContainer">
            <Header />

            <div className="noOverflow">
               <div className={className}>
                  PROJECTS
               </div>
            </div>
         </div>
      );
   }
}