<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlogs from "../src/components/addBlogs.vue";
import showBlogs from "../src/components/showBlogs.vue";
import listBlogs from "../src/components/listBlogs.vue";
import header from "../src/components/header.vue";

export default {
  components: {
    "add-blog": addBlogs,
    "show-blogs": showBlogs,
    "list-blogs": listBlogs,
    "app-header": header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
