const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
//new Date() : 현재 날짜와 시간을 가지는 인스턴스를 반환
    const date = new Date();
    const minutes= date.getMinutes();
    const hours= date.getHours();
    const seconds=date.getSeconds();

//시간, 분, 초가 10이하의 숫자일 때 앞에 0을 붙여 표시 (삼항연산자 사용)
    clockTitle.innerText=`${hours<10 ? `0${hours}`:hours}:${
        minutes<10?`0${minutes}`:minutes
    }:${seconds<10 ? `0${seconds}`:seconds}`;


}

function init(){
    getTime();
//1000=1초 (1초마다 새로고침)
    setInterval(getTime,1000);
}

init();
