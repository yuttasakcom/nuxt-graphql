<template>
  <div>
    <h3>Add Song</h3>

    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <input type="text" class="form-control" v-model="title">
        <div class="input-group-prepend">
          <div class="input-group-text bg-primary">
            <button type="submit" class="btn btn-primary">Add Song</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: ''
  }),
  methods: {
    onSubmit() {
      this.$store.dispatch('ADD_SONG', { title: this.title })
      this.title = ''
    }
  }
}
</script>