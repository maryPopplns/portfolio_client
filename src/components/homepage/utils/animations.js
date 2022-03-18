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

// // placeholder text
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
