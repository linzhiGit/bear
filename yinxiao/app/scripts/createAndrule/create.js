require('../../styles/web/create.scss');
import Tmp from "./createTmp.js";
import Js from "./createjs.js";
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
