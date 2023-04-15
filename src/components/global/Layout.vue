<script setup lang="ts">
import Navbar from './Navbar.vue';

</script>

<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container class="ts-d-flex tw-justify-center tw-align-center tw-min-h-[300px]">
        <slot />
      </v-container>
    </v-main>
    <v-footer>test footer</v-footer>
  </v-app>
</template>