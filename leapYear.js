// Um ano é bissexto quando é divisível por 4, exceto se for um ano centenário (divisível por 100) que não seja divisível por 400

function isLeapYear(year){
    let result = ``;
  
    if(year % 400 === 0){
      result = `${year} is a leap year.`;
    }else if(year % 100 === 0){
      result =`${year} is not a leap year.`;
    }else if(year % 4 === 0){
      result = `${year} is a leap year.`;
    }
    return result;
}
let year = 2016;

year = 2024;
let result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);

year = 1900;
result = isLeapYear(year);
console.log(result);
    