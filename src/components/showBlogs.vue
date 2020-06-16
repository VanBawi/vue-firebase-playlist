<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"
        ><h2>{{ blog.title | toUppercase }}</h2></router-link
      >
      <article>{{ blog.content | snippet }}</article>
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
      .get("https://vuejs-playlist-ce1f9.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var blogArray = [];
        for (let key in data) {
          data[key].id = key;
          blogArray.push(data[key]);
        }
        this.blogs = blogArray;
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
h2 {
  color: #000;
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
