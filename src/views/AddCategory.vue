<template>
  <div>
    <h2>Add New Category</h2>

    <CategoryForm />
  </div>
</template>

<script>

import CategoryForm from "../components/CategoryForm.vue";

export default {
  name: "AddCategories",
  components: {CategoryForm},
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>