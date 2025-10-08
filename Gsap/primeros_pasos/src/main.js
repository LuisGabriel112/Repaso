import './style.css'
import { gsap } from "gsap";

window.addEventListener('load', () => {
  const tl = gsap.timeline();
  tl.from('.nav-link', {
    y: -100,
    duration: 1,
  });
});