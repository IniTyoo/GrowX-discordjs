const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const express = require('express')
const app = express()
const port = 3000

// bot data
const botonline = false

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === '!startbot') {
    botonline = true;
    await interaction.reply('Set bot to online');
  }
  if (interaction.commandName === '!stopbot') {
    botonline = false;
    await interaction.reply('Set bot to offline');
  }
});

// Express js 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/statusbot', (req, res) => {
  if(botonline){
    res.send("Online")
  }else{
    res.send("Offline")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

client.login("Ur token in here");
