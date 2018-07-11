
$(function(){
      var screenHeight = $(window).height();
      $('#fullpage').fullpage({
            navigation:true,
            onLeave : function (index,nextIndex,direction) {
                  if(index == 1) {
                        $('img, .move').css("style","");
                  }
                  if(index == 1 && nextIndex == 2) {
                        $('.search1').animate({"opacity":1,"left":"50%"},1500,function () {
                              $('.search2').animate({"opacity":1},500,function () {
                                    $('.search1').hide();
                                    $('.search2').animate({"top":10,"right":10,"width":150},500,function () {
                                    });
                                    $('.goods').animate({"opacity":1,"width":414,"left":"15%"},1000);
                                    $('.title2').hide(500);
                              })
                        })
                  }
                  if(index == 2 && nextIndex == 3) {
                        $('.section2-sofa').show().animate({"width":212,"bottom": "-220%","left": "10%"},3000,function () {
                              $('.mask').show();
                              $('.whitesize').animate({"opacity":1},500);
                              $('.whitebtn').animate({"opacity":1},500);
                        })
                  }
                  if(index == 3 && nextIndex == 4) {
                        $('.section2-sofa').hide();
                        $('.section3-sofa2').show().animate({"bottom":"-80%","left":"52%"},3000,function () {
                              $('.section3-sofa2').hide();
                              $('.section4-sofa').show();
                              $('.bottom').animate({"left":"150%"},1500,"easeInElastic",function () {
                                    $('.scetion4-title1').hide();
                                    $('.section4-title2').animate({"opacity":1},500)
                              })
                        })
                  }
                  if(index == 4 && nextIndex == 5) {
                        $('.hand').animate({"bottom":"-10%"},1000,function () {
                              $('.mouse1').hide();
                              $('.mouse2').show();
                              $('.t1f').show().animate({"bottom":"-95%","width":"160px"},3000,function () {
                                    $('.order').animate({"top":"32%"},500,function () {
                                          $('.title').animate({" translateZ":-5000,"rotate":"360deg"},500)
                                    })
                              })
                        })
                  }
            }
      });
});