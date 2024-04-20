const client = require("twilio")(process.env.Account_Sid, process.env.Auth_Token);

client.messages
  .create({
    body: "Your Twilio code is 1238432",
    from: "whatsapp:+14155238886",
    to: "whatsapp:+919206336568",
  })
  .then((message) => console.log(message.sid));
