var socket = io('http://localhost');

// Whenever the server emits 'login', log the login message
socket.on('login', (data) => {
	// Display the welcome message
	console.log("Welcome to Socket.IO Chat");
});

$(function () {
	var text_length = $('.input-text').val().length;
	$('#count').html(text_length);

	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

	$('.input-text').keyup(function() {
	  var text_length = $('.input-text').val().length;
	  $('#count').html(text_length);
	});

})
