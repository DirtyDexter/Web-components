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

class MyParagraph2 extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({mode:'open'});
    var template = document.querySelector('#my-template-2');
    var content = template.content;

    shadow.appendChild(content.cloneNode(true));
  }
}
window.customElements.define('my-paragraph-2', MyParagraph2);

