const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, `📖 PABLO XER Help

📱 /android - Android Devices
🍎 /iphone - iPhone Devices
💻 /pc - PC Emulator
🎯 /sensi - Best Sensitivity
📶 /dpi - Best DPI

⚡ Powered by PABLO XER`);
});

bot.onText(/\/android/, (msg) => {
  bot.sendMessage(msg.chat.id, "📱 Send your Android Device Name\n\nExample:\nNothing Phone 3a Pro");
});

bot.onText(/\/iphone/, (msg) => {
  bot.sendMessage(msg.chat.id, "🍎 Send your iPhone Model\n\nExample:\niPhone 15 Pro Max");
});

bot.onText(/\/pc/, (msg) => {
  bot.sendMessage(msg.chat.id, "💻 Enter your Emulator Name\n\nExample:\nGameLoop\nBlueStacks\nLDPlayer");
});

bot.onText(/\/sensi/, (msg) => {
  bot.sendMessage(msg.chat.id, `📱 Send Your Device & RAM

Example:

Device: Nothing Phone 3a Pro
RAM: 12GB

Supported Devices:
📱 Android
🍎 iPhone
💻 PC Emulator`);
});
  bot.sendMessage(msg.chat.id, `🔥 PABLO XER 🔥

📱 Device: ${device}
💾 RAM: ${ram}

━━━━━━━━━━━━━━━━━━━━━━

🎯 Recommended Sensitivity

⚡ General : 200
🔴 Red Dot : 195
🎯 2X Scope : 185
🔭 4X Scope : 175
🎯 Sniper Scope : 140
👀 Free Look : 160

━━━━━━━━━━━━━━━━━━━━━━

📶 Recommended DPI

🟢 Low-End : 560
🟡 Mid-End : 680
🔴 High-End : 720

━━━━━━━━━━━━━━━━━━━━━━
⚡ Powered by PABLO XER
🚀 Best Settings for Free Fire
━━━━━━━━━━━━━━━━━━━━━━`);
});
