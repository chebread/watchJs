var clock = document.getElementById('h1-clock');
function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    //clock.innerHTML = hour +":" + minutes + ":"+seconds;
    clock.innerHTML = `${hour}:${minutes}:${seconds}`
}


function init(){
    setInterval(getTime, 1000);
}

init();