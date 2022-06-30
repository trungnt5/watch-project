<template>
  <v-app>
    <header-bar />
  
    <!-- <v-main> -->
      <router-view/>
    <!-- </v-main> -->
    <footer-bar />
  </v-app>
</template>

<script>
import FooterBar from './components/FooterBar.vue';
import HeaderBar from './components/HeaderBar.vue';

export default {
  components: { FooterBar, HeaderBar },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
