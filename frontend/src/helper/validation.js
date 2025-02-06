import { z, ZodError } from 'zod';

const userRegistrationSchema = z.object({
    name: z.string(),
    email: z.string().email("Email is of invalid format"),
    password: z.string().min(5, "Password is too short")
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
    password: z.string().min(8),
});

const validateData = (schema, data, next) => {//function to validate req based on schema
    try {
        schema.parse(data);//sucessful parse
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            const errorMessages = error.errors.map((issue) => ({
                message: `${issue.message}`,
            }))
            return errorMessages;
        } else {
            return { message: "Faliure" }
        }
    }
}

export { userRegistrationSchema, userLoginSchema, validateData };