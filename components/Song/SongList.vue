<template>
  <div>
    <h3 class="mt-2">Song List</h3>
    <ul>
      <li v-for="song in loadedSongs" :key="song.id">
        {{song.id}} {{ song.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    loadedSongs() {
      return this.$store.state.songs.loadedSong;
    }
  }
};
</script>