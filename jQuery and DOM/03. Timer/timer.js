function timer() {
    let hoursSpan = $('#hours');
    let minutesSpan = $('#minutes');
    let secondsSpan = $('#seconds');
    let totalSec=0;
    let counter;



    $("#start-timer").click(()=> {
        if(!counter){
            counter = setInterval(step, 1000)
        }

    });



    $('#stop-timer').click(() => {
        clearInterval(counter);
        counter = undefined;

    });
    function step() {
        totalSec++;
        let seconds = parseInt(totalSec % 60);
        let minutes = parseInt(totalSec / 60);
        minutes=minutes % 60;
        let hours = parseInt(totalSec / 60 / 60);

        seconds = seconds.toString().length < 2 ? '0' + seconds : seconds;
        minutes = minutes.toString().length < 2 ? '0' + minutes : minutes;
        hours = hours.toString().length < 2 ? '0' + hours : hours;

        secondsSpan.text(seconds);
        minutesSpan.text(minutes);
        hoursSpan.text(hours);

    }


}