<template>
  <q-layout class="header-layout" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fas fa-angle-left"
          aria-label="Voltar"
          @click="router.back()"
        />
        <q-toolbar-title>Filtros</q-toolbar-title>
        <!-- <q-btn flat dense round icon="fas fa-ellipsis-v" aria-label="Menu">
          <q-menu
            anchor="bottom end"
            self="top end"
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <q-item clickable v-ripple>
              <q-item-section>Editar Roteiro</q-item-section>
            </q-item>
          </q-menu>
        </q-btn> -->
        <q-btn
          no-caps
          style="font-weight: 400"
          flat
          color="medium"
          label="Limpar"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HeaderLayout',
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
});
</script>

<style lang="scss" scoped>
.header-layout {
  display: block;
  .q-header {
    background-color: blue;
    .q-toolbar {
      color: $primary;
    }
  }
}
</style>
