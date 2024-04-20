import chalk from "chalk";
import validator from "validator";
console.log(chalk.green.underline.inverse("Hello world!"));

const res = validator.isEmail("foo@bar.com");

console.log(res ? chalk.green(res) : chalk.red(res));
