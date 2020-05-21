function toggleMenu(){ 
    console.log("It worked");   
    document.getElementById("primaryNav").classList.toggle("hide");    

}

/*function onDocumentLoad(){
    date();
}*/


function date(){

    /*const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementsById('date').textContent = new Date().toLocaleDateString('en-US, options');
    const todaysdate = new Date();*/

    document.getElementById("date").innerHTML = "test";

}


