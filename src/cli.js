import readlineSync from 'readline-sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

export default sayGreetings;

/*  функция приветствует пользователя и запрашивает имя с помощью библиотеки readlineSync.
*/
