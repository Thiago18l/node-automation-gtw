import type { ZodError } from 'zod';

const strings = {
  ACCESS_DENIED: 'Acesso negado',
  ERROR_WITH_ENVIRONMENT_VARIABLES: (error: ZodError): string =>
    `Houve um erro com as variáveis de ambiente do servidor: ${error}`,
};

export default strings;
