<template>
  <div class="cartelera">
    <h1>CARTELERA</h1>
    <ul>
      <li v-for="serie in series" :key="serie.id">
        <router-link :to="`/series/`+serie.id"><img :src="serie.poster_path" :alt="'Poster ' + serie.name" :title="serie.name"><br>
        <span>{{ serie.name }}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { verSeries } from "../scripts/series.js";

export default {
  name: 'CarteleraDoonamis',
  props: {
    msg: String
  },
  data() {
    return {
      series: []
    }
  },
  async mounted() {
    await this.fetchSeries()
  },
  methods: {
    async fetchSeries() {
      this.series = await verSeries()
      console.log(this.series)
    }
  }
}
</script>