function changeButton() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    // .innerHTML element still worked for me
    // .innerText is for if spaces are present in elements
    if (buttonElement.innerText === 'Clickaroo') {
      buttonElement.innerHTML = 'Subscribed';
      buttonElement.classList.add('is-subscribed');
    } else {
      buttonElement.innerHTML = 'Clickaroo';
      buttonElement.classList.remove('is-subscribed');
    }
  }