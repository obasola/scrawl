import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AddCategory from "../views/AddCategory.vue";
import EditCategory from "../views/EditCategory.vue";
import ListCategories from "../views/ListCategories.vue";
import AddNote from "../views/AddNote.vue";
import EditNote from "../views/EditNote.vue";
import ListNotes from "../views/ListNotes.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPswd from "../views/ForgotPswd.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/addNote",
    name: "AddNote",
    component: AddNote,
  },
  {
    path: "/editNote",
    name: "EditNote",
    component: EditNote,
  },
  {
    path: "/listNotes",
    name: "listNotes",
    component: ListNotes,
  },
  {
    path: "/addCategory",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/editCategory",
    name: "EditCategory",
    component: EditCategory,
  },
  {
    path: "/listCategories",
    name: "ListCategories",
    component: ListCategories,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgotPswd",
    name: "ForgotPswd",
    component: ForgotPswd,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
