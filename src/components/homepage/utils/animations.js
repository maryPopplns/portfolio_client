import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function pageTransitions() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.page').forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: 'top top',
      pin: true,
      pinSpacing: i === 1 ? true : false,
    });
  });
}

export function traitsAnimation() {
  function webHandler() {
    const webDeveloper = document.getElementById(
      'personal_description_web_developer'
    );
    const fitness = document.getElementById('personal_description_fitness');
    const veteran = document.getElementById('personal_description_veteran');

    // if (window.innerWidth < 800) {
    if (window.scrollY > 0) {
      webDeveloper.classList.add('hiddenDescriptions1');
      fitness.classList.add('hiddenDescriptions2');
      veteran.classList.add('hiddenDescriptions3');
    } else {
      webDeveloper.classList.remove('hiddenDescriptions1');
      fitness.classList.remove('hiddenDescriptions2');
      veteran.classList.remove('hiddenDescriptions3');
    }
    // }
    // if (window.innerWidth >= 800 && webDeveloper.classList.value !== '') {
    //   webDeveloper.classList.remove('hiddenDescriptions1');
    //   fitness.classList.remove('hiddenDescriptions2');
    //   veteran.classList.remove('hiddenDescriptions3');
    // }
  }

  window.addEventListener('scroll', webHandler);
}

export function placeholderAnimation() {
  function placeholderHandler() {
    // get the position of Technology page
    // get top of the screen position
    // get bottom of the screen position
  }
  window.addEventListener('scroll', placeholderHandler);
  // gsap.to('.firstBox', {
  //   right: 0,
  //   scrollTrigger: {
  //     trigger: '.placeholder',
  //     start: 'top top',
  //     yoyo: true,
  //   },
  // });
  // gsap.to('.secondBox', {
  //   left: 0,
  //   display: 'block',
  //   scrollTrigger: {
  //     trigger: '.placeholder',
  //     start: 'top top',
  //     yoyo: true,
  //   },
  // });
}
