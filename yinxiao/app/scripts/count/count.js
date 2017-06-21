require('../../styles/web/count.scss');
import Tmp from "./countTmp.js";
import Js from "./countjs.js";
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
