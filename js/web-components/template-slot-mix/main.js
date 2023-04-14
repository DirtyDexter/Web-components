class ElementDetails extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode:'open'});
    var template = document.querySelector('#element-details-template');
    var content = template.content;

    shadow.appendChild(content.cloneNode(true));
  }
}
window.customElements.define('element-details', ElementDetails);
