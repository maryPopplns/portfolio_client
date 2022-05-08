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
  const aboutPage = Array.from(document.getElementsByClassName('about'))[0];
  const contactPage = Array.from(document.getElementsByClassName('contact'))[0];
  function pageDivisionHandler() {
    const placeholderTop = contactPage.getBoundingClientRect().top;
    const skillsTop = aboutPage.getBoundingClientRect().top;
    if (placeholderTop < 2) {
      contactPage.classList.add('hide_page_division');
    } else {
      contactPage.classList.remove('hide_page_division');
    }
    if (skillsTop === 0) {
      aboutPage.classList.add('hide_page_division');
    } else {
      aboutPage.classList.remove('hide_page_division');
    }
  }

  window.addEventListener('scroll', pageDivisionHandler);
}

// skills page animation
export function aboutAnimation() {
  const skillsPage = Array.from(document.getElementsByClassName('about'))[0];
  const contactPage = Array.from(document.getElementsByClassName('contact'))[0];

  function aboutHandler() {
    const skillsTop = skillsPage.getBoundingClientRect().top;
    const contactTop = contactPage.getBoundingClientRect().top;
    const skillsBottom = skillsPage.getBoundingClientRect().bottom;

    const hr = document.getElementById('title_about_divisor');

    if (skillsTop === 0 && skillsBottom < contactTop) {
      hr.classList.remove('title_about_divisor_shrink');
    } else if (hr) {
      hr.classList.add('title_about_divisor_shrink');
    }
  }

  window.addEventListener('scroll', aboutHandler);
}

export function contactAnimation() {
  const hr = document.getElementById('header_contact_divisor');
  const form = document.getElementById('contact_form_container');
  function contactHandler() {
    if (
      window.innerHeight + window.pageYOffset + 2 >=
      document.body.offsetHeight
    ) {
      hr.classList.remove('header_contact_divisor_shrink');
      form.classList.add('form_shrink');
    } else {
      hr.classList.add('header_contact_divisor_shrink');
      form.classList.remove('form_shrink');
    }
  }
  window.addEventListener('scroll', contactHandler);
}

export function navbarAnimation() {
  const navbar = document.getElementById('navbar');
  function navbarHandler(event) {
    const scrollY = window.scrollY;
    if (scrollY === 0) {
      navbar.classList.remove('show_navbar');
    } else {
      navbar.classList.add('show_navbar');
    }
  }
  return navbarHandler;
}
