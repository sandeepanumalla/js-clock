window.onload = () => {
    let secondsHand = document.querySelector(".second-hand");
    let minutesHand = document.querySelector(".minute-hand");
    let hoursHand = document.querySelector(".hour-hand");
    let clock = document.querySelector(".clock");



    let seconds = () => {
        let now = new Date();
        let seconds;
        seconds = now.getSeconds();

        let secondsDegree = (seconds / 60) * 360;
        if (secondsDegree == 0) {
            secondsHand.style.transition = 'unset';
        }
        secondsHand.style.transform = `rotate(${secondsDegree+90}Deg)`
            // console.log(seconds);

        let minutes = now.getMinutes();
        let minutesDegree = (minutes / 60) * 360;
        minutesHand.style.transform = `rotate(${minutesDegree+90}Deg)`;

        let hours = now.getHours();
        let HoursDegree = ((hours + (minutes / 60)) / 12) * 360;
        // let margin = 5 - (minutes / 60);
        // console.log(margin);
        //hoursHand.style.marginLeft = `${margin}rem`
        hoursHand.style.transform = `rotate(${HoursDegree+90}Deg)`;

    }

    setInterval(seconds, 1000);


}