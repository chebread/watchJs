function Print() {
    var id = document.getElementById("show");
    var today = new Date;
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    var day = ['일', '월', '화', '수', '목', '금', '토']; // getDay()는 일요일 부터 요일을 세요
    var day_num = today.getDay();
    var day_res = day[day_num];
    var hour_24 = today.getHours();
    var hour_12 = 0;
    if (hour_24 > 12) {
        hour_12 = hour_24 - 12;
    } else if (hour_24 == 0) {
        hour_12 = 12;
    } else {
        hour_12 = hour_24;
    }
    var minute = today.getMinutes();
    var second = today.getSeconds();
    // Dark
    if (hour_24 >= 18) {
        $('body').css('background-color', 'rgb(24, 27, 33)')
        if (second > 50) {
            id.style.color="brown";
        } else {
            id.style.color="rgb(202, 209, 216)"; // color 지정
        }
    } else {
        $('body').css('background-color', 'thistle');
        if (second > 50) {
            id.style.color="brown";
        } else {
            id.style.color="black"; // color 지정
        }
    }
    id.innerHTML = `${year}년 ${month}월 ${date}일 ${day_res}요일 ${hour_12}시 ${minute}분 ${second}초`
}

function init() {
    Print();
    setInterval(Print, 1000);
}


init();