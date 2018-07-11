window.onload = function () {
  // 顶部0渐变
  var banner = document.querySelector('.jd-banner').offsetHeight;
  var Top = document.querySelector('.jd-top');
  var TopHeight = top.offsetHeight;
  change(Top,banner,TopHeight);

  // 倒计时
  var spanlist = document.querySelectorAll('.kill-time > span');
  timer(spanlist);


  // 轮播图
  // 获取使用节点
  var ul = document.querySelector('.jd-bannerImg');
  var lis = document.querySelectorAll('.jd-bannerImg > li');
  var whiteDot = document.querySelector('.jd-bannerIndicator');
  var imgWidth = document.querySelector('.jd-banner').offsetWidth;
  var banner = {
    ul: ul,
    lis:lis,
    whiteDot: whiteDot,   /* localStorage不能读取对象里又存储对象的值 */
    imgWidth: imgWidth,
    index:1
  }

  changeimg(banner);
};
// 改变顶部颜色
var change = (function () {
  return  function changebgc (top,bannerHeight,topHeight) {
            var opacity = 0;
            window.onscroll = function () {
              var scrollHeight = document.documentElement.scrollTop;
              if (scrollHeight < bannerHeight) {
                opacity = scrollHeight / bannerHeight;
                top.style.backgroundColor = "rgba(233,35,34," + opacity + ")";
              }
            }
          }
})();

var timer = (function () {
  var i = 4651;
  return  function time(span) { 
            gettime(i,span);
            setInterval(function () {
              i--;
              if(i < 0) {
                return;
              }
              gettime(i,span);
            },1000)
          };
  // 封装时间获取
  function gettime(time,spans) {
    var hour = Math.floor(time / 3600);
    var minute = Math.floor(time % 3600 / 60 );
    var second = Math.floor(time % 3600 % 60);
    spans[0].innerHTML = Math.floor(hour / 10);
    spans[1].innerHTML = Math.floor(hour % 10);
    spans[3].innerHTML - Math.floor(minute / 10);
    spans[4].innerHTML = Math.floor(minute % 10);
    spans[6].innerHTML = Math.floor(second / 10);
    spans[7].innerHTML = Math.floor(second % 10);
  };
})();


// 轮播图
// 方法一
// var index = null;
// var changeimg = function (obj) {
//     var left,startX,moveX,endX,timeId;
//     // 修改结构
//     obj.ul.appendChild(obj.lis[0].cloneNode(true));
//     obj.ul.insertBefore(obj.lis[obj.lis.length - 1].cloneNode(true),obj.lis[0]);
//     for(var i = 0;i < obj.lis.length; i++) {
//       var li = document.createElement('li');
//       obj.whiteDot.appendChild(li);
//     }
//     // 修改样式
//     obj.whiteDot.children[0].className = "current";
//     var count = obj.ul.children.length;
//     obj.ul.style.width = count * obj.imgWidth + "px";
//     obj.ul.style.position = "relative";
//     obj.ul.style.left = -obj.imgWidth + "px";
//     for(var i = 0; i < count; i++) {
//       obj.ul.children[i].style.width = obj.imgWidth + "px";
//     }
//     // 尺寸变化时图片大小跟着改变
//     window.onresize = function () {
//       obj.imgWidth = document.querySelector('.jd-banner').offsetWidth;
//       obj.ul.style.width = count * obj.imgWidth + "px";
//       for(var i = 0; i < count; i++) {
//         obj.ul.children[i].style.width = obj.imgWidth + "px";
//       }
//     }

//     // 触摸滑动
//     for(var m = 0; m < obj.ul.children.length; m++) {
//       obj.ul.addEventListener('touchstart',touchstart);
//       obj.ul.addEventListener('touchmove',touchmove);
//       obj.ul.addEventListener('touchend',touchend);
//     };

//     // 自动轮播函数
//     var startTime = function () {
//       timeId = setInterval(function () {
//         obj.index++;
//         obj.ul.style.transition = "left 0.3s";
//         obj.ul.style.left = - obj.index * obj.imgWidth + "px";
//         setTimeout(function () {
//           if(obj.index == count - 1) {
//             obj.ul.style.transition = "none";
//             obj.index = 1;
//             obj.whiteDot.children[obj.index-1].className = "current";
//             obj.ul.style.left = - obj.index * obj.imgWidth + "px";
//           }
//         },500);
//         obj.ul.addEventListener('transitionend', transitionend);
//         obj.ul.addEventListener('webkitTransitionend', transitionend);
//       },1500)
//     }
//     // 自动轮播执行
//     startTime();

//     // 监听动画是否完成
//     function transitionend() {
//       if(obj.index == obj.ul.children.length - 1) {
//         obj.index = 1;
//         obj.ul.style.transition = "none";
//         obj.ul.style.left = -obj.index * obj.imgWidth + "px";
//       } else if (obj.index == 0) {
//         obj.index = obj.ul.children.length - 2;
//         obj.ul.style.transition = "none";
//         obj.ul.style.left = -obj.index * obj.imgWidth + "px";
//       }
//       for(var j = 0; j < obj.lis.length; j++) {
//         obj.whiteDot.children[j].className = "";
//       };
//       obj.whiteDot.children[obj.index-1].className = "current";
//       setTimeout(function () {
//         istrue = true;
//         clearInterval(timeId);
//         startTime();
//       },500)
//     };

