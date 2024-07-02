events.on('ready', function() {
    $('.pulse').addClass('animated pulse infinite');
    $('.flash').addClass('animated flash infinite');
    
    $('.inOpen').addClass('animated fadeIn');

    $('.left').addClass('animated fadeInLeft');
    $('.right').addClass('animated fadeInRight');
    $('.down').addClass('animated fadeInDown');
    $('.up').addClass('animated fadeInUp');
    $('.zoomIn').addClass('animated zoomIn');
    $('.rotateIn').addClass('animated rotateIn');
    $('.lightSpeedInRight').addClass('animated lightSpeedInRight');
    $('.jackInTheBox').addClass('animated jackInTheBox');
    $('.flipInX').addClass('animated flipInX');
    $('.flipInY').addClass('animated flipInY');

    for (let i = 1; i < 18; i++) {
        var tempo = i / 2;
        $('.delay' + i).css('animation-delay', tempo + 's')

    }
})