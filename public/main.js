	var socket = io('http://192.168.10.190');

// When the client starts, create the uid.
if (!getCookie('uUID')) {
	setCookie('uUID', Math.random().toString(24) + new Date());
}
// Emit the UID right after connection
socket.emit('login', getCookie('uUID'));


socket.on('alert', (data) => {
	// Alert message
	$('.alerter').html(data);
	$('.alerter').fadeIn('fast', function(){
		setTimeout(function(){
			$('.alerter').fadeOut();
		}, 8000);

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

socket.on('toplist', (data) => {
	var topList = data;
	$("#toplist").html("<tr><th>Nickname</th><th>Total points<th></tr>")
	for (var i = 0; i < topList.length; i++) {
		$('#toplist tr:last').after('<tr>' +'<td>' + topList[i].name + '</td>' + '<td>' + topList[i].points + '</td>'+ '</tr>');
	}
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
	if(data) {
		$('.explanation-to-guess').html(data);
	}
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
		}, 8000);
	});
});

$(function () {
	var text_length = $('.input-text-explain').val().length;
	$('#count').html(text_length);

	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

	$('.input-text-explain').keyup(function(e) {
		if (e.which == 13){
			$('#send-explain').click();
		}
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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
