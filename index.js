const qrcode = require('qrcode-terminal');
const { MessageMedia } = require('whatsapp-web.js');
const media = MessageMedia.fromFilePath('./assets/promo.jpeg');
const { Client, NoAuth } = require('whatsapp-web.js');

// equivalent to
const client = new Client({
    authStrategy: new NoAuth()
});
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    const number = "+573144576788";
    const text = "Hey Bebe envie este mensaje desde el programa de Jorge";
    const chatId = number.substring(1) + "@c.us";
    const number2 = "+573132328656";
    const text2 = "Hey Mauricio envie este mensaje desde el programa de Jorge";
    const chatId2 = number2.substring(1) + "@c.us";

    client.sendMessage(chatId, media);
    client.sendMessage(chatId, text);
    
    client.sendMessage(chatId, media);
    client.sendMessage(chatId, text2);
});
client.initialize();

