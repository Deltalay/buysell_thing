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
    username_message: string;
  },
  formData: FormData
) {
  const email: string = formData.get("email")?.toString() || "";
  const password: string = formData.get("password")?.toString() || "";
  const username: string = formData.get("username")?.toString() || "";
  const confirm_password: string =
    formData.get("passwordCon")?.toString() || "";
  const schema = z
    .object({
      email: z
        .string()
        .email("Please make sure that it is email!")
        .min(1, "Email field is empty"),
      username: z.string().min(3, "Username must be 3 characters or longer"),
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
    username,
  });
  if (check.success == false) {
    const error = check.error.format();

    return {
      email_message: error.email?._errors[0] as string,
      pass_message: error.password?._errors[0] as string,
      con_pass_message: error.confirm_password?._errors[0] as string,
      match_message: error._errors[0] as string,
      username_message: error.username?._errors[0] as string,
    };
  }
  const data = check.data;
  const checkIfUserExist = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email));
  if (checkIfUserExist.length <= 0) {
    try {
      const hashPassword = await argon.hash(data.password);
      const fetchingData = await fetch(
        `https://source.boringavatars.com/marble/160/${data.username}`
      );
      const response = await fetchingData.text();
      const insertString = "data:image/svg+xml;base64, "  + btoa(response);
      console.log(insertString)
      const insertUser = await db
        .insert(users)
        .values({
          avatar: insertString,
          name: data.username,
          email: data.email,
          password: hashPassword,
        })
        .onConflictDoNothing({ target: users.email })
        .returning({ insertId: users.id });

      return {
        pass_message: "",
        con_pass_message: "",
        match_message: "",
        email_message: "",
        username_message: "",
      };
    } catch (e) {
      if (e) {
        return {
          email_message: "Something went wrong!",
          pass_message: "",
          con_pass_message: "",
          match_message: "",
          username_message: "",
        };
      }
    }
  } else {
    return {
      email_message: "User already exist!",
      pass_message: "",
      con_pass_message: "",
      match_message: "",
      username_message: "",
    };
  }
  return {
    email_message: "",
    pass_message: "",
    con_pass_message: "",
    match_message: "",
    username_message: "",
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
