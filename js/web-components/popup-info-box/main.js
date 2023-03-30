class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    let imgUrl = 'img/default.png';
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    }

    let alt = 'Info icon';
    if (this.hasAttribute('alt')) {
      alt = this.getAttribute('alt');
    }

    const img = document.createElement('img');
    img.setAttribute('src', imgUrl);
    img.setAttribute('alt', alt);

    const info = document.createElement('span');
    info.setAttribute('class', 'info');
    info.textContent = this.getAttribute('data-text');

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        position: absolute;
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        background: white;
        border: 1px solid black;
        padding: 10px;
        border-radius: 10px;
        bottom: 0.3rem;
        left: 1.3rem;
        bottom: -1rem;
        z-index: 3;
        opacity: 0;
      }

      img {
        width: 1.2rem;
      }

      .icon {
        cursor: pointer;
      }

      .icon:focus + .info, .icon:hover + .info {
        opacity: 1;
      }
    `;


    shadow.appendChild(style);
    icon.appendChild(img);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
    shadow.appendChild(wrapper);

  }
}

window.customElements.define('popup-info', PopUpInfo);