$(document).ready(function(){
	$('body').append('<div id="notificacion"><span></span></div>');

	$(document).on('click', '.notificar', function() {
		var $boton = $(this);
		var icono = $boton.attr('data-icono');
		var mensaje = $boton.attr('data-mensaje');

		var $notificacion = $('#notificacion');
		$notificacion.attr('class', icono);
		$notificacion.find('span').text(mensaje);
		$notificacion.stop().animate({top:'0'});

		setTimeout(function() {
			//$notificacion.removeClass('mostrar');
		    $notificacion.stop().animate({top:'-100px'});
		}, 2000); 
	});
});