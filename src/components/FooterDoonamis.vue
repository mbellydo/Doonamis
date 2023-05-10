<template>
  <div class="nav">
    <router-link to="/"><span id="MenuTitle">{{ msg }}</span></router-link>
    <ul>
      <li>Para ti</li>
      <li>Pelis</li>
      <li>Series</li>
      <li>Favoritos</li>
      <li>Mi lista</li>
      <li>Configuración</li>
    </ul>
    <ul id="SocialMedia">
      <li><font-awesome-icon icon="fa-brands fa-facebook-f"  title="Facebook"/></li>
      <li><font-awesome-icon icon="fa-brands fa-instagram"  title="Instagram"/></li>
      <li><font-awesome-icon icon="fa-brands fa-twitter"  title="Twitter"/></li>
      <li><font-awesome-icon icon="fa-brands fa-youtube"  title="YouTube"/></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterDoonamis',
  props: {
    msg: String
  }
}
</script>