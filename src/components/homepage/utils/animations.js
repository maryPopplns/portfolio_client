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

// landing page animations
export function traitsAnimation() {
  const webDeveloper = document.getElementById(
    'personal_description_web_developer'
  );
  const fitness = document.getElementById('personal_description_fitness');
  const veteran = document.getElementById('personal_description_veteran');
  const hr = document.getElementById('name_trait_divisor');
  function webHandler() {
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

// page border animations
export function pageDivisonAnimation() {
  const skillsPage = Array.from(document.getElementsByClassName('skills'))[0];
  const placeholderPage = Array.from(
    document.getElementsByClassName('contact')
  )[0];
  function pageDivisionHandler() {
    const placeholderTop = placeholderPage.getBoundingClientRect().top;
    const skillsTop = skillsPage.getBoundingClientRect().top;
    if (placeholderTop < 2) {
      placeholderPage.classList.add('hide_page_division');
    } else {
      placeholderPage.classList.remove('hide_page_division');
    }
    if (skillsTop === 0) {
      skillsPage.classList.add('hide_page_division');
    } else {
      skillsPage.classList.remove('hide_page_division');
    }
  }

  window.addEventListener('scroll', pageDivisionHandler);
}

// skills page animation
export function skillsAnimation() {
  const skillsPage = Array.from(document.getElementsByClassName('skills'))[0];
  const contactPage = Array.from(document.getElementsByClassName('contact'))[0];
  const technologyIcons = Array.from(
    document.getElementsByClassName('technology_icon')
  );
  function skillsHandler() {
    const skillsTop = skillsPage.getBoundingClientRect().top;
    const contactTop = contactPage.getBoundingClientRect().top;
    const skillsBottom = skillsPage.getBoundingClientRect().bottom;

    const hr = document.getElementById('title_skills_divisor');

    if (skillsTop === 0 && skillsBottom < contactTop) {
      technologyIcons.forEach((icon) =>
        icon.classList.remove('technology_icon_fade')
      );
      hr.classList.remove('title_skills_divisor_shrink');
    } else {
      technologyIcons.forEach((icon) =>
        icon.classList.add('technology_icon_fade')
      );
      hr.classList.add('title_skills_divisor_shrink');
    }
  }

  window.addEventListener('scroll', skillsHandler);
}
