const {default : axios }= require('axios');
const { Telegraf } = require('telegraf');


/**
 * how to get secret token for creating a bot?
 * ->open telegram and searc for botFather
 * ->to read  instructions type /start and press enter
 * ->to create a new bot type /newbot and enter
 * ->then set a bot name 
 * 
 * ->URL of my bot is ->t.me/dev_helpbot.
 */


let binarysearch =`
let left = 0;
let right = array.length - 1;

while (left <= right) {
  // Calculate the middle index of the current search space
  let mid = Math.floor((left + right) / 2);

  // Check if the middle element is the target
  if (array[mid] === target) {
    return mid; // Target found, return the index
  } else if (array[mid] < target) {
    // If the target is greater, ignore the left half
    left = mid + 1;
  } else {
    // If the target is smaller, ignore the right half
    right = mid - 1;
  }
}

return -1;

`;

const bot =new Telegraf('6707582728:AAE71esUowz3UxvMtY12xxG90gcY4Ht-rsE');

bot.start((ctx) => ctx.reply('welcome to our comuunity'));
bot.command('binarysearchjs',(ctx) => ctx.reply(binarysearch));


//on=> this is for handling event
bot.on('sticker',(ctx)=> ctx.reply('❤️'));
bot.on('animation',(ctx)=> ctx.reply('👍'));

//bot.command('binarytreejs',async function (ctx){
//        const reponse = await axios.get('https://www.codingninjas.com/studio/problems/binary-search_972?interviewProblemRedirection=true');
//        console.log(reponse.data);
//        return ctx.reply(reponse.data);
//})


bot.launch();