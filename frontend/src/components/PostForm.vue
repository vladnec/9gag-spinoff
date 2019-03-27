<template>
	<div class="row">
    	<div class="col-sm-10 offset-sm-1">
        	<h2>New Post</h2>
        	<div class="form-group">
          		<label for="title">Title</label>
          		<input type="text" id="title" class="form-control" v-model="post.title">
        	</div>
	        <div class="form-group">
	          <label for="content">Title</label>
	          <textarea name="content" id="content" class="form-control" cols="30" rows="6" v-model="post.content"></textarea>
	        </div>
	        <div class="form-group">
	          <button class="btn btn-primary" type="button" @click="$refs.fileInput.click()">Add image</button>
	          <input type="file" @change="onFileSelected" ref="fileInput" accept="image/jpeg, image/png, image/gif">
	        </div>
	        <div class="d-flex justify-content-end">
	          <button class="btn btn-success"@click="onUpload">Submit</button>
	        </div>
	    </div>
	</div>
</template>

<script>
  import axios from 'axios';
  export default {
    data(){
        return {
          post:{
            title: '',
            content:'',
            selectedFile:null
        	}
     	}
    },
    methods: {
        onFileSelected(event){
          this.post.selectedFile = event.target.files[0];
        },
        onUpload(){
        	const fd = new FormData();
        	fd.append('image' , this.post.selectedFile, this.post.selectedFile.name);
        	fd.append('title', this.post.title);
        	fd.append('content', this.post.content);
          axios.post('posts', fd,{
          	headers: {'Content-Type' : 'multipart/form-data'}
          })
            .then(res => {
              console.log(res)
            }, error =>{
              console.log(error)
            })
        }
      }
  }
</script>

<style scoped>
form {
  background-color: white;
  margin: 20px;
  padding: 40px;
}
input[type="file"] {
  display: none;
}
img {
  max-width: 40%;
}

button {
  margin-left: 10px;
}
</style>