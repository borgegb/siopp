import { z } from "zod";

// Define the schema for the form
const formSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"), // Phone is required
  address: z.string().min(1, "Address is required"), // Address is required
  subscription: z.string().min(1, "Please select a subscription."),
  lastDayOfService: z.date().optional(), // Last day of service is optional
  termsOfAgreement: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms of agreement.",
  }),
  // Add any other fields here as necessary
});

// Export the schema for use in your form component
export { formSchema };
