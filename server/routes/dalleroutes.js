import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    console.log('first')
    const { prompt } = req.body;

    const response = await axios.post('http://localhost:8080/api/v1/dalle', {
      prompt,
      n: 1,
      size: '1024x1024',  // Adjust the size as needed
    });

    if (response.status === 200) {
      const responseData = response.data;
      const image = responseData.photo;
      console.log(response);
      res.status(200).json({ photo: image });
    } else {
      console.error(response.statusText);
      res.status(response.status).send(response.data.error.message || 'Something went wrong');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

export default router;
