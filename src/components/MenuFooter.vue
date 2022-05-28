<template>
  <div class="content-menu">
    <div>
      <q-icon name="fas fa-search" size="xs"></q-icon>
      <div class="label">Explorar</div>
    </div>
    <div>
      <q-icon name="fas fa-plus" size="xs"></q-icon>
      <div class="label">Novo Roteiro</div>
    </div>
    <div>
      <q-icon name="fas fa-map-signs" size="xs"></q-icon>
      <div class="label">Roteiros</div>
    </div>
    <div>
      <q-icon name="fas fa-user" size="xs"></q-icon>
      <div class="label">Perfil</div>
    </div>
  </div>
</template>

<script lang="ts">
//import { storeToRefs } from 'pinia';
//import { NOME_ROTAS } from 'src/router/routes';
// import { useEstoqueStore } from 'src/store/modules/estoque.module';
// import { usePedidoStore } from 'src/store/modules/pedido.module';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MenuFooter',
  setup() {
    const router = useRouter();
    //const route = useRoute();

    //const rotas = NOME_ROTAS;
    //const rotaAtual = computed(() => route.name);

    return {
      router,
      //rotas,
      //rotaAtual,
    };
  },
});
</script>

<style lang="scss" scoped>
.content-menu {
  display: flex;
  justify-content: space-around;
  padding: 6px 0;
  .item-menu {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 8px 2px;
    border-radius: 4px;
    .label {
      margin-top: 6px;
    }
  }
  .active {
    color: $secondary;
  }
}
</style>
