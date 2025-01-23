import { z, ZodError } from 'zod';
const userRegistrationSchema = z.object({
    name: z.string(),
    email: z.string().email("Invalid Email"),
    password: z.string().min(8, "too short"),
});

const userLoginSchema = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(8),
});

const validateData = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }))
                res.status(400).json({ error: 'Invalid data', details: errorMessages });
            } else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}

export { userRegistrationSchema, userLoginSchema, validateData };