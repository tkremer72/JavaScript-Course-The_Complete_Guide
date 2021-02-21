export class DOMHelper {
     static clearEventListeners(element) {
       const clonedElement = element.cloneNode(true);
       element.replaceWith(clonedElement);
       return clonedElement;
     }
   
     static moveElement(elementId, newDestinationSelector) {
       const element = document.getElementById(elementId);
       const destinationElement = document.querySelector(newDestinationSelector);
       destinationElement.append(element);
       element.scrollIntoView({ behavior: 'smooth' });
     }
   }
   //If I wanted to I could just export the functions from this file
  export function clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

 export function moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
    element.scrollIntoView({ behavior: 'smooth' });
  }