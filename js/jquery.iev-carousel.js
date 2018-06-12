$(function () {

        var $leftUIEl = $('.carousel-arrow-left');
        var $rightUIEl = $('.carousel-arrow-right');
        // var $elementsList = $('.carousel-list');
        //
        // var pixelsOffset = 153;
        // var currentLeftValue = 0;
        // var elementsCount = $elementsList.find('li').length;
        // var minimumOffset = -((elementsCount - 4)*pixelsOffset);
        // var maximumOffset = 0;
        //
        // function checkLeftValue() {
        //     if (currentLeftValue === minimumOffset) {
        //         $rightUIEl.addClass('inactive-arrow');
        //     }
        //
        //
        //     if (currentLeftValue === maximumOffset) {
        //         $leftUIEl.addClass('inactive-arrow');
        //     }
        // }
        //
        $leftUIEl.click( function () {
            generateItemLast();
            moveItemAwayFirst();
            moveItemInLast();
        });
        //
        $rightUIEl.click( function () {
            generateItemFirst();
            moveItemAwayLast();
            moveItemInFirst();
        });

    function generateItemFirst() {
        var randomValue = Math.random();
        var imagesrc = (randomValue <= 0.5) ? 'img/boy_1.png' : 'img/boy_2.png';
        $('<img>', { src: imagesrc}).appendTo('.empty-first');
        $('<div><div></div></div>').appendTo('.empty-first');
        $('.first-item').removeClass('first-item')
        $('.empty-first').removeClass('empty-first').addClass('first-item');
        setTimeout(function () {
            $('<li>', {class: 'carousel-element empty-first'}).prependTo('.carousel-list');
        }, 2000);

    }

    function moveItemAwayLast() {
        $('.last-item').addClass("away-animated-last");
        setTimeout(function () {
            $('.away-animated-last').remove();
            $('.carousel-element').eq(3).addClass('last-item')
        }, 2000);
    }

    function moveItemInFirst() {
        $('.first-item').addClass("in-animated-first");
        setTimeout(function () {
            $('.in-animated-first').removeClass('in-animated-first');
        }, 2000);
    }

    function generateItemLast() {
        var randomValue = Math.random();
        var imagesrc = (randomValue <= 0.5) ? 'img/boy_1.png' : 'img/boy_2.png';
        $('<img>', { src: imagesrc}).appendTo('.empty-last');
        $('<div><div></div></div>').appendTo('.empty-last');
        $('.last-item').removeClass('last-item')
        $('.empty-last').removeClass('empty-last').addClass('last-item');
        setTimeout(function () {
            $('<li>', {class: 'carousel-element empty-last'}).appendTo('.carousel-list');
        }, 2000);

    }

    function moveItemAwayFirst() {
        $('.first-item').addClass("away-animated-first");
        setTimeout(function () {
            $('.away-animated-first').remove();
            $('.carousel-element').eq(1).addClass('first-item')
        }, 2000);
    }

    function moveItemInLast() {
        $('.last-item').addClass("in-animated-last");
        setTimeout(function () {
            $('.in-animated-last').removeClass('in-animated-last');
        }, 2000);
    }

});
