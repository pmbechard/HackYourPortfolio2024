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
    const info = await Info.findOne({});
    if (info) return res.status(400).json({ error: 'Info already submitted.' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
  const {
    name,
    tagline,
    p1_title,
    p1_description,
    p1_img,
    p2_title,
    p2_description,
    p2_img,
    p3_title,
    p3_description,
    p3_img,
    github,
    linkedin,
    twitter,
  } = req.body;
  const fields = [
    name,
    tagline,
    p1_title,
    p1_description,
    p1_img,
    p2_title,
    p2_description,
    p2_img,
    p3_title,
    p3_description,
    p3_img,
    github,
    linkedin,
    twitter,
  ];
  for (const field of fields)
    if (!field)
      return res.status(400).json({ error: 'Please fill in all fields' });
  try {
    const info = await Info.create({
      name,
      tagline,
      p1_title,
      p1_description,
      p1_img,
      p2_title,
      p2_description,
      p2_img,
      p3_title,
      p3_description,
      p3_img,
      github,
      linkedin,
      twitter,
    });
    return res.status(200).json({ info });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
