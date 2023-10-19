// Sample events for the week
const events = {
  'October 9, 2023': [
    { time: '09:00', title: 'Meeting with Team' },
    { time: '11:00', title: 'Product Presentation' },
  ],
  'October 10, 2023': [
    { time: '10:00', title: 'Client Meeting' },
    { time: '14:00', title: 'Project Discussion' },
  ],
  'October 11, 2023': [
    { time: '09:30', title: 'Team Huddle' },
    { time: '13:00', title: 'Lunch Break' },
  ],
  'October 12, 2023': [
    { time: '10:30', title: 'Client Call' },
  ],
  'October 13, 2023': [],
  'October 14, 2023': [],
  'October 15, 2023': [],
};

// Function to render events for each day in the calendar
function renderDays(events) {
  const daysContainer = document.getElementById('days-container');
  for (let day in events) {
    const dayColumn = document.createElement('div');
    dayColumn.classList.add('day-column');
    const dayHeader = document.createElement('h3');
    dayHeader.textContent = day;
    dayColumn.appendChild(dayHeader);
    events[day].forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('event');
      eventElement.innerHTML = `<strong>${event.time}</strong> - ${event.title}`;
      dayColumn.appendChild(eventElement);
    });
    daysContainer.appendChild(dayColumn);
  }
}

// Display the current week in the calendar header
const startDate = new Date('October 9, 2023').toDateString();
const endDate = new Date('October 15, 2023').toDateString();
document.querySelector('#calendar-header h2').textContent = `Week of ${startDate} to ${endDate}`;

// Render the events for each day in the calendar
renderDays(events);
