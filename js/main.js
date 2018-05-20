$(function() {
	$('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            if(index === 1 && direction === 'down') {
                $('#menu').css('bottom', '50vh')
            }
            if(nextIndex === 1 && direction === 'up') {
                $('#menu').css('bottom', '-50vh')
            }
            $('.slide-indicator-'+index+'>i').removeClass('fas').addClass('far')
            $('.slide-indicator-'+nextIndex+'>i').removeClass('far').addClass('fas')
        }
    });
});
