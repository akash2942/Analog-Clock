setInterval(clock,1000);

function clock(){

    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var hrDeg = (hr*30)+(0.5*min);
    var minDeg = (min*6)+(0.1*sec);
    var secDeg = sec*6;

    document.getElementById("hour").style.transform="rotate("+hrDeg+"deg)" ;
    document.getElementById("minute").style.transform="rotate("+minDeg+"deg)";
    document.getElementById("second").style.transform="rotate("+secDeg+"deg)";
}
