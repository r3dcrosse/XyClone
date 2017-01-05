# Project Name

> XyClone

## Team

  - __Product Owner__: Forrest Murray
  - __Scrum Master__: David Wayman
  - __Development Team Members__: Evan Chang, Fiona Chiang

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

### Development:
1) Set NODE_ENV to 'dev'
2) npm install
3) npm test to ensure changes are safe
4) npm start to bundle
5) go to http://localhost:8000


## Requirements

- Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

### HOW THE ACTIONS WORK

- Add Component
  Only triggered by the sidebar. Once sidebar is clicked, an add component action is triggered. The reducer then maps a new component to the storage and displays it on the editor.js file (editing flexbox)
- Edit Component
  Only triggered by the editor.js file (flexbox). Once an element is clicked, it dispatches an action to get the current ID of the component clicked. The editorComponent.js (editing toolbar) recieves the object clicked, and is then able to change the properties
- changeStyle
  Only triggered by clicking submit on the editor.js file (toolbar). Once clicked, it submits the current properties listed on the inputs and saves it onto the state. The editor.js file (flexbox) will see the changes and change the component accordingly.

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
