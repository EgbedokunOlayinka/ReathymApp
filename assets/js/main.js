nextDate = new Date("November 19, 2020 00:00:00").getTime();
    let countdown = setInterval(() => {
        let now = new Date().getTime();
        let distance = nextDate - now;
        
        let weeks = Math.floor(distance / (1000*60*60*24*7));
        let days = Math.floor((distance % (1000*60*60*24*7)) / (1000*60*60*24));
        let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('#weeks').innerHTML = weeks;
        document.querySelector('#days').innerHTML = days;
        document.querySelector('#hours').innerHTML = hours;
        document.querySelector('#minutes').innerHTML = minutes;
        // document.querySelector('#seconds').innerHTML = `${seconds} seconds`;
    }, 1000)