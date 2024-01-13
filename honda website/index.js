

$(document).ready(function(){
$("#link3").click(function(){
	$("#myCarousel1").toggle();
  $("#myCarousel2").hide();
  $("#myCarousel3").hide();
  });
});

$(document).ready(function(){
  $("#link4").click(function(){
    $("#myCarousel2").toggle();
    $("#myCarousel1").hide();
    $("#myCarousel3").hide();
    });
  });

  $(document).ready(function(){
    $("#link5").click(function(){
      $("#myCarousel3").toggle();
      $("#myCarousel1").hide();
      $("#myCarousel2").hide();
      });
    });
