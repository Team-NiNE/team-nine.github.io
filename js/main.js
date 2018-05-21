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
    members.forEach(function(i) {
        $('.section.members > .fp-tableCell').append('<div class="member-card-out"><div class="member-card">'
            + '<img src="' + i.banner + '" class="member-img">'
            + '<img src="' + i.profile + '" class="member-avatar">'
            + '<h3>' + i.nickname +'</h3>'
            + '<p>' + i.position + '</p>'
            + '<p>' + i.about + '</p>'
            + '<div class="member-link">'
                + '흠... 링크는 어떻게 구현해야하지?'
            + '</div></div></div><br>')
    })
});
