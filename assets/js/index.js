import cards from '../data/cards.js';

const
    cardsElement = document.querySelector('#cards'),
    flyoutElement = document.querySelector('#flyout'),
    menuElement = document.querySelector('#menu'),
    overlayElement = document.querySelector('#overlay'),
    overlayImgElement = document.querySelector('#overlay img');

overlayElement.addEventListener('click', function () {
    this.style.display = 'none';
});

menuElement.addEventListener('click', function() {
    flyoutElement.getAttribute('open') === 'false' ? flyoutElement.setAttribute('open', true) : flyoutElement.setAttribute('open', false);
});

function clicked() {
    overlayElement.style.display = 'flex';
    overlayImgElement.src = this.style.backgroundImage.replace('url("', '').replace('")', '');
}

cards.forEach(card => {
    const
        cardElement = document.createElement('div'),
        designElement = document.createElement('div'),
        thumbElement = document.createElement('img'),
        headingElement = document.createElement('div'),
        titleElement = document.createElement('p'),
        subTitleElement = document.createElement('p'),
        enlargeElement = document.createElement('button');

    designElement.className = 'design';
    designElement.style.backgroundImage = `url(${card.design})`;

    thumbElement.className = 'thumb';
    thumbElement.src = card.thumb;

    titleElement.className = 'title';
    titleElement.innerText = card.title;

    subTitleElement.className = 'subtitle';
    subTitleElement.innerText = card.subTitle;

    headingElement.className = 'heading';
    headingElement.appendChild(titleElement);
    headingElement.appendChild(subTitleElement);

    enlargeElement.textContent = 'ENLARGE';
    enlargeElement.addEventListener('click', clicked.bind(designElement));

    cardElement.className = 'card';
    cardElement.appendChild(designElement);
    cardElement.appendChild(thumbElement);
    cardElement.appendChild(headingElement);
    cardElement.appendChild(enlargeElement);

    cardsElement.appendChild(cardElement);
});