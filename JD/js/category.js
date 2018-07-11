window.onload = function () {
  var leftbox = document.querySelector('.left');
  var leftul = document.querySelector('.left > ul');
  var startY = 0;
  var moveY = 0;
  var endY = 0;
  var distanceY = endY - startY;
  var currentY = leftul.offsetTop;
  var leftheight = leftbox.offsetHeight;
  var leftulHeight = leftul.offsetHeight;
  var maxTop = 0;
  var minTop = leftheight - leftulHeight;
  var maxBounceTop = maxTop + 100;
  var minBounceTop = minTop - 100;
  leftul.addEventListener('touchstart',function (e){
    startY = e.touches[0].clientY;
  })
  leftul.addEventListener('touchmove',function (e){
    moveY = e.targetTouches[0].clientY;
    distanceY = moveY - startY;
    if(currentY + distanceY > maxBounceTop){
      return;
    }
    leftul.style.transition = "top 0.5s";
    leftul.style.top = (currentY + distanceY) + 'px';
  })
  leftul.addEventListener('touchend',function (e) {
    endY = e.changedTouches[0].clientY;
    distanceY = endY - startY;
    if(currentY + distanceY > maxTop) {
      currentY = maxTop;
      leftul.style.transition = "top 0.5s";
      leftul.style.top = currentY + 'px';
    } else if(currentY + distanceY < minTop){
      currentY = minTop;
      leftul.style.transition = "top 0.5s";
      leftul.style.top = currentY + 'px';
    } else {
      currentY += distanceY;
    }
  })
}