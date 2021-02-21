//import { Component } from './Component.js'; This is one way to import the class component

//Below we can use any name since the component class is being
//exported as the default class component. Also don't need the curly
//braces.

//Should be careful about naming conventions, this method requires all team
//members use the same name.
//Below imports the default with a different named and the named export

import Comp, { Component } from './Component.js';

export class Tooltip extends Comp {
     constructor(closeNotifierFunction, text, hostElementId) {
       super(hostElementId);
       this.closeNotifier = closeNotifierFunction;
       this.text = text;
       this.create();
     }
   
     closeTooltip = () => {
       this.detach();
       this.closeNotifier();
     };
   
     create() {
       const tooltipElement = document.createElement('div');
       tooltipElement.className = 'card';
       const tooltipTemplate = document.getElementById('tooltip');
       const tooltipBody = document.importNode(tooltipTemplate.content, true);
       tooltipBody.querySelector('p').textContent = this.text;
       tooltipElement.append(tooltipBody);
   
       const hostElementPositionLeft = this.hostElement.offsetLeft;
       const hostElementPositionTop = this.hostElement.offsetTop;
       const hostElementHeight = this.hostElement.clientHeight;
       const parentElementScrolling = this.hostElement.parentElement.scrollTop;
   
       const x = hostElementPositionLeft + 20;
       const y = hostElementPositionTop + hostElementHeight - parentElementScrolling - 10;
   
       tooltipElement.style.position = 'absolute';
       tooltipElement.style.left = x + 'px'; // 500px
       tooltipElement.style.top = y + 'px';
   
       tooltipElement.addEventListener('click', this.closeTooltip);
       this.element = tooltipElement;
     }
   }