const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

/// ROUTE IMPORTS ///
const infoRouter = require('./routes/info');

/// ENV VARIABLES ///
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

/// MIDDLEWARE ///
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
  .catch(() => console.log('Could not connect to MongoDB'));
