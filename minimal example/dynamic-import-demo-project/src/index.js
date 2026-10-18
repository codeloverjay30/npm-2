function getComponent() {

   return import('lodash') // import loadish module dynamically. 
     .then( // then do something after importing successfully.
      ({ default: _ }) => {
       const element = document.createElement('div');
       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
       return element;
     })
     .catch( // callback called iff an error is thrown at runtime.
         (error) => 'An error occurred while loading the component'
      );
}
 
getComponent().then((component) => {
   document.body.appendChild(component);
});