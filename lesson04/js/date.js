

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.getElementsByClassName('info').textContent = new Date().toLocaleDateString('en-US, options');

const todaysdate = new Date();

