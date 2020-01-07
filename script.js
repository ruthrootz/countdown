'use strict';

$(() => {

    const ONE_DAY = 1000 * 60 * 60 * 24;
    let DURATION = 7;
    let AWAITED_DATE = new Date(2020, 7, 30);

    let now;
    let daysLeft;
    let hoursLeft;
    let minutesLeft;
    let secondsLeft;
    let timeLeftHTML = document.getElementById('time_left');

    function startUp() {
        timeout();
    }
    startUp();

    function timeout() {
        setTimeout(function () {
            now = new Date(Date.now());
            let miliseconds = AWAITED_DATE.getTime() - now.getTime();
            daysLeft = Math.floor(miliseconds / ONE_DAY);
            hoursLeft = Math.floor(miliseconds / ONE_DAY * 24) % 24;
            minutesLeft = Math.floor((AWAITED_DATE.getTime() - now.getTime()) / ONE_DAY * 24 * 60) % 60;
            secondsLeft = Math.floor((AWAITED_DATE.getTime() - now.getTime()) / ONE_DAY * 24 * 60 * 60) % 60;
            if (daysLeft >= 60) {
                document.getElementById('sad').classList.add('border');
                document.getElementById('meh').classList.remove('border');
                document.getElementById('happy').classList.remove('border');
                document.getElementById('beaming').classList.remove('border');
                document.getElementById('crying').classList.remove('border');
            } else if (daysLeft >= 30) {
                document.getElementById('sad').classList.remove('border');
                document.getElementById('meh').classList.add('border');
                document.getElementById('happy').classList.remove('border');
                document.getElementById('beaming').classList.remove('border');
                document.getElementById('crying').classList.remove('border');
            } else if (daysLeft < 30 && daysLeft > 0) {
                document.getElementById('sad').classList.remove('border');
                document.getElementById('meh').classList.remove('border');
                document.getElementById('happy').classList.add('border');
                document.getElementById('beaming').classList.remove('border');
                document.getElementById('crying').classList.remove('border');
            } else if (daysLeft <= 0 && daysLeft >= -DURATION) {
                hoursLeft *= -1;
                minutesLeft *= -1;
                secondsLeft *= -1;
                document.getElementById('sad').classList.remove('border');
                document.getElementById('meh').classList.remove('border');
                document.getElementById('happy').classList.remove('border');
                document.getElementById('beaming').classList.add('border');
                document.getElementById('crying').classList.remove('border');
            } else {
                hoursLeft *= -1;
                minutesLeft *= -1;
                secondsLeft *= -1;
                document.getElementById('sad').classList.remove('border');
                document.getElementById('meh').classList.remove('border');
                document.getElementById('happy').classList.remove('border');
                document.getElementById('beaming').classList.remove('border');
                document.getElementById('crying').classList.add('border');
            }
            timeLeftHTML.innerHTML = `${daysLeft}:${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
            timeout();
        }, 1000);
    }

});
