$(document).ready(function(){
  $win = $(window).height();
  $scroll = $(document).scrollTop();
  $('.cloud1').css("top",-100 - $scroll*0.5+"px");
  $('.cloud2').css("top",-100 -$scroll*1.5+"px");
  $('.cloud3').css("top",$win + $scroll*0.3+"px");
  $('.cloud4').css("top",$win*1.4 - $scroll*0.1+"px");
  $(window).scroll(function(){
    $scroll = $(document).scrollTop();
    $('.cloud1').css("top",-100 - $scroll*0.5+"px");
    $('.cloud2').css("top",-100 -$scroll*1.5+"px");
    $('.cloud3').css("top",$win + $scroll*0.3+"px");
    $('.cloud4').css("top",$win*1.4 - $scroll*0.1+"px");
  });
});
