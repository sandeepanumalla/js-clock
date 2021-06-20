window.onload = () => {
    let secondsHand = document.querySelector(".second-hand");
    let minutesHand = document.querySelector(".minute-hand");
    let hoursHand = document.querySelector(".hour-hand");
    let clock = document.querySelector(".clock");

    // for (let i = 0; i < 12; i++) {
    //     let each = i / 12 * 360;
    //     let numbers = document.createElement("div");
    //     numbers.classList = "numbers";
    //     let number = document.createElement("p");
    //     number.textContent = i;
    //     numbers.appendChild(p);
    //     clock.appendChild(numbers);
    //     console.log("each", i, each);
    // }


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
        let HoursDegree = (hours / 60) * 360;
        hoursHand.style.transform = `rotate(${HoursDegree+90}Deg)`;

    }

    setInterval(seconds, 1000);


}