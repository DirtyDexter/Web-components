class CustomSquare extends HTMLElement {
  static get observedAttributes() {
    return ['c', 'l'];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('div');
    const style = document.createElement('style');
    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  connectedCallback() {
    console.log('connectedCallback is called');
    this.updateStyle();
  }

  disconnectedCallback() {
    console.log('disconnectedCallback is called');
  }

  adoptedCallback() {
    console.log('adoptedCallback is called');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback is called : name, oldValue, newValue -> ', name, oldValue, newValue);
    this.updateStyle();
  }

  updateStyle() {
    const shadowRoot = this.shadowRoot;
    shadowRoot.querySelector('style').textContent = `
      div {
        width: ${this.getAttribute('l')}px;
        height: ${this.getAttribute('l')}px;
        background-color: ${this.getAttribute('c')};
      }
    `;
  }
}

window.customElements.define('custom-square', CustomSquare);

const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');
let square;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

add.onclick = function() {
  square = document.createElement('custom-square');
  square.setAttribute('c', 'red');
  square.setAttribute('l', 100);
  document.body.appendChild(square);

  update.disabled = false;
  remove.disabled = false;
  add.disabled = true;
}

update.onclick = function() {
  square.setAttribute('c', `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`);
  square.setAttribute('l', random(50, 200));
}

remove.onclick = function() {
  document.body.removeChild(square);

  update.disabled = true;
  remove.disabled = true;
  add.disabled = false;
}
