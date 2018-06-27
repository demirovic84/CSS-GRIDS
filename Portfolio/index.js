$('div.item2, div.item3 ,div.item4').each(function(i) {
  $(this).fadeOut(0).delay(500*i).fadeIn(850);
});




$(document).ready(function(){
  $("a.portfolioItems").click(function(event){
  	event.preventDefault();

  	let currentMoreInfo = $(this).parent().find(".more-info");
  	
  	$(".more-info").not(currentMoreInfo).hide('slow').delay(150).slideUp('fast');
    $(currentMoreInfo).toggle('fast').delay(150);
  });
});



$(document).ready(function(){
  $("a.aboutItems").click(function(event){
  	event.preventDefault();

  	let currentMoreInfo = $(this).parent().find(".more-info");
  	
  	$(".more-info").not(currentMoreInfo).hide('slow').delay(150).slideUp('fast');
    $(currentMoreInfo).toggle('fast').delay(150);
  });
});


