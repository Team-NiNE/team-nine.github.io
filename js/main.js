$(document).ready(function() {
	$('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            if(index === 1 && direction === 'down') {
                $('#menu').css('left', '0.1em')
            }
            if(nextIndex === 1 && direction === 'up') {
                $('#menu').css('left', '-10em')
            }
            $('slide-indicator-'+index+'>i').removeClass('fas').addClass('far')
            $('slide-indicator-'+nextIndex+'>i').removeClass('far').addClass('fas')
        }
    });
});