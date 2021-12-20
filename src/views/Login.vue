<template>
  <div class="boxLayout">
    <h3>User Login</h3>
    
    <form novalidate class="formlayout">
      <div class="mb-3">
        <label class="my-form-label" 
          style="float:left; margin-left: 0.5em" 
          for="email">Email</label>
        <input
          class="form-control"
          id="email"
          v-model="person.email"
          type="text"
          placeholder="your email"
        />
      </div>
      <div class="mb-3">
        <label class="my-form-label" for="pswd">Password</label>
        
        <input
          class="form-control"
          id="pswd"
          type="password"
          placeholder="your pswd"
          v-model="person.pswd"
        />
      </div>
  
      <br />
      <div class="mb-3">
        <router-link to="/forgotPswd">forgot pswd</router-link> |
        <router-link to="/register">register</router-link> &nbsp;
        <button
          class="btn btn-primary"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
        >
          Save
        </button>

        <button
          class="btn btn-primary"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  setup () {
    const person = ref({
      email: '',
      pswd: ''
    });

    return {
      person
    }
  }
}
</script>

<style lang="scss" scoped>

</style>