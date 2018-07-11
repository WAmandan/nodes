window.onload = function () {
  var items = document.querySelectorAll('.carousel-inner .item');
  
  (window.onresize = function () {
    var width = window.screen.width;
    if(width >= 768){
      for(var i = 0; i < items.length; i++){
        var imgSrc = items[i].getAttribute('data-largeSrc');
        items[i].innerHTML = "<a href='javascript:;' class='pcImg'></a>'";
        items[i].childNodes[0].style.background = "url("+ imgSrc +") center center"
      }
    } else {
      for(var i = 0; i < items.length; i++){
        var imgSrc = items[i].getAttribute('data-smallSrc');
        items[i].innerHTML = "<img src="+imgSrc+" class='mobilImg'></a>'";
      }
    }
  })();
}