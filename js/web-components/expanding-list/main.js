class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    // Return value from super() is a reference to this element
    self = super();

    const lis = Array.from(self.querySelectorAll('li'));
    const uls = Array.from(self.querySelectorAll('ul'));

    uls.forEach(ul => {
      ul.style.display = 'none';
    });

    lis.forEach(li => {
      if (li.querySelectorAll('ul').length > 0) {
        li.setAttribute('class', 'closed');

        const childText = li.childNodes[0];
        const newSpan = document.createElement('span');
        newSpan.textContent = childText.textContent;
        newSpan.style.cursor = 'pointer';
        newSpan.onclick = self.showUl;

        li.insertBefore(newSpan, childText);
        li.removeChild(childText);
      }
    });
  }

  showUl = function(e) {
    const nextUl = e.target.nextElementSibling;

    if (nextUl.style.display === 'none') {
      nextUl.style.display = 'block';
      nextUl.parentNode.setAttribute('class', 'open');
    } else {
      nextUl.style.display = 'none';
      nextUl.parentNode.setAttribute('class', 'closed');
    }
  }
}

window.customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
