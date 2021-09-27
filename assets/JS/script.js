
const countdown = () => {
    const countDate = new Date("December 1, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // How does time work 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate
    const textDay =Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = textDay  < 10 ? '0' + textDay : textDay;
    document.querySelector('.hour').innerHTML = textHour < 10 ? '0' + textHour : textHour;
    document.querySelector('.minute').innerHTML = textMinute  < 10 ? '0' + textMinute : textMinute;
    document.querySelector('.second').innerHTML = textSecond  < 10 ? '0' + textSecond : textSecond;

}
setInterval(countdown,1000);
