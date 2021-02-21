//Using the Object-oriented Programming oriented way of coding this application

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
    element.scrollIntoView({ behavior: "smooth" }); //Automatically scrolls to the element that was moved
  }
}

//Create a base class to control parts of the DOM
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
      //this.element.parentElement.removeChild(this.element);//for older browsers
    }
  }
  attach() {
    //document.body.append(this.element);
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.element
    );
  }
}


//Create a class to manage the more info or tooltips
class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    //get access to the host element and pass it on in the super
    super(/* 'active-projects', true */ hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }
  //inefficient
  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };
  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";

    //Another way is using a special template html tag, getting access to it and displaying there
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    //tooltipElement.textContent = this.text; //Can also set my own content here
    // tooltipElement.innerHTML = `
    //   <h2>More Info</h2>
    //   <p>${this.text}</p>
    // `; This is not ideal.
    //console.log(this.hostElement.getBoundingClientRect()); //get the host element position

    const hostElementPositionLeft = this.hostElement.offsetLeft; //Get the host element left position
    const hostElementPositionTop = this.hostElement.offsetTop; //Get the host element top position
    const hostElementHeight = this.hostElement.clientHeight; //Get the distance of the host element from the top
    const parentElementScrollValue = this.hostElement.parentElement.scrollTop; //Get the value of the scroll distance

    const x = hostElementPositionLeft + 20; //Set the top left corner position

    //Set the distance from the top including the scroll value
    const y =
      hostElementPositionTop +
      hostElementHeight -
      parentElementScrollValue -
      10;

    //in order to change the style with javascript you have to set the position value to absolute.
    tooltipElement.style.position = "absolute";

    tooltipElement.style.left = x + "px"; //set the result up in pixels as though using css.
    tooltipElement.style.top = y + "px"; //set the result up in pixels as though using css.

    tooltipElement.addEventListener("click", this.closeTooltip); //can bind detach to this or use the method in detach as an arrow function
    this.element = tooltipElement;
  }
}


//Create a class to manage a project item
class ProjectItem {
  hasActiveTooltip = false; //Create a boolean property for whether a tooltip exists or not

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInformationHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    //console.log(projectElement.dataset);
    const tooltipText = projectElement.dataset.extraInfo;
    //projectElement.dataset.someInfo = 'Test'
    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText,
      this.id
    ); //forward the id
    tooltip.attach();
    this.hasActiveTooltip = true;
  }
  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoButton = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoButton.addEventListener(
      "click",
      this.showMoreInformationHandler.bind(this)
    );
  }
  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchButton = projectItemElement.querySelector("button:last-of-type");
    switchButton = DOMHelper.clearEventListeners(switchButton);
    switchButton.textContent = type === "active" ? "Finished" : "Activate";
    switchButton.addEventListener(
      "click",
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }
  update(updateProjectListFn, type) {
    this.updateProjectListsHandler = updateProjectListFn;
    this.connectSwitchButton(type);
  }
}


//Create a class to manage project lists
class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    for (const projectItem of projectItems) {
      this.projects.push(
        new ProjectItem(
          projectItem.id,
          this.switchProject.bind(this),
          this.type
        )
      );
    }
    //console.log(this.projects);
  }
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  addProject(project) {
    //console.log(this);
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(project => project.id === projectId);
    // this.projects.splice(projectIndex, 1) this is one way
    this.switchHandler(
      this.projects.find((project) => project.id === projectId)
    );
    this.projects = this.projects.filter((project) => project.id !== projectId); //filter for not the same id
  }
}


//Create a main app class to manage everything
class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    //Create a dynamic script in javascript to run dynamically
    // const someScript = document.createElement("script");
    // someScript.textContent =
    //   'alert("Hello there!  I am a script running in your HTML file. I was added there by javascript that was executed from outside of the HTML file!")';
    // document.head.append(someScript);
    //use a button click to execute outside script
    //document.getElementById('start-analytics-button').addEventListener('click', this.startAnalytics);
  //Run script file automatically when app initializes.
   // this.startAnalytics();
   //use a timer to run analytics
   const timerId = setTimeout(this.startAnalytics, 3000);//Executes only one time
   document.getElementById('stop-analytics-button').addEventListener('click', () => {
    clearTimeout(timerId);
   });
  }
  //Outside script dynamic in javascript to run dynamically on button click or any other way
  static startAnalytics() {
      const analyticsScript = document.createElement('script');
      analyticsScript.src = '/13. practice-oop-08-base-component-class/assets/scripts/analytics.js';
      analyticsScript.defer = true;
      document.head.append(analyticsScript);
  }
}


App.init();
