// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

const refs = {
  startButton: document.querySelector('button[data-start]'),
  clockFace: document.querySelector('.timer'),
}

const timer = {
  intervalId:null,
  isActive:false,
  start() {
    
    if (this.isActive) {
      return;
    };    
    this.isActive = true;    
    this.intervalId = setInterval(() => {
      const deltaTime = new Date ("2024-01-01 00:00:00") - new Date;
      const time = convertMs(deltaTime);

      if ( deltaTime <= 1000) {
        clearInterval(this.intervalId);        
        this.isActive = false;        
      };
      updateClockFace(time)      
    }, 1000);
  }, 
};

// timer.start()

refs.startButton.addEventListener('click', () => {
  timer.start()
  });

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.clockFace.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
