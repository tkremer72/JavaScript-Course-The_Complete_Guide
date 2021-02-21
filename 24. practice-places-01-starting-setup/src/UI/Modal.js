export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateElement = document.getElementById(contentId);
    this.modalTemplateElement = document.getElementById("modal-template");
  }

  show() {
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplateElement.content,
        true
      );
      this.modalElement = modalElements.querySelector(".modal");
      this.backdropElement = modalElements.querySelector(".backdrop");
      const contentElement = document.importNode(
        this.contentTemplateElement.content,
        true
      );

      this.modalElement.appendChild(contentElement);
      document.body.insertAdjacentElement('afterbegin', this.modalElement);
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);
    } else {
      //Fallback
      alert(this.fallbackText);
    }
  }

  hide() {
     if(this.modalElement) {
          document.body.removeChild(this.modalElement);//modern browsers you can use this.modalElement.remove();
          document.body.removeChild(this.backdropElement);//same as above
          this.modalElement = null;//tell javascript that it can clean these up
          this.backdropElement = null;
     }
  }
}
