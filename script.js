setInterval(() => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");
    
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    let hr_dot = document.querySelector(".hr_dot");
    let min_dot = document.querySelector(".min_dot");
    let sec_dot = document.querySelector(".sec_dot");

    let dateElement = document.getElementById("date");
    let dayElement = document.getElementById("day");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    
    // Get the current date and day
    let now = new Date();
    let date = now.toLocaleDateString(); // Format the date as MM/DD/YYYY
    let day = now.toLocaleString('default', { weekday: 'long' }); // Get the day of the week
    
    // Convert 24-hour format to 12-hour format
    if (h > 12) {
        h = h - 12;
    }
    
    // Add 0 before single digit if necessary
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    // Update the HTML content for time
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = am;

    // Update the HTML content for date and day
    dateElement.innerHTML = date;
    dayElement.innerHTML = day;

    // Update the stroke offset for the circles
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // Rotate the dots based on the time
    hr_dot.style.transform = `rotate(${h * 30}deg)`; // 360/12 = 30 
    min_dot.style.transform = `rotate(${m * 6}deg)`; // 360/60 = 6 
    sec_dot.style.transform = `rotate(${s * 6}deg)`; // 360/60 = 6
}, 1000);
