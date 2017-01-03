window.incrementId = 0;

export const _components = {
  Navbar: ( name, links, css ) => {
    let component = {
        name: name,
        css: css,
        links: links
    }
    storage[incrementId] = component;

    return window.incrementId++;
  },
  Textbox: ( name, css ) => {
    let component = {
      name: name,
      css: css
    }
    storage[incrementId] = component;

    return window.incrementId++;
  }
}

export const storage = {
  // API => id : component
}