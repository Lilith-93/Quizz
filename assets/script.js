let bonBoutton = {};
let mauvaisBoutton = {};

$(document).ready(function(){
	
	var score = 0;


	bonBoutton = $(".good");
	mauvaisBoutton = $(".bad");

	bonBoutton.click(function(){
		$(this).addClass('selecgood');
		score++;
	});
	$(".score").text('Score : ' + score);
	
	mauvaisBoutton.click(function(){
		$(this).addClass('selectbad');		
		});

});
