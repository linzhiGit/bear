import pageJs from '../common/jquery.page.js';
pageJs()
var adId = "";
var adType = "";
var agentName ="";
var areaCode = "";
var bizType = "";
var areaStartTime = "";
var areaEndTime = "";
var isControl = '';
var isKa = '';
var merchantName;
var isNew;

const render = () => {
  let AREA = {
    _init() {
      let mi = this;
      this.getQueryString();
      this.datatime();
      this.changePage();
      this.backBefore();
      this.adTypeOne();
      this.province();
      this.onSearch();
    },
    getQueryString(){
      var url=window.location.hash;
      var Request = new Object();
      if(url.indexOf("?")!=-1)
      {
      var str = url.substr(1);
      if(url.indexOf("&")!=-1){
        var splitStr =str.split("?")[1];
        var obj = splitStr.split("&");
        for(var i=0;i< obj.length;i++)
        {
          Request[obj[i].split("=")[0]]=(obj[i].split("=")[1]);
        }
      }
      else{
        var strs = str.split("?")[1];
        Request[strs.split("=")[0]]=(strs.split("=")[1]);
      }
      }
      adId= Request["adId"];
      adType = Request["adType"];
    },
    datatime(){
      function GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1 < 10 ? ('0'+(dd.getMonth()+1)):dd.getMonth()+1;//获取当前月份的日期
        var d = dd.getDate()< 10 ? '0'+dd.getDate():dd.getDate();
        return y+"-"+m+"-"+d;
      }
      $(".area_datetime").datetimepicker({
          format: 'yyyy-mm-dd',
          minView:'month',
          language: 'cn',//显示中文
          endDate : GetDateStr(-1),
          autoclose:true
      }).on('changeDate',function(ev){
          let ed = new Date($('#area_datetimeStart').val());
          let sd = new Date($('#area_datetimeEnd').val());

          if (ed > sd) {
            alert("结束日期不能小于开始日期");
            $(this).val('');
          }
      });
      $('#area_datetimeEnd').val(GetDateStr(-1));
      $('#area_datetimeStart').val(GetDateStr(-7));
      AREA.getAvailableMerchantList(15,1);
    },
    page(pageTotal,rowNum,pageNo){
      if(rowNum){
        var rowNum = rowNum;
      }else{
        var rowNum = 15;
      }
      $(".area_tcdPageCode").createPage({
          pageCount:Math.ceil(pageTotal/rowNum), //总页数
          current: pageNo,
          backFn: function(p) {
            AREA.getAvailableMerchantList(rowNum,p);
          }
      });
    },
    changePage() {
      $(".area_pageSize").change(function(){
  			var rowNum = $(this).val();
        AREA.getAvailableMerchantList(rowNum,1);
  		});
    },
    getAvailableMerchantList(rowNum,pageNo){

      var shopListJson = new Object();
      shopListJson.adId = adId;
      shopListJson.adType = adType;
      shopListJson.agentName = $(".areaTmp_agent").val();
      shopListJson.startTime = $("#area_datetimeStart").val();
      shopListJson.endTime = $("#area_datetimeEnd").val();
      shopListJson.merchantName =$("#areaTmp_shopName").val();
      shopListJson.isControl = $(".area_isControl").val();
      shopListJson.isKa = $(".area_isKA").val();
      shopListJson.isNew = 3;
      shopListJson.pageNo = pageNo;
      shopListJson.pageSize = rowNum;
      if($(".area_adType1").val()){
        shopListJson.bizType = $(".area_adType1").val();
      }
      if($(".area_adType2").val()){
        shopListJson.bizType = $(".area_adType2").val();
      }

      if($("#area_province").val()){
        shopListJson.areaCode = $("#area_province").val();
      }
      if($("#area_city").val()){
        shopListJson.areaCode = $("#area_city").val();
      }
      if($("#area_county").val()){
        shopListJson.areaCode = $("#area_county").val();
      }


      $.ajax({
        type:'get',
        url:"/rest/ad/put/getAvailableMerchantList",
        dataType: 'json',
        data:shopListJson,
        success: function(data) {
          if(data.code=="0002005"){
            var host = window.location.host;
            window.location.href="http://"+host+'/view/login.html';
            return;
          }
          if(data.success){
            var merchantlist = data.merchantlist;
            var pageTotal = data.total;
            AREA.page(pageTotal,rowNum,pageNo);

            var areaList_html = '';
            for(var i=0;i<merchantlist.length;i++){
              if(merchantlist[i].isKa==1||merchantlist[i].isKa=="1"){
                var areaisKa = "是"
              }else{
                var areaisKa = "否"
              }

              if(merchantlist[i].isControl==1||merchantlist[i].isControl=="1"){
                var areaisControl = "是"
              }else{
                var areaisControl = '否'
              }

              areaList_html+='<tr>\
                <td>'+merchantlist[i].merchantName+'</td>\
                <td>'+merchantlist[i].agentName+'</td>\
                <td>'+merchantlist[i].areaValue+'</td>\
                <td>'+merchantlist[i].bizValue+'</td>\
                <td>'+areaisKa+'</td>\
                <td>'+areaisControl+'</td>\
                <td>/</td>\
                <td>/</td>\
                <td>/</td>\
              </tr>'
            }
            $(".J-areaList").html(areaList_html);
          }else{
            alert(data.msg);
          }
        }
      });
    },
    onSearch(){
      $(".J-areaSearch").click(function(){
        AREA.getAvailableMerchantList(15,1);
      });
    },
    backBefore(){
      $(".backBefore").click(function(){
        var host = window.location.host;
        window.location.href="http://"+host+'/view/main.html#adList';
      });
    },
    adTypeOne(){
      $.ajax({
        type:'get',
        url:"/rest/ad/basedata/getAgentBaseData",
        dataType: 'json',
        data:{"pid":0,"category":"biztype"},
        success: function(data) {
          if(data.code=="0002005"){
            var host = window.location.host;
            window.location.href="http://"+host+'/view/login.html';
            return;
          }
          if(data.success){
            var baseDataList = data.data;
            var adTypeOne = '<option value="" selected="selected">--请选择--</option>';
            for(var i=0;i<baseDataList.length;i++){
              adTypeOne += '<option value="'+ baseDataList[i].realValue +'">'+ baseDataList[i].showValue +'</option>'
            }
            $(".area_adType1").html(adTypeOne);
          }
        }
      });
      $(".area_adType1").change(function(){
        var pid = $(this).val();
        AREA.adTypeTwo(pid);
      });
    },
    adTypeTwo(pid){
      $.ajax({
        type:'get',
        url:"/rest/ad/basedata/getAgentBaseData",
        dataType: 'json',
        data:{"pid":pid,"category":"biztype"},
        success: function(data) {
          if(data.code=="0002005"){
            var host = window.location.host;
            window.location.href="http://"+host+'/view/login.html';
            return;
          }
          if(data.success){
            var baseDataList = data.data;
            var adTypeTwo = '<option value="" selected="selected">--请选择--</option>';
            for(var i=0;i<baseDataList.length;i++){
              adTypeTwo += '<option value="'+ baseDataList[i].realValue +'">'+ baseDataList[i].showValue +'</option>'
            }
            $(".area_adType2").html(adTypeTwo);
          }
        }
      });
    },
    province(){
      $.ajax({
        type:'get',
        url:"/rest/ad/basedata/getAgentBaseData",
        dataType: 'json',
        data:{"pid":0,"category":"map"},
        success: function(data) {
          if(data.code=="0002005"){
            var host = window.location.host;
            window.location.href="http://"+host+'/view/login.html';
            return;
          }
          if(data.success){
            var baseDataList = data.data;
            var province = '<option value="" selected="selected">--请选择--</option>';
            for(var i=0;i<baseDataList.length;i++){
               province += '<option value="'+ baseDataList[i].realValue +'">'+ baseDataList[i].showValue +'</option>'
            }
            $("#area_province").html(province);
          }
        }
      });

      $("#area_province").change(function(){
        var pid = $(this).val();
        AREA.city(pid);
        $("#area_county").html('<option value="" selected="selected">--请选择--</option>');
      })
    },
    city(pid){
      $.ajax({
        type:'get',
        url:"/rest/ad/basedata/getAgentBaseData",
        dataType: 'json',
        data:{"pid":pid,"category":"map"},
        success: function(data) {
          if(data.code=="0002005"){
            var host = window.location.host;
            window.location.href="http://"+host+'/view/login.html';
            return;
          }
          if(data.success){
            var baseDataList = data.data;
            var city = '<option value="" selected="selected">--请选择--</option>';
            for(var i=0;i<baseDataList.length;i++){
               city += '<option value="'+ baseDataList[i].realValue +'">'+ baseDataList[i].showValue +'</option>'
            }
            $("#area_city").html(city);
          }
        }
      });

      $("#area_city").change(function(){
        var pid = $(this).val();
        AREA.county(pid);
      })
    },
    county(pid){
      $.ajax({
        type:'get',
        url:"/rest/ad/basedata/getAgentBaseData",
        dataType: 'json',
        data:{"pid":pid,"category":"map"},
        success: function(data) {
          if(data.code=="0002005"){
            var host = window.location.host;
            window.location.href="http://"+host+'/view/login.html';
            return;
          }
          if(data.success){
            var baseDataList = data.data;
            var county = '<option value="" selected="selected">--请选择--</option>';
            for(var i=0;i<baseDataList.length;i++){
               county += '<option value="'+ baseDataList[i].realValue +'">'+ baseDataList[i].showValue +'</option>'
            }
            $("#area_county").html(county);
          }
        }
      });
    }
  };
  AREA._init();
}
export default render;
