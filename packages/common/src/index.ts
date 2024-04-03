import { z } from 'zod';

export const USerInput = z.object({
    email: z.string(),
    password: z.string(),
})