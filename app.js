$(function() {

  	$("ul").on( "click", "li", function() {
    	$(this).fadeOut();
    });

	$('#btn-add-item').click( function() {
		//alert('You added an item!');
		bla = $('#txt_name').val();
		$("#list").append("<li>" + bla + "</li>");
		//$(this).closest('li').slideUp().remove();
    	$("#txt_name").val("");
    	                                      
		

	});
});






// $( "body" ).on( "click", "p", function() {
//   alert( $( this ).text() );
// });