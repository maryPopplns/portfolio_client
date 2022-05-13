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
