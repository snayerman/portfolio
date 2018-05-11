import React, { Component } from 'react';

export default class About extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      let className = !this.props.pages.about ? "AboutContainer flyOut" : "AboutContainer";
      
      return (
         <div className="noOverflow">
            <div className={className}>
               ABOUT
            </div>
         </div>
      );
   }
}