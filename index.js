const { Telegraf } = require('telegraf');

const dotenv  = require('dotenv');

dotenv.config();

// 

const bot  = new Telegraf(process.env.TOKEN);

bot.start((ctx)=> ctx.reply('welcome to bot created by vivek '));


bot.on('sticker',(ctx)=> ctx.reply('👍'));

bot.hears('hi',(ctx)=> ctx.reply('Hey folk how are doing? '));

bot.launch();