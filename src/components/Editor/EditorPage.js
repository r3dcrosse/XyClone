import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import EditorContainer from './EditorComponents/Containers/EditorContainer';
import SidebarContainer from './EditorComponents/Containers/SidebarContainer';
import ContextSidebarContainer from './EditorComponents/Containers/ContextSidebarContainer';

require("../../Basic.less");

class EditorPage extends Component {
  constructor (props) {
    super(props);
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

  handleAddNewPage () {
    let projectId = this.props.currProjectId;
    this.props.onAddPage('Test', projectId);
    this.props.onChangePage('Test');
  }

  handleChangePage (page) {
    this.props.onChangePage(page);
  }

  render () {
    // Filter out tabs pertaining to projectID
    let pages = this.props.pages.filter((page) => {
      return page.projectId === this.props.currProjectId;
    });

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
            <Tabs style={{marginLeft: '180px'}}>
              {
                pages.map((element) => {
                  return (
                    <Tab label={element.page} onActive={this.handleChangePage.bind(this, element.page)} key={element.page}>
                      <EditorContainer />
                    </Tab>
                  )
                })
              }
              <Tab label='+' onActive={ this.handleAddNewPage.bind(this) } />
            </Tabs>
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
