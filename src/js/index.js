// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElement = document.getElementById('form');

const checkForm = event => {
  //para evitar que se recargue despues de enviar
  event.preventDefault();
};

formElement.addEventListener('submit', checkForm);
formElement.addEventListener('input', event => {
  //te escribe los valores en tiempo real de los inputs
  console.log(event.target.value);
});
