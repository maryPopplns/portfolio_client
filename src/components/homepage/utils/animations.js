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

export function descriptionAnimation() {
  // if window < 765px

  function webHandler() {
    const scrollDistance = window.scrollY;

    const webDeveloper = document.getElementById(
      'personal_description_web_developer'
    );
    const fitness = document.getElementById('personal_description_fitness');
    const veteran = document.getElementById('personal_description_veteran');

    if (scrollDistance > 0) {
      webDeveloper.classList.add('hiddenDescriptionsLeft');
      veteran.classList.add('hiddenDescriptionsLeft');
      fitness.classList.add('hiddenDescriptionsRight');
    } else {
      webDeveloper.classList.remove('hiddenDescriptionsLeft');
      veteran.classList.remove('hiddenDescriptionsLeft');
      fitness.classList.remove('hiddenDescriptionsRight');
    }
  }

  window.addEventListener('scroll', webHandler);
}

export function placeholderAnimation() {
  gsap.to('.firstBox', {
    right: 0,
    scrollTrigger: {
      trigger: '.placeholder',
      start: 'top top',
      yoyo: true,
    },
  });
  gsap.to('.secondBox', {
    left: 0,
    display: 'block',
    scrollTrigger: {
      trigger: '.placeholder',
      start: 'top top',
      yoyo: true,
    },
  });
}
