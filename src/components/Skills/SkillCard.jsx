import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

export default class SkillCard extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }
   
   render() {
      let containerClass = this.props.skill.split(" ").join('');
      let imgSrc = "../../images/"+containerClass;

      return (
         <div className={containerClass+" Card"}>
            <Card>
               <CardMedia
                  overlay={<CardTitle title={this.props.skill} subtitle="Frameworks/Languages" />}
               >
                  <img src={this.props.avatar} style={{minHeight: '3em'}} alt="" />
               </CardMedia>

               <CardText style={{maxHeight: "45vh", overflow: "auto"}}>
                  <List>
                     {this.props.list.map((item, idx) => {
                        return <ListItem key={idx} primaryText={item}/>
                     })}
                  </List>
               </CardText>
            </Card>
         </div>
      );
   }
}