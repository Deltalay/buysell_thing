import { db } from "@/db/drizzle";
import LoginForm from "../components/loginForm";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import * as argon from "argon2"
export default function LoginPage() {
  async function LoginAccount(formData: FormData) {
    "use server";
    const email: string = formData.get("email")?.toString() || "";
    const password: string = formData.get("password")?.toString() || "";
    try {
      const search = await db
        .select()
        .from(users)
        .where(eq(users.email, email));
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
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <LoginForm action={LoginAccount} />
      </div>
    </section>
  );
}
