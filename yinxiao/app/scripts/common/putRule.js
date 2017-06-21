const render = () => {
  return (`
    <div class="app-content">
      <!--创建素材-->
      <div class="rule">
        <div class="tabname">
          <ul>
            <li>投放规则</li>
          </ul>
        </div>
        <div class="main">
          <div class="adinfo">
            <p style="font-size:14px;color:#000;font-weight:bold">备注广告信息</p>
            <ul>
              <li>
                <label>广告主</label>
                <input name="adradio" type="txt" class="jsad" checked="checked"/>
              </li>
              <li>
                <label>广告名称</label>
                <input name="adradio" type="txt" class="jsad" checked="checked"/>
              </li>
            </ul>
          </div>
          <div class="putRule">
            <p style="font-size:14px;color:#000;font-weight:bold;margin-bottom:20px">投放规则</p>

          </div>
          <div class="J_submitSC">提交</div>
          <div class="J_back">返回上一页</div>
        </div>
      </div>
    </div>
`)
}

export default render;
