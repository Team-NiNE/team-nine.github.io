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
    projects.forEach(function(i) {
        $('.section.projects > .fp-tableCell').append('<div class="project"><div class="details"><div class="icons">'
            + i.technology.map(function (s) { return '<i class="fab fa-4x fa-'+s+'"></i>' }).join('') +
           '</div><div class="texts"><span class="title">' + i.name + 
           '</span> <span>' + i.description + '</span></div></div>' +
            (i.github ? '<a class="link" href="' + i.github + '"><i class="fab fa-4x fa-github"></i></a></div>' : '</div>'))
    })
});
