document.write('Task 1: ');
for(let i = 10; i <= 20; i++) {
  if(i < 20) { 
    document.write(i + ', ');
  } else {
    document.write(i + '.');
  }
}

document.write('<br>' + '<br>' + 'Task 2: ');
let result;
for(let i = 10; i <= 20; i++) {
   result = i ** 2;
  if(i < 20) {
    document.write(result + ', ');
  } else {
    document.write(result + '.');
  }
}

document.write('<br>' + '<br>' + 'Task 3:' + '<br>');
const numberSeven = 7;
let resultMultTableSeven;
for(let i = 1; i <= 10; i++) {
  resultMultTableSeven = i * numberSeven;
  document.write(numberSeven + '*' + i + '=' + resultMultTableSeven + '<br>');
}

document.write('<br>' + 'Task 4: ');
let resultNumSum = 0;
for(let i = 1; i<=15; i++) {
  resultNumSum = resultNumSum + i;
  if(i < 15) {
    document.write(i + '+');
  } else {
    document.write(i + '=' + resultNumSum + '.');
  }
}

document.write('<br>' + '<br>' + 'Task 5: ');
let resultMult = 1;
for(let i = 15; i <= 35; i++) {
  resultMult = resultMult * i;
  if(i < 35) {
    document.write(i + ' * ');
  } else {
    document.write(i + '=' + resultMult.toPrecision(30));
  }
}

document.write('<br>' + '<br>' + 'Task 6: ');
let firstNum = 1;
let lastNum = 500;
let NumCount = 0;
let NumSum = 0;
let NumAverage;
for(firstNum; firstNum <= lastNum; firstNum++) {
  NumSum = NumSum + firstNum;
  NumCount++;
}
NumAverage = NumSum / NumCount;
document.write('Result: ' + NumAverage);

document.write('<br>' + '<br>' + 'Task 7: ');
let sumEven = 0;
for(let i = 30; i <= 80; i++) {
  if (i % 2 === 0 && i < 80) {
    sumEven = sumEven + i;
    document.write(i + ' + ');
  } else if(i === 80) {
    document.write(i + ' = ' + sumEven);
  }
}

document.write('<br>' + '<br>' + 'Task 8: ');
for(let i = 100; i <= 200; i++) {
  if(i % 3 !== 0) {
    continue;
  } else {
    document.write(i + ', ');
  }
}

document.write('<br>' + '<br>');
const anyNumber = 20;
let quantityOfEvenDiv = 0;
let arrDiv = [];
let arrEvenDiv = [];
let numDiv = 0;
let sumEvenDi = 0; 
for(let i = anyNumber; i > 0; i--) {
  if(anyNumber % i === 0){
    arrDiv[numDiv] = i;
    numDiv++;
  }
}
for(let i = 0; i <= arrDiv.length; i++){
  if(arrDiv[i] % 2 === 0) {
    arrEvenDiv[quantityOfEvenDiv] = arrDiv[i];
    sumEvenDi = sumEvenDi + arrDiv[i];
    quantityOfEvenDiv++;
  }
}
document.write('Task 9: ' + arrDiv);
document.write('<br>' + '<br>' + 'Task 10: ' + 'Result: ' + quantityOfEvenDiv + ': ' + arrEvenDiv);
document.write('<br>' + '<br>' + 'Task 11: ' + 'Sum: ' + sumEvenDi);

document.write('<br>' + '<br>' + 'Task 12: ');
let multTable;
for(let i = 1; i <= 10; i++) {
    document.write('<br>');
  for( let k = 1; k <=10; k++) {
    multTable = i * k;
    document.write(i + ' * ' + k + ' = ' + multTable + '  ' + '<br>');
  }
}