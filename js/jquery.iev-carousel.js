$(function () {

        var $leftUIEl = $('.carousel-arrow-left');
        var $rightUIEl = $('.carousel-arrow-right');
        var $elementsList = $('.carousel-list');

        var pixelsOffset = 153;
        var currentLeftValue = 0;
        var elementsCount = $elementsList.find('li').length;
        var minimumOffset = -((elementsCount - 4)*pixelsOffset);
        var maximumOffset = 0;

        function checkLeftValue() {
            if (currentLeftValue === minimumOffset) {
                $rightUIEl.addClass('inactive-arrow');
            }


            if (currentLeftValue === maximumOffset) {
                $leftUIEl.addClass('inactive-arrow');
            }
        }

        $leftUIEl.click( function () {
            if (currentLeftValue !== maximumOffset) {
                $(this).removeClass('inactive-arrow');
                $rightUIEl.removeClass('inactive-arrow');
                currentLeftValue += 153;
                $elementsList.animate({ left : currentLeftValue + "px"}, 500);
                checkLeftValue();
            }
        });

        $rightUIEl.click( function () {
            if (currentLeftValue !== minimumOffset) {
                $(this).removeClass('inactive-arrow');
                $leftUIEl.removeClass('inactive-arrow');
                currentLeftValue -= 153;
                $elementsList.animate({left: currentLeftValue + "px"}, 500);
                checkLeftValue();
            }

        });


});
