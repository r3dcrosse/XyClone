window.incrementId = 0;

export const _components = { 
    navbar: ( name, links, css ) => {
        let component = { 
            css: css,
            links: links,
            name: name  
        }

        storage.incrementId = component;
        window.incrementId++; 

        return component; 
    }
}

export const storage = { 
    // API => id : component
}