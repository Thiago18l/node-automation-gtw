import type { ZodError } from 'zod';

import { CustomException } from '@exceptions/common.exceptions';
import strings from '@utils/strings.util';

class EnviromentVariablesError extends CustomException {
  constructor(error: ZodError) {
    super(500, strings.ERROR_WITH_ENVIRONMENT_VARIABLES(error), 'error');
  }
}

export default EnviromentVariablesError;
