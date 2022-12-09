// get systems time.

const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second');
const Clock=setInterval (function time(){
    let dateToday =new Date();
    let hr=dateToday.getHours();
    let min=dateToday.getMinutes();
    let sec=dateToday.getSeconds();
    if(hr<10){
        hr="0" + hr ;
    }
    if(min<10){
        min="0" + min;
    }
    if(sec<10){
        sec="0" + sec;
    }
    hour.textContent=hr+"";
    minute.textContent=min+"";
    second.textContent=sec+"";
    // document.getElementById('mins').innerHTML=min + '\n'+ 'mins'
    if(hr > 12){
        hr=hr-12;
        document.getElementById("ap").innerHTML="PM"
        // document.getElementById('hours').innerHTML= hrs + '\n'+ 'hour';
    }else{
        document.getElementById("ap").innerHTML="AM"
    }
    // hour.textContent=hr;
    // minute.textContent=min;
    // second.textContent=sec;
},1000)

function valuediv1(){
// for wake up

var values1=document.getElementById("wake-select");
var valuesMsg1=values1.options[values1.selectedIndex].text;
document.getElementById("valueMsg1").innerHTML=" Set Ur Wake-Up Time:" + valuesMsg1;
}

function valuediv2(){
    // for party
    var values2=document.getElementById("lunch-select");
    var valuesMsg2=values2.options[values2.selectedIndex].text;
    document.getElementById("valueMsg2").innerHTML=" Set Ur Lunch Time:" + valuesMsg2;
}

function valuediv3(){
    // for nap
    var values3=document.getElementById("nap-select");
    var valuesMsg3=values3.options[values3.selectedIndex].text;
    document.getElementById("valueMsg3").innerHTML=" Set Ur Nap Time:" + valuesMsg3;
}

function valuediv4(){
    // for night
    var values4=document.getElementById("night-select");
    var valuesMsg4=values4.options[values4.selectedInddex].text;
    document.getElementById("valueMsg").innerHTML=" Set Ur Night Time:" + valuesMsg4;


    console.log("hello surya")
}

function settime(){
    
    let i=document.getElementById('wake-select').value;
    let j=document.getElementById('lunch-select').value;
    let k=document.getElementById('nap-select').value;
    let l=document.getElementById('night-select').value;
    var hourr=new Date().getHours();
    
    console.log(i, j, k, l)
    console.log(hourr)
    if(i==hourr){
        document.getElementById("image-select").style.backgroundImage="url('asset\good-morning-images-jpeg.jpg')";
        document.querySelector("h1").innerHTML="Good-Morning ! wake Up";
        document.querySelector('h2').innerHTML="wake-up..."
    }else if(j==hourr) {
        document.getElementById("image-select").style.backgroundImage="url('asset\lunch-img.png.svg')";
        document.querySelector("h1").innerHTML="Good-Noon!"
        document.querySelector('h2').innerHTML="take u r lunch"
    }else if(k==hourr){
        document.getElementById("image-select").style.backgroundImage="url('good-evening-img2-jpg')";
        document.querySelector("h1").innerHTML="Good Evening !!";
        document.querySelector("h2").innerHTML="its a snacks time"

    }else if(l==hourr){
        document.getElementById("image-select").style.backgroundImage="url('asset\goodnight_image.svg')";
        document.querySelector("h1").innerHTML="Good-Night!!!";
        document.querySelector("h2").innerHTML="go to sleep.!!"
    }else {
        document.getElementById("image-select").style.backgroundImage="url('asset\good-morning-images-jpeg.jpg')";
        document.querySelector("h1").innerHTML="All Is Well !!"
    }


    valuediv1();
    valuediv2();
    valuediv3();
    valuediv4();

    document.getElementById("select-value").style.visibility="visible";

}


function msg2(){
    var newtime=new Date();
    var hrr=newtime.getHours();


    if (hrr>=4 && hrr<12){
        document.querySelector("h2").innerHTML="To See Morning Vibes..";

    }else if (hrr>=12 && hrr<16){
        document.querySelector("h2").innerHTML="lets take Your Lunch"
    }
    else if(hrr>=16 && hrr<20){
        document.querySelector("h2").innerHTML="Its is a Snacks Time";
    }else if(hrr>=20 && hrr<=24){
        document.querySelector("h2").innerHTML="You are tied Go to Sleep";
    }
}
console.log(msg2)



