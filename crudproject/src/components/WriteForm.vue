<template>
  <div class="form-container">
    <div class="write-form">
      <h2>Create New Post</h2>
      <form @submit.prevent="submitForm">
        <label for="title">Title:</label>
        <input v-model="title" type="text" id="title" required />

        <label for="description">Description:</label>
        <textarea v-model="description" id="description" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "WriteForm",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    submitForm() {
      // Check if both title and description are filled
      if (!this.title || !this.description) {
        alert("Please fill in both title and description");
        return;
      }

      // Create a new post object
      const newPost = {
        userId: 1, // Set a default user ID or get it from somewhere else
        id: Math.floor(Math.random() * 10000) + 1,
        title: this.title,
        body: this.description,
      };

      // Add the new post to the posts array
      this.$emit("addPost", newPost);

      // Clear the form fields
      this.title = "";
      this.description = "";

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data added successfully.",
      });
    },
  },
};
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 300px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  transition: transform 0.3s;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
