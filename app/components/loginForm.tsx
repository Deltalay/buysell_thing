"use client";
export default function LoginForm({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  return <form action={action} className="bg-white px-2 py-2 shadown-lg ring ring-inset text-black">
    <div>
      <label htmlFor="email">Email:</label>
      <input className="block" name="email" id="email" type="text" />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input className="block" name="password" id="password" type="password" />
    </div>
  </form>;
}
