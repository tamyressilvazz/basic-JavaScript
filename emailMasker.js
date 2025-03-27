
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
  // diminui dois caracters * excluindo a primeira e a última letra
  charMask = charMask.repeat(index - 2);

  // mascara o restante
  let mask = firstChar + charMask + lastChar;

   //retorna a mascara e o dominio
  return mask + domain;
}

//declarar a variável email
let email = "apple.pie@example.com";
console.log(maskEmail(email)); // Deve retornar "a*******e@example.com"
email = "freecodecamp@example.com";
console.log(maskEmail(email)); // Deve retornar "f**********p