import { z, ZodError } from 'zod';

const userRegistrationSchema = z.object({
    name: z.string(),
    email: z.string().email("Email is of invalid format"),
    password: z.string().min(6, "Password should be atleat 6 characters long")
        .refine((password) => /[A-Z]/.test(password), {
            message: "Password should contain upper case",
        })
        .refine((password) => /[a-z]/.test(password), {
            message: "Password should contain lower case",
        })
        .refine((password) => /[0-9]/.test(password), { message: "Password should contain number" })
        .refine((password) => /[!@#$%^&*]/.test(password), {
            message: "Password should contain special character",
        })
});

const userLoginSchema = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(6),
});

const noteSchema = z.object({
    userId: z.string(),
    title: z.string().max(100, "too long"),
    body: z.string()
})

const validateData = (schema) => {//function to validate req based on schema
    return (req, res, next) => {
        try {
            schema.parse(req.body);//sucessful parse
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `${issue.message}`,
                }))
                res.status(400).json({ error: 'Invalid data', details: errorMessages });
            } else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}

export { userRegistrationSchema, userLoginSchema, noteSchema, validateData };