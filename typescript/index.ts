import EngineGl from "./engineGl/engineGl.js";
import rgba from "./functions/rgba.js";
import FragComp from "./components/fragComp.js";
import Rectangle from "./components/rectangle.js";
/////////////////////////////////////////////
const engine = new EngineGl("bilza");

const gl = engine.getGl();
engine.setBackgroundColor(rgba(0.0,1.0,0.0,1.0));
engine.clear();
////////////////////////////////


console.log("engine",engine);
const comp = new Rectangle(gl,rgba(1,0,0),10,10,80,80);
engine.clear();

comp.draw(gl);