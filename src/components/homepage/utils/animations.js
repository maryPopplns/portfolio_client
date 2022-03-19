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
    const hr = document.getElementById('name_trait_divisor');

    if (window.scrollY > 0) {
      webDeveloper.classList.add('hidden_descriptions_1');
      fitness.classList.add('hidden_descriptions_2');
      veteran.classList.add('hidden_descriptions_3');
      hr.classList.add('name_trait_divisor_shrink');
    } else {
      webDeveloper.classList.remove('hidden_descriptions_1');
      fitness.classList.remove('hidden_descriptions_2');
      veteran.classList.remove('hidden_descriptions_3');
      hr.classList.remove('name_trait_divisor_shrink');
    }
  }

  window.addEventListener('scroll', webHandler);
}

export function pageDivisonAnimation() {
  function pageDivisionHandler() {
    const technologyElement = Array.from(
      document.getElementsByClassName('technologies')
    )[0];
    const { top } = technologyElement.getBoundingClientRect();

    if (top === 0) {
      technologyElement.classList.add('hide_page_division');
    } else {
      technologyElement.classList.remove('hide_page_division');
    }
  }

  window.addEventListener('scroll', pageDivisionHandler);
}

export function technologies() {
  //
}
