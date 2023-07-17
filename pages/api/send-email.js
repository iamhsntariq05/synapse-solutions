import { createTransport } from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;
    console.log({subject});

    const transporter = createTransport({
     service: 'gmail',
      auth: {
        user: 'synapsetransporter@gmail.com',
        pass: 'lpedjdblbuhdxvru',
      },
    });

    try {
      await transporter.sendMail({
        from: 'synapsetransporter@gmail.com',
        to,
        subject,
        text,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
