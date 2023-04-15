<template>
  <div>
    <v-btn color="error">text</v-btn>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  user?: string
}
const props = withDefaults(defineProps<Props>(), {
  user: 'foo'
})

const emits = defineEmits<{
  (e: 'update:user', newValue: string): void
}>()
const onClick = () => emits('update:user', 'bar');

//in parent component:
//	v-model:user="userParentVariable"
//OR:
//	:user="userParentVariable" @update:user="userParentVariable = event"

</script>

<style scoped></style>