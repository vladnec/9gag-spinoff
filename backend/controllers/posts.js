const Post = require('../models/post');
const fs = require('fs');

exports.createPost = (req,res,next) => {
  const url = req.protocol + '://' + req.get('host');
  const post = new Post ({
      postId: Date.now(),
      votes:0,
      created_at : new Date(),
      usersUpVoted:[],
      usersDownVoted:[],
      title: req.body.title,   
      imageUrl: url + '/images/' + req.file.filename,  
      content:req.body.content
  });
  post.save().then(
    () => {
      res.status(201).json({
        message:'Post saved succesfully'
      })
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error:error
      });
    }
  )
};

exports.getPosts = (req,res,next) => {
  Post.find().then(
    (posts) => {
      res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error:error
      });
    }
  );
};