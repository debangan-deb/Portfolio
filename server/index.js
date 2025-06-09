
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();


app.use(cors({ origin: '*' }));
app.use(express.json());


app.use('/api/contact', contactRoutes);


app.get('/', (req, res) => {
  res.send('Backend is running');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
