import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import EditorContainer from './EditorComponents/Containers/EditorContainer';
import SidebarContainer from './EditorComponents/Containers/SidebarContainer';
import ContextSidebarContainer from './EditorComponents/Containers/ContextSidebarContainer';

require("../../Basic.less");

class EditorPage extends Component {
  constructor () {
    super();
    this.state = {
      open: false
    };
  }

  changeOpenState () {
    console.log('CHANGING THE OPEN STATE');
    this.setState({
      open: !this.state.open
    })
  }

  backToDashboard () {
    browserHistory.push('/dashboard')
  }

  render () {
    return (
    <div>
      <AppBar
        title="XyClone | Editor"
        className='AppBar-EditorPage'
        onLeftIconButtonTouchTap={ this.changeOpenState.bind(this) }
        iconElementRight={ <FlatButton label='Dashboard' /> }
        onRightIconButtonTouchTap={ this.backToDashboard.bind(this) }
      />
      <div className='editor-container'>
        <div>
          <SidebarContainer openState={ this.state.open }/>
        </div>
        <div className='editor-inPage'>
          <EditorContainer />
        </div>
        <div>
          <ContextSidebarContainer />
        </div>
      </div>
    </div>
    )
  }

}


export default EditorPage;
