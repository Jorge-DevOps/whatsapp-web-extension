const qrcode = require("qrcode-terminal");
const { MessageMedia } = require("whatsapp-web.js");
const media = MessageMedia.fromFilePath("./assets/Post.png");
const { Client, NoAuth } = require("whatsapp-web.js");
const clients = require("./australiaContacst.json");

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
    console.log(number)
    const msj = "¡Hola! 👋 Soy un ingeniero de sistemas Colombiano y actualmente vivo en Bogotá. Estoy emocionado porque llego a Australia en Enero. Me encantaría poder conectarme con personas que ya estén allí para obtener información y consejos, y así no sentirme tan perdido al llegar. Cualquier ayuda o orientación que puedan brindarme sería muy apreciada. ¡Gracias de antemano por su amabilidad y apoyo! 🌍";
    const msj2 = "Sería de gran ayuda conocer tu nombre, la ciudad en la que vives y el tiempo que llevas en Australia. Además, quiero que sepas que estoy dispuesto a compartir mis conocimientos en informática contigo, abarcando áreas como redes, configuraciones, programación web, inteligencia artificial y seguridad. Estoy aquí para ayudar en lo que pueda ayudar. 💻";
    const chatId = number.substring(1) + "@c.us";
    client.sendMessage(chatId, msj);
    client.sendMessage(chatId, msj2);
  });
  console.log("Client is ready!");
});
client.initialize();
