import { boot } from 'quasar/wrappers';
import { NOME_ROTAS } from 'src/router/routes';
import { Router } from 'vue-router';
import { inicializar } from './utils/pinia';

// Rotas permitidas para conexões não autenticadas
const NOT_INITIALIZED_ROUTES: string[] = Object.values(NOME_ROTAS.app);
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default boot(({ router }: { router: Router }) => {
  router.beforeEach(async (to, from, next) => {
    const nomeRota = to.name?.toString() ?? '';
    // TODO a variavel estaInicializado o valor forçado. O certo é fazer tratamento
    const estaInicializado = true;

    if (NOT_INITIALIZED_ROUTES.includes(nomeRota)) {
      //   if (estaInicializado) {
      //     return next({
      //       name: NOME_ROTAS.app.telaInicial,
      //     });
      //   }
      //   return next();
    }

    if (!estaInicializado) {
      return next({
        name: NOME_ROTAS.app.home,
      });
    }
    await inicializar();
    return next();
  });
});
