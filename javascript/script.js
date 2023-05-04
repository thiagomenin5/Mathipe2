cards[i].addEventListener('mouseover', function() {
    this.querySelector('.card-body').style.backgroundColor = 'black';
    this.querySelector('.card-title').style.color = 'white';
    this.querySelector('.card-text').style.color = 'white';
  });

  const tarjetasServicio = document.querySelectorAll('.card-servicio');

tarjetasServicio.forEach(tarjeta => {
  tarjeta.addEventListener('mouseover', () => {
    tarjeta.style.transform = 'rotateY(180deg)';
  });
  tarjeta.addEventListener('mouseout', () => {
    tarjeta.style.transform = 'rotateY(0deg)';
  });
});