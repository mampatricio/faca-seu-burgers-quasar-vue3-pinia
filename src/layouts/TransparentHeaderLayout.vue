<template>
  <q-layout class="transparent-header-layout" view="lHh Lpr lFf">
    <q-header class="clear-header">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fas fa-angle-left"
          aria-label="Voltar"
          @click="voltar"
        />
        <q-toolbar-title> </q-toolbar-title>
        <q-btn flat dense round icon="fas fa-ellipsis-v" aria-label="Menu">
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
        </q-btn>
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
  name: 'TransparentHeaderLayout',
  setup() {
    const router = useRouter();
    const voltar = () => {
      router.back();
    };
    return {
      voltar,
    };
  },
});
</script>

<style lang="scss" scoped>
.transparent-header-layout {
  display: block;
  .q-header {
    background-color: blue;
    .q-toolbar {
      color: $primary;
    }
    &.clear-header {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 5%,
        rgba(0, 0, 0, 0.6) 20%,
        rgba(0, 0, 0, 0.5) 40%,
        rgba(0, 0, 0, 0.3) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      .q-toolbar {
        color: white;
      }
    }
  }
  .q-page-container {
    padding-top: 0px !important;
    min-height: 100vh;
  }
}
</style>
