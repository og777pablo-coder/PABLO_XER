const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `🔥 Welcome to OG PABLO XER Bot!

Commands:
/sensi - Get Sensitivity
/dpi - Get DPI`
  );
});

bot.onText(/\/sensi/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `📱 Reply with your RAM:

4GB
6GB
8GB
12GB`
  );
});

bot.on("message", (msg) => {
  const text = msg.text;

  if (text === "4GB") {
    bot.sendMessage(msg.chat.id, "🎯 Recommended Sensitivity:\nGeneral: 100\nRed Dot: 95\n2x: 85\n4x: 75\nSniper: 50\nFree Look: 67");
  }

  if (text === "6GB") {
    bot.sendMessage(msg.chat.id, "🎯 Recommended Sensitivity:\nGeneral: 100\nRed Dot: 100\n2x: 90\n4x: 80\nSniper: 55\nFree Look: 70");
  }

  if (text === "8GB") {
    bot.sendMessage(msg.chat.id, "🎯 Recommended Sensitivity:\nGeneral: 100\nRed Dot: 100\n2x: 95\n4x: 85\nSniper: 60\nFree Look: 75");
  }

  if (text === "12GB") {
    bot.sendMessage(msg.chat.id, "🎯 Recommended Sensitivity:\nGeneral: 100\nRed Dot: 100\n2x: 100\n4x: 90\nSniper: 65\nFree Look: 80");
  }
});

bot.onText(/\/dpi/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🖥️ Recommended DPI:\nLow End: 480\nMid End: 560\nHigh End: 640"
  );
});
