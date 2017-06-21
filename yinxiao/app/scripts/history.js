import countTmpl from './count/count.js';
import adListTmpl from './adList/adList.js';
import createTmpl from './createAndrule/create.js';
import agentTmpl from './agent/agent.js';
import shopTmpl from './shop/shop.js';
import areaTmpl from './area/area.js';
var countT = countTmpl();
var adList = adListTmpl();
var create=  createTmpl();
var agent = agentTmpl();
var shop = shopTmpl();
var area = areaTmpl();

const render = () => {
	$(".panelTab").click(function(){
		if($(this).parent().find("ul").is(":hidden")){
			$(this).parent().find("ul").slideDown();
		}else{
			$(this).parent().find("ul").slideUp();
		}
	})

	var hashurl = hashUrl();
	changeTmp(hashurl);
	// history.pushState({},null,'main.html');//最开始的状态，采用replace直接替换

  //手动切换路由的时候
	$(".menuTab").click(function(){
		var dataUrl = $(this).attr("data-url");
		history.pushState({},null,'#'+dataUrl);//之后的状态，需要进行保存
    $(".app-main-content").remove();
    changeTmp(dataUrl);
	});

  //hash改变的时候
  window.addEventListener('hashchange',function(){
		var hashurl = hashUrl();
    changeTmp(hashurl);
  });


  function changeTmp(dataUrl){
		$(".menuTab").css("color","#fff");
    switch(dataUrl)
    {
      case "count":
        countT.init();
				$(".aside-wrap #count").parents('ul').show();
				$(".aside-wrap #count").css("color","#fdd105");
        break;
      case "adList":
        adList.init();
				$(".aside-wrap #adList").parents('ul').show();
				$(".aside-wrap #adList").css("color","#fdd105");
        break;
      case 'create':
        create.init();
				$(".aside-wrap #adList").parents('ul').show();
				$(".aside-wrap #adList").css("color","#fdd105");
        break;
      case 'agent':
        create.init();
				$(".aside-wrap #adList").parents('ul').show();
				$(".aside-wrap #adList").css("color","#fdd105");
        break;
      case 'shop':
        shop.init();
				$(".aside-wrap #adList").parents('ul').show();
				$(".aside-wrap #adList").css("color","#fdd105");
        break;
			case 'area':
				area.init();
				$(".aside-wrap #adList").parents('ul').show();
				$(".aside-wrap #adList").css("color","#fdd105");
				break
      default:
        history.pushState({},null,'main.html');
    }
  }

  function hashUrl(){
    var windowHash= window.location.hash;
    var hashurl;

    if(windowHash.indexOf("?") == -1){
      hashurl = windowHash.split("#")[1];
    }else{
      hashurl = windowHash.substring(windowHash.indexOf("#") + 1,windowHash.indexOf("?"))
    }
    $(".app-main-content").remove();
    return hashurl;
  }
}

export default render;
