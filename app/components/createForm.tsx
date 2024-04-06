"use client";
export default function CreateForm({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form
      action={action}
      className="bg-white p-4 glow rounded-md w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/2 xl:w-1/4  shadown-lg ring ring-inset text-black"
    >
      <div>
        <h2 className="font-bold font-serif md:text-4xl text-2xl py-2">
          Create Account
        </h2>
      </div>
      <div className="mt-2">
        <label className="font-semibold" htmlFor="email">
          Email:
        </label>
        <input
          className="block border rounded-md p-2 border-black w-full"
          placeholder="Your Email"
          name="email"
          id="email"
          type="text"
        />
      </div>
      <div className="mt-5">
        <label className="font-semibold" htmlFor="password">
          Password:
        </label>
        <input
          className="block border rounded-md p-2 border-black w-full"
          name="password"
          id="password"
          placeholder="Your Password"
          type="password"
        />
      </div>
      <div className="mt-5">
        <label className="font-semibold" htmlFor="passwordCon">
          Password Confrimation:
        </label>
        <input
          className="block border rounded-md p-2 border-black w-full"
          name="passwordCon"
          id="passwordCon"
          placeholder="Your Password"
          type="password"
        />
      </div>

      <div className="mt-4">
        <button className="font-bold w-full text-lg text-black bg-white border border-black p-2 hover:text-white hover:bg-black transition-all duration-150 ease-in">
          Create Account
        </button>
      </div>
    </form>
  );
}
