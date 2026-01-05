const countDown = () => {
    const timeFormat = "23 June, 2026 00:00:00";
    const launchDate =new Date(timeFormat).getTime()
    const presentTime = new Date().getTime()
    const difference = launchDate - presentTime 

    const secund = 1000;
    const minute = 60 * secund;
    const hour = 60 * minute;
    const day = 24 * hour;

    const secundText = Math.floor((difference % minute) / secund);
    const minuteText = Math.floor((difference % hour) / minute);
    const hourText = Math.floor((difference % day) / hour);
    const dayText = Math.floor((difference / day));

    const items = document.querySelectorAll(".secund")
    items.forEach((items) => {
        itemsinnerText = secundText;});

        
       


    


}
