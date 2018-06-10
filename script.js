$('document').ready(function(){
	jQuery('body').append('<a href="http://google.com">Перейти в гугл!</a>');
	
	$('p').remove();
	
	var img_clone;
	img_clone = $('#plus').clone();
	
	$('body').append(img_clone);
	
	var p1, p2;
	p1 = 5;
	p2 = 6;
		
	alert( p1 * p2 );
	
	$('button').on('click', function(){
		
		var value1, value2, value3;
			value1 = $('#inp1').val();
			value2 = $('#inp2').val();
			
			value1 = parseInt(value1);
			value2 = parseInt(value2);
			
			value3 = value1 + value2;
		alert(value3);
		
	});
		$('input').on('keyup', function(){
		
		
		var value1, value2, value3;
			value1 = $('#inp1').val();
			value2 = $('#inp2').val();
			
			value1 = parseInt(value1);
			value2 = parseInt(value2);
			
			value3 = value1 + value2;
			$('#itog').html(value3);
	});
		
});