import React, { Component } from 'react';
import Typist from 'react-typist';

export default class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         topBlock: false,
         bottomBlock: false,
         name: false
      };
   }

   codeStart() {
      let {currentLine, typing} = this.state;

      return (
         <div className="code codeStart">
            <Typist avgTypingDelay={45} onTypingDone={() => this.setState({topBlock: true})} cursor={{show: false}}>
               <div>{`import React from 'react';`}</div>
               
               <Typist.Delay ms={500} />
               <div>{`import { render } from 'react-dom';`}</div>
               
               <Typist.Delay ms={500} />
               <br />
               
               <Typist.Delay ms={500} />
               <div>{`render(`}</div>
               
               <div className="indented">{`<div className="superAwesomeCoder">`}</div>
            </Typist>
         </div>
      );
   }

   myName() {
      return (
         <Typist avgTypingDelay={75} onTypingDone={() => this.setState({name: true})} cursor={{show: false}}>
            <Typist.Delay ms={1000} />
            <div className="bigLetter comic indented2 tada">SAM NAYERMAN</div>
            <Typist.Delay ms={500} />
         </Typist>
      );
   }

   codeEnd() {
      return (
         <Typist avgTypingDelay={45} onTypingDone={() => this.setState({bottomBlock: true})} cursor={{show: false}}>
            <div className="code codeEnd">
               <Typist.Delay ms={500} />
               <div className="indented">{'</div>, document.getElementById("react-root")'}</div>
               
               <div>{`);`}</div>
            </div>
         </Typist>
      );
   }

   render() {
      let className = !this.props.pages.home ? "homeContainer flyOut" : "homeContainer";
      
      return (
         <div className="noOverflow">
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