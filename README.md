# Project Name

> XyClone
> Link to demo the app: [https://xyclone.herokuapp.com](https://xyclone.herokuapp.com) (takes a couple seconds to load)

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

> Login through Facebook and create a new project in XyClone. 
> Build out how you want your website to look in the project editor.
> Save the project, then hit download.
> Unzip the file, cd into the directory, run npm install then npm start to get your site up and running locally.

### Development:
```
git clone https://github.com/r3dcrosse/XyClone && cd XyClone
npm install
npm start
```
Navigate to [http://localhost:8000](http://localhost:8000) to run XyClone locally.

## Requirements

- Node 6.9.1
- npm (~v3)
- MongoDB

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

  - Inside src/cache/ComponentCache.js file
    - Create the default values for your component inside the object _components
    - Increment the incrementId (That is the componentId which is passed around)
  - Inside src/components/Editor/EditorComponents/Sidebar.js file
    - Create a button for your component
    - Add the "onSidebarClick" onClick property, passing in your created component type.
  - Inside src/components/Editor/UserComponents/ directory
    CREATING THE COMPONENT FILE
      - Create the component (React Component!) in a new file
      - Make sure you pass in the properties of the components you will need! (Along with EditorClick)
      - If component is nested
        - Add the onEditorChildClick property
        - Create a container for your nested component inside same folder
    CREATING THE CONTEXT FILE
      - Create the context menu for your component (Copy a previous context template)
      - Give it initial state values in constructor.
      - Make sure componentDidMount / componentWillReceiveProps assigns this.props/newProps accordingly to the attributes wanted
    CREATING THE CONTEXT CONTAINER FILE
      - Create the context menu container for your component (Copy a previous template)
        - if component is nested, use UserContainerContextContainer as a template
      - import the Context file made from the previous step (from CONTEXT FILE CREATION)
  - Inside UserCompoennt.js
    ADD YOUR CASE FOR YOUR COMPONENT
  - Inside src/components/Editor/Context.js file
    - Import the container created from the CONTEXT CONTAINER FILE step
    - Add a switch case for the context component created

### Roadmap

View the project roadmap [here](https://github.com/ScintillantShallots/XyClone/issues)


## Contributing

See [CONTRIBUTING.md](readme/_CONTRIBUTING.md) for contribution guidelines.
