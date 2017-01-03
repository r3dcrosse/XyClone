import React, { Component } from 'react';
import { PropTypes } from 'react';

require("../basic.less");

const EditorComponent = ({currComponentId}) => (
  <div>
    <div> {currComponentId} </div>
  </div>
)

export default EditorComponent;

