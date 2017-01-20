import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache';
import saveToSessionStorage from '../../../../cache/StorageCache';

const UserContainer = ({name, style, components, currProjectId, currProject, currComponentId, id, onEditorClick, children, onEditorChildClick, swapFlag, loginStatus, swapComponents}) => {
  let currComponentStyle;
  if (currComponentId === id) {
    currComponentStyle = 'currComponent-style'
  } else if (swapFlag){
    currComponentStyle = 'toggle-swap-class';
  } else {
    currComponentStyle = '';
  }
  let stopSideProp = (e) => {
      e.stopPropagation();
      if (swapFlag) {
        let swapHandler = new Promise(function(resolve, reject) {
          swapComponents(id, currProjectId);
          resolve(saveToSessionStorage(components, currProject, loginStatus.id));
        });
      } else {
        onEditorClick();
      }
    }
  return (
    <div className=''>
      <div className={'userContainer-flexcontainer ' + currComponentStyle} style={style} onClick={stopSideProp} >
        {
          children.map((referenceObject) => {
            return (
              <UserComponent key={referenceObject.componentId} type={referenceObject.type} componentId={referenceObject.componentId} child={true} onEditorChildClick={()=> onEditorChildClick(referenceObject.componentId)}/>
            )
          }
        )}
      </div>
    </div>
  )
}

export default UserContainer;

// onEditorClick={() => onEditorClick(idReference)}

      // <div className='userContainer-flexcontainer' style={style} onClick={onEditorClick}>

