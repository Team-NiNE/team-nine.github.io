$.fn.extend({
    animateCss: function(animationName, callback) {
        var animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (typeof callback === 'function') callback();
        });

        return this;
    },
}); // Copied from: https://github.com/daneden/animate.css=
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
            if(index === 4) {
                var animationDirection = direction === 'down' ? 'Up' : 'Down'
                $('#project-modal').animateCss('fadeOut'+animationDirection, function(e) {
                    $('#project-modal').css('display', 'none')
                })
            }
        }
    });
    var projectsHtml = projects.slice(0, 5).map(function(i) {
        return ('<div class="project"><div class="details"><div class="icons">'
            + i.technology.map(function (s) { return '<i class="fab fa-4x fa-'+s+'"></i>' }).join('') +
           '</div><div class="texts"><span class="title">' + i.name + 
           '</span> <span banner="' + i.banner + '">' + i.description.slice(0, 100) + '</span></div></div>' +
            (i.github ? '<a class="link" href="' + i.github + '"><i class="fab fa-4x fa-github"></i></a></div>' : '</div>'))
    }).join('')
    $('.section.projects > .fp-tableCell').prepend(projectsHtml)
    $('.project > .details').on('click', function(e) {
        $('#project-modal > .name').text($(this).find('.texts > .title').text())
        $('#project-modal > .icons > a').attr('href', $(this).parent().find('a.link').attr('href'))
        $('#project-modal > .details').text($(this).find('.texts > span:not(.title)').text())
        if($(this).find('.texts > span:not(.title)').attr('banner'))
            $('#project-modal').css('background-image', $(this).find('.texts > span:not(.title)').attr('banner'))
        $('#project-modal').animateCss('fadeIn')
        $('#project-modal').css('display', 'flex')
    })
    $('#project-modal > .icons > .fa-times').on('click', function(e) {
        $('#project-modal').animateCss('fadeOut', function(e) {
            $('#project-modal').css('display', 'none')
        })
    })    

    var chunkedMembers = []
    while (members.length > 0)
        chunkedMembers.push(members.splice(0, 3))
    var resultHtml = chunkedMembers.map(function(m) {
        var a = '<div class="carousel-item">' + m.map(function(i) {
            var socials = Object.keys(i.social).map(function(item) {
                // <a href="$social.value"><i class="fab $social.key"></i></a>
                var faType = 'fab'
                if(item.slice(0, 1) === '_') {
                    faType = 'fas'
                    item = item.slice(1)
                }
                return '<a href="' + i.social[item] + '"><i class="'+ faType + ' fa-'+item+'"></i></a>'
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
