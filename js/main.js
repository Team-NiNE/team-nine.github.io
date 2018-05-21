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

    var chunkedMembers = []
    while (members.length > 0)
        chunkedMembers.push(members.splice(0, 3))
    var resultHtml = chunkedMembers.map(function(m) {
        var a = '<div class="carousel-item">' + m.map(function(i) {
            var socials = Object.keys(i.social).map(function(item) {
                // <a href="$social.value"><i class="fab $social.key"></i></a>
                return '<a href="' + i.social[item] + '"><i class="fab fa-'+item+'"></i></a>'
            }).join('')
            console.log(socials)
            var html = ('<div class="member-card" style="border: 3px solid ' + i.color + ';"> <img src="' + i.images.banner
                         + '" class="member-banner"> <img src="' + i.images.profile + '" class="member-avatar"> <h3 class="member-name">' + i.nickname
                         + '</h3> <p class="member-position">' + i.position + '</p><p class="member-about">' + i.about + '</p><div class="member-link">'
                         + socials + '</div><div class="member-card-shadow" style="background-color: ' + i.color + ';"></div></div>')
            return html;
        }) + '</div>'
        console.log(a)
        return a
    }).join('')
    console.log(resultHtml)
    $('.section:nth-child(3) .fp-tableCell > .carousel-inner').append(resultHtml)
    $('.carousel-item:first-child').addClass('active')
    $('#members-carousel').carousel({
        interval: 0
    })
});
