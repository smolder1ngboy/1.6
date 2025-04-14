import './scss/style.scss';
import '/src/swiperJS/swiper1.js';
import '/src/swiperJS/swiper2.js';
import '/src/swiperJS/swiper3.js';

document.addEventListener('DOMContentLoaded', () => {
  const expand = document.getElementById('expandButton');
  expandButton.onclick = buttonShowText;
});

function buttonShowText() {
  let text = document.getElementById('textHidden');
  let expIcon = document.getElementById('expandIcon');
  let expText = document.getElementById('expandText');
  if (textHidden.style.display === 'block') {
    textHidden.style.display = 'none';
    expText.textContent = 'Читать далее';
    expIcon.style.transform = "rotate(0deg)"
  } else {
    textHidden.style.display = 'block';
    expText.textContent = 'Скрыть';
    expIcon.style.transform = "rotate(180deg)"
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myButton1 = document.getElementById('myButton1');
  myButton1.onclick = buttonShow1;
});

function buttonShow1() {
  let element1 = document.getElementById('slide-1');
  let element2 = document.getElementById('slide-2');
  let element3 = document.getElementById('slide-3');
  let showButton1 = document.getElementById('show1');
  let showIcon1 = document.getElementById('show-icon1');
  if (element1.style.display === 'flex') {
    showButton1.textContent = 'Показать все';
    showIcon1.style.transform = "rotate(0deg)"
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
  } else {
    showButton1.textContent = 'Скрыть';
    showIcon1.style.transform = "rotate(180deg)"
    element1.style.display = 'flex';
    element2.style.display = 'flex';
    element3.style.display = 'flex';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myButton2 = document.getElementById('myButton2');
  myButton2.onclick = buttonShow2;
});

function buttonShow2() {
  let element4 = document.getElementById('slide-4');
  let element5 = document.getElementById('slide-5');
  let showButton2 = document.getElementById('show2');
  let showIcon2 = document.getElementById('show-icon2');

  if (window.matchMedia('(min-width: 1120px)')) {
    if (element5.style.display === 'flex') {
      showButton2.textContent = 'Показать все';
      showIcon2.style.transform = "rotate(0deg)";
      element5.style.display = 'none';
    } else {
      showButton2.textContent = 'Скрыть';
      showIcon2.style.transform = "rotate(180deg)";
      element5.style.display = 'flex';
    }
  } else {
    if (element4.style.display === 'flex' || element5.style.display === 'flex') {
      showButton2.textContent = 'Показать все';
      showIcon2.style.transform = "rotate(0deg)";
      element4.style.display = 'none';
      element5.style.display = 'none';
    } else {
      showButton2.textContent = 'Скрыть';
      showIcon2.style.transform = "rotate(180deg)";
      element4.style.display = 'flex';
      element5.style.display = 'flex';
    }
  }
}

function createAside(asideId, openButtonId, closeButtonId, shiftAmount) {
  const aside = document.getElementById(asideId);
  const openButton = document.getElementById(openButtonId);
  const closeButton = document.getElementById(closeButtonId);
  const mainContent = document.querySelector('main');

  let isAsideOpen = false;

  function showAside() {
    aside.style.transform = `translateX(${shiftAmount}px)`;
    isAsideOpen = true;
    mainContent.classList.add('blurred');
  }

  function hideAside() {
    aside.style.transform = `translateX(-320px)`;
    isAsideOpen = false;
    mainContent.classList.remove('blurred');
  }

  function shiftAsideLeft() {
    mainContent.classList.remove('blurred');
  }

  function handleResize() {
    if (window.matchMedia('(min-width: 1120px)')) {
      shiftAsideLeft();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    handleResize();
  });

  window.addEventListener('resize', handleResize);

  mainContent.addEventListener('click', function (event) {
    if (isAsideOpen == true) {
      event.target === mainContent
      hideAside();
    }
  });

  openButton.addEventListener('click', showAside);
  closeButton.addEventListener('click', hideAside);

  window.addEventListener('resize', handleResize);

  handleResize();
}


