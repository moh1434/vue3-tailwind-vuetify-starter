<template>
  <v-card class="tw-flex tw-justify-between tw-items-center tw-py-4">
    <div class="tw-flex">
      <v-btn flat>
        <img src="icons/home-icon.svg" alt="home" />
      </v-btn>
      <v-text-field density="compact" variant="plain" class="radius tw-py-1 tw-px-3" hide-details>
        test2
        <template v-slot:append-inner>
          <img src="icons/search-icon.svg" alt="search" class="tw-block tw-max-w-[none] tw-px-2" />
        </template>
      </v-text-field>
    </div>
  </v-card>
</template>

<script setup lang="ts">

</script>

<style>
.radius *,
.radius {
  border-radius: 15px !important;
}

.radius {
  border: 1px solid #1B1C1E;
}

.radius .v-field__input {
  /* @apply tw-py-1.5 tw-px-3; */
  @apply tw-p-1.5;
}
</style>