require('../../styles/web/shop.scss');
import Tmp from "./shopTmp.js";
import Js from "./shopjs.js";
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