document.addEventListener('DOMContentLoaded', () => {
  const asideId = 'aside';
  const openButtonId = 'burger';
  const closeButtonId = 'closeButton';
  const shiftAmount = 0;

  createAside(asideId, openButtonId, closeButtonId, shiftAmount);

  const aside = document.getElementById('aside');

  function shiftAsideLeft() {
    aside.style.transform = 'translateX(-320px)';
  }

  function handleResize() {
    if (window.matchMedia('(min-width: 1120px)')) {
      shiftAsideLeft();
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    handleResize();
  });

  window.addEventListener('resize', handleResize);
});

let isFeedbackOpen = false;
let isFeedbackPhoneOpen = false;

function createFeedback(feedbackId, openButtonIds, closeButtonId) {
  const feedback = document.getElementById(feedbackId);
  const openButtons = Array.from(document.querySelectorAll(openButtonIds));
  const closeButton = document.getElementById(closeButtonId);
  const mainContent = document.querySelector('main');

  let isFeedbackOpen = false;

  function showFeedback() {
    feedback.style.display = 'block';
    feedback.classList.add('feedback--visible');
    isFeedbackOpen = true;
    mainContent.classList.add('blurred');

    function shiftAsideLeft() {
      mainContent.classList.add('blurred');
    }

    function handleResize() {
      if (window.matchMedia('(min-width: 768px)') && isFeedbackOpen === true) {
        shiftAsideLeft();
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      handleResize();
    });

    window.addEventListener('resize', handleResize);
  }

  function hideFeedback() {
    feedback.classList.remove('feedback--visible');
    feedback.addEventListener('transitionend', function handleTransitionEnd() {
      feedback.style.display = 'none';
      feedback.removeEventListener('transitionend', handleTransitionEnd);
    });
    isFeedbackOpen = false;
    mainContent.classList.remove('blurred');
  }

  openButtons.forEach(button => {
    button.addEventListener('click', showFeedback);
  });
  closeButton.addEventListener('click', hideFeedback);

}

document.addEventListener('DOMContentLoaded', () => {
  const feedbackId = 'feedback';
  const openButtonIds = '.chat';
  const closeButtonId = 'feedbackClose';
  const shiftAmount = 0;

  createFeedback(feedbackId, openButtonIds, closeButtonId, shiftAmount);
});

function createFeedbackPhone(feedbackId, openButtonIds, closeButtonId) {
  const feedback = document.getElementById(feedbackId);
  const openButtons = Array.from(document.querySelectorAll(openButtonIds));
  const closeButton = document.getElementById(closeButtonId);
  const mainContent = document.querySelector('main');

  let isFeedbackOpen = false;

  function showFeedback() {

    setTimeout(() => {
      feedback.style.display = 'block';
      setTimeout(() => {
        feedback.classList.add('feedback-phone--visible');
        isFeedbackOpen = true;
      }, 5);

    }, 5);
    mainContent.classList.add('blurred');

    function shiftAsideLeft() {
      mainContent.classList.add('blurred');
    }

    function handleResize() {
      if (window.matchMedia('(min-width: 768px)') && isFeedbackOpen === true) {
        shiftAsideLeft();
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      handleResize();
    });

    window.addEventListener('resize', handleResize);
  }

  function hideFeedback() {
    feedback.classList.remove('feedback-phone--visible');
    feedback.addEventListener('transitionend', function handleTransitionEnd() {
      feedback.style.display = 'none';
      feedback.removeEventListener('transitionend', handleTransitionEnd);
    });
    isFeedbackOpen = false;
    mainContent.classList.remove('blurred');
  }

  openButtons.forEach(button => {
    button.addEventListener('click', showFeedback);
  });
  closeButton.addEventListener('click', hideFeedback);

}

document.addEventListener('DOMContentLoaded', () => {
  const feedbackId = 'feedback-phone';
  const openButtonIds = '#phone1, #phone2';
  const closeButtonId = 'feedbackPhoneClose';

  createFeedbackPhone(feedbackId, openButtonIds, closeButtonId);
});

