<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoLayout',
});
</script>

<style lang="scss" scoped>
.NoLayout {
  display: block;
}
</style>
