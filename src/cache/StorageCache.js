
import { storage } from './ComponentCache';

let composeProject = function(components, project, userId) {
  let projectStorage = {};
  console.log(project.projectId);
  console.log(storage, 'STORAGE FROM COMPOSE PROJECT');
  for (let key in storage) {
    console.log(key);
    if (!key.includes('body')) {
      if (storage[key].project.projectId === project.projectId) {
        console.log('adding this corresponding storage component into projectStorage', storage[key]);
        projectStorage[key] = storage[key];
      }
    } else {
      if (key === 'body' + project.projectId) {
        projectStorage[key] = storage[key];
      }
    }
  }
  let projectComponents = components.filter(component => {
    return component.projectId === project.projectId;
  });

  return {
    projectId: project.projectId,
    userId: userId,
    title: project.title,
    components: projectComponents,
    storage: projectStorage,
    description: project.description
  }
}

let saveToSessionStorage = function(components, project, userId) {
  // console.log('COMPONENTS', components);
  // console.log('PROJECT', project);
  // console.log('USERID', userId);
  let currProjectState = composeProject(components, project, userId);
  let projectStates = JSON.parse(sessionStorage.getItem('projectStates'));
  let counter = JSON.parse(sessionStorage.getItem('counter'));

  //CHECK IF ITS AT END OF PROJECTSTATESLENGTH
  console.log(projectStates);
  if (counter === projectStates.length - 1) {
    projectStates.push(currProjectState);
    sessionStorage.setItem('projectStates', JSON.stringify(projectStates));
  } else {
    projectStates.splice(counter, (projectStates.length - 1) - counter, currProjectState);
    sessionStorage.setItem('projectStates', JSON.stringify(projectStates));
  }
  sessionStorage.setItem('counter', JSON.stringify(counter + 1));
}

export default saveToSessionStorage;