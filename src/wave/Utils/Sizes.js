import mitt from "mitt";

// Sizes follow the element the canvas lives in (not the window), so the scene
// can be one panel of a larger page.
export default class Sizes {
    constructor(el) {
        this.emitter = mitt();
        this.el = el;
        this.read();
        new ResizeObserver(() => {
            this.read();
            this.emitter.emit("resize");
        }).observe(el);
    }

    read() {
        this.width = this.el.clientWidth;
        this.height = this.el.clientHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    }
}
