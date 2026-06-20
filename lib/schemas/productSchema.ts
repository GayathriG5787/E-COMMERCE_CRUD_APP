import { z } from "zod";

export const productSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title must not exceed 100 characters"),
    description: z
        .string()
        .min(20, "Description must be at least 20 characters"),
    price: z
        .number()
        .positive("Price must be greater than 0"),
    discount: z
        .number()
        .min(0, "Discount must be at least 0")
        .max(100, "Discount must not exceed 100")
        .optional()
        .default(0),
    clothType: z
        .string()
        .min(1, "Cloth type is required"),
    brand: z
        .string()
        .min(1, "Brand is required"),
    size: z
        .string()
        .min(1, "Size is required"),
    color: z
        .string()
        .min(1, "Color is required"),
    stock: z
        .number()
        .int("Stock must be an integer")
        .min(0, "Stock must be at least 0"),
    image: z
        .string()
        .url("Image must be a valid URL"),
});

export type ProductFormData = z.infer<typeof productSchema>;

export const updateProductSchema = productSchema.partial();

export type UpdateProductFormData = z.infer<typeof updateProductSchema>;