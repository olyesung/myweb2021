const clock = document.querySelector("h2#clock");
const dateMdy = document.getElementById("date-mdy")


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`

    const week = new Array('일', '월', '화', '수', '목', '금', '토');
    const day  = week[date.getDay()];
    const mm = date.getMonth()+1;
    const dd = date.getDate();
    const yyyy = date.getFullYear();
    dateMdy.innerText = `${day}, ${mm}월 ${dd}일 ${yyyy}년`
}

getClock();
setInterval(getClock, 1000);
