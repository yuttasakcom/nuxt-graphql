<template>
  <div>
    <h3>Add Song</h3>

    <form @submit.prevent="onSubmit">
      <label for="Title">Title</label>
      <input type="text" class="form-control" v-model="title">
      <button type="submit" class="btn btn-primary">Add Song</button>
    </form>
  </div>
</template>

<script>
import { ADD_SONG } from "../../graphql/song";
export default {
  data: () => ({
    title: ""
  }),
  methods: {
    onSubmit() {
      this.$apollo
        .mutate({
          mutation: ADD_SONG,
          variables: {
            title: this.title
          }
        })
        .then(() => this.$router.replace("/"));
    }
  }
};
</script>