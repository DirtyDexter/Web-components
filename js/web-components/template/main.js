class MyParagraph extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode:'open'});
    var template = document.querySelector('#my-template');
    var content = template.content;

    shadow.appendChild(content.cloneNode(true));
  }
}
window.customElements.define('my-paragraph', MyParagraph);
