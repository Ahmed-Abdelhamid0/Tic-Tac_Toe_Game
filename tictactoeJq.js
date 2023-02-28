$(document).ready(function(){
	$("#2").hide();
	/* for show and hide game 3 and game 4 */
	$("#play3").click(function(){
		$(".game4").css("visibility", "hidden");
		$(".game3").css("visibility", "visible");
		$("#win").html(function(origText){
      return ""
    });
	});
	
	$("#play4").click(function(){
		$(".game3").css("visibility", "hidden");
			
		$(".game4").css("visibility", "visible");
		 $("#win").html(function(origText){
      return ""
    });
		
	});

	/* for chose the color of x and o */
	$("#x").click(function(){
		function clo1(id) {
	var c = document.getElementById(id);
	alert(c.innerHTML);
}
		$("#xocolor").css("visibility", "visible");
		
			$("#xoblack").click(function(){
				$("#x").css("color", "black");
				$("#y").css("color", "white");
				$("#xocolor").css("visibility", "hidden");
				$("#1").show();
				$("#2").hide();
			});
			$("#xowhite").click(function(){
				$("#win").html(function(origText){
      return ""
    });
				$("#x").css("color", "white");
				$("#y").css("color", "black");
				$("#xocolor").css("visibility", "hidden");
				$("#1").hide();
				$("#2").show();
				$("#win").show();
			});
	});
	
	$("#y").click(function(){
		$("#xocolor").css("visibility", "visible");
		
			$("#xoblack").click(function(){
				$("#x").css("color", "white");
				$("#y").css("color", "black");
				$("#xocolor").css("visibility", "hidden");
			});
			$("#xowhite").click(function(){
				$("#x").css("color", "black");
				$("#y").css("color", "white");
				$("#xocolor").css("visibility", "hidden");
			});
	});

	/* for chose the color of background */
	$("#black").click(function()
	{
		$(".con").css("backgroundColor","#03071e");
		
		$("#title").css("color","#e85d04");
		$("#choseColor").css("color","#ffba08");
		
		$("#x").css("backgroundColor","#e85d04");
		$("#y").css("backgroundColor","#e85d04");
		
		$("#play3").css("color","#ffba08");
		$("#play4").css("color","#ffba08");
		$("#win").css("color","#ffba08");
		
		$(".area").css("backgroundColor","#e85d04");
		$("#breakline").css("backgroundColor","#ffba08");
		$(".re").css("color","#ffba08");
		
		/* hover on boxes */
		$(".hovcol").mouseover(function()
		{
			$(this).css("backgroundColor","#ffba08");
		});
		$(".hovcol").mouseleave(function()
		{
			$(this).css("backgroundColor","");
		});
		
	});
	
	
	
	$("#white").click(function()
	{
		$(".con").css("backgroundColor","#fff");
		
		$("#title").css("color","#ef476f");
		$("#choseColor").css("color","#3c096c");
		
		$("#x").css("backgroundColor","#ef476f");
		$("#y").css("backgroundColor","#ef476f");
		
		$("#play3").css("color","#3c096c");
		$("#play4").css("color","#3c096c");
		$("#win").css("color","#3c096c");
		
		$(".area").css("backgroundColor","#ef476f");
		$("#breakline").css("backgroundColor","#3c096c");
		$(".re").css("color","#3c096c");
		
		/* hover on boxes */
		$(".hovcol").mouseover(function()
		{
			$(this).css("backgroundColor","#3c096c");
		});
		$(".hovcol").mouseleave(function()
		{
			$(this).css("backgroundColor","");
		});
		
	});
	
	
	
	$("#yellow").click(function()
	{
		$(".con").css("backgroundColor","#ffba08");
		
		$("#title").css("color","#67450c");
		$("#choseColor").css("color","#9e0056");
		
		$("#x").css("backgroundColor","#67450c");
		$("#y").css("backgroundColor","#67450c");
		
		$("#play3").css("color","#9e0056");
		$("#play4").css("color","#9e0056");
		$("#win").css("color","#9e0056");
		
		$(".area").css("backgroundColor","#67450c");
		$("#breakline").css("backgroundColor","#9e0056");
		$(".re").css("color","#9e0056");
		
		/* hover on boxes */
		$(".hovcol").mouseover(function()
		{
			$(this).css("backgroundColor","#9e0056");
		});
		$(".hovcol").mouseleave(function()
		{
			$(this).css("backgroundColor","");
		});
		
	});
	
	
	


});