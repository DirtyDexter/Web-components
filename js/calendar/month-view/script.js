// Sample events for the month
const events = {
  '2023-10-02': ['Meeting with Team', 'Client Presentation'],
  '2023-10-15': ['Lunch with Colleague'],
  '2023-10-23': ['Product Launch'],
};

// Function to render the month view calendar
function renderCalendar() {
  const calendarHeader = document.getElementById('calendar-header');
  const daysContainer = document.getElementById('days-container');
  const datesContainer = document.getElementById('dates-container');

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  calendarHeader.querySelector('h2').textContent = `${monthNames[currentMonth]} ${currentDate.getFullYear()}`;

  // Days of the week
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysContainer.innerHTML = '';
  dayNames.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    daysContainer.appendChild(dayElement);
  });

  // Dates for the month
  datesContainer.innerHTML = '';
  for (let i = 1; i <= daysInMonth; i++) {
    const dateElement = document.createElement('div');
    dateElement.classList.add('date');
    dateElement.textContent = i;
    const dateKey = `${currentDate.getFullYear()}-${currentMonth + 1}-${i}`;

    // Add events to dates
    if (dateKey in events) {
      const eventList = events[dateKey];
      eventList.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.textContent = event;
        dateElement.appendChild(eventElement);
      });
    }

    // Highlight today's date
    if (i === currentDate.getDate()) {
      dateElement.classList.add('today');
    }

    datesContainer.appendChild(dateElement);

    dateElement.addEventListener('click', function () {
      const selectedDate = document.querySelector('.selected-date');
      if (selectedDate) {
        selectedDate.classList.remove('selected-date');
      }
      dateElement.classList.add('selected-date');
    });
  }
}

// Render the month view calendar
renderCalendar();
