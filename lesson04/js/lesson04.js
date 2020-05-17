
function toggleMenu(){ 
    console.log("It worked");   
    document.getElementById("primaryNav").classList.toggle("hide");    

}


const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// get output location on document to append within list
const output = document.getElementsByClassName("date");
// get today's date and covert it to abbreviated day of the week text
let tdate = new Date();
let day = DAYS[tdate.getDay()];
document.write("date").innerHTML = "Today is " + day; // output test



function date(){
    document.getElementById("info").date;
}