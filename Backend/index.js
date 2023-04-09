import * as dotenv from "dotenv";
dotenv.config();
import express from "express"; // "type": "module"
import nodeMailer from "nodemailer";
import CORS from "cors";

const app = express();

const PORT = 4000;
app.use(express.json());
app.use(CORS());
app.post("/", async function (request, response) {
  const { name, email, phone, subject, message } = await request.body;

  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_MAIL_ID,
      pass: process.env.APP_PASSWORD,
    },
  });

  let info = {
    from: email,
    to: process.env.USER_MAIL_ID,
    subject: subject,
    html: `<h3>Dear sir,</h3>
    </br>
    <div>${message}</div>
    </br>
    <h6>Thanks & Regards,</h6>
    <pre>
    ${name} 
    ${phone}
    ${email}
    </pre>
   
    `,
  };
  transporter.sendMail(info, (err) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("email sent successfully");
    }
  });
  response.status(200).send({ message: "email sent successfully" });
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
