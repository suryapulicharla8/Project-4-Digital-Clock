const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second');
const Clock=setInterval (function time(){
    let dateToday =new Date();
    let hr=dateToday.getHours();
    let min=dateToday.getMinutes();
    let sec=dateToday.getSeconds();
    // if(hr<10){
    //     hr="0" + hr;
    // }
    // if(min<10){
    //     min="0" + min;
    // }
    // if(sec<10){
    //     sec="0" + sec;
    // }
    // hour.textContent=hr;
    // minute.textContent=min;
    // second.textContent=sec;
    if(hr > 12){
        hr=hr-12;
        document.getElementById("ap").innerHTML="PM"
    }else{
        document.getElementById("ap").innerHTML="AM"
    }
    hour.textContent=hr;
    minute.textContent=min;
    second.textContent=sec;
},1000)