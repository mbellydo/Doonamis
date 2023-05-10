<template>
  <HeaderDoonamis msg="Doonamis"/>
  <router-view />
  <FooterDoonamis msg="Doonamis"/>
</template>

<script>
import HeaderDoonamis from './components/HeaderDoonamis.vue';
import FooterDoonamis from './components/FooterDoonamis.vue';

export default {
  name: 'App',
  components: {
    HeaderDoonamis,
    FooterDoonamis
  }
}
</script>
