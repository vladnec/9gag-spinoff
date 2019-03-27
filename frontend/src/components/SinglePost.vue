<template>
	
<div>
	<button class="btn btn-primary" @click="fetchData"></button>
	<p class="list-title">9gag Posts</p>
	<div class="post-list">
	  <div class="post-list-item" v-for="post in posts">
	    <h4>{{ post.title }}</h4>
	    <p>Content: {{ post.content }}</p>
	    <p>votes : {{ post.votes}} </p>
	    <img :src="post.imageUrl">
	    <p> PostId : {{ post.postId}}</p>
	  </div>
	</div>
</div>

</template>

<script>
	
	export default {
		data(){
			return {
				posts:[]
			}
		},
		methods: {
			fetchData(){
				this.$http.get('posts')
					.then(response => {
						return response.json();
					})
					.then(data => {
						const resultArray = [];
						for(let key in data){
							resultArray.push(data[key])
						}
						this.posts = resultArray;
					});
			}
		}
	}
</script>

<style lang="scss" scoped>
	
.post-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.post-list-item {
  text-align: center;
  width: 220px;
  img {
    max-width: 200px;
    max-height: 250px;
  }
  h4 {
    margin: 0;
    font-weight: 500;
  }
  p {
    margin: 0;
  }
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 20px rgba(120, 120, 120, 0.3);
  }
}

.list-title {
  text-align: center;
  margin: 2em auto;
}



</style>