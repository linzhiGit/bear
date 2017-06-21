const leftIcon = require('../../images/left_icon.png');
const rightIcon = require('../../images/right_icon.png');
const render = () => {
  return (`
      <div class="app-main-content">
          <div class="app-content-top">
            <p><span class="backBefore"><img src="${leftIcon}">返回</span><span><img src="${rightIcon}">广告投放 —— <span class="toshopTitle">投放范围</span></span><span></span></p>
          </div>
          <div class="app-content">
            <div class="tabname">
              <ul>
                <li>投放范围</li>
              </ul>
            </div>
            <div class="tab">
              <form class="findCondition">
                <ul class="form-inline">
                <li>
                  <label>店铺名称：</label>
                  <input type="text" name="areaTmp_shopName" id="areaTmp_shopName" value="" class="form-control"/>
                </li>
                <li>
                  <label>所属代理商：</label>
                  <input name='areaTmp_agent' class="areaTmp_agent" type="text">
                </li>
                <li>
                  <label>是否KA：</label>
                  <select name='isKA' class="area_isKA form-control select">
                    <option value="" selected="selected">全部</option>
                    <option value="1">是</option>
                    <option value="0">否</option>
                  </select>
                </li>
                <li>
                  <label>是否可控</label>
                  <select name='isControl' class="area_isControl form-control select">
                    <option value="" selected="selected">全部</option>
                    <option value="1">是</option>
                    <option value="0">否</option>
                  </select>
                </li>
                <li>
                <label>类型</label>
                <select class="area_adType1" style="margin:0 8px 0 0">
                  <option value="" selected="selected">--请选择--</option>
                </select>
                <select class="area_adType2" style="margin:0 8px 0 0">
                  <option value="" selected="selected">--请选择--</option>
                </select>
                </li>
                <li>
                  <span style="white-space:nowrap;">
                    <input type="hidden" name="areaCode" id="areaCode" value="" style="width:200px">区域筛选：
                    <select id="area_province" style="margin:0 8px 0 0"><option value="">--请选择--</option></select>
                    <select id="area_city" style="margin:0 8px 0 0"><option value="">--请选择--</option></select>
                    <select id="area_county" style="margin:0 8px 0 0"><option value="">--请选择--</option></select>
                  </span>
                </li>
                <li>
                日期：
                <input size="16" type="text" id="area_datetimeStart" readonly class="area_datetime"> - <input size="16" type="text" id="area_datetimeEnd" readonly class="area_datetime">
                </li>
                <li>
                  <span class="btn btn-blue J-areaSearch">搜索</span>
                  <span class="btn btn-blue J-areaExport">导出Excel</span>
                </li>
                </ul>
              </form>
            </div>
            <div class="delist">
              <table>
                <thead>
                  <tr>
                    <th>店铺名称</th>
                    <th>所属代理商</th>
                    <th>地区</th>
                    <th>类型</th>
                    <th>KA</th>
                    <th>可控</th>
                    <th>PV</th>
                    <th>UV</th>
                    <th>点击数</th>
                  </tr>
                </thead>
                <tbody class="J-areaList">
                </tbody>
              </table>
            </div>
            <!--分页-->
            <div class="tcdPageCode_box">
              <div class="tcdPageCode_main">
                <span class="pageCount">
                  <select class="area_pageSize allPageSize">
                    <option selected="selected" value="15">15</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </span>
                <div class="area_tcdPageCode allPageCode"></div>
              </div>
            </div>
          </div>
      </div>
`)
}

export default render;
