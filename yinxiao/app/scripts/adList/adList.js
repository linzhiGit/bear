require('../../styles/web/adList.scss');
import Tmp from "./adListTmp.js";
import Js from "./adListjs.js";
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
