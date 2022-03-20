import ScrollMagic from 'scrollmagic';

export function sectionWipe() {
  const controller = new ScrollMagic.Controller();
  const slides = document.getElementsByClassName('page');
  for (let i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerHook: 'onLeave',
      triggerElement: slides[i],
    })
      .setPin(slides[i], { pushFollowers: false })
      .addTo(controller);
  }
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
      document.getElementsByClassName('skills')
    )[0];
    const skillsElement = Array.from(
      document.getElementsByClassName('placeholder2')
    )[0];
    const techTop = technologyElement.getBoundingClientRect().top;
    const skillsTop = skillsElement.getBoundingClientRect().top;
    if (techTop === 0) {
      technologyElement.classList.add('hide_page_division');
    } else {
      technologyElement.classList.remove('hide_page_division');
    }
    if (skillsTop === 0) {
      skillsElement.classList.add('hide_page_division');
    } else {
      skillsElement.classList.remove('hide_page_division');
    }
  }

  window.addEventListener('scroll', pageDivisionHandler);
}

export function skillsAnimation() {
  function skillsHandler() {
    const technologyElement = Array.from(
      document.getElementsByClassName('skills')
    )[0];
    const techTop = technologyElement.getBoundingClientRect().top;
    const hr = document.getElementById('title_skills_divisor');
    if (techTop === 0) {
      hr.classList.remove('title_skills_divisor_shrink');
    } else {
      hr.classList.add('title_skills_divisor_shrink');
    }
  }

  window.addEventListener('scroll', skillsHandler);
}
