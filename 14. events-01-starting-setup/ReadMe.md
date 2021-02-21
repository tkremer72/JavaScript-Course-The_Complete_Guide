# Section 14 OOP - Working With Events
     Event
          MouseEvent
               Coordinates
               Event target
          DragEvent
               Extra data
               Event target
          ...
               ...
               Event target

You can register events on anything related to the html document.

## Example: Basic Infinite Scrolling
Let's have fun with the scroll event and create a list which you can scroll infinitely (explanations below)!

You can run this code snippet on any page - just make sure that you can scroll vertically (either by adding enough dummy content, by adding some styles that add a lot of height to some elements or by shrinking the browser window vertically).

let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
window.addEventListener('scroll', scrollHandler);
So what's happening here?

At the very bottom, we register the scrollHandler function as a handler for the 'scroll' event on our window object.

Inside that function, we first of all measure the total distance between our viewport (top left corner of what we currently see) and the end of the page (not just the end of our currently visible area) => Stored in distanceToBottom.

For example, if our browser window has a height of 500px, then distanceToBottom could be 684px, assuming that we got some content we can scroll to.

Next, we compare the distance to the bottom of our overall content (distanceToBottom) to the window height + a certain threshold (in this example 150px). document.documentElement.clientHeight is preferable to window.innerHeight because it respects potential scroll bars.

If we have less than 150px to the end of our page content, we make it into the if-block (where we append new data).

Inside of the if-statement, we then create a new <div> element and populate it with a <p> element which in turn outputs an incrementing counter value.

Not all events propagate.

# Drag & Drop Events
     Mark elements as "draggable"
     Listen to a "dragstart" event - describe the drag operation/append data
     Accept Drop via "dragenter" and "dragover" Events => preventDefault() - default is drop operation is cancelled.
     Optional listen to a "dragleave" Event e.g. update styles
     Listen to "drop" Event & Update Data/UI - not optional
     Optional listen to a "dragend" Event & Update Data/UI
     
### FireFox Directions And Code
Firefox Adjustments
I do recommend to follow along in Chrome but in case you're using Firefox, you might be seeing some strange behaviors / errors.

Here are some code adjustments you can make to make it work in Firefox as well:

In

list.addEventListener('drop', event => {
add the following line at the beginning:

event.preventDefault
I.e. it should look like this:

list.addEventListener('drop', event => {
    event.preventDefault();
    // other code...
In

list.addEventListener('dragleave', event => {
adjust the if statement to look like this:

if (event.relatedTarget.closest && event.relatedTarget.closest(...) {...}
I.e. it should look like this:

list.addEventListener('dragleave', event => {
    if (event.relatedTarget.closest && event.relatedTarget.closest(...) {...}
Here's the complete adjusted app.js file:

class DOMHelper {
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
 
class Component {
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
 
class Tooltip extends Component {
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
 
    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;
 
    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;
 
    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px'; // 500px
    tooltipElement.style.top = y + 'px';
 
    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}
 
class ProjectItem {
  hasActiveTooltip = false;
 
  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }
 
  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }
 
  connectDrag() {
    const item = document.getElementById(this.id);
    item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move';
    });
 
    item.addEventListener('dragend', event => {
      console.log(event);
    });
  }
 
  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }
 
  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }
 
  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}
 
class ProjectList {
  projects = [];
 
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
    this.connectDroppable();
  }
 
  connectDroppable() {
    const list = document.querySelector(`#${this.type}-projects ul`);
 
    list.addEventListener('dragenter', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        list.parentElement.classList.add('droppable');
        event.preventDefault();
      }
    });
 
    list.addEventListener('dragover', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
      }
    });
 
    list.addEventListener('dragleave', event => {
      if (event.relatedTarget.closest && event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove('droppable');
      }
    });
 
    list.addEventListener('drop', event => {
      event.preventDefault();
      const prjId = event.dataTransfer.getData('text/plain');
      if (this.projects.find(p => p.id === prjId)) {
        return;
      }
      document
        .getElementById(prjId)
        .querySelector('button:last-of-type')
        .click();
      list.parentElement.classList.remove('droppable');
      // event.preventDefault(); // not required
    });
  }
 
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
 
  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }
 
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}
 
class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
 
    // const timerId = setTimeout(this.startAnalytics, 3000);
 
    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }
 
  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}
 
App.init();
 
Fullscreen

### Useful Resources & Links
Attached, you find the source code for this section. The snapshots are also attached to individual lectures throughout this module (i.e. the lectures to which each snapshot belongs).

---

The following resources may be helpful.

Events (MDN): https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

Events Reference (MDN): https://developer.mozilla.org/en-US/docs/Web/Events

Event Object (MDN): https://developer.mozilla.org/en-US/docs/Web/API/Event

MDN Drag & Drop: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API


