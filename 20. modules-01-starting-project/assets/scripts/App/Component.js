//Export the Component class to be used throughout the app
//the export keyword makes component available
//You can export a component by using the keyword default and you don't
//need to use the name. 
export function Component() {}//Here woud not use Component to name a function
//This is just to make the point that you can use conventional and unconventional naming.
export default class /* Component */ {//Only one default export per file.
     constructor(hostElementId, insertBefore = false) {
       if (hostElementId) {
         this.hostElement = document.getElementById(hostElementId);
       } else {
         this.hostElement = document.body;
       }
       this.insertBefore = insertBefore;
     }
   
     detach() {
       if (this.element) {
         this.element.remove();
         // this.element.parentElement.removeChild(this.element);
       }
     }
   
     attach() {
       this.hostElement.insertAdjacentElement(
         this.insertBefore ? 'afterbegin' : 'beforeend',
         this.element
       );
     }
   }