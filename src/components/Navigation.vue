<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li style="margin-top: 0.5em">
              <span>
                <router-link to="/" style="text-decoration: none"
                  >Home</router-link
                >&nbsp;
              </span>
            </li>
            <li style="margin-top: 0.5em">
              <span>
                <router-link to="/about" style="text-decoration: none"
                  >About</router-link
                >
              </span>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Reports
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/listCategories" style="text-decoration: none"
                  >Categories</router-link
                ><br />
                <router-link to="/listNotes" style="text-decoration: none"
                  >Notes</router-link
                ><br />
                <li><hr class="dropdown-divider" /></li>
                <br />
                <router-link to="/" style="text-decoration: none"
                  >Users</router-link
                >
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Access
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link
                  to="/Logout"
                  class="styleClass"
                  aria-disabled="ariaDisabledFlag"
                  >Logout</router-link
                ><br />
                <router-link
                  to="/Login"
                  class="styleClass"
                  aria-disabled="ariaDisabledFlag"
                  >LogIn</router-link
                >
              </ul>
            </li>

            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const notLoggedIn = ref(true);
const linkDisabled = "nav-link disabled";
const styleClass = ref("");
const ariaDisabledFlag = ref(true);
const userkey = ref({
  id: "",
  name: "",
  userId: "",
  password: "",
  confirmPswd: "",
});

function isLoggedIn() {
  if (notLoggedIn.value === true) {
    ariaDisabledFlag.value = true;
    styleClass.value = linkDisabled;
  } else {
    ariaDisabledFlag.value = false;
  }
  console.log("styleClass = " + this.styleClass);
  return ariaDisabledFlag;
}
</script>

<style type="css">
#nav a {
  color: #ffffff;
  font-weight: bolder;
  font-family: 'Times New Roman', Times, serif;
}
</style>