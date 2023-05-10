<template>
  <div class="nav">
    <router-link to="/"><span id="MenuTitle">{{ msg }}</span></router-link>
    <ul>
      <li>Para ti</li>
      <li>Pelis</li>
      <li>Series</li>
      <li id="Buscador">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
        <input type="text" v-model="search" placeholder="Buscar">
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
export default {
  name: 'HeaderDoonamis',
  props: {
    msg: String
  }
}
</script>  