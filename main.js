const Discord = require('discord.js')
const aki = require('aki-api')
require("dotenv").config()

const client = new Discord.Client()

client.on("ready", (message) => {
  console.log('ready')
})

client.login(process.env.BOT_SECRET)