import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app
  .use(cors())
  .use('/public', express.static(path.join(__dirname, 'public'), { index: false, extensions: ['json'] }))
  .use(function (req, res) {
    res.status(404);
    res.json({
      error: {
        code: 404,
        message: "can't find anything for your request"
      }
    })
  })
  .listen(process.env.PORT, () =>
    console.log(`Listening on port ${process.env.PORT}!`),
  );
