let incrementId = 0;

export const _components = {
  Navbar: ( ) => {
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
        parent: {}
    }
    storage[incrementId] = component;
    return incrementId++;
  },
  Textbox: ( ) => {
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
      parent: {}
    }
    storage[incrementId] = component;
    return incrementId++;
  },
  Image: ( ) => {
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
      parent: {},
      children: []
    }
    storage[incrementId] = component;
    return incrementId++;
  },
  UserContainer: () => {
    let defaultCss = {
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
      parent: {}
    }
    storage[incrementId] = component;
    return incrementId++;
  }
}

export const storage = {
  // API => id : component
}