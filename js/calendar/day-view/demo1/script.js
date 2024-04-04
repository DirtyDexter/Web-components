const wrapper = document.querySelector('.wrapper');
Array.from({ length: 24 }, (val, idx) => {
  const slot = document.createElement('div');
  slot.className = `slot s-${idx + 1}-00`;
  const time = document.createElement('div');
  time.className = 'time';
  time.innerHTML = `${idx + 1 !== 12 ? (idx + 1) % 12 : idx + 1}:00 ${
    idx + 1 >= 12 && idx + 1 < 24 ? 'pm' : 'am'
  }`;
  slot.appendChild(time);
  const box = document.createElement('div');
  box.className = 'box';
  slot.appendChild(box);
  wrapper.appendChild(slot);
});


const meetings = [
  {
    title: "Test",
    begin: "00:30",
    end: "3:00",
    color: "red"
  },
  {
    title: "Test 2",
    begin: "4:30",
    end: "7:30",
    color: "blue"
  },
  {
    title: "Test 3",
    begin: "6:10",
    end: "10:00",
    color: "red"
  },
  {
    title: "Test 4",
    begin: "7:00",
    end: "9:15",
    color: "orange"
  },
  {
    title: "Test 5",
    begin: "21:30",
    end: "21:55",
    color: "purple"
  }
];

meetings.map((e, id) => {
  // meeting element creation
  const meeting = document.createElement("div");
  // duration computing
  const duration =
    parseInt(e.end.split(":")[0]) +
    parseInt(e.end.split(":")[1]) / 60 -
    parseInt(e.begin.split(":")[0]) -
    parseInt(e.begin.split(":")[1]) / 60;
  // styling
  meeting.style.backgroundColor = e.color;
  meeting.style.height = `${duration * 50}px`;
  meeting.style.position = "absolute";
  meeting.style.top = "0";
  meeting.style.left = "0";
  meeting.style.right = "0";
  meeting.style.bottom = "0";
  meeting.style.padding = "0";
  meeting.style.margin = "0";
  meeting.style.outline = "1px solid white";
  meeting.style.borderRadius = "5px";
  meeting.style.zIndex = "1";
  meeting.style.transform = `translateY(${Math.floor(
    Math.floor(50 * parseInt(e.begin.split(":")[1])) / 60
  )}px)`;

  // how many conflicting meeting ?
  const currentStart =
    parseInt(e.begin.split(":")[0]) + parseInt(e.begin.split(":")[1]) / 60;
  const conflicts = meetings.filter((elt, idx) => {
    const start =
      parseInt(elt.begin.split(":")[0]) +
      parseInt(elt.begin.split(":")[1]) / 60;
    const finish =
      parseInt(elt.end.split(":")[0]) + parseInt(elt.end.split(":")[1]) / 60;
    if (idx < id && start <= currentStart && finish >= currentStart) return elt;
  });
  if (conflicts.length) {
    meeting.style.width = `${Math.floor(100 / (1 + conflicts.length))}%`;
    meeting.style.left = `${Math.ceil(100 - 100 / (1 + conflicts.length))}%`;
  }
  const detailsTitle = document.createElement("div");
  detailsTitle.innerHTML = `${e.title} <br /> ${e.begin}-${e.end}`;
  detailsTitle.className = "details";
  meeting.appendChild(detailsTitle);
  const box = document.querySelector(
    `.s-${parseInt(e.begin.split(":")[0]) + 1}-00 > .box`
  );
  box.appendChild(meeting);
});
