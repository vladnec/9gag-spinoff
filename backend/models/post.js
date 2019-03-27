const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	postId:{type:Number, required:false},
	title:{type:String , required:true},
	content:{type:String , required:true},
	imageUrl:{type:String, required:true},
	votes:{type:Number, required:false},
	usersUpVoted:{type:[Number], required:false},
	usersDownVoted:{type:[Number],equired:false},
	created_at:{type:Date, required:false},

});

module.exports = mongoose.model('Post', postSchema);