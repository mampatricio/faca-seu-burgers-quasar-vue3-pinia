import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { Ingrediente } from 'src/utils/api/type';

interface IngredienteState {
    ingrediente: Partial<Ingrediente>[];
}
export const useIngredienteStore = defineStore({
    id: 'ingrediente',
    state: () =>
        useStorage<IngredienteState>('ingrediente', {
            ingrediente: [],
        }),
    actions: {
        async obterDadosIngredientesPinia() {
            const req = await fetch('http://localhost:3000/ingredientes');
            const data = await req.json();
            this.ingrediente = data;
        },
    },
    getters: {
        getIngrediente(state) {
            return state.ingrediente;
        },
    },
});
