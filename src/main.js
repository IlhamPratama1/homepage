import "./styles/main.scss";
import gsap from "gsap";
import Orchestrator from "./wave/Orchestrator.js";
import CanvasManager from "./crayon/canvas-manager.js";

const wave = new Orchestrator(document.querySelector("#wave canvas.webgl"));
const crayon = new CanvasManager(document.getElementById("canvas-container"));

// Only the panel that is on screen renders
const scenes = { wave, crayon };
const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => scenes[e.target.id].setActive(e.isIntersecting));
});
Object.keys(scenes).forEach((id) => io.observe(document.getElementById(id)));

// Local time in the wave panel
function updateTime() {
    const el = document.getElementById("local-time");
    if (!el) return;
    el.textContent =
        new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Hong_Kong",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        }) + " HKT";
}
updateTime();
setInterval(updateTime, 60000);

// Staggered fade-in for the wave panel text
gsap.fromTo(
    [".nav-logo a", ".nav-links a", ".nav-socials a", ".nav-time p", ".hero-section h1", ".bar-location p", ".bar-projects a", ".bar-availability a"],
    { opacity: 0, y: 20 },
    { duration: 1, opacity: 1, y: 0, stagger: 0.1, ease: "power3.out", delay: 0.5 },
);
