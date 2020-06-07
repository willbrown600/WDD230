function toggleMenu(){ 
    console.log("It worked");   
    document.getElementById("primaryNav").classList.toggle("hide");    

}

function date(){
    const todaysdate = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementsById('modified').innerHTML = new Date().toLocaleDateString('en-US, options');
    

}


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[document.getDay()];

if(dayName == 'Friday') {
   document.getElementById("alert").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
   document.getElementById("alert").classList.add("show");
}



