<template>
  <div class="home">
    <NoteForm subtitle="Add New Note" />
  </div>
</template>

<script>
// @ is an alias to /src
import NoteForm from "../components/NoteForm.vue";

export default {
  props: {
    subtitle: String,
  },
  name: "AddNote",
  components: {
    NoteForm,
  },
};
</script>
