function toggleMenu(){ 
    console.log("It worked");   
    document.getElementById("primaryNav").classList.toggle("hide");    

}

function date(){

    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementsById('date').innerHTML = new Date().toLocaleDateString('en-US, options');
    const todaysdate = new Date();

    document.getElementById("date").innerHTML = "test";

}


var d = new Date();
var n = d.getFullYear();

function Index(){
document.getElementById("copy").innerHTML = n;
document.getElementById("date").innerHTML = "Last Updated: " + document.lastModified;

}


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[d.getDay()];

if(dayName == 'Friday') {
   document.getElementById("alert").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
   document.getElementById("alert").classList.add("show");
}



