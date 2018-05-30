<template>
  <div>
    <h3 class="mt-2">Song List</h3>
    <ul>
      <li v-for="song in loadedSongs" :key="song.id" class="mt-1">
        {{song.id}} {{ song.title }}
        <button class="btn btn-sm btn-danger" @click="onDelete(song.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    loadedSongs() {
      return this.$store.state.songs.loadedSongs
    }
  },
  methods: {
    onDelete(songId) {
      this.$store.dispatch('DELETE_SONG', songId)
    }
  }
}
</script>

