window.onload = function () {
  var code = document.querySelector('.verificationcode');
  code.onclick = function () {
    var time = 5;
    this.innerHTML = "剩余"+ time + "秒";
    if(timeId) {
      timeId = null;
    }
    var timeId = setInterval(function () {
      time--;
      code.innerHTML = "剩余"+ time + "秒";
      if(time == 0) {
      code.innerHTML = "获取验证码";
      code.style = "";
      clearInterval(timeId);
    }
    },1000)
  }
}