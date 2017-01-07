import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

const UserContainer = ({name, style, id, onEditorClick, children, onEditorChildClick}) => {
  return (
    <div className=''>
      <div className='userContainer-flexcontainer' style={style} onClick={onEditorClick} >
        {
          children.map((referenceObject) => {
            console.log(referenceObject);
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

