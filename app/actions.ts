"use server";
import { db } from "@/db/drizzle";

import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import * as argon from "argon2";
export async function CreateAccount(
  currentState: {
    email_message: string;
    pass_message: string;
    con_pass_message: string;
    match_message: string;
  },
  formData: FormData
) {
  const email: string = formData.get("email")?.toString() || "";
  const password: string = formData.get("password")?.toString() || "";
  const confirm_password: string =
    formData.get("passwordCon")?.toString() || "";
  const schema = z
    .object({
      email: z
        .string()
        .email("Please make sure that it is email!")
        .min(1, "Email field is empty"),
      password: z.string().min(8, "Password must be 8 characters or larger"),
      confirm_password: z
        .string()
        .min(8, "Confirm Password must be 8 characters or larger"),
    })
    .superRefine(({ confirm_password, password }, ctx) => {
      if (confirm_password !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
        });
      }
    });
  const check = schema.safeParse({
    email,
    password,
    confirm_password,
  });
  if (check.success == false) {
    const error = check.error.format();

    return {
      email_message: error.email?._errors[0] as string,
      pass_message: error.password?._errors[0] as string,
      con_pass_message: error.confirm_password?._errors[0] as string,
      match_message: error._errors[0] as string,
    };
  }
  const data = check.data;
  return {
    email_message: "",
    pass_message: "",
    con_pass_message: "",
    match_message: "",
  };
}
export async function LoginAccount(formData: FormData) {
  "use server";
  const email: string = formData.get("email")?.toString() || "";
  const password: string = formData.get("password")?.toString() || "";
  try {
    const search = await db.select().from(users).where(eq(users.email, email));
    if (search.length > 0) {
      const passwordFromDatabase = search[0].password;
      const verify = await argon.verify(passwordFromDatabase, password);
      if (verify) {
        // Everything is correct
      } else {
        // Wrong password
        return;
      }
    } else {
      //No exist in database
    }
  } catch (e) {
    if (e) {
      console.log(e);
    }
  }
}
