// app.mjs
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './monogdb/connect.js';

import postRoutes from './routes/postRoutes.js'
import dalleroutes from './routes/dalleroutes.js'






dotenv.config();

const app = express();

app.use(cors({
  origin: 'https://vivavisio.vercel.app'
}));
app.use(express.json({ limit: '50mb' }));


app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleroutes);


app.get('/', async (req, res) => {
  res.send('Hello from VivaVisio');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log('Server is running on port 8080');
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
