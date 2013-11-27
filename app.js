$(function() {

  	$("ul").on( "click", "li", function() {
    	$(this).fadeOut();
    });

	$('#btn-add-item').click( function() {
		//alert('You added an item!');

		var bla = $('#txt_name').val();
		$("#list").append("<li>" + bla + "</li>");
		//$(this).closest('bli').slideUp().remove();
    	$("#txt_name").val("");
    	                                      
		});
	});






// $( "body" ).on( "click", "p", function() {
//   alert( $( this ).text() );
// });