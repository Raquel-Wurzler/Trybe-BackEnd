// Crie uma função para calcular IMC (Indice de Massa Corporal, em inglês BMI[Body Mass Index])
// De forma interativa adicionar inputs de entrada para quem usar para capturar peso e altura
// Retornando o valor do IMC e seu status.
// O código deve ser executado através do comando npm run bmi

const readlineSync = require('readline-sync');

const calculateBmi = () => {
  const weight = readlineSync.questionFloat('What is your weight? (kg) ');
  const height = readlineSync.questionFloat('What is your height? (mt) ');
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log(`Your Body Mass Index is ${bmi.toFixed(2)}, Status: Underweight (thin)`);
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log(`Your Body Mass Index is ${bmi.toFixed(2)}, Status: Normal weight`);
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log(`Your Body Mass Index is ${bmi.toFixed(2)}, Status: Overweight`);
    return;
  }

  if (bmi >= 30 && bmi < 35) {
    console.log(`Your Body Mass Index is ${bmi.toFixed(2)}, Status: Grade I obesity`);
    return;
  }

  if (bmi >= 35 && bmi < 40) {
    console.log(`Your Body Mass Index is ${bmi.toFixed(2)}, Status: Grade II obesity`);
    return;
  }

  console.log(`Your Body Mass Index is ${bmi.toFixed(2)}, Status: Obesity grades III and IV`);
};

calculateBmi();
