import { z, ZodError } from 'zod';

const userRegistrationSchema = z.object({
    name: z.string(),
    email: z.string().email("Invalid Email"),
    password: z.string().min(8, "too short")
        .refine((password) => /[A-Z]/.test(password), {
            message: "Should contain upper case",
        })
        .refine((password) => /[a-z]/.test(password), {
            message: "Should contain lower case",
        })
        .refine((password) => /[0-9]/.test(password), { message: "Should contain number" })
        .refine((password) => /[!@#$%^&*]/.test(password), {
            message: "Should contain special character",
        })
});

const userLoginSchema = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(8),
});

const noteSchema = z.object({
    userId: z.string(),
    title: z.string().max(100, "too long"),
    body: z.string()
})

const validateData = (schema) => {//function to validate req based on schema
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

export { userRegistrationSchema, userLoginSchema, noteSchema, validateData };