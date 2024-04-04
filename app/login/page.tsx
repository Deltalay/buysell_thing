import { db } from "@/db/drizzle";
import LoginForm from "../components/loginForm";

export default function LoginPage() {
  async function LoginAccount(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get('password');
    
  }
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <LoginForm action={LoginAccount} />
      </div>
    </section>
  );
}
