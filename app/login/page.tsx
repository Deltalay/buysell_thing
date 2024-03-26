import LoginForm from "../components/loginForm";

export default function LoginPage() {
  async function LoginAccount(formData: FormData) {
    'use server';

  }
  return <section>
   <div className="flex justify-center items-center h-screen">
     <LoginForm action={LoginAccount} />
   </div>
  </section>
}