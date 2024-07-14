const mongoose = require('mongoose');
const Info = require('../models/Info');

/// GET ///
module.exports.get = async (req, res) => {
  try {
    const info = await Info.findOne({});
    if (!info)
      return res.status(200).json({ error: 'Info not yet submitted.' });
    return res.status(200).json(info);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

/// POST ///
module.exports.post = async (req, res) => {
  try {
    const info = await Info.create(req.body);
    return res.status(200).json(info);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
