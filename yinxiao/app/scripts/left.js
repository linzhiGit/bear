const logo = require('../images/logo.jpg');
const render = () => {
  return (`
    <div class="app-aside bg-black">
      <div class="aside-wrap">
        <div class="logo"><img src="${logo}" alt=""></div>
        <ul class="nav">
          <li class="panel-heading active">
          	<a class="auto panelTab">
              <span class="pull-left icon-put"></span>
              <span>投放管理</span>
          	</a>
            <ul class="nav nav-sub">
              <li class="nav-sub-header">
              <a class="menuTab" id="adList" data-url="adList">
                <span>广告投放</span>
              </a>
              </li>
            </ul>
          </li>
          <li class="panel-heading active">
            <a class="auto panelTab">
              <span class="pull-left icon-count"></span>
              <span>结算管理</span>
            </a>
            <ul class="nav nav-sub">
              <li class="nav-sub-header">
                <a class="menuTab" id="count" data-url="count">
                  <span>统计结算</span>
                </a>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `)
}

export default render;
