import React, { Component } from 'react';
import UserComponent from '../components/UserComponent';
import { storage } from '../cache/componentCache'

const UserContainer = ({name, style, id, onEditorClick, children, onEditorChildClick}) => {
  return (
    <div className=''>
      <div className='userContainer-flexcontainer' style={style} onClick={onEditorClick} >
        {
          children.map((idReference) => {
            console.log('CHILDREN MAPPING. WHAT IS IDREFERENCE?', idReference);
            return (
              <UserComponent key={idReference} type={storage[idReference].type} componentId={idReference} child={true} onEditorChildClick={()=> onEditorChildClick(idReference)}/>
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

