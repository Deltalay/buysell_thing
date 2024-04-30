import { db } from "@/db/drizzle";
import CreateForm from "../components/createForm";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import * as argon from "argon2";
function CreatePage() {
  async function CreateAccount(formData: FormData) {
    "use server";
    const email: string = formData.get("email")?.toString() || "";
    const password: string = formData.get("password")?.toString() || "";
    const confirm_password: string =
      formData.get("passwordCon")?.toString() || "";
    if (password !== confirm_password) {
      // Password not the same as the confirm password
      return;
    }
    if (email.length <= 0) {
      // Email does not exist
      return;
    }
    if (password.length <= 0 && confirm_password.length <= 0) {
      // Password and confirm password does not exist
      return;
    }
    const search = await db
      .select()
      .from(users)
      .where(eq(users.email, email as string));
    if (search.length <= 0) {
      try {
        const hashPass = await argon.hash(password as string);
        const create = await db.insert(users).values({
          email: email as string,
          password: hashPass,
          name: "hello",
          avatar: "ehllo",
        });
        console.log(create);
      } catch (e) {
        if (e) {
          console.log(e);
        }
      }
    } else {
      //#User already exist
      console.log("no");
      return;
    }
  }
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <CreateForm action={CreateAccount}></CreateForm>
      </div>
    </section>
  );
}

export default CreatePage;
