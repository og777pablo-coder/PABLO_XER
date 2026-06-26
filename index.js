const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `🔥 Welcome to PABLO XER 🔥

🎮 Free Fire Sensitivity & DPI Bot

━━━━━━━━━━━━━━━━━━━━━━

📋 Available Commands

🚀 /start - Start Bot
📱 /device - Select Device
❓ /help - Help

━━━━━━━━━━━━━━━━━━━━━━
⚡ Powered by PABLO XER 💀`);
});bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, `📖 PABLO XER Help

📱 /device - Select Device
🎯 /sensi - Best Sensitivity
📶 /dpi - Best DPI

⚡ Powered by PABLO XER 💀`);
});

bot.onText(/\/device/, (msg) => {
  bot.sendMessage(msg.chat.id, `📱 Choose Your Platform

🤖 Android
🍎 iPhone (iOS)
💻 PC Emulator

Reply with:
Android
iPhone
PC`);
});bot.on("message", (msg) => {
  const text = msg.text;

  if (text === "Android") {
    bot.sendMessage(msg.chat.id, "📱 Send your Android device.\n\nExample:\nDevice: Nothing Phone 3a Pro\nRAM: 12GB");
    return;
  }

  if (text === "iPhone") {
    bot.sendMessage(msg.chat.id, "🍎 Send your iPhone model.\n\nExample:\nDevice: iPhone 15 Pro Max\nRAM: 8GB");
    return;
  }

  if (text === "PC") {
    bot.sendMessage(msg.chat.id, "💻 Send your PC Emulator.\n\nExample:\nDevice: GameLoop\nRAM: 16GB");
    return;
  }

  if (text.startsWith("Device:")) {
    const lines = text.split("\n");

    if (lines.length < 2) {
      bot.sendMessage(msg.chat.id, "❌ Format:\n\nDevice: Your Device\nRAM: 12GB");
      return;
    }

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
🎯 Sniper : 140
👀 Free Look : 160

📶 Recommended DPI

🎯 DPI : 720

━━━━━━━━━━━━━━━━━━━━━━
⚡ Powered by PABLO XER 💀
🚀 Best Settings For Free Fire 🔥
━━━━━━━━━━━━━━━━━━━━━━`);
  }
});
