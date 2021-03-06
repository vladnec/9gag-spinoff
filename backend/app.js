const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://vlad:marian@cluster0-kkfup.mongodb.net/test?retryWrites=true')
	.then(()=>{
		console.log('succesfully connected to MongoDB Atlas!');
	})
	.catch( () => {
		console.log('Unable to connect to MongoDB Atlas!');
		console.error(error);
	});
mongoose.set('useFindAndModify', false);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/posts', postsRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;