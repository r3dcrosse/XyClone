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
- DeleteComponent
- AddChildren

### STEPS FOR CREATING COMPONENTS:

DO THESE STEPS IN ORDER:

  SIDEBAR STEPS/COMPONENT CREATION:
  - Inside src/cache/ComponentCache.js file
    - Create the default values for your component
    - Increment the incrementId (That is the componentId which is passed around)
  - Inside src/mainPagesComponents/Sidebar.js file
    - Create a button for your component
    - Add the "onSidebarClick" onClick property, passing in your created component type.
  - Inside src/components/userComponents dir
    - Create the component (React Component!) in a new file
    - Make sure you pass in the properties of the components you will need! (Along with EditorClick)
    - If component is nested
      - DOCUMENTATION WIP
  - Inside src/components/mainPagesComponents/userComponent.js
    - Import the component created
    - Add a switch option for your component type
    - Initialize any extra properties that you might need from storage[componentId] <-- This will grab your created component once its created.

  CONTEXTMENU/FOCUS FOR PROPERTIES
  - Inside src/components/contextComponents dir
    - Create a new file for a context menu for your component (Copy a previous context template)
    - Give it initial state values in constructor. This is so it won't bug out when loaded in beginning
    - componentDidMount can grab the properties of the currently focused element. Use this.props.currElement.'property' to grab your element property
    - componentWillReceiveProps will grab the updated props once you click submit.
    - Add your wanted props to be modified as inputs.
  - Inside src/containers/contextContainers dir
    - Create a new file for the context component container (Copy a previous template)
      - Don't copy UserContainerContextMenu. That has a children property (Unless your component is nested)
    - Import the new context component. Change the names to fit for a container
  - Inside src/components/mainPagesComponents/context.js file
    -

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
