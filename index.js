const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Keyboard layout
const keyboard = {
  reply_markup: {
    keyboard: [
      [{ text: '👛 Кошелек' }],
      [{ text: '💰 Пополнить' }],
      [{ text: '💸 Вывести' }]
    ],
    resize_keyboard: true
  }
};

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    'Добро пожаловать в криптообменник! Выберите действие:',
    keyboard
  );
});

// Handle button clicks
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  
  switch (msg.text) {
    case '👛 Кошелек':
    case '💰 Пополнить':
    case '💸 Вывести':
      bot.sendMessage(chatId, 'Функция в разработке');
      break;
  }
});

console.log('Telegram bot is running...');