import VueRouter from "vue-router";
import homePage from "./pages/home";
import loginForm from "./pages/loginForm";

export default new VueRouter({
  routes: [
    {
      path: "*",
      component: homePage
    },
    {
      path: "/login",
      component: loginForm
    }
  ],
  mode: "history"
});
