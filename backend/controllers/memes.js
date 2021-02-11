import mongoose from 'mongoose';
import express from 'express';
import MemeModel from '../models/Meme.js';

// controllers perform all the necessary actions wrt to database
const router = express.Router();

export const getMemes = async (req, res) => { 
  try {
      const allmemes = await MemeModel.find({},{_id:0,__v:0}).sort({ _id: -1 }).limit(100);
      res.status(200).json(allmemes);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}


export const getOneMeme = async (req, res) => { 
  const { id } = req.params;

  try {
      const meme = await MemeModel.findOne({id : id},{_id:0,__v:0});
      if (meme==null){
        res.status(404).send('No Object with that ID');
      }
      else{
        res.status(200).json(meme);
      }
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}


export const putMeme = async (req, res) => {
  let { name,caption,url } = req.body;
  if (name==undefined && caption==undefined && url==undefined){
    name = req.query.name;
    caption = req.query.caption;
    url = req.query.url;
  }
  const count =  await MemeModel.countDocuments({});
  const meme = new MemeModel({ 
    id : count+1,
    name: name, 
    caption: caption, 
    url: url });

  try {
      await meme.save();
      const meme2 = await MemeModel.findOne({id : count+1},{id:1,_id:0});
      res.status(201).json(meme2);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export const updateMeme = async (req, res) => { 
  const { id } = req.params;
  const meme = req.body;
  try {
    const memeexists = await MemeModel.findOne({id : id});
      if (memeexists==null){
        res.status(404).send('No Object with that ID');
      }
    else{
    const updatedMeme = await MemeModel.findOneAndUpdate({id:id},meme,{new:true});
    res.status(200).send('OK');
    }
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export default router;




