// JavaScript Document

// $(document).ready(function() {
    
    
//     // original source from SITEPOINT
//     $(window).scroll(function() {
//     if ($(this).scrollTop() > 0) {
//         // apply effects and animations
//         $('#center').css('background-color','red');
    
//     }});
// });


// store scrolled amount

$(document).ready(function() {

$('#slide-2, #slide-3, #slide-4').hide();


$(document).scroll(function() {

	var scrollAmount = $('body').scrollTop();
	
	// USE THIS VARIABLE LATER TO BETTER TIME THE FADES
	var docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
	console.log(scrollAmount, docHeight);


	if(scrollAmount < 500) {
		$('#slide-2').fadeOut('slow');

	}

	if(scrollAmount > 500 && scrollAmount < 1000) {

		$('#slide-2').fadeIn('slow');
		$('#slide-3').fadeOut('slow');
		console.log("25% hit");

	}

	if(scrollAmount > 1000 && scrollAmount < 1500) {

		$('#slide-4').fadeOut('slow');
		$('#slide-3').fadeIn('slow');
		console.log("50% hit");


	}

	if(scrollAmount > 1500) {

		$('#slide-4').fadeIn('slow');
		console.log("we hit 800");
		console.log("75% hit");

		
	} 

});


});