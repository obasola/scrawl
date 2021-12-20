<template>
  <div>
    <h1>New Category</h1>
    <form novalidate class="formlayout">
      <div class="container-sm">
        <div class="mb-3">
          <label for="code" class="form-label">Code</label>
          <input
            type="text"
            class="form-control"
            id="code"
            placeholder="Please enter 4 char code"
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">Description</label>
          <input
            type="text"
            class="form-control"
            id="desc"
            placeholder="Another input placeholder"
          />
        </div>
      </div>
      <div class="container-md">
        <button class="btn btn-primary">Save</button>
        <button class="btn btn-info">Reset</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import '@/assets/css/formLayout.css';

</script>
