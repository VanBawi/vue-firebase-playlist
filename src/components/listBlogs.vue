<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>Lists Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixins from "../mixins/searchMixins";
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get(
        "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts"
      )
      .then(function(data) {
        console.log("hey there where is the data");
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {},
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      }
    }
  },
  mixins: [searchMixins]
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}

#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 15px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
