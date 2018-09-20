import React, { Component } from 'react';
import Typist from 'react-typist';
import Header from '../Header/Header.jsx';

export default class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         topBlock: this.animationLoaded(),
         bottomBlock: this.animationLoaded(),
         name: this.animationLoaded()
      };
   }

   animationLoaded() {
      return window.sessionStorage.getItem("homeAnimLoaded") ? true : false;
   }

   codeStart() {
      let {currentLine, typing} = this.state;
      const block = (
         <div className="code codeStart">
            <div>{`import React from 'react';`}</div>
            
            <Typist.Delay ms={500} />
            <div>{`import { render } from 'react-dom';`}</div>
            
            <Typist.Delay ms={500} />
            <br />
            
            <Typist.Delay ms={500} />
            <div>{`render(`}</div>
            
            <div className="indented">{`<div className="superAwesomeCoder">`}</div>
         </div>
      );

      return !this.animationLoaded() ?
         <Typist avgTypingDelay={45} onTypingDone={() => this.setState({topBlock: true})} cursor={{show: false}}>
            {block}
         </Typist>
      :
         block
   }

   myName() {
      let nameClass = "bigLetter comic indented2";
      const block = <div className={this.animationLoaded() ? nameClass : nameClass + ' tada'}>SAM NAYERMAN</div>;

      return !this.animationLoaded() ?
         <Typist avgTypingDelay={75} onTypingDone={() => this.setState({name: true})} cursor={{show: false}}>
            <Typist.Delay ms={1000} />
            {block}
            <Typist.Delay ms={500} />
         </Typist>
      :
         block
   }

   codeEnd() {
      const block = (
         <div className="code codeEnd">
            <Typist.Delay ms={500} />
            <div className="indented">{'</div>, document.getElementById("react-root")'}</div>
            
            <div>{`);`}</div>
         </div>
      );
      
      return !this.animationLoaded() ?
         <Typist avgTypingDelay={45} onTypingDone={() => {this.setState({bottomBlock: true}); window.sessionStorage.setItem("homeAnimLoaded", true);}} cursor={{show: false}}>
            {block}
         </Typist>
      :
         block
   }

   render() {
      let className = !this.props.pages.home ? "homeContainer flyOut" : "homeContainer";
      console.log("State: ", this.state);
      
      return (
         <div style={{flex: "1"}} className="noOverflow">
            {/* <Header /> */}

            <div className={className}>
               <div className="codeBlock">
                  {this.codeStart()}
                  {this.state.topBlock ? this.myName() : null}
                  {this.state.name ? this.codeEnd() : null}
               </div>
            </div>
         </div>
      );
   }
}