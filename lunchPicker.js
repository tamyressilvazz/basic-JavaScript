let lunches = [];

//adiciona um lunch no final do array
function addLunchToEnd(lunchItens, lunch){
  lunchItens.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);

  return lunchItens;
}

//adiciona um lunch no inicio do array
function addLunchToStart(lunchItens, lunch){
  lunchItens.unshift(lunch);

  console.log(`${lunch} added to the start of the lunch menu.`);

  return lunchItens;
}

//remove o último lunch e mostra o que foi removido
function removeLastLunch(lunchItens){
  if (lunchItens.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let lastItem = lunchItens[lunchItens.length - 1];
    lunchItens.pop();
    console.log(`${lastItem} removed from the end of the lunch menu.`);
  }

  return lunchItens;
}

//remove o primeiro lunch e mostra o que foi removido
function removeFirstLunch(lunchItens){
  if (lunchItens.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let firstItem = lunchItens[0];
    lunchItens.shift();
    console.log(`${firstItem} removed from the start of the lunch menu.`);
  }

  return lunchItens;
}

//seleciona aleatoriamente um lunches
function getRandomLunch(lunchItens){
  if (lunchItens.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * lunchItens.length);
    const randomItem = lunchItens[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }

}

// mostra o array de lunches
function showLunchMenu(lunchItens){
  if (lunchItens.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunchItens.join(", ")}`);
  }
}

lunches = [];
console.log(removeLastLunch(lunches));

lunches = ["Stew", "Soup", "Toast"];
console.log(removeLastLunch(lunches));

console.log(removeFirstLunch(lunches));
lunches = [];



