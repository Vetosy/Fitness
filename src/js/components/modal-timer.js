function updateTimerElements(container) {
  const newYear = new Date('Dec 1 2024 00:00:00');

  const daysVal = container.querySelector('.js-value--days');
  const hoursVal = container.querySelector('.js-value--hrs');
  const minutesVal = container.querySelector('.js-value--mins');

  const daysText = container.querySelector('.js-text--days');
  const hoursText = container.querySelector('.js-text--hrs');
  const minutesText = container.querySelector('.js-text--mins');

  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  const timeCount = () => {
    let now = new Date();
    let leftUntil = newYear - now;

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;

    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;

    daysText.textContent = declOfNum(days, ['day', 'days', 'days']);
    hoursText.textContent = declOfNum(hours, ['hour', 'hours', 'hours']);
    minutesText.textContent = declOfNum(minutes, ['minute', 'minutes', 'minutes']);
  };

  timeCount();
  setInterval(timeCount, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const timerContainers = document.querySelectorAll('.js-timer');

  timerContainers.forEach(container => {
    updateTimerElements(container);
  });
});
