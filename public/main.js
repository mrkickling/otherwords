var socket = io('http://localhost');

// When the client starts, create the uid.
if (window.localStorage) {
	if (!window.localStorage.getItem('uUID')) {
		window.localStorage.setItem('uUID', Math.random().toString(24) + new Date());
	}
	// Emit the UID right after connection
	socket.emit('login', window.localStorage.getItem('uUID'));
} else {
	socket.emit('login', Math.random().toString(24) + new Date());
}
socket.on('alert', (data) => {
	// Alert message
	$('.alerter').html(data);
	$('.alerter').fadeIn('slow', function(){
		setTimeout(function(){
			$('.alerter').fadeOut();
		}, 4000);

	});
});

socket.on('user info', (data) => {
	$('#username').val(data.name);
	$('#points').html(data.points);
});

socket.on('guess', (data) => {
	console.log("Guess");
	$('.progress-bar').width("0%");
	$('.explanation-to-guess').html(data.explanation);
	$('.explain-box').slideUp();
	$('.word-box').slideUp();
	$('.explanation-box').slideDown();
	$('.guess-box').slideDown();
	$('.progress-bar').slideDown();
});

socket.on('timer', (data) => {
	$('.progress-bar').width(100 * (30 - data) / 30 + "%");
})

socket.on('explain', (data) => {
	$('.progress-bar').slideUp();
	// Display the welcome message
	console.log("Explain: " + data.word);
	$('.given-word').html(data.word);
	$('.explain-box').slideDown();
	$('.word-box').slideDown();
	$('.explanation-box').slideUp();
	$('.guess-box').slideUp();
});

socket.on('wrong', (data) => {
	// Display the welcome message
	console.log("WRONG!!!");
	$('.input-text-guess').animate({
    backgroundColor : "rgb(255, 0, 0)"
	}, 300);
	$('.input-text-guess').animate({
    backgroundColor : "rgb(255, 255, 255)"
	}, 300);
});

socket.on('correct', (data) => {
	$('.progress-bar').width(0);
	$('.progress-bar').slideUp();
	// Display the welcome message
	$('.alerter').html(data);
	$('.alerter').fadeIn('slow', function(){
		setTimeout(function(){
			$('.alerter').fadeOut();
		}, 4000);
	});
});

$(function () {
	var text_length = $('.input-text-explain').val().length;
	$('#count').html(text_length);

	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

	$('.input-text-explain').keyup(function() {
	  var text_length = $('.input-text-explain').val().length;
	  $('#count').html(text_length);
	});

	$('#username').blur(function() {
		socket.emit('name', $('#username').val())
	})

	$('#send-explain').click(function() {
		socket.emit('explain', $('.input-text-explain').val())
		$('.input-text-explain').val("");
		$('#count').html("0");
	})

	$('#send-guess').click(function() {
		socket.emit('guess', $('.input-text-guess').val())
		$('.input-text-guess').val("");
	})
})
