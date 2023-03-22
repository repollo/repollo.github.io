document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
  
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      cursor.style.transform = `translate(${clientX - 50}px, ${clientY - 50}px)`;
    });
  
    document.addEventListener('mousedown', () => {
      cursor.style.transform = `translate(-50%, -50%) scale(0.6)`;
      cursor.style.opacity = '0.3';
    });
  
    document.addEventListener('mouseup', () => {
      cursor.style.transform = `translate(-50%, -50%) scale(1)`;
      cursor.style.opacity = '0';
    });
  });


// Code by https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to "Mar 31, 2023 00:00:00"
var countDownDate = new Date("Mar 31, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // Countdown elements
  document.getElementById('moonPhases').innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";
  

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("moonPhases").innerHTML = "EXPIRED";
  }
}, 1000);