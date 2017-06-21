import Tmp from "./areaTmp.js";
import Js from "./areajs.js";
var thisTmp = Tmp();

const render = () => {
  return {
    init() {
      $(".app").append(thisTmp);
      Js();
    }
  }
}


export default render;
