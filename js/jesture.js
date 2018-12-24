var myElement = document.getElementById('myElement');

var hammertime = new Hammer(document.body);
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

$(function () {
    $('#myElement').hammer().on('swipeleft', function (event) {
        myElement.textContent = 'Swipe Left';
    });
    $('#myElement').hammer().on('swiperight', function (event) {
        myElement.textContent = 'Swipe right';
    });
    $('#myElement').hammer().on('swipeup', function (event) {
        myElement.textContent = 'Swipe Up';
    });
    $('#myElement').hammer().on('swipedown', function (event) {
        myElement.textContent = 'Swipe Down';
    });
});
