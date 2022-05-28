import { useIngredienteStore } from 'src/stores/modules/ingrediente.module';
import { useBurgersStore } from 'src/stores/modules/burguers.module';

export const inicializar = async () => {
  const useIngrediente = useIngredienteStore();
  const useBurgers = useBurgersStore();

  await Promise.all([
    useIngrediente.obterDadosIngredientesPinia(),
    useBurgers.obterDadosBurgersPinia(),
  ]);
};
