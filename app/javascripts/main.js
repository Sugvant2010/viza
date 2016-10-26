jQuery( document ).ready(function( $ ) {
    $( '#slider' ).sliderPro({
        width: '100%',
        height: '664',
        autoplay: false,
        slideDistance: 0,
        heightAnimationDuration: 664,
        touchSwipe: false,
        arrows: true,
        buttons: false,
        gotoSlide: function( event ) {
            addActiveSlide(event.index);
        }
    });

    addActiveSlide(0);
    //slider points
    $('.slider__link').click(function (e) {
        e.preventDefault();
        var gotoSlide = $(e.currentTarget).data('slide');
        $( '#slider' ).sliderPro( 'gotoSlide', gotoSlide );
    });
    //dropdown toggling
    $('.dropdown__title').click(function () {
        $(this).toggleClass('opened');
        $(this).next().toggleClass('opened');
    });
    //modal action close
    $('.modal__overlay').click(function () {
        $(this).removeClass('opened');
        $('.modal').removeClass('opened');
    })
    //modal action opene

    // conditions
    $('.button__conditions').click(function(e) {
        e.preventDefault();
        $('.modal__conditions').addClass('opened');
        $('.modal__overlay').addClass('opened');
    })
    // complaints
    $('.button__complaints').click(function(e) {
        e.preventDefault();
        $('.modal__complaints').addClass('opened');
        $('.modal__overlay').addClass('opened');
    })
    // photos
    $('.button__photos').click(function(e) {
        e.preventDefault();
        $('.modal__photos').addClass('opened');        
        $('.modal__overlay').addClass('opened');
    });
    // drop photo

    // visa modal
    
    $('.button__visa').click(function(e) {
        e.preventDefault();
        $('.modal__visa').addClass('opened');        
        $('.modal__overlay').addClass('opened');
    });

});


function addActiveSlide (slideNum) {
    $('.slider__link > i').removeClass('active');
    $('.slider__link[data-slide = ' + slideNum + '] > i').addClass('active');
}