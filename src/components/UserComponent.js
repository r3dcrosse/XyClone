import React, { Component } from 'react';
import { PropTypes } from 'react'

const UserComponent = ({ onClick, componentId }) => (
  <li onClick={onClick}>
    ID: {componentId}
  </li>
)

UserComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  componentId: PropTypes.string.isRequired
}

export default UserComponent