//     // 触摸事件
//     var istrue = true;

//     function touchstart(e) {
//       clearInterval(timeId);
//       startX = e.targetTouches[0].clientX;
//     }

//     function touchmove(e) {
//       if(istrue) {
//         moveX = e.targetTouches[0].clientX;
//         endX = moveX - startX;
//         obj.ul.style.transition = "none";
//         obj.ul.style.left = (-obj.index * obj.imgWidth + endX) + "px";
//       }
//     }

//     function touchend(e) {
//       if(Math.abs(endX) > Math.floor(obj.imgWidth / 10)) {
//         if(endX > 0) {
//           obj.index--;
//         } else {
//           obj.index++;
//         }
//         obj.ul.style.transition = "left 0.3s";
//         obj.ul.style.left = -obj.index * obj.imgWidth + "px";
//       } else if (Math.abs(endX)) {
//         obj.ul.style.transition = "left 0.3s";
//         obj.ul.style.left = -obj.index * obj.imgWidth + "px";
//       }
//       istrue = false;
//       startX = 0;
//       moveX = 0;
//       endX = 0;
//     }
//   }
// 


// 闭包实现轮播图
var changeimg = (function () {
  var left,startX,moveX,endX,timeId,object, count;
  return function (obj) {
    // 修改结构
    object = obj;
    obj.ul.appendChild(obj.lis[0].cloneNode(true));
    obj.ul.insertBefore(obj.lis[obj.lis.length - 1].cloneNode(true), obj.lis[0]);
    for (var i = 0; i < obj.lis.length; i++) {
      var li = document.createElement('li');
      obj.whiteDot.appendChild(li);
    }
    // 修改样式
    obj.whiteDot.children[0].className = "current";
    count = obj.ul.children.length;
    obj.ul.style.width = count * obj.imgWidth + "px";
    obj.ul.style.position = "relative";
    obj.ul.style.left = -obj.imgWidth + "px";
    for (var i = 0; i < count; i++) {
      obj.ul.children[i].style.width = obj.imgWidth + "px";
    }
    // 尺寸变化时图片大小跟着改变
    window.onresize = function () {
      obj.imgWidth = document.querySelector('.jd-banner').offsetWidth;
      obj.ul.style.width = count * obj.imgWidth + "px";
      for (var i = 0; i < count; i++) {
        obj.ul.children[i].style.width = obj.imgWidth + "px";
      }
    }

    // 触摸滑动
    for (var m = 0; m < obj.ul.children.length; m++) {
      obj.ul.addEventListener('touchstart', touchstart);
      obj.ul.addEventListener('touchmove', touchmove);
      obj.ul.addEventListener('touchend', touchend);
    };
    // 自动轮播执行
    startTime();
    // return obj;
  }

  function startTime() {
    timeId = setInterval(function () {
      object.index++;
      object.ul.style.transition = "left 0.3s";
      object.ul.style.left = - object.index * object.imgWidth + "px";
      setTimeout(function () {
        if(object.index == count - 1) {
          object.ul.style.transition = "none";
          object.index = 1;
          object.whiteDot.children[object.index-1].className = "current";
          object.ul.style.left = - object.index * object.imgWidth + "px";
        }
      },500);
      object.ul.addEventListener('transitionend', transitionend);
      object.ul.addEventListener('webkitTransitionend', transitionend);
    },1500)
  }

  // 监听动画是否完成
  function transitionend() {
    if(object.index == object.ul.children.length - 1) {
      object.index = 1;
      object.ul.style.transition = "none";
      object.ul.style.left = -object.index * object.imgWidth + "px";
    } else if (object.index == 0) {
      object.index = object.ul.children.length - 2;
      object.ul.style.transition = "none";
      object.ul.style.left = -object.index * object.imgWidth + "px";
    }
    for(var j = 0; j < object.lis.length; j++) {
      object.whiteDot.children[j].className = "";
    };
    object.whiteDot.children[object.index-1].className = "current";
    setTimeout(function () {
      istrue = true;
      clearInterval(timeId);
      startTime();
    },500)
  };

  // 触摸事件
  var istrue = true;

  function touchstart(e) {
    clearInterval(timeId);
    startX = e.targetTouches[0].clientX;
  }
  
  function touchmove(e) {
    if(istrue) {
      moveX = e.targetTouches[0].clientX;
      endX = moveX - startX;
      object.ul.style.transition = "none";
      object.ul.style.left = (-object.index * object.imgWidth + endX) + "px";
    }
  }

  function touchend(e) {
    if(Math.abs(endX) > Math.floor(object.imgWidth / 10)) {
      if(endX > 0) {
        object.index--;
      } else {
        object.index++;
      }
      object.ul.style.transition = "left 0.3s";
      object.ul.style.left = -object.index * object.imgWidth + "px";
    } else if (Math.abs(endX)) {
      object.ul.style.transition = "left 0.3s";
      object.ul.style.left = -object.index * object.imgWidth + "px";
    }
  }
})()