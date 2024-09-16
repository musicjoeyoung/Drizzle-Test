import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number().int(),
    PORT: z.coerce.number().int(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),

});

const env = envSchema.parse(process.env);

export default env;