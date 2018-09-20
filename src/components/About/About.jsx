import React, { Component } from 'react';
import Header from '../Header/Header.jsx';

export default class About extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      let className = !this.props.pages.about ? "AboutContainer flyOut" : "AboutContainer";
      
      return (
         <div className="pageContainer">
            <Header />

            <div className="noOverflow">
               <div className={className}>
                  ABOUT
               </div>
            </div>
         </div>
      );
   }
}