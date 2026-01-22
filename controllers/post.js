const mongoose = require('mongoose');
const Post = require('../models/post');

const getPosts = async (req, res) => {
  try {
    const sender = req.query.sender;
    const posts = sender ? await Post.find({ sender }) : await Post.find();

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid id' });
  }

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getPosts,
  getPostById,
};

