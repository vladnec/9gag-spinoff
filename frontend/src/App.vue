<template>
  <div class="container">
    <app-new-post></app-new-post>
</div>
</template>

<script>
  import NewPost from './posts/newPost.vue';

  export default {
    components:{
      appNewPost : NewPost
    }
  }
</script>

<style scoped>


</style>
