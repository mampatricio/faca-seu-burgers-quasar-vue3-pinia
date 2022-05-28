<template>
  <div>
    <p>Componente de mensagem</p>
    <div>
      <form id="hamburguer-form" @submit.prevent="criarHamburguer">
        <div class="input-container">
          <label for="nome"> Nome do Cliente: </label>
          <input
            type="text"
            id="nome"
            name="nome"
            v-model="nome"
            placeholder="Digita seu nome"
          />
        </div>
        <div class="input-container">
          <label for="pao"> Escolha seu pão: </label>
          <select id="pao" name="pao" v-model="pao">
            <option value="">Selecione seu pão</option>
            <option v-for="pao in paesdata" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne"> Escolha sua carne: </label>
          <select id="carne" name="carne" v-model="carne">
            <option value="">Selecione sua Carne</option>
            <option
              v-for="carne in carnesdata"
              :key="carne.id"
              :value="carne.tipo"
            >
              {{ carne.tipo }}
            </option>
          </select>
        </div>
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-label" for="opcionais">
            Escolha seu opcionais:
          </label>
          <div
            class="checkbox-container"
            v-for="opcional in opcionaisdata"
            :key="opcional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="opcionais"
              :value="opcional.tipo"
            />
            <span> {{ opcional.tipo }} </span>
          </div>
        </div>
        <div class="input-container">
          <input
            type="submit"
            class="submit-btn"
            value="Criar meu Hambúrguer!"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { useBurgersStore } from 'src/stores/modules/burguers.module';
import { useIngredienteStore } from 'src/stores/modules/ingrediente.module';

export default defineComponent({
  name: 'HamburguerForm',
  // TODO - Não está no escopo o tratamento de erro. Implementar para enriquecer o projeto e conhecimento.
  setup() {
    let nome = ref('');
    let pao = ref('');
    let carne = ref('');
    let opcionais = ref([]);
    let status = ref('');
    let msg = ref('');
    let opcionaisdata = ref('');
    let carnesdata = ref('');
    let paesdata = ref('');

    const useBurgers = useBurgersStore();
    const useIngrediente = useIngredienteStore();
    // Obtém dados Ingredientes
    const getDadosIngredientesPinia = async () => {
      let ingredientes = useIngrediente.getIngrediente;
      opcionaisdata.value = JSON.parse(JSON.stringify(ingredientes)).opcionais;
      carnesdata.value = JSON.parse(JSON.stringify(ingredientes)).carnes;
      paesdata.value = JSON.parse(JSON.stringify(ingredientes)).paes;
    };
    // Grava hambúrguer
    const criarHamburguer = async () => {
      void useBurgers.gravarBurgersPinia({
        nome: nome.value,
        pao: pao.value,
        carne: carne.value,
        opcionais: Array.from(opcionais.value),
      });
    };

    return {
      nome,
      pao,
      carne,
      opcionais,
      status,
      msg,
      opcionaisdata,
      carnesdata,
      paesdata,
      criarHamburguer,
      getDadosIngredientesPinia,
    };
  },
  mounted() {
    this.getDadosIngredientesPinia();
  },
});
</script>
<style scoped>
#hamburguer-form {
  max-height: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
input,
select {
  padding: 5px 10px;
  width: 300px;
}
#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}
#opcionais-label {
  width: 100%;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 10%;
  margin-bottom: 20px;
}
.checkbox-container span,
.checkbox-container input {
  width: auto;
}
.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
