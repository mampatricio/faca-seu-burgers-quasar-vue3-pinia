<template>
  <div class="q-layout">
    <header class="q-header fixed-top clear-header">
      <div class="q-toolbar row no-wrap items-center">
        <q-btn
          flat
          dense
          round
          color="primary"
          icon="fas fa-times"
          aria-label="Voltar"
        />
        <div class="q-toolbar__title ellipsis"></div>
      </div>
    </header>
    <div class="page-container">
      <div class="main-content q-pa-md">
        <div class="text-center text-medium q-pb-lg">
          <h5 class="text-weight-medium">Gerenciador de Pedido.</h5>
        </div>
        <!-- <div class="text-center">
          <q-img :src="Logo" width="120px" />
        </div> -->
        <q-btn
          no-caps
          align="center"
          class="full-width q-mt-md shadow-3 q-mb-md"
          color="white"
          text-color="text-normal"
          label="Faça seu Pedido"
          :to="{ name: rotas.app.cadastro }"
        />
        <q-btn
          class="full-width q-mb-lg q-mt-md"
          color="primary"
          no-caps
          label="Consultar seu Pedido"
          :to="{ name: rotas.app.pedido }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NOME_ROTAS } from 'src/router/routes';
import { useRouter } from 'vue-router';
// import { useIngredienteStore } from 'src/store/modules/ingrediente.module';
// import { useBurgersStore } from 'src/store/modules/burguers.module';

export default defineComponent({
  components: {},
  setup() {
    // let paesdata = ref('');
    // let carnesdata = ref('');
    // let opcionaisdata = ref('');

    const router = useRouter();
    const rotas = NOME_ROTAS;
    // const useIngrediente = useIngredienteStore();
    // const useBurgers = useBurgersStore();
    function cadastro() {
      return void router.push({ name: rotas.app.cadastro });
    }
    function pedido() {
      return void router.push({ name: rotas.app.pedido });
    }
    // const setDadosIngredientesPinia = async () => {
    //   // Carrega Ingredientes JSON p/ Pinia
    //   debugger;
    //   useIngrediente.obterDadosIngredientesPinia();
    //   // // Obtém Ingredientes apartir do Pinia
    //   // let ingredientes = useIngrediente.getIngrediente;
    //   // opcionaisdata.value = JSON.parse(JSON.stringify(ingredientes)).opcionais;
    //   // carnesdata.value = JSON.parse(JSON.stringify(ingredientes)).carnes;
    //   // paesdata.value = JSON.parse(JSON.stringify(ingredientes)).paes;
    // };
    // const setDadosBurgersPinia = async () => {
    //   debugger;
    //   // Carrega Burgers JSON p/ Pinia
    //   useBurgers.obterDadosBurgersPinia();
    // };

    return {
      rotas,
      cadastro,
      pedido,
      // setDadosBurgersPinia,
      // setDadosIngredientesPinia,
    };
  },
  mounted() {
    // this.setDadosIngredientesPinia;
    // this.setDadosBurgersPinia;
  },
});
</script>

<style lang="scss" scoped>
.q-layout {
  min-height: 100vh;
  .page-container {
    padding-top: 50px;
    .main-content {
      min-height: calc(100vh - 50px);
      .q-btn {
        &.recovery {
          .q-btn__content {
            span {
              font-weight: 400;
              color: blue;
            }
          }
        }
      }
      .division {
        position: relative;
        display: flex;
        justify-content: center;
        .line {
          flex-grow: 1;
          border-bottom: 1px solid blue;
        }
        span {
          position: absolute;
          bottom: -12px;
          display: inline-block;
          padding: 0 16px;
          background-color: white;
        }
      }
    }
  }
}
</style>
