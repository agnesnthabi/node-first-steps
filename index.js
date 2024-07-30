import {greet} from './greet.js';
import { yo } from './yo.js';
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.bgYellow.blackBright(data));
  });


console.log(chalk.bgRed.whiteBright(cowsay.say({
    text : greet('Nayna')
})));


const styledMessage = chalk.bgRed.whiteBright(greet('Nayna'));
console.log(styledMessage);