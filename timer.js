function startTimer(duration, display) {
    let timer = duration;
    const timerId = setInterval(function () {
      display.textContent = timer ;
      timer--;
  
      if (timer < 0) {
        clearInterval(timerId); // Clear the interval when timer reaches 0
      }
    }, 1000);
  }
  
  // Initialize the timer when the page loads
  document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer');
    const initialTime = 60; // Set the initial time in seconds
    startTimer(initialTime, timerDisplay);
  });