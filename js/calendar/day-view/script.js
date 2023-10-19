// Sample event data for demonstration
const events = [
  { time: "09:00 AM", title: "Meeting with Team" },
  { time: "12:00 PM", title: "Lunch with Clients" },
  { time: "03:00 PM", title: "Product Presentation" },
];

// Function to render events in the calendar
function renderEvents() {
  const eventsContainer = document.querySelector(".events");
  eventsContainer.innerHTML = "";

  events.forEach((event) => {
    const eventItem = document.createElement("div");
    eventItem.classList.add("event-item");

    const eventTime = document.createElement("div");
    eventTime.classList.add("event-time");
    eventTime.textContent = event.time;

    const eventTitle = document.createElement("div");
    eventTitle.classList.add("event-title");
    eventTitle.textContent = event.title;

    eventItem.appendChild(eventTime);
    eventItem.appendChild(eventTitle);
    eventsContainer.appendChild(eventItem);
  });
}

// Call the renderEvents function on page load
document.addEventListener("DOMContentLoaded", renderEvents);
