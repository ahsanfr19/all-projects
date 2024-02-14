<template>
  <div class="home">
    <ReadTable @post-array="getPost" />
  </div>
</template>

<script>
// @ is an alias to /src
import ReadTable from "@/components/ReadTable.vue";
export default {
  name: "HomeView",
  data() {
    return {
      post: [],
    };
  },
  components: {
    ReadTable,
  },
  methods: {
    getPost(post) {
      this.post = post;
      console.log(this.post);
    },
  },
};
</script>
