<template>
  <WriteForm @addPost="addPostToPostsArray" />
  <table>
    <thead>
      <tr>
        <th>User ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td>
          <button>Update</button>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import WriteForm from "@/components/WriteForm.vue";
export default {
  name: "ReadTable",
  data() {
    return {
      posts: [],
    };
  },
  components: {
    WriteForm,
  },

  methods: {
    addPostToPostsArray(newPost) {
      // Add the new post to the posts array
      this.posts.push(newPost);
    },
  },
};
</script>
<style scoped>
body {
  font-family: "Arial", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

table {
  border-collapse: collapse;
  width: 80%;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 8px;
  background-color: white;
  overflow-x: auto;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

th {
  background-color: #4caf50;
  color: white;
}

tr {
  background-color: #f8f8f8;
  transition: background-color 0.3s;
}

tr:hover {
  background-color: #e2e2e2;
  transform: scale(1.02);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
</style>
