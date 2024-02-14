<template>
  <div class="home">
    <ReadTable />
  </div>
</template>

<script>
// @ is an alias to /src
import ReadTable from "@/components/ReadTable.vue";
export default {
  name: "HomeView",
  components: {
    ReadTable,
  },
};
</script>
