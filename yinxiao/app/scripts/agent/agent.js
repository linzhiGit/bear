require('../../styles/web/agent.scss');
import Tmp from "./agentTmp.js";
import Js from "./agentjs.js";
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
