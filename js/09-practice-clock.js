const elements = {
  // or refs {}
  weekDay: document.querySelector(".date-day"),
  monthDay: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  digitalClock: document.querySelector(".digital-clock"),
  analogSecondArrow: document.querySelector(".clock-seconds__arrow"),
  analogMinutesArrow: document.querySelector(".clock-minutes__arrow"),
  analogHourArrow: document.querySelector(".clock-hours__arrow"),
};

const namesOfDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
];

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

let timer;

function updateTime() {
  const date = new Date();
  const todayDate = date.getDate();
  const day = date.getDay();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();

  const secondsDeg = (360 / 60) * currentSecond;
  const minutesDeg = (360 / 60) * currentMinute;
  const hoursDeg = (360 / 12) * currentHour + currentMinute * 0.5;

  elements.monthDay.textContent = todayDate;
  elements.weekDay.textContent = namesOfDay[day];
  elements.year.textContent = currentYear;
  elements.month.textContent = namesOfMonth[currentMonth];
  elements.analogSecondArrow.style.transform = `rotate(${secondsDeg}deg)`;
  elements.analogMinutesArrow.style.transform = `rotate(${minutesDeg}deg)`;
  elements.analogHourArrow.style.transform = `rotate(${hoursDeg}deg)`;

  elements.digitalClock.textContent = `Поточний час ${currentHour
    .toString()
    .padStart(2, "0")} : ${currentMinute
    .toString()
    .padStart(2, "0")} : ${currentSecond.toString().padStart(2, "0")}`;
}
updateTime();

timer = setInterval(updateTime, 1000);
