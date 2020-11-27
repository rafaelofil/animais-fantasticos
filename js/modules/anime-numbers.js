export default function initAnimeNumbers() {
  function animeNumbers() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach((number) => {
      const total = Number(number.innerText);
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + increment;
        number.innerText = start;

        if (start > total) {
          clearInterval(timer);
          number.innerText = total;
        }
      }, 25 * Math.random());
    });
  }

  const observerTarget = document.querySelector('.numbers');
  const observer = new MutationObserver(handleMutation);

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      animeNumbers();
    }
  }

  observer.observe(observerTarget, { attributes: true });
}
