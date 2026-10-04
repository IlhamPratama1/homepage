import "./projects/projects.css";
import { TextAnimator } from "./projects/text-animator.js";

// Scramble + block-cursor effect on every column when a row is hovered
document.querySelectorAll(".list__item").forEach((row) => {
  const animators = [...row.querySelectorAll(".hover-effect")].map((c) => new TextAnimator(c));
  row.addEventListener("mouseenter", () => animators.forEach((a) => a.animate()));
});

// Same for standalone links
document.querySelectorAll("a.hover-effect").forEach((link) => {
  const animator = new TextAnimator(link);
  link.addEventListener("mouseenter", () => animator.animate());
});
