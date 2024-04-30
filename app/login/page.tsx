import { db } from "@/db/drizzle";
import LoginForm from "../components/loginForm";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export default function LoginPage() {
  async function LoginAccount(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    if (email?.toString().length == 0 || email?.toString() == undefined ) {
      return;
    }
    if (password?.toString().length == 0 || password?.toString().length == undefined) {
      return;
    }
    console.log(email.toString())
    console.log(await db.select().from(users).where(eq(users.email, email.toString())));
  }
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <LoginForm action={LoginAccount} />
      </div>
    </section>
  );
}
