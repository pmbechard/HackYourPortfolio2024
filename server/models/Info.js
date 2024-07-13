const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InfoSchema = new Schema(
  {
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    
    p1_title: { type: String, required: true },
    p1_description: { type: String, required: true },
    p1_img: { type: String, required: true },

    p2_title: { type: String, required: true },
    p2_description: { type: String, required: true },
    p2_img: { type: String, required: true },

    p3_title: { type: String, required: true },
    p3_description: { type: String, required: true },
    p3_img: { type: String, required: true },

    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    twitter: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Info', InfoSchema);
