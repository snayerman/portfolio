import React, { Component } from 'react';

export default class Projects extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      let className = !this.props.pages.projects ? "projectsContainer flyOut" : "projectsContainer";
      
      return (
         <div className="noOverflow">
            <div className={className}>
               PROJECTS
            </div>
         </div>
      );
   }
}