const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://github.com/naveeddogar/KING-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/a6b9bbde7feaa92c69c7b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dogar' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0cveHd5RkxyU3Y5V1hGVnhQTmkxckxrNHJmc0lkWWlKQjhxRituS0hIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGl5TDlWR1owMWhRMzFnMDRKcFdHcnQzSms2RGgvRkt2NDgwUU8zTkFVTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UDVPaXVZcmgyMGx3SmdURXJSVjF5OFdyYUdzcEQ0b3p5dWdMZ2RHNWtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SHRad3EzUlpUTVZvYlc5VjZnZUJGbnV2V0V5WkxiazcwYkh5OUpiZkZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNLZ2YvVHVBSm1OeU9wcjNOQVpyUGJrbzNZMWpKcGJNUFYrTkErK083VWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJjVUlWRE1KK0VQa29VTnQvV3NZbkxMQXhOWEVLK2Jsa2ZrbzJ4WWlxbVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUI0WTgrTjZhTEptTllVbWFRbWVzd1A0YjNRTzR5UE54OERtRWpvc2ttUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzM4dXdnNUZuMm1WWE1SMXhKSVo2eGc5UEt1eVdicEpIZTl0ZVlUUkhuST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFRDRrYVJoeURsWVA5VEU3dW83cXJOTjAxUW16MUpVM0EvMW9rS0tiK1owbnAzWVBpVDBrekwzajExYk4xL0Fudk1rWVAvYVRqdG9YUFFQc2NTR2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJPdWI5UytLaGtMT0FQSzgweGxvR2xLR3kvUnZlK1JTUUFtZlBUa0Q5ZjJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0OHZzRUFNaVMzcVRMWnVPUmdZd3FBIiwicGhvbmVJZCI6IjU5YmExNzRjLTQzYzgtNDc1ZC1hMDk0LWExNTczZmJkOTFjNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvVExqQlNJTGE2UnF4dzVLYyt5WlVOY2RDNzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFE2SFlYRzNmWHAyczhkSVp6cVNoR3lXemlNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZCM1M2QTVMIiwibWUiOnsiaWQiOiIyNTU2NTI3MzM4Mzg6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGhvZW5peCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG4zMGJBREVObUkzYlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRngvTnB0K0xaeXdBbm82ZEVHSTY1S3Z2OEdPcEJvZEFaM085RFJaeTVuWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicVVOOWdDaUR4bm9ac1VpRDBzRWpDQU9wTC9UcVpRR0xiZDBxdVYyb2NIR05jbGVJNXBZajR3V3lUUWZrYTNLOUhIK2diTko0YVZoQUdodzA3SUlCQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkN5ZTVqUk1yQ3hSNm0ySFAxcnpoR3BpdjNVZnZRSjN3VDhTNXV2K29RVVJXZFBnQ2lobk91WDVLUG54UlpvVkxOSXF4K1cxSW5Na2tWR2JVY3dSNGl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjUyNzMzODM4OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJjZnphYmZpMmNzQUo2T25SQmlPdVNyNy9CanFRYUhRR2R6dlEwV2N1WjIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjExODk0Nzd9"
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
