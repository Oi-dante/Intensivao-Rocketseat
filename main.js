// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello Word!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const a = 22;
const b = 13;
const sum = a + b;
alert(sum)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const c = 15;
if (typeof c == 'number'){
  alert(`"${c}" É um número`)
}else {
  alert(`"${c}" Não é um número`)
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const d = "olá";
if (typeof d == 'string'){
  alert(`"${d}" É uma string`)
}else {
  alert(`"${d}" Não é uma string`)
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const e = true;
if (typeof e == 'boolean'){
  alert(`"${e}" É um booleano`)
}else {
  alert(`"${e}" Não é um booleano`)
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const numberOne = 3;
const numberTwo = 2;
const subtraction = numberOne - numberTwo;
alert(subtraction)


// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const numberThree = 5;
const numberFour = 5;
const multiplication = numberThree * numberFour;
alert(multiplication);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const numberFive = 10;
const numberSix = 5;
const divison = numberFive / numberSix;
alert(divison)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const pair = 2;
if (pair % 2 == 0){
  alert(`${pair} É um número par`)
}else {
  alert(`${pair} Não é um número par`)
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const odd = 3;
if (odd % 2 != 0){
  alert(`${odd} É um número ímpar`)
}else{
  alert(`${odd} Não é um número ímpar`)
}