import express from 'express';
import nodemailer from 'nodemailer';
import db from '../db.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await db.query(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const userReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Debangan!',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I’ve received your message and will get back to you soon.</p>
        <p>Best regards,<br>Debangan Deb</p>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userReply);

    console.log('✅ Emails sent successfully');
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Failed to process your request' });
  }
});

export default router;