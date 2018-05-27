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
export default {
  data: () => ({
    title: ""
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch("ADD_SONG", { title: this.title });
      this.title = "";
    }
  }
};
</script>