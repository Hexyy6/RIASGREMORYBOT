//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "33757054414";
global.sudo = process.env.SUDO || "33757054414";
global.owner = process.env.OWNER_NUMBER || "2349060947343";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/71fcd1f14ee371e63b5e8.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BHcnlmSVJuRjdHLzJDVGlpRzc1Y2o3WlZTMzBPa3FFQy9WTXlvcFhIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3diK1JOajJLODlFOEw3S0VkQTd6UE5DSFRSRHZxWGNneHFuSmVzempqVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSG5lS242V2svRXlhNjJscFJMaEZHL21UeDVJZHRMRm4wOTFBQWFta1hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJscDFIVE9ZbEVPOEUzMk9OYzZQbGhLQVloWHB1cEVVdUhoTWlCeWovTld3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFdzQreUFpVjBxTVlXU0s1UjhLZ0xnQmxsQzRHRUhTZkcrS1RXbEVuSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNJT3dpWjhxcEdFQitESCtWQVdoaEJrenBEMEFGRGlGRzRUOTNwY3crR2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hOQzVHQS9yMzg5NzdpdllTLzBTNDM3ajhCRGhHeS85a3d6R2J1cDNIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJLSzVYNHUrajQzTlJBMFJGU3U3SFBwZVVmRGxuUDJpcGp4RDI1NVBoND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRMZWIwNDN2bkpvbnJ5OG83N1BJaHZKSVlkb3BqTlZCaXpDWWxkTmIvL0FGK0tkOXBuUEpMNXRzMWtndHlUWTVpYTNvNHdMajh6dVdESXgwYW10aENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJHUjRrNm9QckNCTWtqd3FJYkpqQUZwdVdhV0pXa3pOYVBXNVBKaDk3eHJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLXzZXSXAwQlNPZTg5WkQyLThhUnB3IiwicGhvbmVJZCI6IjJiNjRjYjg4LWQ1NmEtNGM1YS1iMTkyLWJiMGIxZTYwMzQ0YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPOHRwQXFKU0h4WWNNWEFLRkZpcC9nc1l5dHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnZkbWxyaGNYUGZJTE1mL1FhWXFyOGtkOTdZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldMWTc4TVdGIiwibWUiOnsiaWQiOiIyMzQ5MDYwOTQ3MzQzOjIwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPL2p3dWdDRVBxdGxiVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNeWNJOG5OaUFKZWJkbVZ0TDc1ZXZia3BsZjBHYm5oQUcxNE9sMFR6MnhnPSIsImFjY291bnRTaWduYXR1cmUiOiJrWDBIdUp0ckVrYnl2bzFUQit1NHczTHlpZEx6cGdyenNlVUwxUGRiVWRNUTJadGdXQXZRa0VXeTJhSlJCaS9uMUltTlZOQWVHN1k2UG9xWnpSRndCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZGo2Sm5DUHlOZHhrdVhjU0IyZjFCYWRHNWVFTFV3amJRcjMxVXdnWjNLZWwrK0hNc1htdURGYkRZV1FVSFBPZy9iMGpTbEdUVDdwcHRoSE1YWmlqQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDYwOTQ3MzQzOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRNbkNQSnpZZ0NYbTNabGJTKytYcjI1S1pYOUJtNTRRQnRlRHBkRTg5c1kifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxMTE3NTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSndrIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "一水",
  packname: process.env.PACK_NAME || "𝕿𝖞𝖑𝖊𝖗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
