const { Telegraf } = require('telegraf');

const bot  = new Telegraf('5781745785:AAHo61Bvw0TcNzuLyQkymSH_7so0NDn0E4Y');

bot.start((ctx)=> ctx.reply('welcome to bot created by vivek '));


bot.on('sticker',(ctx)=> ctx.reply('👍'));

bot.hears('hi',(ctx)=> ctx.reply('Hey folk how are doing? '));

bot.launch();