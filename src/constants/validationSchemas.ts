import * as z from "zod";

export const contactUsSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  businessEmail: z
    .string()
    .min(1, "Please enter your email")
    .email("This is not a valid email"),
  companyName: z.string().min(1, { message: "Please enter the company name" }),
  position: z.string().min(1, { message: "Please enter your position" }),
  dataSource: z.string().min(1, { message: "Please enter the data source" }),
  dataVolume: z.string().min(1, { message: "Please provide data volume" }),
  dataExtractionFrequency: z
    .string()
    .min(1, { message: "Please provide data extraction frequency" }),

  aboutProject: z
    .string()
    .min(10, { message: "Minimum length is 10 characters" }),
});
