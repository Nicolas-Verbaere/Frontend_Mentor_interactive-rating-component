function getValue() {
      // Sélectionner l'élément input et récupérer sa valeur
      let input = document.querySelector(".button").value;
      // Afficher la valeur
      console.log("valeur de l'input: ", input);
  }

const button1 = document.querySelector('.button1');
button1.addEventListener('click', event => {
      event.preventDefault();
      console.log('click button1');

      const value1 = event.target;
      console.log(value1)
});

const button2 = document.querySelector('.button2');
button2.addEventListener('click', event => {
      event.preventDefault();
      console.log('click button2');

      const value2 = event.target;
      console.log(value2)
});

const button3 = document.querySelector('.button3');
button3.addEventListener('click', event => {
      event.preventDefault();
      console.log('click button3');

      const value3 = event.target;
      console.log(value3)
});

const button4 = document.querySelector('.button4');
button4.addEventListener('click', event => {
      event.preventDefault();
      console.log('click button4');

      const value4 = event.target;
      console.log(value4)
});

const button5 = document.querySelector('.button5');
button5.addEventListener('click', event => {
      event.preventDefault();
      console.log('click button5');

      const value5 = event.target;
      console.log(value5)
});


const buttonSubmit = document.querySelector('.buttonSubmit');
buttonSubmit.addEventListener('click', event => {
      // buttonSubmit.innerHTML = `Nombre de clics : ${event.detail}`;
      console.log('click')
});