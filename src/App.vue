<template>
  <component :is="layout" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import MainLayout from './layouts/MainLayout.vue';
import HeaderLayout from './layouts/HeaderLayout.vue';
import TransparentHeaderLayout from './layouts/TransparentHeaderLayout.vue';
import TabsLayout from './layouts/TabsLayout.vue';
import NoLayout from './layouts/NoLayout.vue';
// import { useQuasar } from 'quasar';
// import { ApiClient } from './api';
import { useRoute } from 'vue-router';
// import { useAppStore } from './store/modules/app.module';

export default defineComponent({
  name: 'App',
  components: {
    MainLayout,
    HeaderLayout,
    TransparentHeaderLayout,
    NoLayout,
    TabsLayout,
  },
  setup() {
    // ApiClient.instance.setupLoadingInterceptors();
    // const store = useStore();
    // const $q = useQuasar();
    const route = useRoute();

    const layout = computed(() => route.meta.layout ?? 'MainLayout');
    // const loading = computed(() => store.state.app.loading);

    // watch(loading, () => {
    //   if (loading.value) {
    //     $q.loading.show();
    //   } else {
    //     $q.loading.hide();
    //   }
    // });

    return {
      layout,
    };
  },
});
</script>
