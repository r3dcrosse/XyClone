import React from 'react';
import SettingsMenuContainer from './SettingsMenuContainer.js';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardTitle, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const WebsitesBox = ({ project, changeCurrProject, editBodyClick, handleDeleteProject, userId }) => {
  let enterEditor = () => {
    // send dispatch action to redux to change the current project
    changeCurrProject(project.projectId);
    // change
    editBodyClick(project.projectId);
    let sessionProjectId = JSON.parse(sessionStorage.getItem('projectStates')).length !== 0 ? JSON.parse(sessionStorage.getItem('projectStates'))[0].projectId : -1234
    if (project.projectId !== sessionProjectId) {
      sessionStorage.setItem('projectStates', JSON.stringify([]));
      sessionStorage.setItem('counter', JSON.stringify(0));
    }
    browserHistory.push('/editor');
  }

  return (
    <Card className='individual-website-block'>
      <CardMedia style={{
        paddingTop: '5px',
        paddingLeft: '5px',
        paddingRight: '5px'
      }}
      >
        <img src={ project.imgUrl } />
      </CardMedia>
      <CardTitle
        title={ project.title }
        subtitle={ project.description }
      />
      <CardActions>
        <RaisedButton
          label="Edit Site"
          onClick={ enterEditor }
          primary={ true }
        />
        <CardActions className='individual-website-block-buttons'>
          <RaisedButton
            label="Edit Site"
            onClick={ enterEditor }
            primary={ true }
          />
          <SettingsMenuContainer
            project={ project }
            handleDeleteProject={ handleDeleteProject }
            userId={ userId }
          />
        </CardActions>
      </Card>
  )
};

export default WebsitesBox;


// class WebsitesBox extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       title: this.props.project.name,
//       subtitle: this.props.project.description,
//     };
//   };
//   //project, changeCurrProject
//   enterEditor = () => {
//     // send dispatch action to redux to change the current project
//     changeCurrProject(project.projectId);
//     // GRAB ALL THE COMPONENTS THAT CORRESPOND TO THE PROJECT.projectId THROUGH A DISPATCH
//     browserHistory.push('/editor')
//   }

//   render () {
//     return (
//       <Card>
//         <CardMedia style={{
//           paddingTop: '5px',
//           paddingLeft: '5px',
//           paddingRight: '5px'
//         }}>
//           <img src="http://placecorgi.com/280/160" />
//         </CardMedia>
//         <CardTitle title={this.state.title} subtitle={this.state.subtitle} />
//         <CardActions>
//           <RaisedButton label="Edit Site" onClick={this.eneterEditor.bind(this)} primary={true} />
//           <SettingsMenu />
//         </CardActions>
//       </Card>
//     )
//   }
// };

// export default WebsitesBox;
=======
>>>>>>> WIP with component swapping
