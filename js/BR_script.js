$(function () {

        var $leftUIEl = $('.carousel-arrow-left');
        var $rightUIEl = $('.carousel-arrow-right');
        $leftUIEl.click( function () {
            moveItemAwayFirst();
            setTimeout(function () {
                generateItemLast();
                moveItemInLast();
            }, 400);
        });
        //
        $rightUIEl.click( function () {
            moveItemAwayLast();
            setTimeout(function () {
                generateItemFirst();
                moveItemInFirst();
            }, 400);
        });

    function generateItemFirst() {
        var randomValue = Math.random();
        var imagesrc = (randomValue <= 0.5) ? 'img/boy_1.png' : 'img/boy_2.png';
        $('<img>', { src: imagesrc}).appendTo('.empty-first');
        $('<div><div></div></div>').appendTo('.empty-first');
        $('.empty-first').removeClass('empty-first');
        setTimeout(function () {
            $('<li>', {class: 'carousel-element empty-first'}).prependTo('.carousel-list');
            $('.empty-first').css({marginLeft: -165+"px"}).animate({marginLeft:0},700);
        }, 720);

    }

    function moveItemAwayLast() {
        $('.carousel-element').eq(3).addClass("away-animated-last");
        setTimeout(function () {
            $('.away-animated-last').remove();
        }, 1000);
    }

    function moveItemInFirst() {
        $('.carousel-element').eq(0).addClass("in-animated-first");
        setTimeout(function () {
            $('.in-animated-first').removeClass('in-animated-first');
        }, 720);
    }

    function generateItemLast() {
        var randomValue = Math.random();
        var imagesrc = (randomValue <= 0.5) ? 'img/boy_1.png' : 'img/boy_2.png';
        $('<img>', { src: imagesrc}).appendTo('.empty-last');
        $('<div><div></div></div>').appendTo('.empty-last');
        $('.empty-last').removeClass('empty-last');
        setTimeout(function () {
            $('<li>', {class: 'carousel-element empty-last'}).appendTo('.carousel-list');
            $('.empty-last').css({marginRight: -140+"px"}).animate({marginRight:25+'px'},700);
        }, 720);

    }

    function moveItemAwayFirst() {
        $('.carousel-element').eq(1).addClass("away-animated-first");
        setTimeout(function () {
            $('.away-animated-first').remove();
        }, 1000);
    }

    function moveItemInLast() {
        $('.carousel-element').eq(4).addClass("in-animated-last");
        setTimeout(function () {
            $('.in-animated-last').removeClass('in-animated-last');
        }, 720);
    }

});
