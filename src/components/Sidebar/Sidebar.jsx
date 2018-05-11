import React, { Component } from 'react';
import { AppBar, IconButton, FontIcon } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const appBarStyle = {
   backgroundColor: "#1D1F21",
   height: "100%",
   width: "64px",
   flexDirection: "column",
   marginRight: "10px",
   paddingRight: "0px !important",
   paddingLeft: "0px !important"
};

const rightStyle = {
   display: "flex",
   flex: 1,
   marginTop: "0px !important",
   marginRight: "0px !important",
   marginLeft: "0px !important"
}

export default class Sidebar extends Component {
   constructor(props) {
      super(props);

      this.state = {
         hover: {
            home: false,
            skills: false,
            projects: false
         }
      };
   }

   getCurrentPage() {
      for(var page in this.props.pages) {
         if(this.props.pages[page])
            return page;
      }
   }

   transition(ev, page) {
      ev.preventDefault();
      let currentPage = this.getCurrentPage();

      this.props.selectPageForTransition(currentPage, page);

      setTimeout(() => {
         this.props.history.push('/'+page);
      }, 1000);
   }

   renderLogo() {
      return (
         <div className="logo">
            {<div className="bigLetter"><p>S</p></div>}

            {/* <div className="name"><p>Sam</p></div> */}
         </div>
      );
   }

   hoverIcon(icon) {
      if(!this.state.hover[icon.name]) {
         let hover = this.state.hover;
         hover[icon.name] = true;

         this.setState({hover});
      }
   }

   exitIcon(icon) {
      if(this.state.hover[icon.name]) {
         let hover = this.state.hover;
         hover[icon.name] = false;

         this.setState({hover});
      }
   }

   renderIcons(icons) {
      let iconClass = "material-icons pageIcon";
      let textClass = "";
      let page = this.props.location.pathname.split("/")[1];

      return icons.map(icon => {
         let hovering = this.state.hover[icon.name];
         let activeTab = page === icon.name;
         let tmpClass = iconClass;

         if(!activeTab)
            tmpClass += " themeBlue";
         else
            tmpClass += " cyan";

         return (
            <a key={icon.name} href={icon.name} onClick={(ev) => this.transition(ev, icon.name)}>
               <IconButton>
                  <FontIcon
                     className={hovering ? tmpClass + ' fadeout' : tmpClass + ' fadein'}
                     onMouseOver={() => this.hoverIcon(icon)}
                     onMouseOut={() => this.exitIcon(icon)}
                  >
                     {icon.icon}
                  </FontIcon>
               </IconButton>
               <p className={hovering ? 'fadein' : 'transparent fadeout'}>
                  {icon.text}
               </p>
            </a>
         );
      })
   }

   renderNavigation() {
      return (
         <div  className="navigationGroup">
            <div className="pages">
               {this.renderIcons([
                  {name: "home", text: "HOME", icon: "home"},
                  {name: "skills", text: "SKILLS", icon: "settings"},
                  {name: "projects", text: "PROJECTS", icon: "cloud"},
                  {name: "about", text: "ABOUT ME", icon: "person"}
               ])}
            </div>

            <div className="socialMedia">
               <div className="navIcons">
                  {/* http://zavoloklom.github.io/material-design-iconic-font/cheatsheet.html#social */}
                  <a href="https://github.com/snayerman"></a>
                  <a href="https://www.linkedin.com/in/samuel-nayerman-307b99118/"></a>
               </div>
            </div>
         </div>
      );
   }

   render() {
      return (
         <AppBar
            className="AppBar"
            titleStyle={{display: "none"}}
            iconElementLeft={this.renderLogo()}
            iconElementRight={this.renderNavigation()}
            iconStyleRight={rightStyle}
            style={appBarStyle}
         />
      );
   }
}