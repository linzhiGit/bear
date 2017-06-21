let timer = null;
function Pager(container, config) {
  var defalut = {
      half: 2,   //半径
      total: 10, //总页数
      current: 1, //当前的页码
      prefix : 1, //前缀
      nexfix : 1, //后缀
      skin: 'blue',// 选择皮肤
      callback : function (toindex) {}
  };
  this.fixs = jQuery.extend({}, defalut, config);
  this.box = jQuery(container);
  this.init();
}
Pager.prototype = {
  init: function () {
    this.renderPager();
  },
  renderPager: function () {
    var i,
        len,
        html = '',
        current = this.fixs.current, //当前页
        total = this.fixs.total, //总页数
        radius = this.fixs.half, //获取半径
        skin = this.fixs.skin + '-page-skin', //皮肤样式
        prefix = this.fixs.prefix,//前缀
        nexfix = this.fixs.nexfix, // 后缀;
        cb = this.fixs.callback;
    if (cb) {
      cb(current);
    }
    if (!current) {
      return;
    }
    if (total < 2) {
      return;//小于2页不显示分页
    }
    if (total < current) {
      return;
    }
    // 判断是否显示上一页
    if (current > 1) {

      html += '<a class="vm-page-prev" href="#" data-k="page" data-v="' + (current - 1) + '"><s data-k="page" data-v="' + (current - 1) + '">‹</s>上一页</a>';
    } else {
      html += '<span class="vm-page-prev"><s>‹</s>上一页</span>';
    }
    // 显示 [1, current]
    if (current <= prefix + radius + 1) {
      for (i = 1; i <= current; i += 1) {
        if (i === current) {
          html += '<span class="vm-page-current">' + i + '</span>';
        } else {
          html += '<a href="#" data-k="page" data-v="' + i + '">' + i + '</a>';
        }
      }
    } else {
      for (i = 1; i < prefix + 1; i += 1) {
        html += '<a href="#" data-k="page" data-v="' + i + '">' + i + '</a>';
      }
      html += '<span class="vm-page-break">...</span>';
      for (i = current - radius; i <= current; i += 1) {
        if (i === current) {
          html += '<span class="vm-page-current">' + i + '</span>';
        } else {
          html += '<a href="#" data-k="page" data-v="' + i + '">' + i + '</a>';
        }
      }
    }
    // 显示 (current, total]
    if (total <= current + radius + nexfix) {
      for (i = current + 1; i <= total; i += 1) {
        html += '<a href="#" data-k="page" data-v="' + i + '">' + i + '</a>';
      }
    } else {
      for (i = current + 1, len = current + radius; i <= len; i += 1) {
        html += '<a href="#" data-k="page" data-v="' + i + '">' + i + '</a>';
      }
      html += '<span class="vm-page-break">...</span>';
      for (i = total - nexfix + 1; i <= total; ++i) {
        html += '<a href="#" data-k="page" data-v="' + i + '">' + i + '</a>';
      }
    }
    // 显示下一页;
    if (current < total) {
      html += '<a href="#" class="vm-page-next" data-k="page" data-v="' + (current + 1) + '">下一页<s data-k="page" data-v="' + (current + 1) + '">›</s></a>';
    } else {
      html += '<span class="vm-page-next">下一页<s>›</s></span>';

    }
    console.log(this.box);
    this.box.html('<div class="vm-page">' + html + '</div>');
    jQuery('.vm-page').addClass(skin);
  }
};
Pager.instance = null;
Pager.getInitialize = function (container, config) {
  clearTimeout(timer)
  var timer = setTimeout(function () {
    Pager.instance = new Pager(container, config);
  }, 0);
}
// export default Pager;
export default Pager;
