const qrcode = require("qrcode-terminal");
const { MessageMedia } = require("whatsapp-web.js");
const media = MessageMedia.fromFilePath("./assets/Post.png");
const { Client, NoAuth } = require("whatsapp-web.js");
const clients = require("./clients.json");

// equivalent to
const client = new Client({
  authStrategy: new NoAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  clients.map((obj) => {
    const number = obj.number;
    const text = "Hola, Soy Colombiano Ingeniero de sistemas, vivo en Bogota, planeo emigrar a Australia, me gustaria conectar con personas alli para no estar tan perdido, gracias!";
    const chatId = number.substring(1) + "@c.us";
    client.sendMessage(chatId, text);
    // client.sendMessage(chatId, media);
  });
  console.log("Client is ready!");
});
client.initialize();
