import React, { Component } from 'react';

export default class Skills extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      let className = !this.props.pages.skills ? "skillsContainer flyOut" : "skillsContainer";
      
      return (
         <div className="noOverflow">
            <div className={className}>
               SKILLS
            </div>
         </div>
      );
   }
}