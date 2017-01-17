
import { storage } from './ComponentCache';

let composeProject = function(components, project, userId) {
  let projectStorage = {};
  for (let key in storage) {
    if (storage[key].projectId === project.projectId) {
      projectStorage[key] = storage[key];
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