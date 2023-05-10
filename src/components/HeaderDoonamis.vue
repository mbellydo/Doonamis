<template>
  <div class="nav">
    <router-link to="/"><span id="MenuTitle">{{ msg }}</span></router-link>
    <ul>
      <li>Para ti</li>
      <li>Pelis</li>
      <li>Series</li>
      <li id="Buscador">
        <form action="" class="form">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
          <input class="buscar" type="text" v-model="search" placeholder="Buscar">
        </form>
      </li>
      <li>Favoritos</li>
      <li>Mi lista</li>
    </ul>
    <ul>
      <li title="Notificaciones"><font-awesome-icon icon="fa-solid fa-bell"/></li>
      <li title="Perfil"><font-awesome-icon icon="fa-solid fa-user"/></li>
    </ul>
  </div>
</template>

<script>
import { buscarSerie } from '../scripts/series.js';

export default {
  name: 'HeaderDoonamis',
  props: {
    msg: String
  },
  data(){
    return{
      search : ""
    }
  },
  methods:{
    async buscadorSerie(){
      if (this.search)
        this.search = await buscarSerie(this.$route.params.id)
    }
  }
}
</script>  
