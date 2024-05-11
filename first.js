let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

//Here by DOm we call html clock niddle

function display() {
    let date = new Date();


    let hh = date.getHours();
    let mm  = date.getMinutes();
    let ss = date.getSeconds();


    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;


    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec1 = sec.style.transform = `rotate(${sRotation}deg)`;

  

    /*
    This function is for display time where we use daten object 
    in which we are store hr, min, and sec in a variable and 
    we are calculate how many roation is need and then we set into particulaer hr, min, sec respectively show clock will 
    work like actual

    */
}

// Call the display function initially to set the clock hands
// display();

// Update the clock hands every second
setInterval(display, 1000);

// Here we set time interval in every sec 
