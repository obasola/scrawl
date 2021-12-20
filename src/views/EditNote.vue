<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <NoteForm subtitle="Modify a Note" />
  </div>
</template>

<script>
// @ is an alias to /src
import NoteForm from "../components/NoteForm.vue";

export default {
  props: {
    subtitle: String,
  },
  name: "EditNote",
  components: {
    NoteForm,
  },
};
</script>
