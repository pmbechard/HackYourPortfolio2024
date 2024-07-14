const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

/// ROUTE IMPORTS ///
const infoRouter = require('./routes/info');

/// ENV VARIABLES ///
const PORT = 4000;
const MONGO_URI = process.env.MONGO_URI;

/// MIDDLEWARE ///
const cors = require('cors');
const corsObj = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type'],
};
app.use(cors(corsObj));
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

/// ROUTES ///
app.use('/api/info', infoRouter);

/// DB CONNECTION & SERVER START ///
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((e) => console.log(`Could not connect to MongoDB\n\t${e}`));
