window.addEventListener('load', () => {
  let value = 0;
  const buttons = document.querySelectorAll('.buttons');
  const cardRanking = document.getElementById('ranking');
  const cardState = document.getElementById('state');
  const rate = document.querySelector('span');
  console.log(rate);


  buttons.forEach(button => {
    button.addEventListener(('click'), () => {
      buttons.forEach((items) => {
        items.classList.remove('buttons-focus')
      });
      button.classList.add('buttons-focus');
      value = button.value;
    })
  });

  cardRanking.addEventListener(('submit'), (e) => {
    e.preventDefault();
    if (value === 0) {
      alert('please, choose a value')
    } else {
      cardRanking.style.display = 'none';
      cardState.style.display = 'flex';
      rate.innerText = value;
    }
  })
});