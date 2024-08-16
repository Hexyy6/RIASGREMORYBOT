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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJ0WUZlVndKc1dnc05XOEVjdEdtcTQyMTVEU2NVT0ZkSEdoMENOd3Vrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkQxU0JkUGU5ZjkvMlJJMkpuVkVVdzJZRThIY1JneFBheGtyQWNtMDZHND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTkd6QlNCencwWG0zLzlvNy8vR1JsbmIzVWNpSHVYeFhTQ3BvVTJyZ1ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVanczc3h5OWVzRVZ1WUdPdjlFY2d2Z1Rsajd1akVVQ2g5cXBpemUzUnprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdKTjVVVEYwSldianhSZ0hhZTFxMUMxdlNFL1VZMDM4TnZON2xlOSs3VzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndqUzVrUmViSzFmR3dHOWN5OUZZOW9qMTltZllnbENTNEtpOG9PZEF2Z1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0svRHEyN29mdElDT1V1TnNHTndQMmhyRWpHVE4vVSthTlJkZStLUDVWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VhbTdhQzB3bWF6YXF0d0pQTTZJcitXdGxpU09qV3ZFQ2NOVzAvNUpsdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZBaTZ5MHlrQXhvWnJqeG9qZGw3VTVweGhGMWRkOXdCSTdZSVNNdVVNNldNQkRaT3ZxZUhGS3Mvc0VITFE0K2xaZDhhczZyeGlzdUl1eU52cTJGbWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6InVsNmxMdUtmNmswOG1wTFkwTktvdktJa09lN2VnaEo4Tm1ITVZJbzk1YVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA2MDk0NzM0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBOEQwRUI3RTVFMjFGRUNFNDE1RDY3M0Y1M0ZBOUJFQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzODE5Njk2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkVFBxUkZMRlJhMldqdlZfaDQxeGN3IiwicGhvbmVJZCI6IjZkNGVlYmViLTk1ODEtNDcwZC04M2ZjLTNmNDQ5Yzc3MjZkMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRjZzcDhIdFlRdWwvMzVENDFzcWRvTjhIU2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdRUllhSGNpMldJc0NleGhmM3YwNGYrYThVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlAzRUJLV1NBIiwibWUiOnsiaWQiOiIyMzQ5MDYwOTQ3MzQzOjMxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPUDRqL1lHRUtETi9iVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwcE9ZZXhiTWJuVnlvT05KaVRVV3JuaG9Wb3lOKzBSTUxDTnEvUUdtekd3PSIsImFjY291bnRTaWduYXR1cmUiOiJHYVNRdTdjbjQ4b0lVdzA1amF4STJCQmZmTytXN2dBaEVvcWdpQmU3RTRjbUxWaldwTTg4WkRTanFoeXFTQ01jQW0rUnJhNHU2bGxKSEJNU1QraHlDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVllSbzhycFpUVkNYY1FuTnFOSE9oYTdIdDFaZisrSjc4QTJwVE9yamIvUnVHdTZnQzZjUWJDRUZ2RUVzeWN1VjY1YmZKZEFnNUZwRHFiTy9YZk9BaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDYwOTQ3MzQzOjMxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFhVG1Ic1d6RzUxY3FEalNZazFGcTU0YUZhTWpmdEVUQ3dqYXYwQnBzeHMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4MTk2OTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3UzIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "𝕿𝖞𝖑𝖊𝖗",
  packname: process.env.PACK_NAME || "一水",
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
