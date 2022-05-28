import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { Burgers } from 'src/utils/api/type';

interface BurgersState {
    burgers: Partial<Burgers>[];
}
export const useBurgersStore = defineStore({
    id: 'burgers',
    state: () =>
        useStorage<BurgersState>('burgers', {
            burgers: [],
        }),

    actions: {
        async obterDadosBurgersPinia() {
            const req = await fetch('http://localhost:3000/burgers');
            const data = await req.json();
            this.burgers = data;
        },

        async gravarBurgersPinia(payload: {
            nome: string;
            pao: string;
            carne: string;
            opcionais: any;
        }) {
            const hamburguerData = JSON.stringify(payload);
            const req = await fetch('http://localhost:3000/burgers', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: hamburguerData,
            });
            const res = await req.json();
            this.burgers.push(res);
        },
    },
    getters: {},
});
