import Vue from "vue";
import App from "./App.vue";
// import Ninjas from "./Ninjas.vue";

// Vue.component("ninjas", Ninjas);
export const bus = new Vue();
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";
Vue.use(VueRouter);
Vue.use(VueResource);

// custom directives
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

// Filters the

Vue.filter("snippet", function(value) {
  return value.slice(0, 100) + " ...";
});
new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
