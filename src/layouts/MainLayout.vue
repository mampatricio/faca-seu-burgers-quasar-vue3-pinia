<template>
  <q-layout class="main-layout" view="lHh Lpr lFf">
    <q-header class="shadow-4">
      <div class="title">
        <h3 class="text-primary">Olá skdjfklsdjflskdjflksdjflk</h3>
      </div>
      <div class="content-search">
        <q-input
          outlined
          label="Procure por roteiros, cidades ou parques"
          @click="busca()"
        />
        <q-btn flat color="primary" icon="fas fa-sliders-h" />
        <q-btn flat color="primary" />
      </div>
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
import { defineComponent } from 'vue';
// import { useRouter, useRoute } from 'vue-router';
import MenuFooter from 'src/components/MenuFooter.vue';

export default defineComponent({
  components: { MenuFooter },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.main-layout {
  header {
    background-color: white;
    //filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.2));
    .title {
      padding: 30px 16px 16px;
      h3 {
        margin: 0;
        font-size: 36px;
        line-height: 44px;
        font-weight: 300;
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
