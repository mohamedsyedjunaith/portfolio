// import express from 'express';
// import cors from 'cors';
// import nodemailer from 'nodemailer';

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/send-message', async (req, res) => {
//   const { email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'syedjunaith143@gmail.com',
//       pass: 'npjdxjdiahtolnxx', // App password
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'syedjunaith143@gmail.com',
//     subject: 'Contact Form Message',
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.json({ status: 'Email sent successfully!' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ status: 'Failed to send email' });
//   }
// });

// app.listen(5000, () => console.log('Server running on port 5000'));
