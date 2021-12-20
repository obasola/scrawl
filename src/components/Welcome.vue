<template>
  <div class="hello">
    <h1>Notepad v1.0</h1>
    <p>
      Welcome to the Notepad App. It is intended to allow the User to capture
      and record notes, tips, ideas, or anything else the end-user want to
      remember but may not need often enough to retain in memory.
    </p>

    <h3>New features</h3>
    <ul>
      <li>Sort table column headers</li>
      <li>Search notes and content</li>
      <li>Filter notes by author</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
