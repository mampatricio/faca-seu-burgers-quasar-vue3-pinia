<template>
  <q-layout class="tabs-layout" view="lHh Lpr lFf">
    <q-header class="shadow-4">
      <div class="title">
        <h3 class="text-primary">Meus Roteiros</h3>
      </div>
      <q-tabs
        v-model="tab"
        no-caps
        outside-arrows
        mobile-arrows
        class="bg-white text-primary"
      >
        <q-tab name="criados" label="Criados" />
        <q-tab name="desejados" label="Desejados" />
        <q-tab name="completados" label="Completados" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <MenuFooter />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MenuFooter from 'src/components/MenuFooter.vue';

export default defineComponent({
  components: { MenuFooter },
  setup() {
    const tab = ref('criados');
    return {
      tab,
    };
  },
});
</script>
<style lang="scss" scoped>
.tabs-layout {
  header {
    background-color: white;
    //filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.2));
    .title {
      padding: 30px 16px 6px;
      h3 {
        margin: 0;
        font-size: 36px;
        line-height: 44px;
        font-weight: 400;
      }
    }
    .content-search {
      padding: 0 16px 16px;
      display: flex;
      .q-field {
        flex-grow: 1;
        margin-right: 8px;
      }
      .q-btn {
        padding-left: 16px;
        padding-right: 12px;
      }
    }
  }
  .q-footer {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}
</style>
