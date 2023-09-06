const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 1000);
});

const showTime = () =>{
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

      time.innerHTML = `${hr} : ${mins} : ${secs}`;
   //  console.log("hours: " + hr + " mins: " + mins + " secs: " + secs);
}