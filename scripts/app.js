
/*
Set Value in local Storage
*/
localStorage.setItem("location1", "Malta to Amsterdam");
localStorage.setItem("location2", "Malta to London");
localStorage.setItem("location3", "Malta to Poznan");
localStorage.setItem("location4", "Malta to London");
localStorage.setItem("location5", "Malta to Rome");

localStorage.setItem("location1Time", "5:51 AM");
localStorage.setItem("location2Time", "22:00 PM");
localStorage.setItem("location3Time", "11:00 AM");
localStorage.setItem("location4Time", "7:00 AM");
localStorage.setItem("location5Time", "8:00 AM");


localStorage.setItem("location1Status", "ON Time");
localStorage.setItem("location2Status", "Delayed");
localStorage.setItem("location3Status", "ON Time");
localStorage.setItem("location4Status", "ON Time");
localStorage.setItem("location5Status", "Delayed");



function myFunction() {
    document.getElementById('One').innerHTML=localStorage.getItem("location1");
    document.getElementById('Two').innerHTML = localStorage.getItem("location2");
    document.getElementById('Three').innerHTML = localStorage.getItem("location3");
    document.getElementById('Four').innerHTML=  localStorage.getItem("location4");
    document.getElementById('Five').innerHTML = localStorage.getItem("location5");

    document.getElementById('OneTime').innerHTML=localStorage.getItem("location1Time");
    document.getElementById('TwoTime').innerHTML = localStorage.getItem("location2Time");
    document.getElementById('ThreeTime').innerHTML = localStorage.getItem("location3Time");
    document.getElementById('FourTime').innerHTML=  localStorage.getItem("location4Time");
    document.getElementById('FiveTime').innerHTML = localStorage.getItem("location5Time");

    document.getElementById('OneStatus').innerHTML=localStorage.getItem("location1Status");
    document.getElementById('TwoStatus').innerHTML = localStorage.getItem("location2Status");
    document.getElementById('ThreeStatus').innerHTML = localStorage.getItem("location3Status");
    document.getElementById('FourStatus').innerHTML=  localStorage.getItem("location4Status");
    document.getElementById('FiveStatus').innerHTML = localStorage.getItem("location5Status");
    
}

