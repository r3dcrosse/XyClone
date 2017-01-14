let incrementId = 0;

let incrementIdFunc = function() {
  while (storage[incrementId]) {
    incrementId++;
  }
}

export const _components = {
  Navbar: (project = {}, page = null, userId = null) => {
    let defaultCss = {
      "backgroundColor": "yellow",
      "width": "700px",
      "height": "100px",
      "margin": "10px"
    }
    let component = {
        name: 'Default Navbar Name',
        css: defaultCss,
        children: ['/reddit'],
        type: 'Navbar',
        parent: {},
        project: project,
        page: page,
        userId: userId
    }
    incrementIdFunc();
    storage[incrementId] = component;
    return incrementId++;
  },
  Textbox: (project = {}, page = null, userId = null) => {
    let defaultCss = {
      "backgroundColor": "cornflowerblue",
      "width": "100px",
      "height": "100px",
      "margin": "10px"
    };
    let component = {
      name: 'Default Textbox Name',
      text: 'I AM A TEXTBOX I GOT LOADED HAHA',
      css: defaultCss,
      children: [],
      type: 'Textbox',
      parent: {},
      project: project,
      page: page,
      userId: userId
    }
    incrementIdFunc();
    storage[incrementId] = component;
    return incrementId++;
  },
  Image: (project = {}, page = null, userId = null) => {
    let defaultCss = {
      width: '100px',
      height: '100px',
      margin: '10px'
    }
    let component = {
      name: 'Default Image Name',
      src: 'https://smalldogbreeds.net/img/dog.jpg',
      alt: '',
      css: defaultCss,
      type: 'Image',
      project: project,
      page: page,
      userId: userId,
      parent: {},
      children: []
    }
    incrementIdFunc();
    storage[incrementId] = component;
    return incrementId++;
  },
  UserContainer: (project = {}, page = null, userId = null) => {
    let defaultCss = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center',
      backgroundColor: 'red',
      width: '400px',
      height: '400px',
      margin: '10px'
    }
    let component = {
      name: 'Default User Container',
      css: defaultCss,
      children: [],
      type: 'UserContainer',
      project: project,
      page: page,
      userId: userId,
      parent: {}
    }
    incrementIdFunc();
    storage[incrementId] = component;
    return incrementId++;
  },

  GalleryPost: (project = {}, page = null, userId = null) => {
    let defaultCss = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '300px',
      height: '300px',
      margin: '10px'
    };
    let idOfImage = _components["Image"]();
    let idOfTextbox = _components["Textbox"]();
    storage[idOfImage].project = project;
    storage[idOfTextbox].project = project;
    let component = {
      name: 'Default Gallery Post',
      css: defaultCss,
      children: [
                  {componentId: idOfImage, type: 'Image', projectId: project.projectId},
                  {componentId: idOfTextbox, type: 'Textbox', projectId: project.projectId}
                ],
      type: 'GalleryPost',
      parent: {},
      project: project,
      page: page,
      userId: userId
    };
    incrementIdFunc();
    storage[incrementId] = component;
    storage[storage[incrementId].children[0].componentId].parent = {componentId: incrementId, type: 'GalleryPost', projectId: project.projectId};
    storage[storage[incrementId].children[1].componentId].parent = {componentId: incrementId, type: 'GalleryPost', projectId: project.projectId};
    return incrementId++;
  },

  Carousel: (project = {}, page = null, userId = null) => {

    let defaultCss = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center',
      backgroundColor: 'grey',
      width: '400px',
      height: '400px',
      margin: '10px'
    };
    let component = {
      name: 'Default Carousel',
      css: defaultCss,
      children: [],
      show: null,
      type: 'Carousel',
      parent: {},
      project: project,
      page: page,
      userId: userId
    }
    incrementIdFunc();
    storage[incrementId] = component;
    return incrementId++;
  }
}

export const storage = {
  // API => id : component
}
