window.incrementId = 0;

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
        links: null,
        type: 'Navbar'
    }
    storage[incrementId] = component;
    return window.incrementId++;
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
      css: defaultCss,
      type: 'Textbox'
    }
    storage[incrementId] = component;
    return window.incrementId++;
  }
}

export const storage = {
  // API => id : component
}