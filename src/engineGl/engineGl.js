import rgba from "../functions/rgba.js";
import CompFactory from "../engine/compFactory.js";
export default class EngineGl {
    constructor(canvasId = "bilza", color = rgba(0, 0, 1)) {
        const canvas = document.getElementById(canvasId);
        if (canvas == null) {
            throw new Error("canvas not found");
        }
        const gl = canvas.getContext("webgl");
        if (gl == null) {
            throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
        }
        this.gl = gl;
        this.comps = [];
        this.colorBackground = color;
    }
    clear() {
        this.gl.clearColor(this.colorBackground.r, this.colorBackground.g, this.colorBackground.b, this.colorBackground.a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    getGl() {
        return this.gl;
    }
    setBackgroundColor(rgba) {
        this.colorBackground = rgba;
    }
    add() {
        const cf = new CompFactory(this.gl, this.comps);
        return cf;
    }
    draw() {
        this.clear();
        for (let i = 0; i < this.comps.length; i++) {
            const glEngComp = this.comps[i];
            glEngComp.draw(this.gl);
        }
    }
}
