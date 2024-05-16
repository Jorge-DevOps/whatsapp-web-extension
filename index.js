const qrcode = require('qrcode-terminal');
const { MessageMedia } = require('whatsapp-web.js');
const media = MessageMedia.fromFilePath('./assets/Post.png');
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
    const number = "+573058158944";
    const chatId = number.substring(1) + "@c.us";
    const text = "Hola, Soy Colombiano Ingeniero de sistemas, vivo en Bogota, planeo emigrar a Australia, me gustaria conectar con personas alli para no estar tan perdido, gracias!";
    
    client.sendMessage(chatId, text);
    client.sendMessage(chatId, media);
});
client.initialize();
 
