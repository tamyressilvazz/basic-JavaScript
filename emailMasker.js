//declarar a variável email
let email = "apple.pie@example.com";

function maskEmail(email){
  //index a partir do @
  let index = email.indexOf("@");

  // extrai o dominio do email
  let domain = email.slice(index);

  // primeira e a ultima letra antes do @
  let firstChar = email[0];
  let lastChar  = email[index - 1];

  //cria a mascara
  let charMask = "*";
  charMask = charMask.repeat(index);

  // mascara o restante
  let mask = firstChar + charMask;

  //retorna a mascara e o dominio
  return mask + domain;
}

// Chama a função 
console.log(maskEmail(email)); // "a*******e@example.com"

// Testa com outro e-mail
console.log(maskEmail("freecodecamp@example.com")); // "f**********p@example.com"
