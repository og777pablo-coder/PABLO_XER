const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `🔥 Welcome to PABLO XER 🔥

🎮 Free Fire Sensitivity & DPI Bot

━━━━━━━━━━━━━━━━━━━━━━

📋 Available Commands

🚀 /start - Home
📱 /device - Select Device
🎯 /sensi - Sensitivity
📶 /dpi - DPI
❓ /help - Help

━━━━━━━━━━━━━━━━━━━━━━
⚡ Powered by PABLO XER
━━━━━━━━━━━━━━━━━━━━━━`);
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, `📖 PABLO XER Help

📱 /device - Select Device
🎯 /sensi - Best Sensitivity
📶 /dpi - Best DPI

⚡ Powered by PABLO XER`);
});

bot.onText(/\/device/, (msg) => {
  bot.sendMessage(msg.chat.id, `📱 Choose Your Platform

🤖 Android
🍎 iOS
💻 PC

Reply with:
Android
iOS
PC`);
});bot.onText(/\/sensi/, (msg) => {
  bot.sendMessage(msg.chat.id, `📱 Send Your Device & RAM

Example:

Device: Nothing Phone 3a Pro
RAM: 12GB`);
});

bot.onText(/\/dpi/, (msg) => {
  bot.sendMessage(msg.chat.id, `📶 DPI Guide

4GB  ➜ 520
6GB  ➜ 580
8GB  ➜ 640
12GB ➜ 720
16GB ➜ 800

⚡ Powered by PABLO XER`);
});

bot.on("message", (msg) => {
  const text = msg.text;

  if (!text.startsWith("Device:")) return;

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

━━━━━━━━━━━━━━━━━━━━━━

🎯 Recommended Sensitivity

⚡ General : 200
🔴 Red Dot : 195
🎯 2X Scope : 185
🔭 4X Scope : 175
🎯 Sniper : 140
👀 Free Look : 160

━━━━━━━━━━━━━━━━━━━━━━

📶 Recommended DPI

🎯 DPI : 720

━━━━━━━━━━━━━━━━━━━━━━
⚡ Powered by PABLO XER 💀
🚀 Best Settings for Free Fire 🔥
━━━━━━━━━━━━━━━━━━━━━━`);
});bot.on("message", (msg) => {
  const text = msg.text.toLowerCase();

  if (text === "android") {
    bot.sendMessage(msg.chat.id,
      "📱 Android Selected\n\nNow send:\n\nDevice: Nothing Phone 3a Pro\nRAM: 12GB");
  }

  if (text === "ios") {
    bot.sendMessage(msg.chat.id,
      "🍎 iPhone Selected\n\nNow send:\n\nDevice: iPhone 15 Pro Max\nRAM: 8GB");
  }

  if (text === "pc") {
    bot.sendMessage(msg.chat.id,
      "💻 PC Emulator Selected\n\nNow send:\n\nDevice: GameLoop\nRAM: 16GB");
  }
});

console.log("✅ PABLO XER Bot Started...");
