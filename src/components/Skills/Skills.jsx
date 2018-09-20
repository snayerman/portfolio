import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import Header from '../Header/Header.jsx';
import SkillCard from './SkillCard.jsx';

import FrontEndAv from '../../images/FrontEnd.png';
import BackEndAv from '../../images/BackEnd.png';
import DatabasesAv from '../../images/Databases.png';
import LanguagesAv from '../../images/Languages.png';

export default class Skills extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   renderSkillCards(animated) {
      let skills = [
         {name: "Front End", avatar: FrontEndAv, list: ["ReactJS", "React Native", "VueJS", "Angular 2/4", "JavaScript", "jQuery", "HTML5", "CSS3/SASS"]},
         {name: "Back End", avatar: BackEndAv, list: ["NodeJS", "Flask", "Django", "PHP", "Ruby on Rails"]},
         {name: "Databases", avatar: DatabasesAv, list: ["MongoDB", "MySQL", "PostgreSQL", "GraphQL"]},
         {name: "Languages", avatar: LanguagesAv, list: ["C++ (C98/C11)", "C", "Java", "Python", "Assembly"]}
      ];

      return (
         <div className={"skillCards"+animated}>
            {skills.map((skill, idx) => {
               return (
                  <SkillCard
                     key={idx}
                     skill={skill.name}
                     avatar={skill.avatar}
                     list={skill.list}
                  />
               );
            })}
         </div>
      );
   }

   render() {
      let animated = !this.props.pages.skills ? " flyOut" : "";
      
      return (
         <div className="pageContainer">
            <Header />

            {/* <div className="noOverflow">            
               <div className={"skillsContainer"+animated}>
                  <div className="skillsText">Skills</div>
                  <Divider />
               </div>
            </div> */}

            {this.renderSkillCards(animated)}
         </div>
      );
   }
}