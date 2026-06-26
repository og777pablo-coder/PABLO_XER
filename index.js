const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, `📖 PABLO XER Help

bot.onText(/\/device/, (msg) => {
  bot.sendMessage(msg.chat.id, `📱 Choose Your Platform

🤖 Android
🍎 iOS
💻 PC Emulator

Reply with:
Android
iOS
PC`);
});
bot.on("message", (msg) => {
  const text = msg.text.toLowerCase();

  if (text === "android") {
    bot.sendMessage(msg.chat.id, "📱 Enter your Android device.\n\nExample:\nNothing Phone 3a Pro");
  }

  if (text === "ios") {
    bot.sendMessage(msg.chat.id, "🍎 Enter your iPhone model.\n\nExample:\niPhone 15 Pro Max");
  }

  if (text === "pc") {
    bot.sendMessage(msg.chat.id, "💻 Enter your emulator.\n\nExample:\nGameLoop\nBlueStacks\nLDPlayer");
  }
});
bot.on("message", (msg) => {
  const text = msg.text;

  if (text.startsWith("Device:")) {
    const lines = text.split("\n");

    const device = lines[0].replace("Device:", "").trim();
    const ram = lines[1].replace("RAM:", "").trim();

    bot.sendMessage(msg.chat.id, `🔥 PABLO XER 🔥

📱 Device: ${device}
💾 RAM: ${ram}

🎯 Recommended Sensitivity

⚡ General : 200
🔴 Red Dot : 195
🎯 2X Scope : 185
🔭 4X Scope : 175
🎯 Sniper Scope : 140
👀 Free Look : 160

📶 Recommended DPI

🎯 DPI : 720

━━━━━━━━━━━━━━━━━━━━━━
⚡ Powered by PABLO XER 💀
🚀 Best Settings for Free Fire 🔥🫶🏻
━━━━━━━━━━━━━━━━━━━━━━`);
  }
});
