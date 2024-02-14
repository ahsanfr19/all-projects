<template>
  <div class="update-form">
    <h2>Update Post</h2>
    <form>
      <label for="updateTitle">Title:</label>
      <input type="text" v-model="updatedText" required />

      <label for="updateDescription">Description:</label>
      <textarea required v-model="updatedDesc"></textarea>
      <p>{{ id }}</p>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UpdateForm",
  props: ["id"],
  data() {
    return {
      updatedText: "",
      updatedDesc: "",
    };
  },
};
</script>

<style scoped>
.update-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

/* Optional: Add some animations */
.update-form-enter-active,
.update-form-leave-active {
  transition: opacity 0.5s;
}

.update-form-enter, .update-form-leave-to /* .update-form-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
