<template>
  <div>
      <CategoryList />
  </div>
</template>

<script lang="ts">
import CategoryList from "../components/CategoryList.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ListCategories",
  components: {CategoryList},
  data() {
    return {
      categories: [],
      category: {
        id: 0,
        code: "",
        name: "",
        dateRecorded: new Date,
        dataModified: new Date,
      },
      submitted: false,
    };
  },
});
</script>

<style>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.cat-table {
  margin-left: 15px;
}
.label-text {
  color: #a9d387;
}
.label-hdrtext {
  color: #a7dd8f;
  font-weight: bolder;
}
.left-align {
  float: left;
}
</style>
