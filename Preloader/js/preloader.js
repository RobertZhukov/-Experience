let time = 0;
let timeBetweenLetters = 800;

let timer = setInterval(() => {
  time = time + 1;
}, timeBetweenLetters);

const letterFill = (id) => {
  id.setAttribute("fill", "#BA2425");
};

let paintSymbal = setInterval(() => {
  switch (time) {
    case 1:
      letterFill(letter_1);
      break;

    case 2:
      letterFill(letter_2);
      break;

    case 3:
      letterFill(letter_3);
      break;

    case 4:
      letterFill(letter_4);
      break;

    case 5:
      letterFill(letter_5);
      break;

    case 6:
      letterFill(letter_6);
      break;

    case 7:
      letterFill(letter_7);
      break;

    case 8:
      document.getElementById("preloader").style.display = "none";
      break;
  }
}, 100);
